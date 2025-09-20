// import React, { useEffect, useState } from "react";

// const AllInvoiceDetails = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [editForm, setEditForm] = useState({
//     invoiceNumber: "",
//     customerName: "",
//     customerMobile: "",
//     date: "",
//     time: "",
//   });

//   // Format date to YYYY-MM-DD HH:mm
//   const formatDateTime = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     if (isNaN(date)) return dateString; // fallback
//     const yyyy = date.getFullYear();
//     const mm = String(date.getMonth() + 1).padStart(2, "0");
//     const dd = String(date.getDate()).padStart(2, "0");
//     const hh = String(date.getHours()).padStart(2, "0");
//     const min = String(date.getMinutes()).padStart(2, "0");
//     return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
//   };

//   useEffect(() => {
//     const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];
//     const formattedInvoices = storedInvoices.map((inv) => {
//       const dt = new Date(inv.date || new Date());
//       return {
//         ...inv,
//         date: formatDateTime(dt),
//       };
//     });
//     setInvoices(formattedInvoices);
//   }, []);

//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this invoice?")) {
//       const updatedInvoices = invoices.filter((_, i) => i !== index);
//       setInvoices(updatedInvoices);
//       localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
//     }
//   };

//   const openEditModal = (invoice, index) => {
//     const [datePart, timePart] = invoice.date.split(" ");
//     setSelectedInvoice({ ...invoice, index });
//     setEditForm({
//       invoiceNumber: invoice.invoiceNumber,
//       customerName: invoice.customerName,
//       customerMobile: invoice.customerMobile,
//       date: datePart,
//       time: timePart || "00:00",
//     });
//   };

//   const handleUpdate = () => {
//     const updatedInvoices = [...invoices];
//     updatedInvoices[selectedInvoice.index] = {
//       ...updatedInvoices[selectedInvoice.index],
//       ...editForm,
//       date: `${editForm.date} ${editForm.time}`,
//     };
//     setInvoices(updatedInvoices);
//     localStorage.setItem("invoices", JSON.stringify(updatedInvoices));
//     setSelectedInvoice(null);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">All Invoice Details</h2>

//       {invoices.length === 0 ? (
//         <p>No invoices found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border text-xs sm:text-sm md:text-base table-auto">
//             <thead className="bg-gray-100 text-left">
//               <tr>
//                 <th className="p-2 border">Table.No</th>
//                 <th className="p-2 border">Invoice No</th>
//                 <th className="p-2 border">Customer</th>
//                 <th className="p-2 border">Mobile</th>
//                 <th className="p-2 border">Total</th>
//                 <th className="p-2 border">Date</th>
//                 <th className="p-2 border">Time</th>
//                 <th className="p-2 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {invoices.map((inv, idx) => {
//                 const [datePart, timePart] = (inv.date || "").split(" ");
//                 return (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     <td className="p-2 border">{inv.tableId}</td>
//                     <td className="p-2 border">{inv.invoiceNumber}</td>
//                     <td className="p-2 border">{inv.customerName}</td>
//                     <td className="p-2 border">{inv.customerMobile}</td>
//                     <td className="p-2 border">₹{inv.grandTotal}</td>
//                     <td className="p-2 border">{datePart}</td>
//                     <td className="p-2 border">{timePart || "-"}</td>
//                     <td className="p-2 border whitespace-nowrap">
//                       <button
//                         onClick={() => openEditModal(inv, idx)}
//                         className="bg-blue-500 text-white px-2 py-1 rounded mr-2 text-xs sm:text-sm"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(idx)}
//                         className="bg-red-500 text-white px-2 py-1 rounded text-xs sm:text-sm"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* EDIT MODAL */}
//       {selectedInvoice && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-2 z-50">
//           <div className="bg-white rounded-lg p-6 w-full max-w-lg overflow-y-auto max-h-[90vh]">
//             <h3 className="text-xl font-semibold mb-4">Edit Invoice</h3>
//             <div className="space-y-3">
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Invoice Number"
//                 value={editForm.invoiceNumber}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, invoiceNumber: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Customer Name"
//                 value={editForm.customerName}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, customerName: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Mobile"
//                 value={editForm.customerMobile}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, customerMobile: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="date"
//                 value={editForm.date}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, date: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="time"
//                 value={editForm.time}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, time: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 onClick={() => setSelectedInvoice(null)}
//                 className="px-4 py-2 rounded bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-4 py-2 rounded bg-blue-600 text-white"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllInvoiceDetails;

// import React, { useEffect, useState } from "react";

// const AllInvoiceDetails = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [editForm, setEditForm] = useState({
//     invoiceNumber: "",
//     customerName: "",
//     customerMobile: "",
//     date: "",
//     time: "",
//   });

