import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableGrid from "./TableView/TableGrid";
import StatusLegend from "./TableView/StatusLegend";
import "./table.css";

const TableView = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [tableStatuses, setTableStatuses] = useState({});
  const [tables, setTables] = useState(
    Array.from({ length: 50 }, (_, i) => `T${i + 1}`)
  );
  const [invoiceSearch, setInvoiceSearch] = useState("");
  const [kotSearch, setKotSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState(""); // 'invoice' or 'kot'
  const [loading, setLoading] = useState(false);

  // Fetch table statuses from API
  const fetchTableStatuses = async () => {
    try {
      const response = await fetch(
        "https://63ae7fb43e46516916732319.mockapi.io/project"
      );
      const data = await response.json();
      const statuses = {};
      data.forEach((item) => {
        if (item.tableId && item.status) {
          statuses[item.tableId] = item.status;
        }
      });
      setTableStatuses(statuses);
    } catch (error) {
      console.error("Error fetching table statuses:", error);
      // Fallback to localStorage if API fails
      const statuses = {};
      for (let i = 1; i <= 50; i++) {
        const id = `T${i}`;
        const savedStatus = localStorage.getItem(`status-${id}`);
        if (savedStatus) statuses[id] = savedStatus;
      }
      setTableStatuses(statuses);
    }
  };

  useEffect(() => {
    fetchTableStatuses();

    const updateStatuses = () => {
      fetchTableStatuses();
    };

    window.addEventListener("focus", updateStatuses);
    return () => window.removeEventListener("focus", updateStatuses);
  }, []);

  const handleClick = (tableId) => {
    navigate(`/waiter-dashboard/home/${tableId}`, {
      state: { status: tableStatuses[tableId] || "blank" },
    });
  };

  const handleAddTable = () => {
    if (tables.length >= 99) return;
    const newTable = `T${tables.length + 1}`;
    setTables([...tables, newTable]);
  };

  // const handleInvoiceSearch = () => {
  //   const invoices = JSON.parse(localStorage.getItem("invoices")) || [];
  //   const found = invoices.find((inv) => inv.invoiceNumber === invoiceSearch);
  //   if (found) {
  //     setModalData(found);
  //     setModalType("invoice");
  //     setShowModal(true);
  //   } else {
  //     alert("Invoice not found");
  //   }
  // };

  const handleInvoiceSearch = async () => {
    try {
      const response = await fetch(
        "https://64b7959321b9aa6eb0788288.mockapi.io/user"
      );
      const invoices = await response.json();

      const found = invoices.find((inv) => inv.invoiceNumber === invoiceSearch);

      if (found) {
        setModalData(found);
        setModalType("invoice");
        setShowModal(true);
      } else {
        alert("Invoice not found");
      }
    } catch (error) {
      console.error("Error fetching invoices:", error);
      alert("Failed to fetch invoices. Please try again.");
    }
  };

  const handleKOTSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://64b7959321b9aa6eb0788288.mockapi.io/sasi"
      );
      const kots = await response.json();
      console.log("All KOT data from API:", kots);

      const found = kots.find(
        (kot) => String(kot.kotNumber) === String(kotSearch)
      );

      console.log("Searched KOT Number:", kotSearch);
      console.log("Found KOT:", found);

      if (found) {
        setModalData(found);
        setModalType("kot");
        setShowModal(true);
      } else {
        alert("KOT not found");
      }
    } catch (error) {
      console.error("Error searching KOT:", error);
      alert("Error searching KOT. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="table-container">
      <div className="top-bar flex-col sm:flex-row">
        <h1 className="restaurant-title text-xl sm:text-2xl">
          Nilasoru Restaurant
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
          <input
            type="text"
            className="search-input"
            placeholder="Search Invoice No"
            value={invoiceSearch}
            onChange={(e) => setInvoiceSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleInvoiceSearch()}
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search KOT No"
            value={kotSearch}
            onChange={(e) => setKotSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleKOTSearch()}
            disabled={loading}
          />
        </div>

        <div className="flex flex-row gap-2">
          <button
            className="add-table-btn"
            style={{ backgroundColor: "blue" }}
            onClick={handleLogout}
          >
            Logout
          </button>

          <button
            className="add-table-btn"
            onClick={() => navigate("/waiter-dashboard/button-dashboard")}
          >
            View orders
          </button>
          <button className="add-table-btn" onClick={handleAddTable}>
            + Add Table
          </button>
        </div>
      </div>
      <hr className="separator" />
      <div className="middle-bar">
        <StatusLegend />
      </div>
      <TableGrid
        tables={tables}
        tableStatuses={tableStatuses}
        handleClick={handleClick}
      />

      {/* MODAL */}
      {showModal && modalData && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
              style={{ color: "black" }}
            >
              ✖
            </button>
            <h2 className="modal-heading">
              {modalType === "invoice" ? "Invoice Details" : "KOT Details"}
            </h2>
            <div className="table-wrapper">
              <table className="modal-table">
                <thead>
                  <tr>
                    {modalType === "invoice" ? (
                      <>
                        <th>Table ID</th>
                        <th>Invoice No</th>
                        <th>Customer</th>
                        <th>Mobile</th>
                        <th>Total</th>
                      </>
                    ) : (
                      <>
                        <th>KOT No</th>
                        <th>Table ID</th>
                        <th>Items</th>
                        <th>Created At</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {modalType === "invoice" ? (
                      <>
                        <td>{modalData.tableId}</td>
                        <td>{modalData.invoiceNumber}</td>
                        <td>{modalData.customerName}</td>
                        <td>{modalData.customerMobile}</td>
                        <td>₹{modalData.grandTotal}</td>
                      </>
                    ) : (
                      <>
                        <td>{modalData.kotNumber}</td>
                        <td>{modalData.tableId}</td>
                        <td>
                          {modalData.items &&
                            modalData.items.map((item, i) => (
                              <div key={i}>
                                {item.name} × {item.quantity}
                              </div>
                            ))}
                        </td>
                        <td>
                          {modalData.createdAt &&
                            new Date(modalData.createdAt).toLocaleString()}
                        </td>
                      </>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner">Searching...</div>
        </div>
      )}
    </div>
  );
};

export default TableView;
