// import React, { useEffect, useState } from "react";

// const Orders = () => {
//   const [invoices, setInvoices] = useState([]);

//   useEffect(() => {
//     const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
//     setInvoices(storedInvoices);
//   }, []);

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold text-center mb-6">🧾 All Bills</h1>

//       {invoices.length === 0 ? (
//         <p className="text-center text-gray-600">No bills available.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {invoices.map((inv, idx) => (
//             <div
//               key={idx}
//               className="bg-white p-4 rounded shadow text-sm font-mono border border-dashed"
//             >
//               <div className="text-center font-bold text-lg mb-2">
//                 Hotel Nila Soru
//               </div>
//               <div className="text-center mb-2">
//                 <p>GSTIN : 33BSDPR2363D1Z0</p>
//                 <p>
//                   7/28, Near Manipal Hospital,
//                   <br />
//                   Vellakalpatty, Salem, Tamil Nadu, 636012
//                 </p>
//               </div>
//               <hr className="my-2" />

//               <div className="mb-2">
//                 <p>
//                   <strong>Date:</strong> {inv.date}
//                 </p>
//                 <p>
//                   <strong>Dine In:</strong> {inv.tableId}
//                 </p>
//                 <p>
//                   <strong>Cashier:</strong> selva01
//                 </p>
//                 <p>
//                   <strong>Bill No:</strong> {inv.invoiceNumber}
//                 </p>
//                 <p>
//                   <strong>Token No:</strong> 1
//                 </p>
//                 <p>
//                   <strong>Assign to:</strong> Selva
//                 </p>
//               </div>

//               <hr className="my-2" />

//               <table className="w-full mb-2">
//                 <thead className="border-b border-black">
//                   <tr>
//                     <th className="text-left">Item</th>
//                     <th className="text-right">Qty</th>
//                     <th className="text-right">Price</th>
//                     <th className="text-right">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {inv.items.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.name}</td>
//                       <td className="text-right">{item.qty}</td>
//                       <td className="text-right">₹{item.price}</td>
//                       <td className="text-right">₹{item.total}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <hr className="my-2" />

//               <div className="text-right space-y-1">
//                 <p>
//                   <strong>Total Qty:</strong>{" "}
//                   {inv.items.reduce((acc, i) => acc + i.qty, 0)}
//                 </p>
//                 <p>
//                   <strong>Sub Total:</strong> ₹{inv.subtotal}
//                 </p>
//                 <p>
//                   <strong>CGST:</strong> ₹{inv.cgst}
//                 </p>
//                 <p>
//                   <strong>SGST:</strong> ₹{inv.sgst}
//                 </p>
//                 <p className="text-lg font-bold">
//                   Grand Total ₹ {inv.grandTotal}
//                 </p>
//               </div>

//               <hr className="my-2" />

