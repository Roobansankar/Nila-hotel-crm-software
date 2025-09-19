// import React, { useEffect, useState, useRef } from "react";

// const BillKotPrint = () => {
//   const [kots, setKots] = useState([]);
//   const [search, setSearch] = useState("");
//   const printRefs = useRef([]);

//   useEffect(() => {
//     const storedKots = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKots(storedKots);
//   }, []);

//   const handlePrint = (index) => {
//     const printContents = printRefs.current[index].innerHTML;
//     const win = window.open("", "_blank");
//     win.document.write(`
//       <html>
//         <head>
//           <style>
//             body {
//               font-family: monospace;
//               font-size: 14px;
//               padding: 10px;
//             }
//             table {
//               width: 100%;
//               border-collapse: collapse;
//               margin-bottom: 10px;
//             }
//             th, td {
//               border: 1px dashed #000;
//               padding: 4px;
//               text-align: left;
//             }
//             th {
//               background-color: #f4f4f4;
//             }
//           </style>
//         </head>
//         <body>${printContents}</body>
//       </html>
//     `);
//     win.document.close();
//     win.print();
//   };

//   const filteredKots = kots.filter((kot) =>
//     kot.kotNumber.toString().includes(search.trim())
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h2 style={{ textAlign: "center", color: "#0066cc" }}>
//         Kitchen Order Tickets
//       </h2>

//       <input
//         type="text"
//         placeholder="Search by KOT Number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           padding: "10px",
//           marginBottom: "20px",
//           width: "100%",
//           maxWidth: "300px",
//           border: "1px solid #ccc",
//           borderRadius: "5px",
//         }}
//       />

//       {filteredKots.length === 0 ? (
//         <p>No KOTs found.</p>
//       ) : (
//         filteredKots.map((kot, index) => (
//           <div
//             key={index}
//             style={{
//               marginBottom: "30px",
//               border: "2px solid #009688",
//               borderRadius: "8px",
//               background: "#e0f2f1",
//               padding: "15px",
//             }}
//           >
//             <div ref={(el) => (printRefs.current[index] = el)}>
//               <h3 style={{ margin: "0 0 10px 0", color: "#004d40" }}>
//                 KOT #{kot.kotNumber}
//               </h3>
//               <p>
//                 <strong>Table ID:</strong> {kot.tableId}
//               </p>
//               <p>
//                 <strong>Created At:</strong>{" "}
//                 {new Date(kot.createdAt).toLocaleString()}
//               </p>

//               <table>
//                 <thead>
//                   <tr>
//                     <th>Item</th>
//                     <th>Qty</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {kot.items.map((item, i) => (
//                     <tr key={i}>
//                       <td>{item.name}</td>
//                       <td>{item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <button
//               onClick={() => handlePrint(index)}
//               style={{
//                 padding: "8px 16px",
//                 backgroundColor: "#ff5722",
//                 color: "#fff",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//                 marginTop: "10px",
//               }}
//             >
//               Print
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default BillKotPrint;

// import React, { useEffect, useState, useRef } from "react";

// const BillKotPrint = () => {
//   const [kots, setKots] = useState([]);
//   const [search, setSearch] = useState("");
//   const printRefs = useRef([]);

//   useEffect(() => {
//     const storedKots = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKots(storedKots);
//   }, []);

//   const handlePrint = (index) => {
//     const content = printRefs.current[index].innerHTML;
//     const win = window.open("", "_blank");
//     win.document.write(`
//       <html>
//         <head>
//           <style>
//             body {
//               font-family: monospace;
//               font-size: 14px;
//               padding: 10px;
//               white-space: pre-wrap;
//             }
//             table {
//               width: 100%;
//               border-collapse: collapse;
//               margin-top: 10px;
//             }
//             th, td {
//               border: 1px dashed black;
//               padding: 4px;
//               text-align: left;
//             }
//             th {
//               background: #f0f0f0;
//             }
//           </style>
//         </head>
//         <body>${content}</body>
//       </html>
//     `);
//     win.document.close();
//     win.focus();
//     win.print();
//   };

//   const filtered = kots.filter((kot) =>
//     kot.kotNumber?.toString().includes(search.trim())
//   );

//   return (
//     <div style={{ padding: "20px", fontFamily: "Poppins, sans-serif" }}>
//       <style>{`
//         .kot-header {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 600;
//           margin-bottom: 20px;
//           color: #fff;
//           background: linear-gradient(to right, #00b09b, #96c93d);
//           padding: 15px;
//           border-radius: 8px;
//         }

