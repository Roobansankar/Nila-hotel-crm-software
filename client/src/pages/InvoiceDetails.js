import { useState } from "react";

const InvoiceDetails = ({ onSave }) => {
  const [invoiceNo, setInvoiceNo] = useState("INV-123456");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gst, setGST] = useState("");

  const handleSubmit = () => {
    const details = { invoiceNo, date, customerName, mobile, gst };
    onSave(details);
    alert("Invoice details saved!");
  };

  return (
    <div className="bg-white p-6 rounded shadow w-full max-w-md mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Set Invoice Details</h2>
      <input
        type="text"
        value={invoiceNo}
        onChange={(e) => setInvoiceNo(e.target.value)}
        placeholder="Invoice No"
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Customer Name"
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="tel"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="Mobile Number"
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="text"
        value={gst}
        onChange={(e) => setGST(e.target.value)}
        placeholder="GST Number"
        className="w-full p-2 border mb-4 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Save Invoice
      </button>
    </div>
  );
};

export default InvoiceDetails;

// import React from "react";
// import { useInvoice } from "../context/InvoiceContext";

// const InvoiceDetails = () => {
//   const { invoiceData } = useInvoice();

//   const {
//     cart,
//     invoiceNumber,
//     customerName,
//     customerMobile,
//     customerGST,
//     tableId,
//     cgstRate,
//     sgstRate,
//   } = invoiceData;

//   const subtotal = Object.keys(cart).reduce(
//     (total, item) => total + cart[item] * 50,
//     0
//   );

//   const cgst = (subtotal * cgstRate) / 100;
//   const sgst = (subtotal * sgstRate) / 100;
//   const total = subtotal + cgst + sgst;

//   return (
//     <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
//       <h1 className="text-xl font-bold text-center mb-4">Invoice Details</h1>
//       <p>Invoice No: {invoiceNumber}</p>
//       <p>Table No: {tableId}</p>
//       <p>Customer: {customerName}</p>
//       <p>Mobile: {customerMobile}</p>
//       <p>GST: {customerGST}</p>

//       <table className="w-full mt-4 border text-sm">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">Item</th>
//             <th className="border p-2">Qty</th>
//             <th className="border p-2">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.entries(cart).map(([item, qty]) => (
//             <tr key={item}>
//               <td className="border p-2">{item}</td>
//               <td className="border p-2 text-center">{qty}</td>
//               <td className="border p-2 text-right">₹{qty * 50}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="text-right mt-4">
//         <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
//         <p>CGST: ₹{cgst.toFixed(2)}</p>
//         <p>SGST: ₹{sgst.toFixed(2)}</p>
//         <h2 className="font-bold text-lg">Total: ₹{total.toFixed(2)}</h2>
//       </div>
//     </div>
//   );
// };

// export default InvoiceDetails;
