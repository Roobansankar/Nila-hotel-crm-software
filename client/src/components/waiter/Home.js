import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import ItemsSection from "./ItemsSection";
import CartSection from "./CartSection";

import InvoiceModal from "./InvoiceModal";
import Sidebar from "./Sidebar";
const Home = () => {
  const [open, setOpen] = useState(() => window.innerWidth >= 768);
  const [selectedCategory, setSelectedCategory] = useState("tiffin");
  const [cart, setCart] = useState({});
  const [searchText, setSearchText] = useState("");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerGST, setCustomerGST] = useState("");
  const [isPrinting, setIsPrinting] = useState(false);

  const { tableId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const initialStatus = location.state?.status || "blank";
  const [status, setStatus] = useState(initialStatus);
  const [tableStatuses, setTableStatuses] = useState({});

  const cgstRate = 2.5;
  const sgstRate = 2.5;

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem(`cart-${tableId}`));
    if (savedCart) setCart(savedCart);

    // Fetch status from API
    fetchTableStatus();
  }, [tableId]);

  const fetchTableStatus = async () => {
    try {
      const response = await fetch(
        "https://63ae7fb43e46516916732319.mockapi.io/project"
      );
      const data = await response.json();
      const tableData = data.find((item) => item.tableId === tableId);
      if (tableData && tableData.status) {
        setStatus(tableData.status);
      }
    } catch (error) {
      console.error("Error fetching table status:", error);
      // Fallback to localStorage
      const savedStatus = localStorage.getItem(`status-${tableId}`);
      if (savedStatus) setStatus(savedStatus);
    }
  };

  const [foodCategories, setFoodCategories] = useState([]);
  const [itemsByCategory, setItemsByCategory] = useState({});
  const [priceMap, setPriceMap] = useState({});

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch(
          "https://63ae7fb43e46516916732319.mockapi.io/Rooban"
        );
        const data = await response.json();
        const categories = data.map((entry) => entry.category);
        const itemsByCat = {};
        const prices = {};

        data.forEach(({ category, items }) => {
          itemsByCat[category] = items.map((item) => item.name);
          items.forEach((item) => {
            prices[item.name] = item.price;
          });
        });

        setFoodCategories(categories);
        setItemsByCategory(itemsByCat);
        setPriceMap(prices);

        if (!selectedCategory && categories.length > 0) {
          setSelectedCategory(categories[0]);
        }
      } catch (error) {
        console.error("Failed to fetch menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const updateTableStatusAPI = async (tableId, newStatus) => {
    try {
      // First, check if table status already exists
      const response = await fetch(
        "https://63ae7fb43e46516916732319.mockapi.io/project"
      );
      const data = await response.json();
      const existingTable = data.find((item) => item.tableId === tableId);

      if (existingTable) {
        // Update existing record
        await fetch(
          `https://63ae7fb43e46516916732319.mockapi.io/project/${existingTable.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...existingTable,
              status: newStatus,
              updatedAt: new Date().toISOString(),
            }),
          }
        );
      } else {
        // Create new record
        await fetch("https://63ae7fb43e46516916732319.mockapi.io/project", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tableId: tableId,
            status: newStatus,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          }),
        });
      }
    } catch (error) {
      console.error("Error updating table status:", error);
      // Fallback to localStorage
      localStorage.setItem(`status-${tableId}`, newStatus);
    }
  };

  const createKOTAPI = async (kotData) => {
    try {
      const response = await fetch(
        "https://64b7959321b9aa6eb0788288.mockapi.io/sasi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(kotData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create KOT");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating KOT:", error);
      // Fallback to localStorage
      const existingKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
      const updatedKOTs = [...existingKOTs, kotData];
      localStorage.setItem("kots", JSON.stringify(updatedKOTs));
      return kotData;
    }
  };

  const getNextKOTNumber = async () => {
    try {
      const response = await fetch(
        "https://64b7959321b9aa6eb0788288.mockapi.io/sasi"
      );
      const kots = await response.json();
      return kots.length + 1;
    } catch (error) {
      console.error("Error getting KOT count:", error);
      const existingKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
      return existingKOTs.length + 1;
    }
  };

  const handleUpdateStatus = async (newStatus) => {
    setStatus(newStatus);

    if (newStatus === "paid") {
      setCart({});
      localStorage.removeItem(`cart-${tableId}`);
      await updateTableStatusAPI(tableId, "blank"); // Reset to blank when paid
    } else {
      await updateTableStatusAPI(tableId, newStatus);
      localStorage.setItem(`cart-${tableId}`, JSON.stringify(cart));

      // Create KOT when status is "running"
      if (newStatus === "running" && Object.keys(cart).length > 0) {
        const nextKOTNumber = await getNextKOTNumber();
        // const kotEntry = {
        //   kotNumber: nextKOTNumber,
        //   tableId,
        //   items: Object.keys(cart).map((item) => ({
        //     name: item,
        //     quantity: cart[item],
        //   })),
        //   createdAt: new Date().toISOString(),
        // };
        const kotEntry = {
          kotNumber: nextKOTNumber,
          tableId,
          items: Object.keys(cart).map((item) => ({
            name: item,
            quantity: cart[item],
          })),
          waiter: localStorage.getItem("waiterUsername"),
          createdAt: new Date().toISOString(),
        };

        await createKOTAPI(kotEntry);
      }
    }
  };

  const handleAddToCart = (item) => {
    const newCart = { ...cart, [item]: (cart[item] || 0) + 1 };
    setCart(newCart);
    localStorage.setItem(`cart-${tableId}`, JSON.stringify(newCart));
  };

  const handleQuantityChange = (item, change) => {
    const newQty = (cart[item] || 0) + change;
    const updatedCart = { ...cart };
    if (newQty <= 0) delete updatedCart[item];
    else updatedCart[item] = newQty;
    setCart(updatedCart);
    localStorage.setItem(`cart-${tableId}`, JSON.stringify(updatedCart));
  };

  const getPrice = (item) => priceMap[item] || 50;

  const filteredCategories = foodCategories.filter((cat) =>
    cat.toLowerCase().includes(searchText.toLowerCase())
  );

  const matchedCategory = foodCategories.find(
    (cat) => cat.toLowerCase().trim() === searchText.toLowerCase().trim()
  );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar
        open={open}
        setOpen={setOpen}
        foodCategories={filteredCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="flex-1 flex flex-col md:flex-row">
        <ItemsSection
          tableId={tableId}
          selectedCategory={selectedCategory}
          matchedCategory={matchedCategory}
          searchText={searchText}
          setSearchText={setSearchText}
          items={
            matchedCategory
              ? itemsByCategory[matchedCategory] || []
              : searchText.trim()
              ? Object.entries(itemsByCategory).flatMap(([category, items]) =>
                  items.filter((item) =>
                    item.toLowerCase().includes(searchText.toLowerCase())
                  )
                )
              : itemsByCategory[selectedCategory] || []
          }
          handleAddToCart={handleAddToCart}
          getPrice={getPrice}
          setOpen={setOpen}
        />
        <CartSection
          cart={cart}
          setCart={setCart}
          status={status}
          handleQuantityChange={handleQuantityChange}
          handleUpdateStatus={handleUpdateStatus}
          getPrice={getPrice}
          tableId={tableId}
          setShowInvoiceModal={setShowInvoiceModal}
          setInvoiceNumber={setInvoiceNumber}
        />
      </div>
      <InvoiceModal
        show={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        cart={cart}
        getPrice={getPrice}
        handleUpdateStatus={handleUpdateStatus}
        tableId={tableId}
        invoiceNumber={invoiceNumber}
        setInvoiceNumber={setInvoiceNumber}
        customerName={customerName}
        setCustomerName={setCustomerName}
        customerMobile={customerMobile}
        setCustomerMobile={setCustomerMobile}
        customerGST={customerGST}
        setCustomerGST={setCustomerGST}
        isPrinting={isPrinting}
        setIsPrinting={setIsPrinting}
        cgstRate={cgstRate}
        sgstRate={sgstRate}
      />
    </div>
  );
};

export default Home;
