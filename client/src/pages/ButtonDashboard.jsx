// import React, { useState } from "react";

// const ButtonDashboard = () => {
//   const [showOrders, setShowOrders] = useState(false);

//   const waiter = localStorage.getItem("waiterUsername");
//   const allKOTs = JSON.parse(localStorage.getItem("kots")) || [];

//   const myOrders = allKOTs.filter((kot) => kot.waiter === waiter);

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Welcome, {waiter}</h2>

//       <button
//         onClick={() => setShowOrders(!showOrders)}
//         className="bg-green-600 text-white px-4 py-2 rounded-md"
//       >
//         {showOrders ? "Hide My Orders" : "View My Orders"}
//       </button>

//       {showOrders && (
//         <div className="mt-4">
//           {myOrders.length === 0 ? (
//             <p>No orders placed yet.</p>
//           ) : (
//             <table className="w-full border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="p-2 border">KOT No</th>
//                   <th className="p-2 border">Table ID</th>
//                   <th className="p-2 border">Items</th>
//                   <th className="p-2 border">Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {myOrders.map((order, idx) => (
//                   <tr key={idx} className="text-center">
//                     <td className="p-2 border">{order.kotNumber}</td>
//                     <td className="p-2 border">{order.tableId}</td>
//                     <td className="p-2 border">
//                       {order.items.map((item, i) => (
//                         <div key={i}>
//                           {item.name} × {item.quantity}
//                         </div>
//                       ))}
//                     </td>
//                     <td className="p-2 border">
//                       {new Date(order.createdAt).toLocaleString()}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ButtonDashboard;

// import React, { useState } from "react";
// import InvoiceModal from "../components/waiter/InvoiceModal";

// const ButtonDashboard = () => {
//   const [showOrders, setShowOrders] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [showInvoiceModal, setShowInvoiceModal] = useState(false);
//   const [isPrinting, setIsPrinting] = useState(false);
//   const [customerName, setCustomerName] = useState("");
//   const [customerMobile, setCustomerMobile] = useState("");
//   const [customerGST, setCustomerGST] = useState("");

//   const waiter = localStorage.getItem("waiterUsername");
//   const allKOTs = JSON.parse(localStorage.getItem("kots")) || [];

//   const myOrders = allKOTs.filter((kot) => kot.waiter === waiter);

//   const getPrice = (item) => {
//     const priceMap = JSON.parse(localStorage.getItem("priceMap")) || {};
//     return priceMap[item] || 50;
//   };

//   const handlePay = (order) => {
//     setSelectedOrder(order);
//     const randInvoice = "INV-" + Math.floor(100000 + Math.random() * 900000);
//     setInvoiceNumber(randInvoice);
//     setShowInvoiceModal(true);
//   };

//   const handleUpdateStatus = (newStatus, tableId) => {
//     if (newStatus === "paid") {
//       localStorage.removeItem(`cart-${tableId}`);
//       localStorage.removeItem(`status-${tableId}`);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Welcome, {waiter}</h2>

//       <button
//         onClick={() => setShowOrders(!showOrders)}
//         className="bg-green-600 text-white px-4 py-2 rounded-md"
//       >
//         {showOrders ? "Hide My Orders" : "View My Orders"}
//       </button>

//       {showOrders && (
//         <div className="mt-4 overflow-auto">
//           {myOrders.length === 0 ? (
//             <p>No orders placed yet.</p>
//           ) : (
//             <table className="w-full border border-gray-300 text-sm">
//               <thead>
//                 <tr className="bg-gray-200 text-center">
//                   <th className="p-2 border">KOT No</th>
//                   <th className="p-2 border">Table ID</th>
//                   <th className="p-2 border">Items</th>
//                   <th className="p-2 border">Date</th>
//                   <th className="p-2 border">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {myOrders.map((order, idx) => (
//                   <tr key={idx} className="text-center border-b">
//                     <td className="p-2 border">{order.kotNumber}</td>
//                     <td className="p-2 border">{order.tableId}</td>
//                     <td className="p-2 border">
//                       {order.items.map((item, i) => (
//                         <div key={i}>
//                           {item.name} × {item.quantity}
//                         </div>
//                       ))}
//                     </td>
//                     <td className="p-2 border">
//                       {new Date(order.createdAt).toLocaleString()}
//                     </td>
//                     <td className="p-2 border">
//                       <button
//                         onClick={() => handlePay(order)}
//                         className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded shadow"
//                       >
//                         Pay
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       )}