//   const formatDateTime = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     if (isNaN(date)) return dateString;
//     const yyyy = date.getFullYear();
//     const mm = String(date.getMonth() + 1).padStart(2, "0");
//     const dd = String(date.getDate()).padStart(2, "0");
//     const hh = String(date.getHours()).padStart(2, "0");
//     const min = String(date.getMinutes()).padStart(2, "0");
//     return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
//   };

//   useEffect(() => {
//     const storedInvoices = JSON.parse(localStorage.getItem("invoices")) || [];

//     const formattedInvoices = storedInvoices.map((inv) => {
//       const dt = new Date(inv.date || new Date());
//       return { ...inv, date: formatDateTime(dt) };
//     });
//     setInvoices(formattedInvoices);
//     console.log("Stored invoices:", storedInvoices);
//   }, []);

//   const handleDelete = (index) => {
//     if (window.confirm("Are you sure you want to delete this invoice?")) {
//       const updated = invoices.filter((_, i) => i !== index);
//       setInvoices(updated);
//       localStorage.setItem("invoices", JSON.stringify(updated));
//     }
//   };

//   const openEditModal = (invoice, index) => {
//     const [datePart, timePart] = invoice.date.split(" ");
//     setSelectedInvoice({ ...invoice, index });
//     setEditForm({
//       invoiceNumber: invoice.invoiceNumber,
//       customerName: invoice.customerName,
//       customerMobile: invoice.customerMobile,
//       date: datePart,
//       time: timePart || "00:00",
//     });
//   };

//   const handleUpdate = () => {
//     const updated = [...invoices];
//     updated[selectedInvoice.index] = {
//       ...updated[selectedInvoice.index],
//       ...editForm,
//       date: `${editForm.date} ${editForm.time}`,
//     };
//     setInvoices(updated);
//     localStorage.setItem("invoices", JSON.stringify(updated));
//     setSelectedInvoice(null);
//   };

//   return (
//     <div className="p-4 ">
//       <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
//         All Invoice Details
//       </h2>

//       {invoices.length === 0 ? (
//         <p className="text-center text-gray-500">No invoices found.</p>
//       ) : (
//         <div className="w-full overflow-x-auto shadow rounded-lg border border-gray-200 bg-white">
//           <table className="min-w-full text-sm sm:text-base text-left table-auto border-collapse ">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="p-3 border ">Table No</th>
//                 <th className="p-3 border ">Invoice No</th>

//                 <th className="p-3 border ">GST No</th>

//                 <th className="p-3 border whitespace-nowrap">Customer Name</th>
//                 <th className="p-3 border whitespace-nowrap">Mobile</th>
//                 <th className="p-3 border whitespace-nowrap">Total</th>
//                 <th className="p-3 border whitespace-nowrap">Date</th>
//                 <th className="p-3 border whitespace-nowrap">Time</th>
//                 <th className="p-3 border whitespace-nowrap">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {invoices.map((inv, idx) => {
//                 const [datePart, timePart] = (inv.date || "").split(" ");
//                 return (
//                   <tr key={idx} className="hover:bg-gray-50">
//                     <td className="p-3 border whitespace-nowrap">
//                       {inv.tableId}
//                     </td>
//                     <td className="p-3 border whitespace-nowrap">
//                       {inv.invoiceNumber}
//                     </td>
//                     <td className="p-3 border whitespace-nowrap">
//                       {inv.customerGST}
//                     </td>

//                     <td className="p-3 border whitespace-nowrap">
//                       {inv.customerName}
//                     </td>
//                     <td className="p-3 border whitespace-nowrap">
//                       {inv.customerMobile}
//                     </td>
//                     <td className="p-3 border whitespace-nowrap">
//                       ₹{inv.grandTotal}
//                     </td>
//                     <td className="p-3 border whitespace-nowrap">{datePart}</td>
//                     <td className="p-3 border whitespace-nowrap">
//                       {timePart || "-"}
//                     </td>
//                     <td className="p-3 border whitespace-nowrap space-x-1">
//                       <button
//                         onClick={() => openEditModal(inv, idx)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(idx)}
//                         className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedInvoice && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setSelectedInvoice(null)}
//         >
//           <div
//             className="bg-white rounded-xl p-6 w-full max-w-md sm:max-w-lg mx-4 shadow-xl relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h3 className="text-xl font-semibold mb-4">Edit Invoice</h3>
//             <div className="space-y-3">
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Invoice Number"
//                 value={editForm.invoiceNumber}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, invoiceNumber: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Customer Name"
//                 value={editForm.customerName}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, customerName: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Mobile"
//                 value={editForm.customerMobile}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, customerMobile: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="date"
//                 value={editForm.date}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, date: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="time"
//                 value={editForm.time}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, time: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 onClick={() => setSelectedInvoice(null)}
//                 className="px-4 py-2 rounded bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-4 py-2 rounded bg-blue-600 text-white"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllInvoiceDetails;