//         .search-input {
//           padding: 12px 20px;
//           width: 100%;
//           max-width: 400px;
//           border: 2px solid #4caf50;
//           border-radius: 8px;
//           outline: none;
//           font-size: 16px;
//           margin: 20px auto;
//           display: block;
//         }

//         .kot-container {
//           margin: 20px auto;
//           background: #f5fff8;
//           border-left: 5px solid #4caf50;
//           padding: 16px;
//           border-radius: 8px;
//           box-shadow: 0 3px 10px rgba(0,0,0,0.1);
//           transition: transform 0.2s ease;
//         }

//         .kot-container:hover {
//           transform: scale(1.01);
//         }

//         .kot-info {
//           color: #333;
//           font-size: 15px;
//         }

//         .kot-table {
//           width: 100%;
//           margin-top: 10px;
//           border-collapse: collapse;
//         }

//         .kot-table th, .kot-table td {
//           padding: 8px;
//           border: 1px solid #ccc;
//           text-align: left;
//         }

//         .kot-table th {
//           background-color: #e0f2f1;
//         }

//         .print-btn {
//           margin-top: 12px;
//           padding: 10px 20px;
//           background-color: #ff4081;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//           font-weight: 500;
//           transition: background 0.3s ease;
//         }

//         .print-btn:hover {
//           background-color: #f50057;
//         }

//         @media (max-width: 600px) {
//           .kot-header {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>

//       <div className="kot-header">🍽️ Kitchen Order Tickets (KOT)</div>

//       <input
//         className="search-input"
//         placeholder="🔍 Search by KOT Number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filtered.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#999" }}>No KOTs found.</p>
//       ) : (
//         filtered.map((kot, index) => (
//           <div key={index} className="kot-container">
//             <div ref={(el) => (printRefs.current[index] = el)}>
//               <div className="kot-info">
//                 <strong>KOT #:</strong> {kot.kotNumber} <br />
//                 <strong>Table ID:</strong> {kot.tableId} <br />
//                 <strong>Created At:</strong>{" "}
//                 {new Date(kot.createdAt).toLocaleString()}
//               </div>

//               <table className="kot-table">
//                 <thead>
//                   <tr>
//                     <th>Item</th>
//                     <th>Qty</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {kot.items.map((item, idx) => (
//                     <tr key={idx}>
//                       <td>{item.name}</td>
//                       <td>{item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             <button className="print-btn" onClick={() => handlePrint(index)}>
//               🖨️ Print
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default BillKotPrint;

// import React, { useEffect, useState } from "react";

// const BillKotPrint = () => {
//   const [kots, setKots] = useState([]);
//   const [search, setSearch] = useState("");
//   const [printKot, setPrintKot] = useState(null);

//   useEffect(() => {
//     const storedKots = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKots(storedKots);
//   }, []);

//   const handlePrint = (kot) => {
//     setPrintKot(kot);
//     setTimeout(() => {
//       window.print();
//     }, 200);
//   };

//   const filtered = kots.filter((kot) =>
//     kot.kotNumber?.toString().includes(search.trim())
//   );

//   const getPrice = (itemName) => {
//     const prices = { Idli: 20, Vada: 15, Dosai: 25 };
//     return prices[itemName] || 10;
//   };

//   return (
//     <>
//       <style>{`
//         * {
//           font-family: Poppins, sans-serif;
//         }

//         @media print {
//           body * {
//             visibility: hidden;
//           }
//           #printArea, #printArea * {
//             visibility: visible;
//           }
//           #printArea {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//             font-family: monospace;
//             font-size: 14px;
//             padding: 10px;
//           }
//         }

//         .kot-header {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 600;
//           margin-bottom: 20px;
//           background: linear-gradient(to right, #00b09b, #96c93d);
//           color: #fff;
//           padding: 15px;
//           border-radius: 8px;
//         }

//         .kot-box {
//           background: #f5fff8;
//           border-left: 5px solid #4caf50;
//           padding: 16px;
//           border-radius: 8px;
//           margin: 20px 0;
//         }

//         .search-input {
//           padding: 12px 20px;
//           width: 100%;
//           max-width: 400px;
//           border: 2px solid #4caf50;
//           border-radius: 8px;
//           margin: 20px auto;
//           display: block;
//         }

//         .print-btn {
//           margin-top: 12px;
//           padding: 10px 20px;
//           background-color: #ff4081;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .kot-table {
//           width: 100%;
//           margin-top: 10px;
//           border-collapse: collapse;
//         }

//         .kot-table th, .kot-table td {
//           border: 1px solid #ccc;
//           padding: 6px;
//         }
//       `}</style>