//               <div className="text-center font-medium mt-2">
//                 Thank You !!! Visit Again
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;//important

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const Orders = () => {
  const [allInvoices, setAllInvoices] = useState([]);
  const [categorizedInvoices, setCategorizedInvoices] = useState({
    today: [],
    yesterday: [],
    lastWeek: [],
  });

  const [filter, setFilter] = useState("default");
  const [searchDate, setSearchDate] = useState("");

  // Pagination states for each section
  const [todayPage, setTodayPage] = useState(1);
  const [yesterdayPage, setYesterdayPage] = useState(1);
  const [lastWeekPage, setLastWeekPage] = useState(1);
  const pageSize = 10;

  // Load invoices from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("invoices")) || [];
    setAllInvoices(stored);
    console.log(stored);
  }, []);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          "https://64b7959321b9aa6eb0788288.mockapi.io/user"
        );
        const data = await response.json();

        // Optional: sort by date descending if needed
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setAllInvoices(sorted);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
    const lastWeek = dayjs().subtract(7, "day");

    const categorized = { today: [], yesterday: [], lastWeek: [] };

    allInvoices.forEach((inv) => {
      const invDate = dayjs(inv.date);
      const formattedDate = invDate.format("YYYY-MM-DD");

      if (formattedDate === today) categorized.today.push(inv);
      else if (formattedDate === yesterday) categorized.yesterday.push(inv);
      else if (invDate.isAfter(lastWeek)) categorized.lastWeek.push(inv);
    });

    setCategorizedInvoices(categorized);
    setTodayPage(1);
    setYesterdayPage(1);
    setLastWeekPage(1);
  }, [allInvoices]);

  // Calculate total price for a section
  const calculateTotal = (data) => {
    return data.reduce((sum, inv) => sum + parseFloat(inv.grandTotal || 0), 0);
  };

  // Render section with table and pagination
  const renderTable = (label, data, currentPage, setPage) => {
    const totalPages = Math.ceil(data.length / pageSize);
    const paginatedData = data.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    if (data.length === 0) return null;

    const totalPrice = calculateTotal(data);

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold capitalize">{label}</h3>
          <p className="text-sm font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
        </div>

        <table className="w-full border border-collapse text-sm mb-2">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Table ID</th>
              <th className="border p-2">Invoice Number</th>
              <th className="border p-2">Grand Total</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((inv, idx) => {
              const invDate = dayjs(inv.date);
              const datePart = invDate.format("YYYY-MM-DD");
              const timePart = invDate.format("hh:mm:ss A");

              return (
                <tr key={idx} className="border-b">
                  <td className="border p-2 text-center">{inv.tableId}</td>
                  <td className="border p-2 text-center">
                    {inv.invoiceNumber}
                  </td>
                  <td className="border p-2 text-center">₹{inv.grandTotal}</td>
                  <td className="p-3 border whitespace-nowrap">{datePart}</td>
                  <td className="p-3 border whitespace-nowrap">
                    {timePart || "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-3 py-1 rounded ${
                  currentPage === num
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Get data based on dropdown filter
  const getFilteredDropdownData = () => {
    if (filter === "today") return { today: categorizedInvoices.today };
    if (filter === "yesterday")
      return { yesterday: categorizedInvoices.yesterday };
    if (filter === "lastWeek")
      return { lastWeek: categorizedInvoices.lastWeek };
    return categorizedInvoices;
  };

  // Search mode: If searchDate is present, ignore dropdown filter
  const searchResults = searchDate
    ? allInvoices.filter((inv) => (inv.date || "").split(" ")[0] === searchDate)
    : [];

  return (
    <div className="p-6 bg-white rounded shadow">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
        <h2 className="text-xl font-bold">Orders</h2>
        <div className="flex gap-2">
          {/* Date Search */}
          <input
            type="date"
            max={dayjs().format("YYYY-MM-DD")} // Prevent future dates
            value={searchDate}
            onChange={(e) => {
              setSearchDate(e.target.value);
              setFilter("default"); // Reset dropdown when search is active
            }}
            className="border rounded px-2 py-1 text-sm"
          />

          {/* Filter Dropdown */}
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setSearchDate(""); // Clear search when dropdown is used
            }}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="default">All</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="lastWeek">Last Week</option>
          </select>
        </div>
      </div>

      {/* Search Mode */}
      {searchDate ? (
        searchResults.length > 0 ? (
          renderTable("Search Results", searchResults, 1, () => {})
        ) : (
          <p className="text-gray-500">No results found for {searchDate}.</p>
        )
      ) : (
        <>
          {(filter === "default" || filter === "today") &&
            renderTable(
              "Today",
              categorizedInvoices.today,
              todayPage,
              setTodayPage
            )}
          {(filter === "default" || filter === "yesterday") &&
            renderTable(
              "Yesterday",
              categorizedInvoices.yesterday,
              yesterdayPage,
              setYesterdayPage
            )}
          {(filter === "default" || filter === "lastWeek") &&
            renderTable(
              "Last Week",
              categorizedInvoices.lastWeek,
              lastWeekPage,
              setLastWeekPage
            )}
        </>
      )}
    </div>
  );
};

export default Orders;
