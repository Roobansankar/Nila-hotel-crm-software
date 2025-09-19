// import React, { useEffect, useState } from "react";
// import dayjs from "dayjs";

// const KotDashboard = () => {
//   const [allKots, setAllKots] = useState([]);
//   const [categorizedKots, setCategorizedKots] = useState({
//     today: [],
//     yesterday: [],
//     lastWeek: [],
//   });
//   const [filter, setFilter] = useState("default");
//   const [searchDate, setSearchDate] = useState("");

//   // Separate pagination states
//   const [todayPage, setTodayPage] = useState(1);
//   const [yesterdayPage, setYesterdayPage] = useState(1);
//   const [lastWeekPage, setLastWeekPage] = useState(1);

//   const pageSize = 10; // Each table shows 10 rows

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("kots") || "[]");
//     setAllKots(stored);
//   }, []);

//   useEffect(() => {
//     const today = dayjs().format("YYYY-MM-DD");
//     const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
//     const lastWeek = dayjs().subtract(7, "day");

//     const categorized = { today: [], yesterday: [], lastWeek: [] };

//     allKots.forEach((kot) => {
//       const dateOnly = dayjs(kot.createdAt).format("YYYY-MM-DD");
//       const kotDate = dayjs(dateOnly);

//       if (dateOnly === today) categorized.today.push(kot);
//       else if (dateOnly === yesterday) categorized.yesterday.push(kot);
//       else if (kotDate.isAfter(lastWeek)) categorized.lastWeek.push(kot);
//     });

//     setCategorizedKots(categorized);
//     setTodayPage(1);
//     setYesterdayPage(1);
//     setLastWeekPage(1);
//   }, [allKots]);

//   const filterData = (data) => {
//     if (searchDate) {
//       return data.filter(
//         (kot) => dayjs(kot.createdAt).format("YYYY-MM-DD") === searchDate
//       );
//     }
//     return data;
//   };

//   const renderTable = (label, data, currentPage, setPage) => {
//     const filteredData = filterData(data);
//     const totalPages = Math.ceil(filteredData.length / pageSize);
//     const paginatedData = filteredData.slice(
//       (currentPage - 1) * pageSize,
//       currentPage * pageSize
//     );

//     if (filteredData.length === 0) return null;

//     return (
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mt-4 mb-2 capitalize">{label}</h3>
//         <table className="w-full border border-collapse text-sm mb-2">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">KOT No</th>
//               <th className="border p-2">Table ID</th>
//               <th className="border p-2">Items</th>
//               <th className="border p-2">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((kot, idx) => (
//               <tr key={idx} className="border-b">
//                 <td className="border p-2 text-center">{kot.kotNumber}</td>
//                 <td className="border p-2 text-center">{kot.tableId}</td>
//                 <td className="border p-2 text-center">
//                   {kot.items.map((item, i) => (
//                     <div key={i}>
//                       {item.name} × {item.quantity}
//                     </div>
//                   ))}
//                 </td>
//                 <td className="border p-2 text-center text-xs text-gray-500">
//                   {dayjs(kot.createdAt).format("YYYY-MM-DD HH:mm")}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination for this section */}
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

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
//         <h2 className="text-xl font-bold">KOT Dashboard</h2>
//         <div className="flex gap-2">
//           {/* Search by Date */}
//           <input
//             type="date"
//             max={dayjs().format("YYYY-MM-DD")}
//             value={searchDate}
//             onChange={(e) => setSearchDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />
//         </div>
//       </div>

//       {renderTable("Today", categorizedKots.today, todayPage, setTodayPage)}
//       {renderTable(
//         "Yesterday",
//         categorizedKots.yesterday,
//         yesterdayPage,
//         setYesterdayPage
//       )}
//       {renderTable(
//         "Last Week",
//         categorizedKots.lastWeek,
//         lastWeekPage,
//         setLastWeekPage
//       )}
//     </div>
//   );
// };

// export default KotDashboard;

// import React, { useEffect, useState } from "react";
// import dayjs from "dayjs";

// const KotDashboard = () => {
//   const [allKots, setAllKots] = useState([]);
//   const [categorizedKots, setCategorizedKots] = useState({
//     today: [],
//     yesterday: [],
//     lastWeek: [],
//   });

//   const [filter, setFilter] = useState("default");
//   const [searchDate, setSearchDate] = useState("");

//   // Separate pagination states
//   const [todayPage, setTodayPage] = useState(1);
//   const [yesterdayPage, setYesterdayPage] = useState(1);
//   const [lastWeekPage, setLastWeekPage] = useState(1);