//       <div className="kot-header">🍽️ Kitchen Order Tickets (KOT)</div>

//       <input
//         className="search-input"
//         placeholder="🔍 Search by KOT Number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filtered.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#777" }}>No KOTs found.</p>
//       ) : (
//         filtered.map((kot, index) => (
//           <div key={index} className="kot-box">
//             <p>
//               <strong>KOT #:</strong> {kot.kotNumber}
//             </p>
//             <p>
//               <strong>Table ID:</strong> {kot.tableId}
//             </p>
//             <p>
//               <strong>Created At:</strong>{" "}
//               {new Date(kot.createdAt).toLocaleString()}
//             </p>

//             <table className="kot-table">
//               <thead>
//                 <tr>
//                   <th>Item</th>
//                   <th>Qty</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {kot.items.map((item, idx) => (
//                   <tr key={idx}>
//                     <td>{item.name}</td>
//                     <td>{item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <button className="print-btn" onClick={() => handlePrint(kot)}>
//               🖨️ Print
//             </button>
//           </div>
//         ))
//       )}

//       {/* PRINT ONLY SECTION */}
//       {printKot && (
//         <div id="printArea">
//           <div
//             style={{ maxWidth: "300px", margin: "0 auto", textAlign: "center" }}
//           >
//             <h3>Hotel Nila Soru</h3>
//             <div style={{ fontSize: "13px", marginBottom: "10px" }}>
//               GSTIN : 33BSDPR2363D1Z0
//               <br />
//               7/28, Near Manipal Hospital,
//               <br />
//               Vellakalpatty, Salem, Tamil Nadu - 636012
//             </div>

//             <div style={{ textAlign: "left" }}>
//               Date: {new Date(printKot.createdAt).toLocaleString()}
//               <br />
//               Dine In: {printKot.tableId}
//               <br />
//               Cashier: selva01
//               <br />
//               Bill No: INV-408790
//               <br />
//               Token No: 1<br />
//               Assign to: Selva
//               <br />
//             </div>

//             <table style={{ width: "100%", marginTop: "10px" }}>
//               <thead>
//                 <tr>
//                   <th>Item</th>
//                   <th>Qty</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {printKot.items.map((item, idx) => (
//                   <tr key={idx}>
//                     <td>{item.name}</td>
//                     <td>{item.quantity}</td>
//                     <td>₹{getPrice(item.name)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <hr />
//             <div style={{ textAlign: "left" }}>
//               Total Qty:{" "}
//               {printKot.items.reduce((sum, i) => sum + i.quantity, 0)}
//               <br />
//               Sub Total: ₹
//               {printKot.items.reduce(
//                 (sum, i) => sum + getPrice(i.name) * i.quantity,
//                 0
//               )}
//               <br />
//               CGST: ₹0.88
//               <br />
//               SGST: ₹0.88
//               <br />
//               <strong>Grand Total: ₹36.75</strong>
//             </div>

//             <p style={{ marginTop: "10px" }}>Thank You !!! Visit Again</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BillKotPrint;

// import React, { useEffect, useState } from "react";

// const BillKotPrint = () => {
//   const [kots, setKots] = useState([]);
//   const [search, setSearch] = useState("");
//   const [printKot, setPrintKot] = useState(null);

//   useEffect(() => {
//     const storedKots = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKots(storedKots);
//   }, []);

//   const handlePrint = (kot) => {
//     setPrintKot(kot);
//     setTimeout(() => {
//       window.print();
//     }, 200);
//   };

//   const filtered = kots.filter((kot) =>
//     kot.kotNumber?.toString().includes(search.trim())
//   );

//   const getPrice = (itemName) => {
//     const prices = { Idli: 20, Vada: 15, Dosai: 25 };
//     return prices[itemName] || 10;
//   };

//   return (
//     <>
//       <style>{`
//         * {
//           font-family: Poppins, sans-serif;
//         }

//         @media print {
//           body * {
//             visibility: hidden;
//           }
//           #printArea, #printArea * {
//             visibility: visible;
//           }
//           #printArea {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//             font-family: monospace;
//             font-size: 14px;
//             padding: 10px;
//           }
//         }

//         .kot-header {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 600;
//           margin-bottom: 20px;
//           background: linear-gradient(to right, #00b09b, #96c93d);
//           color: #fff;
//           padding: 15px;
//           border-radius: 8px;
//         }

//         .kot-box {
//           background: #f5fff8;
//           border-left: 5px solid #4caf50;
//           padding: 16px;
//           border-radius: 8px;
//           margin: 20px 0;
//         }

