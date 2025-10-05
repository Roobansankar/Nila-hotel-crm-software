// import React, { useEffect, useState } from "react";
// import dayjs from "dayjs";

// const Orders = () => {
//   const [allInvoices, setAllInvoices] = useState([]);
//   const [categorizedInvoices, setCategorizedInvoices] = useState({
//     today: [],
//     yesterday: [],
//     lastWeek: [],
//   });

//   const [filter, setFilter] = useState("default");
//   const [searchDate, setSearchDate] = useState("");

//   // Pagination states for each section
//   const [todayPage, setTodayPage] = useState(1);
//   const [yesterdayPage, setYesterdayPage] = useState(1);
//   const [lastWeekPage, setLastWeekPage] = useState(1);
//   const pageSize = 10;

//   // Load invoices from localStorage
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("invoices")) || [];
//     setAllInvoices(stored);
//     console.log(stored);
//   }, []);

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       try {
//         const response = await fetch(
//           "https://64b7959321b9aa6eb0788288.mockapi.io/user"
//         );
//         const data = await response.json();

//         // Optional: sort by date descending if needed
//         const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));

//         setAllInvoices(sorted);
//       } catch (error) {
//         console.error("Error fetching invoices:", error);
//       }
//     };

//     fetchInvoices();
//   }, []);

//   useEffect(() => {
//     const today = dayjs().format("YYYY-MM-DD");
//     const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
//     const lastWeek = dayjs().subtract(7, "day");

//     const categorized = { today: [], yesterday: [], lastWeek: [] };

//     allInvoices.forEach((inv) => {
//       const invDate = dayjs(inv.date);
//       const formattedDate = invDate.format("YYYY-MM-DD");

//       if (formattedDate === today) categorized.today.push(inv);
//       else if (formattedDate === yesterday) categorized.yesterday.push(inv);
//       else if (invDate.isAfter(lastWeek)) categorized.lastWeek.push(inv);
//     });

//     setCategorizedInvoices(categorized);
//     setTodayPage(1);
//     setYesterdayPage(1);
//     setLastWeekPage(1);
//   }, [allInvoices]);

//   // Calculate total price for a section
//   const calculateTotal = (data) => {
//     return data.reduce((sum, inv) => sum + parseFloat(inv.grandTotal || 0), 0);
//   };

//   // Render section with table and pagination
//   const renderTable = (label, data, currentPage, setPage) => {
//     const totalPages = Math.ceil(data.length / pageSize);
//     const paginatedData = data.slice(
//       (currentPage - 1) * pageSize,
//       currentPage * pageSize
//     );

//     if (data.length === 0) return null;

//     const totalPrice = calculateTotal(data);

//     return (
//       <div className="mb-6">
//         <div className="flex justify-between items-center mb-2">
//           <h3 className="text-lg font-semibold capitalize">{label}</h3>
//           <p className="text-sm font-bold">Total: ₹{totalPrice.toFixed(2)}</p>
//         </div>

//         <table className="w-full border border-collapse text-sm mb-2">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">Table ID</th>
//               <th className="border p-2">Invoice Number</th>
//               <th className="border p-2">Grand Total</th>
//               <th className="border p-2">Date</th>
//               <th className="border p-2">Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((inv, idx) => {
//               const invDate = dayjs(inv.date);
//               const datePart = invDate.format("YYYY-MM-DD");
//               const timePart = invDate.format("hh:mm:ss A");

//               return (
//                 <tr key={idx} className="border-b">
//                   <td className="border p-2 text-center">{inv.tableId}</td>
//                   <td className="border p-2 text-center">
//                     {inv.invoiceNumber}
//                   </td>
//                   <td className="border p-2 text-center">₹{inv.grandTotal}</td>
//                   <td className="p-3 border whitespace-nowrap">{datePart}</td>
//                   <td className="p-3 border whitespace-nowrap">
//                     {timePart || "-"}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center gap-2 mt-2">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
//               <button
//                 key={num}
//                 onClick={() => setPage(num)}
//                 className={`px-3 py-1 rounded ${
//                   currentPage === num
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//               >
//                 {num}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   // Get data based on dropdown filter

//   // Search mode: If searchDate is present, ignore dropdown filter
//   const searchResults = searchDate
//     ? allInvoices.filter((inv) => (inv.date || "").split(" ")[0] === searchDate)
//     : [];

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
//         <h2 className="text-xl font-bold">Orders</h2>
//         <div className="flex gap-2">
//           {/* Date Search */}
//           <input
//             type="date"
//             max={dayjs().format("YYYY-MM-DD")} // Prevent future dates
//             value={searchDate}
//             onChange={(e) => {
//               setSearchDate(e.target.value);
//               setFilter("default"); // Reset dropdown when search is active
//             }}
//             className="border rounded px-2 py-1 text-sm"
//           />

//           {/* Filter Dropdown */}
//           <select
//             value={filter}
//             onChange={(e) => {
//               setFilter(e.target.value);
//               setSearchDate(""); // Clear search when dropdown is used
//             }}
//             className="border rounded px-2 py-1 text-sm"
//           >
//             <option value="default">All</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="lastWeek">Last Week</option>
//           </select>
//         </div>
//       </div>

//       {/* Search Mode */}
//       {searchDate ? (
//         searchResults.length > 0 ? (
//           renderTable("Search Results", searchResults, 1, () => {})
//         ) : (
//           <p className="text-gray-500">No results found for {searchDate}.</p>
//         )
//       ) : (
//         <>
//           {(filter === "default" || filter === "today") &&
//             renderTable(
//               "Today",
//               categorizedInvoices.today,
//               todayPage,
//               setTodayPage
//             )}
//           {(filter === "default" || filter === "yesterday") &&
//             renderTable(
//               "Yesterday",
//               categorizedInvoices.yesterday,
//               yesterdayPage,
//               setYesterdayPage
//             )}
//           {(filter === "default" || filter === "lastWeek") &&
//             renderTable(
//               "Last Week",
//               categorizedInvoices.lastWeek,
//               lastWeekPage,
//               setLastWeekPage
//             )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Orders;

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

  // Pagination states
  const [todayPage, setTodayPage] = useState(1);
  const [yesterdayPage, setYesterdayPage] = useState(1);
  const [lastWeekPage, setLastWeekPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("invoices")) || [];
    setAllInvoices(stored);
  }, []);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          "https://64b7959321b9aa6eb0788288.mockapi.io/user"
        );
        const data = await response.json();
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

  const calculateTotal = (data) =>
    data.reduce((sum, inv) => sum + parseFloat(inv.grandTotal || 0), 0);

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

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full border border-collapse text-sm mb-2 min-w-[600px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 whitespace-nowrap">Table ID</th>
                <th className="border p-2 whitespace-nowrap">Invoice No</th>
                <th className="border p-2 whitespace-nowrap">Grand Total</th>
                <th className="border p-2 whitespace-nowrap">Date</th>
                <th className="border p-2 whitespace-nowrap">Time</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((inv, idx) => {
                const invDate = dayjs(inv.date);
                const datePart = invDate.format("YYYY-MM-DD");
                const timePart = invDate.format("hh:mm:ss A");

                return (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="border p-2 text-center">{inv.tableId}</td>
                    <td className="border p-2 text-center">
                      {inv.invoiceNumber}
                    </td>
                    <td className="border p-2 text-center">
                      ₹{inv.grandTotal}
                    </td>
                    <td className="p-3 border text-center">{datePart}</td>
                    <td className="p-3 border text-center">
                      {timePart || "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

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

  const searchResults = searchDate
    ? allInvoices.filter((inv) => (inv.date || "").split(" ")[0] === searchDate)
    : [];

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
        <h2 className="text-xl font-bold">Orders</h2>
        <div className="flex gap-2">
          <input
            type="date"
            max={dayjs().format("YYYY-MM-DD")}
            value={searchDate}
            onChange={(e) => {
              setSearchDate(e.target.value);
              setFilter("default");
            }}
            className="border rounded px-2 py-1 text-sm"
          />
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setSearchDate("");
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