//   const pageSize = 10;

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("kots") || "[]");
//     setAllKots(stored);
//   }, []);

//   useEffect(() => {
//     const today = dayjs().format("YYYY-MM-DD");
//     const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
//     const lastWeek = dayjs().subtract(7, "day");

//     const categorized = { today: [], yesterday: [], lastWeek: [] };

//     allKots.forEach((kot) => {
//       const dateOnly = dayjs(kot.createdAt).format("YYYY-MM-DD");
//       const kotDate = dayjs(dateOnly);

//       if (dateOnly === today) categorized.today.push(kot);
//       else if (dateOnly === yesterday) categorized.yesterday.push(kot);
//       else if (kotDate.isAfter(lastWeek)) categorized.lastWeek.push(kot);
//     });

//     setCategorizedKots(categorized);
//     setTodayPage(1);
//     setYesterdayPage(1);
//     setLastWeekPage(1);
//   }, [allKots]);

//   const filterData = (data) => {
//     if (searchDate) {
//       return data.filter(
//         (kot) => dayjs(kot.createdAt).format("YYYY-MM-DD") === searchDate
//       );
//     }
//     return data;
//   };

//   const renderTable = (label, data, currentPage, setPage) => {
//     const filteredData = filterData(data);
//     const totalPages = Math.ceil(filteredData.length / pageSize);
//     const paginatedData = filteredData.slice(
//       (currentPage - 1) * pageSize,
//       currentPage * pageSize
//     );

//     if (filteredData.length === 0) return null;

//     return (
//       <div className="mb-6">
//         <h3 className="text-lg font-semibold mt-4 mb-2 capitalize">{label}</h3>

//         <table className="w-full border border-collapse text-sm mb-2">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border p-2">KOT No</th>
//               <th className="border p-2">Table ID</th>
//               <th className="border p-2">Items</th>
//               <th className="border p-2">Quantity</th>
//               <th className="border p-2">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedData.map((kot, idx) => {
//               const maxItems = kot.items.length;

//               return kot.items.map((item, itemIdx) => (
//                 <tr key={`${idx}-${itemIdx}`} className="border-b">
//                   {itemIdx === 0 && (
//                     <>
//                       <td
//                         rowSpan={maxItems}
//                         className="border p-2 text-center align-middle"
//                       >
//                         {kot.kotNumber}
//                       </td>
//                       <td
//                         rowSpan={maxItems}
//                         className="border p-2 text-center align-middle"
//                       >
//                         {kot.tableId}
//                       </td>
//                     </>
//                   )}
//                   <td className="border p-2 text-center">{item.name}</td>
//                   <td className="border p-2 text-center">{item.quantity}</td>
//                   {itemIdx === 0 && (
//                     <td
//                       rowSpan={maxItems}
//                       className="border p-2 text-center text-xs text-gray-500 align-middle"
//                     >
//                       {dayjs(kot.createdAt).format("YYYY-MM-DD HH:mm")}
//                     </td>
//                   )}
//                 </tr>
//               ));
//             })}
//           </tbody>
//         </table>

//         {/* Pagination for this section */}
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

//   return (
//     <div className="p-6 bg-white rounded shadow">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
//         <h2 className="text-xl font-bold">KOT Dashboard</h2>
//         <div className="flex gap-2">
//           {/* Search by Date */}
//           <input
//             type="date"
//             max={dayjs().format("YYYY-MM-DD")}
//             value={searchDate}
//             onChange={(e) => setSearchDate(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           />

//           {/* Dropdown Filter */}
//           <select
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//             className="border rounded px-2 py-1 text-sm"
//           >
//             <option value="default">All</option>
//             <option value="today">Today</option>
//             <option value="yesterday">Yesterday</option>
//             <option value="lastWeek">Last Week</option>
//           </select>
//         </div>
//       </div>

//       {/* Render sections based on filter */}
//       {(filter === "default" || filter === "today") &&
//         renderTable("Today", categorizedKots.today, todayPage, setTodayPage)}
//       {(filter === "default" || filter === "yesterday") &&
//         renderTable(
//           "Yesterday",
//           categorizedKots.yesterday,
//           yesterdayPage,
//           setYesterdayPage
//         )}
//       {(filter === "default" || filter === "lastWeek") &&
//         renderTable(
//           "Last Week",
//           categorizedKots.lastWeek,
//           lastWeekPage,
//           setLastWeekPage
//         )}
//     </div>
//   );
// };

// export default KotDashboard;