//         .search-input {
//           padding: 12px 20px;
//           width: 100%;
//           max-width: 400px;
//           border: 2px solid #4caf50;
//           border-radius: 8px;
//           margin: 20px auto;
//           display: block;
//         }

//         .print-btn {
//           margin-top: 12px;
//           padding: 10px 20px;
//           background-color: #ff4081;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         .kot-table {
//           width: 100%;
//           margin-top: 10px;
//           border-collapse: collapse;
//         }

//         .kot-table th, .kot-table td {
//           border: 1px solid #ccc;
//           padding: 6px;
//         }
//       `}</style>

//       <div className="kot-header">🍽️ Kitchen Order Tickets (KOT)</div>

//       <input
//         className="search-input"
//         placeholder="🔍 Search by KOT Number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {filtered.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#777" }}>No KOTs found.</p>
//       ) : (
//         filtered.map((kot, index) => (
//           <div key={index} className="kot-box">
//             <p>
//               <strong>KOT #:</strong> {kot.kotNumber}
//             </p>
//             <p>
//               <strong>Table ID:</strong> {kot.tableId}
//             </p>
//             <p>
//               <strong>Created At:</strong>{" "}
//               {new Date(kot.createdAt).toLocaleString()}
//             </p>

//             <table className="kot-table">
//               <thead>
//                 <tr>
//                   <th>Item</th>
//                   <th>Qty</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {kot.items.map((item, idx) => (
//                   <tr key={idx}>
//                     <td>{item.name}</td>
//                     <td>{item.quantity}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <button className="print-btn" onClick={() => handlePrint(kot)}>
//               🖨️ Print
//             </button>
//           </div>
//         ))
//       )}

//       {/* PRINT ONLY SECTION */}
//       {printKot && (
//         <div id="printArea">
//           <div
//             style={{ maxWidth: "300px", margin: "0 auto", textAlign: "center" }}
//           >
//             <h3>Hotel Nila Soru</h3>
//             <div style={{ fontSize: "13px", marginBottom: "10px" }}>
//               GSTIN : 33BSDPR2363D1Z0
//               <br />
//               7/28, Near Manipal Hospital,
//               <br />
//               Vellakalpatty, Salem, Tamil Nadu - 636012
//             </div>

//             <div style={{ textAlign: "left" }}>
//               Date: {new Date(printKot.createdAt).toLocaleString()}
//               <br />
//               Dine In: {printKot.tableId}
//               <br />
//               Cashier: selva01
//               <br />
//               Bill No: INV-408790
//               <br />
//               Token No: 1<br />
//               Assign to: Selva
//               <br />
//             </div>

//             <table style={{ width: "100%", marginTop: "10px" }}>
//               <thead>
//                 <tr>
//                   <th>Item</th>
//                   <th>Qty</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {printKot.items.map((item, idx) => (
//                   <tr key={idx}>
//                     <td>{item.name}</td>
//                     <td>{item.quantity}</td>
//                     <td>₹{getPrice(item.name)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <hr />
//             <div style={{ textAlign: "left" }}>
//               Total Qty:{" "}
//               {printKot.items.reduce((sum, i) => sum + i.quantity, 0)}
//               <br />
//               Sub Total: ₹
//               {printKot.items.reduce(
//                 (sum, i) => sum + getPrice(i.name) * i.quantity,
//                 0
//               )}
//               <br />
//               CGST: ₹0.88
//               <br />
//               SGST: ₹0.88
//               <br />
//               <strong>Grand Total: ₹36.75</strong>
//             </div>

//             <p style={{ marginTop: "10px" }}>Thank You !!! Visit Again</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default BillKotPrint;

// import React, { useEffect, useState } from "react";

// const BillKotPrint = () => {
//   const [kots, setKots] = useState([]);
//   const [search, setSearch] = useState("");
//   const [printKot, setPrintKot] = useState(null);

//   useEffect(() => {
//     const storedKots = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKots(storedKots);
//   }, []);

//   const handlePrint = (kot) => {
//     const newWindow = window.open("", "_blank", "width=600,height=600");

//     const getPrice = (itemName) => {
//       const prices = { Idli: 20, Vada: 15, Dosai: 25 };
//       return prices[itemName] || 10;
//     };

//     const totalQty = kot.items.reduce((sum, i) => sum + i.quantity, 0);
//     const subTotal = kot.items.reduce(
//       (sum, i) => sum + getPrice(i.name) * i.quantity,
//       0
//     );
//     const cgst = 0.88;
//     const sgst = 0.88;
//     const grandTotal = subTotal + cgst + sgst;