// import React, { useEffect, useState } from "react";

// const API_URL = "https://64b7959321b9aa6eb0788288.mockapi.io/user";

// const AllInvoiceDetails = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [editForm, setEditForm] = useState({
//     invoiceNumber: "",
//     customerName: "",
//     customerMobile: "",
//     date: "",
//     time: "",
//   });

//   const formatDateTime = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     if (isNaN(date)) return dateString;
//     const yyyy = date.getFullYear();
//     const mm = String(date.getMonth() + 1).padStart(2, "0");
//     const dd = String(date.getDate()).padStart(2, "0");
//     const hh = String(date.getHours()).padStart(2, "0");
//     const min = String(date.getMinutes()).padStart(2, "0");
//     return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
//   };

//   // ✅ Fetch invoices from API
//   const fetchInvoices = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       const formatted = data.map((inv) => {
//         const dt = new Date(inv.date || new Date());
//         return { ...inv, date: formatDateTime(dt) };
//       });
//       setInvoices(formatted);
//     } catch (error) {
//       console.error("Error fetching invoices:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInvoices();
//   }, []);

//   // ✅ Delete invoice from API
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this invoice?")) {
//       try {
//         await fetch(`${API_URL}/${id}`, { method: "DELETE" });
//         fetchInvoices(); // Refresh the list
//       } catch (error) {
//         console.error("Delete error:", error);
//         alert("Failed to delete invoice");
//       }
//     }
//   };

//   const openEditModal = (invoice) => {
//     const [datePart, timePart] = formatDateTime(invoice.date).split(" ");
//     setSelectedInvoice(invoice);
//     setEditForm({
//       invoiceNumber: invoice.invoiceNumber,
//       customerName: invoice.customerName,
//       customerMobile: invoice.customerMobile,
//       date: datePart,
//       time: timePart || "00:00",
//     });
//   };

//   // ✅ Update invoice via API
//   const handleUpdate = async () => {
//     const updatedData = {
//       ...selectedInvoice,
//       invoiceNumber: editForm.invoiceNumber,
//       customerName: editForm.customerName,
//       customerMobile: editForm.customerMobile,
//       date: `${editForm.date} ${editForm.time}`,
//     };

//     try {
//       await fetch(`${API_URL}/${selectedInvoice.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedData),
//       });
//       setSelectedInvoice(null);
//       fetchInvoices();
//     } catch (error) {
//       console.error("Update failed:", error);
//       alert("Failed to update invoice");
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
//         All Invoice Details
//       </h2>

//       {invoices.length === 0 ? (
//         <p className="text-center text-gray-500">No invoices found.</p>
//       ) : (
//         <div className="w-full overflow-x-auto shadow rounded-lg border border-gray-200 bg-white">
//           <table className="min-w-full text-sm sm:text-base text-left table-auto border-collapse">
//             <thead className="bg-gray-100 text-gray-700">
//               <tr>
//                 <th className="p-3 border">Table No</th>
//                 <th className="p-3 border">Invoice No</th>
//                 <th className="p-3 border">GST No</th>
//                 <th className="p-3 border">Customer Name</th>
//                 <th className="p-3 border">Mobile</th>
//                 <th className="p-3 border">Total</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {invoices.map((inv) => {
//                 const [datePart, timePart] = (inv.date || "").split(" ");
//                 return (
//                   <tr key={inv.id} className="hover:bg-gray-50">
//                     <td className="p-3 border">{inv.tableId}</td>
//                     <td className="p-3 border">{inv.invoiceNumber}</td>
//                     <td className="p-3 border">{inv.customerGST}</td>
//                     <td className="p-3 border">{inv.customerName}</td>
//                     <td className="p-3 border">{inv.customerMobile}</td>
//                     <td className="p-3 border">₹{inv.grandTotal}</td>
//                     <td className="p-3 border">{datePart}</td>
//                     <td className="p-3 border">{timePart || "-"}</td>
//                     <td className="p-3 border space-x-1">
//                       <button
//                         onClick={() => openEditModal(inv)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(inv.id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded text-sm"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedInvoice && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setSelectedInvoice(null)}
//         >
//           <div
//             className="bg-white rounded-xl p-6 w-full max-w-md sm:max-w-lg mx-4 shadow-xl relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h3 className="text-xl font-semibold mb-4">Edit Invoice</h3>
//             <div className="space-y-3">
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Invoice Number"
//                 value={editForm.invoiceNumber}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, invoiceNumber: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Customer Name"
//                 value={editForm.customerName}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, customerName: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="text"
//                 placeholder="Mobile"
//                 value={editForm.customerMobile}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, customerMobile: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="date"
//                 value={editForm.date}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, date: e.target.value })
//                 }
//               />
//               <input
//                 className="w-full border p-2 rounded"
//                 type="time"
//                 value={editForm.time}
//                 onChange={(e) =>
//                   setEditForm({ ...editForm, time: e.target.value })
//                 }
//               />
//             </div>
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 onClick={() => setSelectedInvoice(null)}
//                 className="px-4 py-2 rounded bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-4 py-2 rounded bg-blue-600 text-white"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllInvoiceDetails;
import React, { useEffect, useState, useCallback } from "react";