import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const KotDashboard = () => {
  const [allKots, setAllKots] = useState([]);
  const [categorizedKots, setCategorizedKots] = useState({
    today: [],
    yesterday: [],
    lastWeek: [],
  });

  const [filter, setFilter] = useState("default");
  const [searchDate, setSearchDate] = useState("");

  const [todayPage, setTodayPage] = useState(1);
  const [yesterdayPage, setYesterdayPage] = useState(1);
  const [lastWeekPage, setLastWeekPage] = useState(1);

  const pageSize = 10;

  const API_URL = "https://64b7959321b9aa6eb0788288.mockapi.io/sasi";

  // 🔄 Fetch from API
  useEffect(() => {
    const fetchKots = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Filter out empty objects
        const cleaned = data.filter(
          (kot) => kot && kot.kotNumber && Array.isArray(kot.items)
        );
        setAllKots(cleaned);
      } catch (error) {
        console.error("Failed to fetch KOTs:", error);
      }
    };

    fetchKots();
  }, []);

  // 🧠 Categorize
  useEffect(() => {
    const today = dayjs().format("YYYY-MM-DD");
    const yesterday = dayjs().subtract(1, "day").format("YYYY-MM-DD");
    const lastWeek = dayjs().subtract(7, "day");

    const categorized = { today: [], yesterday: [], lastWeek: [] };

    allKots.forEach((kot) => {
      const dateOnly = dayjs(kot.createdAt).format("YYYY-MM-DD");
      const kotDate = dayjs(dateOnly);

      if (dateOnly === today) categorized.today.push(kot);
      else if (dateOnly === yesterday) categorized.yesterday.push(kot);
      else if (kotDate.isAfter(lastWeek)) categorized.lastWeek.push(kot);
    });

    setCategorizedKots(categorized);
    setTodayPage(1);
    setYesterdayPage(1);
    setLastWeekPage(1);
  }, [allKots]);

  // 🔍 Filter by search date
  const filterData = (data) => {
    if (searchDate) {
      return data.filter(
        (kot) => dayjs(kot.createdAt).format("YYYY-MM-DD") === searchDate
      );
    }
    return data;
  };

  // 📄 Table renderer
  const renderTable = (label, data, currentPage, setPage) => {
    const filteredData = filterData(data);
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const paginatedData = filteredData.slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );

    if (filteredData.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mt-4 mb-2 capitalize">{label}</h3>

        <table className="w-full border border-collapse text-sm mb-2">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">KOT No</th>
              <th className="border p-2">Table ID</th>
              <th className="border p-2">Items</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((kot, idx) => {
              const maxItems = kot.items.length;

              return kot.items.map((item, itemIdx) => (
                <tr key={`${idx}-${itemIdx}`} className="border-b">
                  {itemIdx === 0 && (
                    <>
                      <td
                        rowSpan={maxItems}
                        className="border p-2 text-center align-middle"
                      >
                        {kot.kotNumber}
                      </td>
                      <td
                        rowSpan={maxItems}
                        className="border p-2 text-center align-middle"
                      >
                        {kot.tableId}
                      </td>
                    </>
                  )}
                  <td className="border p-2 text-center">{item.name}</td>
                  <td className="border p-2 text-center">{item.quantity}</td>
                  {itemIdx === 0 && (
                    <td
                      rowSpan={maxItems}
                      className="border p-2 text-center text-xs text-gray-500 align-middle"
                    >
                      {dayjs(kot.createdAt).format("YYYY-MM-DD HH:mm")}
                    </td>
                  )}
                </tr>
              ));
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

  return (
    <div className="p-6 bg-white rounded shadow">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 items-center gap-2">
        <h2 className="text-xl font-bold">KOT Dashboard</h2>
        <div className="flex gap-2">
          <input
            type="date"
            max={dayjs().format("YYYY-MM-DD")}
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="default">All</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="lastWeek">Last Week</option>
          </select>
        </div>
      </div>

      {/* Render categorized tables */}
      {(filter === "default" || filter === "today") &&
        renderTable("Today", categorizedKots.today, todayPage, setTodayPage)}
      {(filter === "default" || filter === "yesterday") &&
        renderTable(
          "Yesterday",
          categorizedKots.yesterday,
          yesterdayPage,
          setYesterdayPage
        )}
      {(filter === "default" || filter === "lastWeek") &&
        renderTable(
          "Last Week",
          categorizedKots.lastWeek,
          lastWeekPage,
          setLastWeekPage
        )}
    </div>
  );
};

export default KotDashboard;