//     const printContent = `
//     <html>
//       <head>
//         <title>KOT Print</title>
//         <style>
//           body { font-family: monospace; padding: 10px; font-size: 14px; }
//           h3 { text-align: center; margin: 0; }
//           .center { text-align: center; font-size: 13px; margin-bottom: 10px; }
//           .details b { display: inline-block; width: 100px; }
//           table { width: 100%; margin-top: 10px; border-collapse: collapse; }
//           th, td { text-align: left; padding: 4px 0; }
//           th { border-bottom: 1px solid #000; }
//           .amount-col { text-align: right; }
//           .total-section { margin-top: 10px; text-align: right; }
//           .grand-total { font-size: 16px; font-weight: bold; margin-top: 5px; border-top: 1px dashed #000; padding-top: 5px; }
//           .footer { text-align: center; margin-top: 15px; }
//         </style>
//       </head>
//       <body>
//         <h3>Hotel Nila Soru</h3>
//         <div class="center">
//           GSTIN : 33BSDPR2363D1Z0<br/>
//           7/28, Near Manipal Hospital,<br/>
//           Vellakalpatty, Salem, Tamil Nadu, 636012
//         </div>
//         <hr/>
//         <div class="details">
//           <div><b>Date:</b> ${new Date(kot.createdAt).toLocaleString()}</div>
//           <div><b>Dine In:</b> ${kot.tableId}</div>
//           <div><b>Cashier:</b> selva01</div>
//           <div><b>Bill No:</b> INV-408790</div>
//           <div><b>Token No:</b> 1</div>
//           <div><b>Assign to:</b> Selva</div>
//         </div>
//         <hr/>
//         <table>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Qty</th>
//               <th>Price</th>
//               <th class="amount-col">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             ${kot.items
//               .map((item) => {
//                 const price = getPrice(item.name);
//                 const amount = price * item.quantity;
//                 return `
//                   <tr>
//                     <td>${item.name}</td>
//                     <td>${item.quantity}</td>
//                     <td>₹${price}</td>
//                     <td class="amount-col">₹${amount}</td>
//                   </tr>
//                 `;
//               })
//               .join("")}
//           </tbody>
//         </table>
//         <div class="total-section">
//           Total Qty: ${totalQty}<br/>
//           Sub Total: ₹${subTotal.toFixed(2)}<br/>
//           CGST: ₹${cgst}<br/>
//           SGST: ₹${sgst}<br/>
//           <div class="grand-total">Grand Total ₹ ${grandTotal.toFixed(2)}</div>
//         </div>
//         <div class="footer">Thank You !!! Visit Again</div>
//         <script>
//           window.onload = function () {
//             window.print();
//             window.onafterprint = function () {
//               window.close();
//             };
//           };
//         </script>
//       </body>
//     </html>
//     `;

//     newWindow.document.write(printContent);
//     newWindow.document.close();
//   };

//   const filtered = kots.filter((kot) =>
//     kot.kotNumber?.toString().includes(search.trim())
//   );

//   const getPrice = (itemName) => {
//     const prices = { Idli: 20, Vada: 15, Dosai: 25 };
//     return prices[itemName] || 10;
//   };

//   return (
//     <>
//       <style>{`
//         * {
//           font-family: Poppins, sans-serif;
//         }

//         @media print {
//           body * {
//             visibility: hidden;
//           }
//           #printArea, #printArea * {
//             visibility: visible;
//           }
//           #printArea {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             font-family: monospace;
//             padding: 10px;
//             font-size: 14px;
//           }
//         }

//         .kot-header {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 600;
//           margin-bottom: 20px;
//           background: linear-gradient(to right, #00b09b, #96c93d);
//           color: #fff;
//           padding: 15px;
//           border-radius: 8px;
//         }

//         .search-input {
//           padding: 12px 20px;
//           width: 100%;
//           max-width: 400px;
//           border: 2px solid #4caf50;
//           border-radius: 8px;
//           margin: 20px auto;
//           display: block;
//         }

//         .kot-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//           justify-content: center;
//           padding: 0 10px;
//         }

//         .kot-box {
//           background: #f5fff8;
//           border-left: 5px solid #4caf50;
//           padding: 16px;
//           border-radius: 8px;
//           flex: 1 1 48%;
//           max-width: 48%;
//         }

//         @media (max-width: 768px) {
//           .kot-box {
//             flex: 1 1 100%;
//             max-width: 100%;
//           }
//         }

//         .kot-table {
//           width: 100%;
//           margin-top: 10px;
//           border-collapse: collapse;
//         }