//       {selectedOrder && (
//         <InvoiceModal
//           show={showInvoiceModal}
//           onClose={() => setShowInvoiceModal(false)}
//           cart={Object.fromEntries(
//             selectedOrder.items.map((item) => [item.name, item.quantity])
//           )}
//           getPrice={getPrice}
//           handleUpdateStatus={() =>
//             handleUpdateStatus("paid", selectedOrder.tableId)
//           }
//           tableId={selectedOrder.tableId}
//           invoiceNumber={invoiceNumber}
//           setInvoiceNumber={setInvoiceNumber}
//           customerName={customerName}
//           setCustomerName={setCustomerName}
//           customerMobile={customerMobile}
//           setCustomerMobile={setCustomerMobile}
//           customerGST={customerGST}
//           setCustomerGST={setCustomerGST}
//           isPrinting={isPrinting}
//           setIsPrinting={setIsPrinting}
//           cgstRate={2.5}
//           sgstRate={2.5}
//         />
//       )}
//     </div>
//   );
// };

// export default ButtonDashboard;

// import React, { useState } from "react";
// import InvoiceModal from "../components/waiter/InvoiceModal";

// const ButtonDashboard = () => {
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [invoiceNumber, setInvoiceNumber] = useState("");
//   const [showInvoiceModal, setShowInvoiceModal] = useState(false);
//   const [isPrinting, setIsPrinting] = useState(false);
//   const [customerName, setCustomerName] = useState("");
//   const [customerMobile, setCustomerMobile] = useState("");
//   const [customerGST, setCustomerGST] = useState("");

//   const waiter = localStorage.getItem("waiterUsername");
//   const allKOTs = JSON.parse(localStorage.getItem("kots")) || [];
//   const myOrders = allKOTs.filter((kot) => kot.waiter === waiter);

//   const getPrice = (item) => {
//     const priceMap = JSON.parse(localStorage.getItem("priceMap")) || {};
//     return priceMap[item] || 50;
//   };

//   const handlePay = (order) => {
//     setSelectedOrder(order);
//     const randInvoice = "INV-" + Math.floor(100000 + Math.random() * 900000);
//     setInvoiceNumber(randInvoice);
//     setShowInvoiceModal(true);
//   };

//   const handleUpdateStatus = (newStatus, tableId) => {
//     if (newStatus === "paid") {
//       localStorage.removeItem(`cart-${tableId}`);
//       localStorage.removeItem(`status-${tableId}`);
//     }
//   };

//   const calculateTotal = (items) => {
//     return items.reduce(
//       (total, item) => total + getPrice(item.name) * item.quantity,
//       0
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-semibold text-green-800 mb-6">
//         Welcome, {waiter}
//       </h2>

//       <div className="overflow-auto shadow-lg rounded-lg bg-white p-4">
//         {myOrders.length === 0 ? (
//           <p className="text-center text-gray-600">No orders placed yet.</p>
//         ) : (
//           <table className="w-full text-sm text-gray-800 border border-gray-200">
//             <thead>
//               <tr className="bg-green-100 text-center">
//                 <th className="p-3 border">KOT No</th>
//                 <th className="p-3 border">Table ID</th>
//                 <th className="p-3 border">Item</th>
//                 <th className="p-3 border">Qty</th>
//                 <th className="p-3 border">Total</th>
//                 <th className="p-3 border">Date</th>
//                 <th className="p-3 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {myOrders.map((order, idx) => (
//                 <tr
//                   key={idx}
//                   className="text-center border-b hover:bg-green-50 transition"
//                 >
//                   <td className="p-3 border font-medium">{order.kotNumber}</td>
//                   <td className="p-3 border">{order.tableId}</td>

//                   <td className="p-3 border text-left">
//                     {order.items.map((item, i) => (
//                       <div key={i}>{item.name}</div>
//                     ))}
//                   </td>

//                   <td className="p-3 border text-center">
//                     {order.items.map((item, i) => (
//                       <div key={i}>{item.quantity}</div>
//                     ))}
//                   </td>

//                   <td className="p-3 border font-semibold">
//                     ₹{calculateTotal(order.items)}
//                   </td>

//                   <td className="p-3 border">
//                     {new Date(order.createdAt).toLocaleString()}
//                   </td>

