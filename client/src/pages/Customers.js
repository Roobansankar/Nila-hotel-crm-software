// import React, { useEffect, useState } from "react";

// const Customer = () => {
//   const [allInvoices, setAllInvoices] = useState([]);
//   const [filteredInvoices, setFilteredInvoices] = useState([]);
//   const [searchMobile, setSearchMobile] = useState("");

//   useEffect(() => {
//     const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
//     setAllInvoices(storedInvoices);
//     setFilteredInvoices(storedInvoices);
//   }, []);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchMobile(value);
//     const filtered = allInvoices.filter((inv) =>
//       inv.customerMobile.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredInvoices(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-green-100 p-6">
//       <h1 className="text-3xl font-bold mb-6 text-green-700 text-center">
//         📋 Customer Billing History
//       </h1>

//       <div className="mb-6 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search by Mobile Number"
//           value={searchMobile}
//           onChange={handleSearch}
//           className="w-full max-w-md px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-400"
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredInvoices.length === 0 ? (
//           <p className="text-center text-red-500 col-span-full">
//             No records found
//           </p>
//         ) : (
//           filteredInvoices.map((inv, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-5 border-4 border-green-500 hover:scale-[1.02] transition-transform"
//             >
//               <div className="mb-2">
//                 <h2 className="text-xl font-bold text-green-700">
//                   Invoice: {inv.invoiceNumber}
//                 </h2>
//                 <p className="text-sm text-gray-600">
//                   Table: <span className="font-semibold">{inv.tableId}</span>
//                 </p>
//                 <p className="text-sm text-gray-600">Date: {inv.date}</p>
//               </div>

//               <div className="my-2">
//                 <p>
//                   <span className="font-semibold">Name:</span>{" "}
//                   {inv.customerName}
//                 </p>
//                 <p>
//                   <span className="font-semibold">Mobile:</span>{" "}
//                   {inv.customerMobile}
//                 </p>
//                 <p>
//                   <span className="font-semibold">GST:</span> {inv.customerGST}
//                 </p>
//               </div>

//               <hr className="my-2 border-green-300" />

//               <div>
//                 <p className="font-semibold text-green-600">Items Ordered:</p>
//                 <ul className="list-disc list-inside text-sm text-gray-800">
//                   {inv.items.map((item, i) => (
//                     <li key={i}>
//                       {item.name} — {item.qty} x ₹{item.price} = ₹{item.total}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <hr className="my-2 border-green-300" />

//               <div className="text-sm">
//                 <p>
//                   <span className="font-semibold">Subtotal:</span> ₹
//                   {inv.subtotal}
//                 </p>
//                 <p>
//                   <span className="font-semibold">CGST:</span> ₹{inv.cgst}
//                 </p>
//                 <p>
//                   <span className="font-semibold">SGST:</span> ₹{inv.sgst}
//                 </p>
//                 <p className="font-bold text-green-800 mt-1">
//                   Total: ₹{inv.grandTotal}
//                 </p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Customer;

// import React, { useEffect, useState } from "react";

// const Customer = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
//     setInvoices(storedInvoices);
//   }, []);

//   const filteredInvoices = invoices.filter((inv) =>
//     inv.customerMobile.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-400 via-lime-300 to-yellow-200 p-6">
//       <h1 className="text-4xl font-bold text-center text-white drop-shadow-md mb-6 animate-pulse">
//         🔎 Customer Invoice History
//       </h1>

//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search by Mobile Number"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full max-w-md px-4 py-2 rounded-lg border-2 border-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
//         />
//       </div>

//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse bg-white shadow-2xl rounded-lg overflow-hidden">
//           <thead className="bg-green-600 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left">Table ID</th>
//               <th className="px-6 py-3 text-left">Invoice No</th>
//               <th className="px-6 py-3 text-left">Customer Name</th>
//               <th className="px-6 py-3 text-left">Mobile</th>
//               <th className="px-6 py-3 text-left">GST</th>
//               {/* <th className="px-6 py-3 text-left">Items</th> */}
//               <th className="px-6 py-3 text-left">Total</th>
//               <th className="px-6 py-3 text-left">Date</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-green-200">
//             {filteredInvoices.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center py-6 text-gray-600">
//                   No matching invoices found.
//                 </td>
//               </tr>
//             ) : (
//               filteredInvoices.map((inv, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-lime-100 transition duration-300"
//                 >
//                   <td className="px-6 py-3">{inv.tableId}</td>
//                   <td className="px-6 py-3 text-blue-700 font-bold">
//                     {inv.invoiceNumber}
//                   </td>
//                   <td className="px-6 py-3">{inv.customerName}</td>
//                   <td className="px-6 py-3 text-orange-600">
//                     {inv.customerMobile}
//                   </td>
//                   <td className="px-6 py-3">{inv.customerGST}</td>

//                   <td className="px-6 py-3 text-green-700 font-semibold">
//                     ₹{inv.grandTotal}
//                   </td>
//                   <td className="px-6 py-3 text-sm text-gray-600">
//                     {inv.date}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Customer;

import React, { useEffect, useState } from "react";

const Customer = () => {
  const [invoices, setInvoices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await fetch(
          "https://64b7959321b9aa6eb0788288.mockapi.io/user"
        );
        const data = await response.json();

        // Optional: sort by latest date if needed
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setInvoices(sorted);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []);

  const filteredInvoices = invoices.filter((inv) =>
    inv.customerMobile?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-lime-300 to-yellow-200 p-6">
      <h1 className="text-4xl font-bold text-center text-white drop-shadow-md mb-6 animate-pulse">
        🔎 Customer Invoice History
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by Mobile Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border-2 border-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse bg-white shadow-2xl rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Table ID</th>
              <th className="px-6 py-3 text-left">Invoice No</th>
              <th className="px-6 py-3 text-left">Customer Name</th>
              <th className="px-6 py-3 text-left">Mobile</th>
              <th className="px-6 py-3 text-left">GST</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-green-200">
            {filteredInvoices.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-600">
                  No matching invoices found.
                </td>
              </tr>
            ) : (
              filteredInvoices.map((inv, index) => (
                <tr
                  key={index}
                  className="hover:bg-lime-100 transition duration-300"
                >
                  <td className="px-6 py-3">{inv.tableId}</td>
                  <td className="px-6 py-3 text-blue-700 font-bold">
                    {inv.invoiceNumber}
                  </td>
                  <td className="px-6 py-3">{inv.customerName}</td>
                  <td className="px-6 py-3 text-orange-600">
                    {inv.customerMobile}
                  </td>
                  <td className="px-6 py-3">{inv.customerGST}</td>
                  <td className="px-6 py-3 text-green-700 font-semibold">
                    ₹{inv.grandTotal}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-600">
                    {inv.date}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