//         .kot-table th, .kot-table td {
//           border: 1px solid #ccc;
//           padding: 6px;
//         }

//         .print-btn {
//           margin-top: 12px;
//           padding: 10px 20px;
//           background-color: #ff4081;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }
//       `}</style>

//       <div className="kot-header">🍽️ Kitchen Order Tickets (KOT)</div>

//       <input
//         className="search-input"
//         placeholder="🔍 Search by KOT Number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="kot-grid">
//         {filtered.length === 0 ? (
//           <p style={{ textAlign: "center", color: "#777" }}>No KOTs found.</p>
//         ) : (
//           filtered.map((kot, index) => (
//             <div key={index} className="kot-box">
//               <p>
//                 <strong>KOT #:</strong> {kot.kotNumber}
//               </p>
//               <p>
//                 <strong>Table ID:</strong> {kot.tableId}
//               </p>
//               <p>
//                 <strong>Created At:</strong>{" "}
//                 {new Date(kot.createdAt).toLocaleString()}
//               </p>

//               <table className="kot-table">
//                 <thead>
//                   <tr>
//                     <th>Item</th>
//                     <th>Qty</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {kot.items.map((item, idx) => (
//                     <tr key={idx}>
//                       <td>{item.name}</td>
//                       <td>{item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <button className="print-btn" onClick={() => handlePrint(kot)}>
//                 🖨️ Print
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* PRINT ONLY PREVIEW (Optional if you want it visible before opening new window) */}
//       <div id="printArea">
//         {printKot && (
//           <div
//             style={{ maxWidth: "300px", margin: "0 auto", textAlign: "center" }}
//           >
//             <h3>Hotel Nila Soru</h3>
//             <div style={{ fontSize: "13px", marginBottom: "10px" }}>
//               GSTIN : 33BSDPR2363D1Z0
//               <br />
//               7/28, Near Manipal Hospital,
//               <br />
//               Vellakalpatty, Salem, Tamil Nadu - 636012
//             </div>
//             <div style={{ textAlign: "left", marginBottom: "10px" }}>
//               Date: {new Date(printKot.createdAt).toLocaleString()}
//               <br />
//               Dine In: {printKot.tableId}
//               <br />
//               Cashier: selva01
//               <br />
//               Bill No: INV-408790
//               <br />
//               Token No: 1<br />
//               Assign to: Selva
//             </div>
//             <table style={{ width: "100%", marginBottom: "10px" }}>
//               <thead>
//                 <tr>
//                   <th style={{ textAlign: "left" }}>Item</th>
//                   <th>Qty</th>
//                   <th>Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {printKot.items.map((item, idx) => (
//                   <tr key={idx}>
//                     <td>{item.name}</td>
//                     <td>{item.quantity}</td>
//                     <td>₹{getPrice(item.name)}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <hr />
//             <div style={{ textAlign: "left", fontSize: "13px" }}>
//               Total Qty:{" "}
//               {printKot.items.reduce((sum, i) => sum + i.quantity, 0)}
//               <br />
//               Sub Total: ₹
//               {printKot.items.reduce(
//                 (sum, i) => sum + getPrice(i.name) * i.quantity,
//                 0
//               )}
//               <br />
//               CGST: ₹0.88
//               <br />
//               SGST: ₹0.88
//               <br />
//               <strong>Grand Total: ₹36.75</strong>
//             </div>
//             <p style={{ marginTop: "10px" }}>Thank You !!! Visit Again</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BillKotPrint;

// import React, { useEffect, useState } from "react";

// const BillKotPrint = () => {
//   const [kots, setKots] = useState([]);
//   const [search, setSearch] = useState("");
//   const [printKot, setPrintKot] = useState(null);

//   useEffect(() => {
//     const storedKots = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKots(storedKots);
//   }, []);

//   const handlePrint = (kot) => {
//     setPrintKot(kot);
//     setTimeout(() => {
//       window.print();
//     }, 100);
//   };

//   const filtered = kots.filter((kot) =>
//     kot.kotNumber?.toString().includes(search.trim())
//   );

//   return (
//     <>
//       {/* 🌟 Styles */}
//       <style>{`
//         * {
//           font-family: Poppins, sans-serif;
//         }

//         .kot-header {
//           text-align: center;
//           font-size: 2rem;
//           font-weight: 600;
//           margin-bottom: 20px;
//           background: linear-gradient(to right, #00b09b, #96c93d);
//           color: #fff;
//           padding: 15px;
//           border-radius: 8px;
//         }

