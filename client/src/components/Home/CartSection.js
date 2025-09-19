// // components/Home/CartSection.js
// import React from "react";

// const CartSection = ({
//   cart,
//   setCart,
//   setInvoiceNumber,
//   status,
//   handleQuantityChange,
//   handleUpdateStatus,
//   getPrice,
//   tableId,
//   setShowInvoiceModal,
// }) => {
//   const total = Object.keys(cart).reduce(
//     (total, item) => total + getPrice(item) * cart[item],
//     0
//   );

//   return (
//     <div className="md:w-2/5 w-full p-4 bg-white border-t md:border-l border-gray-300 h-full overflow-y-auto">
//       <h2 className="text-lg font-semibold mb-4">ITEMS</h2>

//       <div className="w-full overflow-auto">
//         <table className="w-full table-fixed text-sm text-left text-gray-600 border">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-200 border">
//             <tr>
//               <th className="px-2 py-2 w-2/5">Item</th>
//               <th className="px-2 py-2 w-1/5 text-center">Qty</th>
//               <th className="px-2 py-2 w-2/5 text-right">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(cart).length === 0 ? (
//               <tr>
//                 <td colSpan="3" className="px-4 py-3 text-center text-gray-400">
//                   No items added
//                 </td>
//               </tr>
//             ) : (
//               Object.keys(cart).map((item, idx) => (
//                 <tr key={idx} className="border-b">
//                   <td className="px-2 py-2 break-all text-blue-700">{item}</td>
//                   <td className="px-2 py-2 text-center">
//                     <div className="flex justify-center items-center gap-1">
//                       <button
//                         onClick={() => handleQuantityChange(item, -1)}
//                         className="px-2 py-1 bg-red-600 text-white font-bold rounded text-xs"
//                       >
//                         –
//                       </button>
//                       <span className="px-2 font-medium">{cart[item]}</span>
//                       <button
//                         onClick={() => handleQuantityChange(item, 1)}
//                         className="px-2 py-1 bg-green-600 text-white font-bold rounded text-xs"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </td>
//                   <td className="px-2 py-2 text-right flex items-center justify-end gap-2">
//                     ₹{getPrice(item) * cart[item]}.00
//                     <button
//                       onClick={() => {
//                         const { [item]: _, ...rest } = cart;
//                         setCart(rest);
//                         localStorage.setItem(
//                           `cart-${tableId}`,
//                           JSON.stringify(rest)
//                         );
//                       }}
//                     >
//                       {/* Trash icon */}
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="text-right mt-4 font-semibold text-lg">
//         Total: ₹{total}.00
//       </div>

//       <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
//         <button
//           onClick={() => {
//             if (Object.keys(cart).length > 0) {
//               handleUpdateStatus("running");
//             }
//           }}
//           className={`${
//             Object.keys(cart).length > 0
//               ? "bg-blue-600 hover:bg-blue-700"
//               : "bg-gray-400 cursor-not-allowed"
//           } text-white px-4 py-2 rounded shadow text-sm`}
//           disabled={Object.keys(cart).length === 0}
//         >
//           Create Order
//         </button>

//         <button
//           onClick={() => {
//             const randInvoice =
//               "INV-" + Math.floor(100000 + Math.random() * 900000);
//             setInvoiceNumber(randInvoice);
//             setShowInvoiceModal(true);
//           }}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow text-sm"
//         >
//           Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartSection;

const CartSection = ({
  cart,
  setCart,
  setInvoiceNumber,
  status,
  handleQuantityChange,
  handleUpdateStatus,
  getPrice,
  tableId,
  setShowInvoiceModal,
}) => {
  const total = Object.keys(cart).reduce(
    (total, item) => total + getPrice(item) * cart[item],
    0
  );

  return (
    <div className="md:w-2/5 w-full p-4 bg-white border-t md:border-l border-gray-300 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">ITEMS</h2>
      <div className="w-full overflow-auto">
        <table className="w-full table-fixed text-sm text-left text-gray-600 border">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 border">
            <tr>
              <th className="px-2 py-2 w-2/5">Item</th>
              <th className="px-2 py-2 w-1/5 text-center">Qty</th>
              <th className="px-2 py-2 w-2/5 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).length === 0 ? (
              <tr>
                <td colSpan="3" className="px-4 py-3 text-center text-gray-400">
                  No items added
                </td>
              </tr>
            ) : (
              Object.keys(cart).map((item, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-2 py-2 break-all text-blue-700">{item}</td>
                  <td className="px-2 py-2 text-center">
                    <div className="flex justify-center items-center gap-1">
                      <button
                        onClick={() => handleQuantityChange(item, -1)}
                        className="px-2 py-1 bg-red-600 text-white font-bold rounded text-xs"
                      >
                        –
                      </button>
                      <span className="px-2 font-medium">{cart[item]}</span>
                      <button
                        onClick={() => handleQuantityChange(item, 1)}
                        className="px-2 py-1 bg-green-600 text-white font-bold rounded text-xs"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-2 py-2 text-right flex items-center justify-end gap-2">
                    ₹{getPrice(item) * cart[item]}.00
                    <button
                      onClick={() => {
                        const { [item]: _, ...rest } = cart;
                        setCart(rest);
                        localStorage.setItem(
                          `cart-${tableId}`,
                          JSON.stringify(rest)
                        );
                      }}
                      className="text-red-600 hover:text-red-800 text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="text-right mt-4 font-semibold text-lg">
        Total: ₹{total}.00
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
        <button
          onClick={() => {
            if (Object.keys(cart).length > 0) {
              handleUpdateStatus("running");
            }
          }}
          className={`${
            Object.keys(cart).length > 0
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          } text-white px-4 py-2 rounded shadow text-sm`}
          disabled={Object.keys(cart).length === 0}
        >
          Create Order
        </button>
        <button
          onClick={() => {
            const randInvoice =
              "INV-" + Math.floor(100000 + Math.random() * 900000);
            setInvoiceNumber(randInvoice);
            setShowInvoiceModal(true);
          }}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded shadow text-sm"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default CartSection;