//                   <td className="p-3 border">
//                     <button
//                       onClick={() => handlePay(order)}
//                       className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
//                     >
//                       Pay
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {selectedOrder && (
//         <InvoiceModal
//           show={showInvoiceModal}
//           onClose={() => setShowInvoiceModal(false)}
//           cart={Object.fromEntries(
//             selectedOrder.items.map((item) => [item.name, item.quantity])
//           )}
//           getPrice={getPrice}
//           handleUpdateStatus={() =>
//             handleUpdateStatus("paid", selectedOrder.tableId)
//           }
//           tableId={selectedOrder.tableId}
//           invoiceNumber={invoiceNumber}
//           setInvoiceNumber={setInvoiceNumber}
//           customerName={customerName}
//           setCustomerName={setCustomerName}
//           customerMobile={customerMobile}
//           setCustomerMobile={setCustomerMobile}
//           customerGST={customerGST}
//           setCustomerGST={setCustomerGST}
//           isPrinting={isPrinting}
//           setIsPrinting={setIsPrinting}
//           cgstRate={2.5}
//           sgstRate={2.5}
//         />
//       )}
//     </div>
//   );
// };

// export default ButtonDashboard;

import React, { useState, useEffect } from "react";
import InvoiceModal from "../components/waiter/InvoiceModal";

const ButtonDashboard = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerGST, setCustomerGST] = useState("");
  const [allKOTs, setAllKOTs] = useState([]);
  const [priceMap, setPriceMap] = useState({});

  const waiter = localStorage.getItem("waiterUsername");

  // Fetch KOT orders
  useEffect(() => {
    const fetchKOTs = async () => {
      try {
        const res = await fetch(
          "https://64b7959321b9aa6eb0788288.mockapi.io/sasi"
        );
        const data = await res.json();
        setAllKOTs(data);
      } catch (error) {
        console.error("Error fetching KOTs:", error);
      }
    };

    fetchKOTs();
  }, []);

  // Fetch item prices
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch(
          "https://63ae7fb43e46516916732319.mockapi.io/Rooban"
        );
        const data = await res.json();

        // Build a flat price map
        const prices = {};
        data.forEach((category) => {
          category.items.forEach((item) => {
            prices[item.name.toLowerCase()] = item.price;
          });
        });

        setPriceMap(prices);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  const myOrders = allKOTs.filter((kot) => kot.waiter === waiter);

  const getPrice = (itemName) => {
    return priceMap[itemName.toLowerCase()] || 50;
  };

  const calculateTotal = (items) => {
    return items.reduce(
      (total, item) => total + getPrice(item.name) * item.quantity,
      0
    );
  };

  // const handlePay = (order) => {
  //   setSelectedOrder(order);
  //   const randInvoice = "INV-" + Math.floor(100000 + Math.random() * 900000);
  //   setInvoiceNumber(randInvoice);
  //   setShowInvoiceModal(true);
  // };
  const handlePay = async (order) => {
    setSelectedOrder(order);
    const randInvoice = "INV-" + Math.floor(100000 + Math.random() * 900000);
    setInvoiceNumber(randInvoice);
    setShowInvoiceModal(true);

    // Update table status to "placed"
    try {
      // Fetch all project data
      const res = await fetch(
        "https://63ae7fb43e46516916732319.mockapi.io/project"
      );
      const data = await res.json();

      // Find the matching table
      const tableEntry = data.find((entry) => entry.tableId === order.tableId);
      if (tableEntry) {
        await fetch(
          `https://63ae7fb43e46516916732319.mockapi.io/project/${tableEntry.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "blank" }),
          }
        );
        console.log(`Table ${order.tableId} status updated to placed`);
      }
    } catch (error) {
      console.error("Error updating table status:", error);
    }
  };

  const handleUpdateStatus = (newStatus, tableId) => {
    if (newStatus === "paid") {
      localStorage.removeItem(`cart-${tableId}`);
      localStorage.removeItem(`status-${tableId}`);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-semibold text-green-800 mb-6">
        Welcome, {waiter}
      </h2>

      <div className="overflow-auto shadow-lg rounded-lg bg-white p-4">
        {myOrders.length === 0 ? (
          <p className="text-center text-gray-600">No orders placed yet.</p>
        ) : (
          <table className="w-full text-sm text-gray-800 border border-gray-200">
            <thead>
              <tr className="bg-green-100 text-center">
                <th className="p-3 border">KOT No</th>
                <th className="p-3 border">Table ID</th>
                <th className="p-3 border">Item</th>
                <th className="p-3 border">Qty</th>
                <th className="p-3 border">Total</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order, idx) => (
                <tr
                  key={idx}
                  className="text-center border-b hover:bg-green-50 transition"
                >
                  <td className="p-3 border font-medium">{order.kotNumber}</td>
                  <td className="p-3 border">{order.tableId}</td>
                  <td className="p-3 border text-left">
                    {order.items.map((item, i) => (
                      <div key={i}>{item.name}</div>
                    ))}
                  </td>
                  <td className="p-3 border text-center">
                    {order.items.map((item, i) => (
                      <div key={i}>{item.quantity}</div>
                    ))}
                  </td>
                  <td className="p-3 border font-semibold">
                    ₹{calculateTotal(order.items)}
                  </td>
                  <td className="p-3 border">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handlePay(order)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow"
                    >
                      Pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {selectedOrder && (
        <InvoiceModal
          show={showInvoiceModal}
          onClose={() => setShowInvoiceModal(false)}
          cart={Object.fromEntries(
            selectedOrder.items.map((item) => [item.name, item.quantity])
          )}
          getPrice={getPrice}
          handleUpdateStatus={() =>
            handleUpdateStatus("paid", selectedOrder.tableId)
          }
          tableId={selectedOrder.tableId}
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
          cgstRate={2.5}
          sgstRate={2.5}
        />
      )}
    </div>
  );
};

export default ButtonDashboard;