//         .search-input {
//           padding: 12px 20px;
//           width: 100%;
//           max-width: 400px;
//           border: 2px solid #4caf50;
//           border-radius: 8px;
//           margin: 20px auto;
//           display: block;
//         }

//         .kot-grid {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 20px;
//           justify-content: center;
//           padding: 0 10px;
//         }

//         .kot-box {
//           background: #f5fff8;
//           border-left: 5px solid #4caf50;
//           padding: 16px;
//           border-radius: 8px;
//           flex: 1 1 48%;
//           max-width: 48%;
//         }

//         @media (max-width: 768px) {
//           .kot-box {
//             flex: 1 1 100%;
//             max-width: 100%;
//           }
//         }

//         .kot-table {
//           width: 100%;
//           margin-top: 10px;
//           border-collapse: collapse;
//         }

//         .kot-table th, .kot-table td {
//           border: 1px solid #ccc;
//           padding: 6px;
//         }

//         .print-btn {
//           margin-top: 12px;
//           padding: 10px 20px;
//           background-color: #ff4081;
//           color: white;
//           border: none;
//           border-radius: 6px;
//           cursor: pointer;
//         }

//         /* Hide print area on screen */
//         #printArea {
//           display: none;
//         }

//         @media print {
//           body * {
//             visibility: hidden !important;
//           }

//           #printArea, #printArea * {
//             visibility: visible !important;
//           }

//           #printArea {
//             display: block !important;
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 280px;
//             margin: 0 auto;
//             padding: 10px;
//             font-family: monospace;
//             font-size: 14px;
//           }

//           .print-container h3 {
//             text-align: center;
//             margin: 0;
//             font-size: 16px;
//           }

//           table {
//             border-collapse: collapse;
//             width: 100%;
//           }

//           th, td {
//             padding: 4px;
//             text-align: left;
//           }

//           th {
//             border-bottom: 1px solid #000;
//           }
//         }
//       `}</style>

//       {/* 🔲 Header */}
//       <div className="kot-header">🍽️ Kitchen Order Tickets (KOT)</div>

//       {/* 🔍 Search */}
//       <input
//         className="search-input"
//         placeholder="🔍 Search by KOT Number"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🧾 KOT List */}
//       <div className="kot-grid">
//         {filtered.length === 0 ? (
//           <p style={{ textAlign: "center", color: "#777" }}>No KOTs found.</p>
//         ) : (
//           filtered.map((kot, index) => (
//             <div key={index} className="kot-box">
//               <p>
//                 <strong>KOT #:</strong> {kot.kotNumber}
//               </p>
//               <p>
//                 <strong>Table ID:</strong> {kot.tableId}
//               </p>
//               <p>
//                 <strong>Created At:</strong>{" "}
//                 {new Date(kot.createdAt).toLocaleString()}
//               </p>

//               <table className="kot-table">
//                 <thead>
//                   <tr>
//                     <th>Item</th>
//                     <th>Qty</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {kot.items.map((item, idx) => (
//                     <tr key={idx}>
//                       <td>{item.name}</td>
//                       <td>{item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <button className="print-btn" onClick={() => handlePrint(kot)}>
//                 🖨️ Print
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* 🖨️ Print Area - Hidden on Screen, Visible in Print */}
//       <div id="printArea">
//         {printKot && (
//           <div className="print-container">
//             <h3 style={{ marginBottom: "5px" }}>Hotel Nila Soru</h3>
//             <div
//               style={{
//                 fontSize: "13px",
//                 textAlign: "center",
//                 marginBottom: "8px",
//               }}
//             >
//               KOT No: {printKot.kotNumber}
//               <br />
//               Table: {printKot.tableId}
//               <br />
//               Date: {new Date(printKot.createdAt).toLocaleString()}
//             </div>

//             <div
//               style={{
//                 fontSize: "14px",
//                 marginTop: "8px",
//                 borderTop: "1px dashed #000",
//                 paddingTop: "6px",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   fontWeight: "bold",
//                 }}
//               >
//                 <span style={{ width: "70%" }}>Item</span>
//                 <span style={{ width: "30%", textAlign: "right" }}>Qty</span>
//               </div>

//               {printKot.items.map((item, idx) => (
//                 <div
//                   key={idx}
//                   style={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     padding: "2px 0",
//                     fontFamily: "monospace",
//                     borderBottom: "1px dotted #999",
//                   }}
//                 >
//                   <span style={{ width: "70%" }}>{item.name}</span>
//                   <span style={{ width: "30%", textAlign: "right" }}>
//                     {item.quantity}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BillKotPrint;