const API_URL = "https://64b7959321b9aa6eb0788288.mockapi.io/user";

const AllInvoiceDetails = () => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [editForm, setEditForm] = useState({
    invoiceNumber: "",
    customerName: "",
    customerMobile: "",
    date: "",
    time: "",
  });

  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (isNaN(date)) return dateString;
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
  };

  // ✅ Memoize fetchInvoices so it doesn’t re-create on every render
  const fetchInvoices = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const formatted = data.map((inv) => {
        const dt = new Date(inv.date || new Date());
        return { ...inv, date: formatDateTime(dt) };
      });
      setInvoices(formatted);
    } catch (error) {
      console.error("Error fetching invoices:", error);
    }
  }, []);

  // ✅ Now ESLint is happy because fetchInvoices is stable
  useEffect(() => {
    fetchInvoices();
  }, [fetchInvoices]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this invoice?")) {
      try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchInvoices();
      } catch (error) {
        console.error("Delete error:", error);
        alert("Failed to delete invoice");
      }
    }
  };

  const openEditModal = (invoice) => {
    const [datePart, timePart] = formatDateTime(invoice.date).split(" ");
    setSelectedInvoice(invoice);
    setEditForm({
      invoiceNumber: invoice.invoiceNumber,
      customerName: invoice.customerName,
      customerMobile: invoice.customerMobile,
      date: datePart,
      time: timePart || "00:00",
    });
  };

  const handleUpdate = async () => {
    const updatedData = {
      ...selectedInvoice,
      invoiceNumber: editForm.invoiceNumber,
      customerName: editForm.customerName,
      customerMobile: editForm.customerMobile,
      date: `${editForm.date} ${editForm.time}`,
    };

    try {
      await fetch(`${API_URL}/${selectedInvoice.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      setSelectedInvoice(null);
      fetchInvoices();
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update invoice");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-left">
        All Invoice Details
      </h2>

      {invoices.length === 0 ? (
        <p className="text-center text-gray-500">No invoices found.</p>
      ) : (
        <div className="w-full overflow-x-auto shadow rounded-lg border border-gray-200 bg-white">
          <table className="min-w-full text-sm sm:text-base text-left table-auto border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border">Table No</th>
                <th className="p-3 border">Invoice No</th>
                <th className="p-3 border">GST No</th>
                <th className="p-3 border">Customer Name</th>
                <th className="p-3 border">Mobile</th>
                <th className="p-3 border">Total</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => {
                const [datePart, timePart] = (inv.date || "").split(" ");
                return (
                  <tr key={inv.id} className="hover:bg-gray-50">
                    <td className="p-3 border">{inv.tableId}</td>
                    <td className="p-3 border">{inv.invoiceNumber}</td>
                    <td className="p-3 border">{inv.customerGST}</td>
                    <td className="p-3 border">{inv.customerName}</td>
                    <td className="p-3 border">{inv.customerMobile}</td>
                    <td className="p-3 border">₹{inv.grandTotal}</td>
                    <td className="p-3 border">{datePart}</td>
                    <td className="p-3 border">{timePart || "-"}</td>
                    <td className="p-3 border space-x-1">
                      <button
                        onClick={() => openEditModal(inv)}
                        className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(inv.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {selectedInvoice && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedInvoice(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md sm:max-w-lg mx-4 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4">Edit Invoice</h3>
            <div className="space-y-3">
              <input
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Invoice Number"
                value={editForm.invoiceNumber}
                onChange={(e) =>
                  setEditForm({ ...editForm, invoiceNumber: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Customer Name"
                value={editForm.customerName}
                onChange={(e) =>
                  setEditForm({ ...editForm, customerName: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Mobile"
                value={editForm.customerMobile}
                onChange={(e) =>
                  setEditForm({ ...editForm, customerMobile: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded"
                type="date"
                value={editForm.date}
                onChange={(e) =>
                  setEditForm({ ...editForm, date: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded"
                type="time"
                value={editForm.time}
                onChange={(e) =>
                  setEditForm({ ...editForm, time: e.target.value })
                }
              />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setSelectedInvoice(null)}
                className="px-4 py-2 rounded bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllInvoiceDetails;