import React, { useEffect, useState } from "react";

const API_URL = "https://64b7959321b9aa6eb0788288.mockapi.io/sasi";

const BillKotPrint = () => {
  const [kots, setKots] = useState([]);
  const [search, setSearch] = useState("");
  const [printKot, setPrintKot] = useState(null);

  useEffect(() => {
    const fetchKots = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const filtered = data.filter(
          (kot) => kot.kotNumber && kot.items?.length > 0
        );
        setKots(filtered);
      } catch (err) {
        console.error("Error fetching KOTs:", err);
      }
    };

    fetchKots();
  }, []);

  const handlePrint = (kot) => {
    setPrintKot(kot);
    setTimeout(() => {
      window.print();
    }, 100);
  };

  const filtered = kots.filter((kot) =>
    kot.kotNumber?.toString().includes(search.trim())
  );

  return (
    <>
      {/* 🌟 Styles */}
      <style>{`
        * {
          font-family: Poppins, sans-serif;
        }

        .kot-header {
          text-align: center;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 20px;
          background: linear-gradient(to right, #00b09b, #96c93d);
          color: #fff;
          padding: 15px;
          border-radius: 8px;
        }

        .search-input {
          padding: 12px 20px;
          width: 100%;
          max-width: 400px;
          border: 2px solid #4caf50;
          border-radius: 8px;
          margin: 20px auto;
          display: block;
        }

        .kot-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          padding: 0 10px;
        }

        .kot-box {
          background: #f5fff8;
          border-left: 5px solid #4caf50;
          padding: 16px;
          border-radius: 8px;
          flex: 1 1 48%;
          max-width: 48%;
        }

        @media (max-width: 768px) {
          .kot-box {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }

        .kot-table {
          width: 100%;
          margin-top: 10px;
          border-collapse: collapse;
        }

        .kot-table th, .kot-table td {
          border: 1px solid #ccc;
          padding: 6px;
        }

        .print-btn {
          margin-top: 12px;
          padding: 10px 20px;
          background-color: #ff4081;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        /* Hide print area on screen */
        #printArea {
          display: none;
        }

        @media print {
          body * {
            visibility: hidden !important;
          }

          #printArea, #printArea * {
            visibility: visible !important;
          }

          #printArea {
            display: block !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 280px;
            margin: 0 auto;
            padding: 10px;
            font-family: monospace;
            font-size: 14px;
          }

          .print-container h3 {
            text-align: center;
            margin: 0;
            font-size: 16px;
          }

          table {
            border-collapse: collapse;
            width: 100%;
          }

          th, td {
            padding: 4px;
            text-align: left;
          }

          th {
            border-bottom: 1px solid #000;
          }
        }
      `}</style>

      {/* 🔲 Header */}
      <div className="kot-header">🍽️ Kitchen Order Tickets (KOT)</div>

      {/* 🔍 Search */}
      <input
        className="search-input"
        placeholder="🔍 Search by KOT Number"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🧾 KOT List */}
      <div className="kot-grid">
        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>No KOTs found.</p>
        ) : (
          filtered.map((kot, index) => (
            <div key={index} className="kot-box">
              <p>
                <strong>KOT #:</strong> {kot.kotNumber}
              </p>
              <p>
                <strong>Table ID:</strong> {kot.tableId}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(kot.createdAt).toLocaleString()}
              </p>

              <table className="kot-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {kot.items?.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button className="print-btn" onClick={() => handlePrint(kot)}>
                🖨️ Print
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🖨️ Print Area */}
      <div id="printArea">
        {printKot && (
          <div className="print-container">
            <h3 style={{ marginBottom: "5px" }}>Hotel Nila Soru</h3>
            <div
              style={{
                fontSize: "13px",
                textAlign: "center",
                marginBottom: "8px",
              }}
            >
              KOT No: {printKot.kotNumber}
              <br />
              Table: {printKot.tableId}
              <br />
              Date: {new Date(printKot.createdAt).toLocaleString()}
            </div>

            <div
              style={{
                fontSize: "14px",
                marginTop: "8px",
                borderTop: "1px dashed #000",
                paddingTop: "6px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <span style={{ width: "70%" }}>Item</span>
                <span style={{ width: "30%", textAlign: "right" }}>Qty</span>
              </div>

              {printKot.items?.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2px 0",
                    fontFamily: "monospace",
                    borderBottom: "1px dotted #999",
                  }}
                >
                  <span style={{ width: "70%" }}>{item.name}</span>
                  <span style={{ width: "30%", textAlign: "right" }}>
                    {item.quantity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BillKotPrint;
