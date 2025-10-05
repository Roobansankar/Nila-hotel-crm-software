//correct

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserAllKot = ({ setAuth }) => {
//   const navigate = useNavigate();
//   const [kots, setKOTs] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginType");
//     setAuth(false);
//     navigate("/login", { replace: true });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h2 className="text-xl font-bold text-gray-800">👨‍🍳 User KOT Page</h2>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </div>

//       {/* KOT Details */}
//       <div className="p-4">
//         {kots.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10">No KOTs available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//             {kots
//               .slice()
//               .reverse()
//               .map((kot, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-blue-500 space-y-3"
//                 >
//                   <div className="text-sm text-gray-500">
//                     KOT No: #{kot.kotNumber}
//                   </div>
//                   <div className="text-lg font-semibold">
//                     🪑 Table: {kot.tableId}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     ⏱ {new Date(kot.createdAt).toLocaleString()}
//                   </div>
//                   <div>
//                     <p className="font-semibold">🍽️ Items:</p>
//                     <ul className="list-disc list-inside text-sm text-gray-700">
//                       {kot.items.map((item, i) => (
//                         <li key={i}>
//                           {item.name} × {item.quantity}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserAllKot;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserAllKot = ({ setAuth }) => {
//   const navigate = useNavigate();
//   const [kots, setKOTs] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginType");
//     setAuth(false);
//     navigate("/login", { replace: true });
//   };

//   const handleOrderPlaced = (kotNumber, tableId) => {
//     // Mark the current kot as placed
//     const updatedKOTs = kots.map((kot) =>
//       kot.kotNumber === kotNumber ? { ...kot, placed: true } : kot
//     );
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));

//     // Update the table status in localStorage
//     localStorage.setItem(`status-${tableId}`, "placed");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
//         <h2 className="text-xl font-bold text-gray-800">👨‍🍳 User KOT Page</h2>
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//         >
//           Logout
//         </button>
//       </div>

//       {/* KOT Details */}
//       <div className="p-4">
//         {kots.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10">No KOTs available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//             {kots
//               .slice()
//               .reverse()
//               .map((kot, idx) => (
//                 <div
//                   key={idx}
//                   className={`rounded-lg p-4 border-l-4 space-y-3 shadow-lg ${
//                     kot.placed
//                       ? "bg-green-500 border-green-500"
//                       : "bg-white border-blue-500"
//                   }`}
//                 >
//                   <div className="text-sm text-gray-500">
//                     KOT No: #{kot.kotNumber}
//                   </div>
//                   <div className="text-lg font-semibold">
//                     🪑 Table: {kot.tableId}
//                   </div>
//                   <div className="text-sm text-gray-600">
//                     ⏱ {new Date(kot.createdAt).toLocaleString()}
//                   </div>
//                   <div>
//                     <p className="font-semibold">🍽️ Items:</p>
//                     <ul className="list-disc list-inside text-sm text-gray-700">
//                       {kot.items.map((item, i) => (
//                         <li key={i}>
//                           {item.name} × {item.quantity}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Order Placed Button */}
//                   {!kot.placed && (
//                     <button
//                       onClick={() =>
//                         handleOrderPlaced(kot.kotNumber, kot.tableId)
//                       }
//                       className="mt-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm"
//                     >
//                       Order Placed
//                     </button>
//                   )}
//                 </div>
//               ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserAllKot;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserAllKot = ({ setAuth }) => {
//   const navigate = useNavigate();
//   const [kots, setKOTs] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginType");
//     setAuth(false);
//     navigate("/login", { replace: true });
//   };

//   const handleOrderPlaced = (kotNumber, tableId) => {
//     const updatedKOTs = kots.map((kot) =>
//       kot.kotNumber === kotNumber ? { ...kot, placed: true } : kot
//     );
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//     localStorage.setItem(`status-${tableId}`, "placed");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
//       {/* Navbar */}
//       <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
//         <h2 className="text-2xl font-bold text-orange-800">
//           🍳 Kitchen Orders Dashboard
//         </h2>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>

//       {/* KOT Cards */}
//       <div className="p-6">
//         {kots.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10">No KOTs available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//             {kots
//               .slice()
//               .reverse()
//               .map((kot, idx) => {
//                 const isPlaced = kot.placed;

//                 return (
//                   <div
//                     key={idx}
//                     className={`rounded-xl border-4 shadow-lg p-4 transition-all duration-300 ease-in-out transform hover:scale-105 ${
//                       isPlaced
//                         ? "bg-green-500 border-green-400 text-green-900"
//                         : "bg-white border-yellow-400 text-gray-800"
//                     }`}
//                   >
//                     {/* Header */}
//                     <div className="flex justify-between items-center mb-2">
//                       <div className="text-lg font-bold">
//                         🪑 Table: <span className="text-xl">{kot.tableId}</span>
//                       </div>
//                       <div className="text-sm font-semibold">
//                         KOT #{kot.kotNumber}
//                       </div>
//                     </div>

//                     {/* Time */}
//                     <div className="text-xs text-gray-600 mb-3 italic">
//                       ⏱ {new Date(kot.createdAt).toLocaleTimeString()} —{" "}
//                       {new Date(kot.createdAt).toLocaleDateString()}
//                     </div>

//                     {/* Items */}
//                     <div className="bg-orange-100 border border-orange-300 rounded-lg p-2 mb-3">
//                       <p className="font-semibold text-orange-800 mb-1">
//                         🍽️ Items
//                       </p>
//                       <ul className="list-disc list-inside space-y-1 text-sm">
//                         {kot.items.map((item, i) => (
//                           <li key={i}>
//                             <span className="font-medium">{item.name}</span> ×{" "}
//                             <span className="text-gray-700">
//                               {item.quantity}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Order Placed Button */}
//                     {!isPlaced ? (
//                       <button
//                         onClick={() =>
//                           handleOrderPlaced(kot.kotNumber, kot.tableId)
//                         }
//                         className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
//                       >
//                         ✅ Order Placed
//                       </button>
//                     ) : (
//                       <div className="text-center font-semibold text-green-700">
//                         ✅ Placed
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserAllKot;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const UserAllKot = ({ setAuth }) => {
//   const navigate = useNavigate();
//   const [kots, setKOTs] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);
//     console.log(storedKOTs);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginType");
//     setAuth(false);
//     navigate("/login", { replace: true });
//   };

//   const handleOrderPlaced = (kotNumber, tableId) => {
//     const updatedKOTs = kots.map((kot) =>
//       kot.kotNumber === kotNumber ? { ...kot, placed: true } : kot
//     );
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//     localStorage.setItem(`status-${tableId}`, "placed");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100">
//       {/* Navbar */}
//       <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
//         <h2 className="text-2xl font-bold text-green-800">
//           🍽️ Kitchen Order Tickets
//         </h2>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>

//       {/* KOT Cards */}
//       <div className="p-6">
//         {kots.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10">No KOTs available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//             {kots
//               .slice()
//               .reverse()
//               .map((kot, idx) => {
//                 const isPlaced = kot.placed;

//                 return (
//                   <div
//                     key={idx}
//                     className={`rounded-xl p-5 shadow-xl transition-transform transform hover:scale-[1.02] duration-300 border-4 ${
//                       isPlaced
//                         ? "bg-green-500 border-green-600 text-white"
//                         : "bg-white border-yellow-300 text-gray-800"
//                     }`}
//                   >
//                     {/* Table ID + KOT */}
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="text-xl font-bold">
//                         🪑 Table <span className="text-2xl">{kot.tableId}</span>
//                       </h3>
//                       <span className="text-sm font-semibold">
//                         #KOT {kot.kotNumber}
//                       </span>
//                     </div>

//                     {/* Time */}
//                     <p
//                       className={`text-xs italic mb-4 ${
//                         isPlaced ? "text-green-100" : "text-gray-500"
//                       }`}
//                     >
//                       ⏱ {new Date(kot.createdAt).toLocaleString()}
//                     </p>

//                     {/* Items */}
//                     {/* <div
//                       className={`rounded-lg px-3 py-2 mb-4 ${
//                         isPlaced
//                           ? "bg-green-600 text-green-100"
//                           : "bg-yellow-50 text-gray-800"
//                       }`}
//                     >
//                       <p className="font-semibold mb-1">🍲 Ordered Items:</p>
//                       <ul className="list-disc list-inside space-y-1 text-sm">
//                         {kot.items.map((item, i) => (
//                           <li key={i}>
//                             {item.name} ×{" "}
//                             <span className="font-semibold">
//                               {item.quantity}
//                             </span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div> */}
//                     <div
//                       className={`rounded-lg px-3 py-2 mb-4 ${
//                         isPlaced
//                           ? "bg-green-600 text-green-100"
//                           : "bg-yellow-50 text-gray-800"
//                       }`}
//                     >
//                       <p className="font-semibold mb-2 text-center">
//                         🍲 Ordered Items:
//                       </p>

//                       <table className="w-full text-sm border border-gray-300">
//                         <thead>
//                           <tr
//                             className={`border border-gray-300 p-2 font-semibold ${
//                               isPlaced ? "bg-green-500 text-white" : ""
//                             }`}
//                           >
//                             <th className="border border-gray-300 p-2 text-left">
//                               Item
//                             </th>
//                             <th className="border border-gray-300 p-2 text-left">
//                               Quantity
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {kot.items.map((item, i) => (
//                             <tr key={i}>
//                               <td className="border border-gray-300 p-2">
//                                 {item.name}
//                               </td>
//                               <td className="border border-gray-300 p-2 font-semibold">
//                                 {item.quantity}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>

//                     {/* Button */}
//                     {!isPlaced ? (
//                       <button
//                         onClick={() =>
//                           handleOrderPlaced(kot.kotNumber, kot.tableId)
//                         }
//                         className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md"
//                       >
//                         ✅ Mark as Placed
//                       </button>
//                     ) : (
//                       <div className="text-center text-white font-bold tracking-wider">
//                         ✅ ORDER PLACED
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserAllKot;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const KOT_API = "https://64b7959321b9aa6eb0788288.mockapi.io/sasi";
// const STATUS_API = "https://63ae7fb43e46516916732319.mockapi.io/project";

// const UserAllKot = ({ setAuth }) => {
//   const navigate = useNavigate();
//   const [kots, setKOTs] = useState([]);

//   useEffect(() => {
//     fetchKOTs();
//   }, []);

//   const fetchKOTs = async () => {
//     try {
//       const response = await fetch(KOT_API);
//       const data = await response.json();
//       console.log(data);
//       const validKots = data.filter(
//         (k) => k.kotNumber && k.items && k.items.length
//       );
//       setKOTs(validKots);
//     } catch (error) {
//       console.error("Error fetching KOTs:", error);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginType");
//     setAuth(false);
//     navigate("/login", { replace: true });
//   };

//   const handleOrderPlaced = async (kotId, tableId) => {
//     try {
//       // 1. Update KOT as placed
//       await fetch(`${KOT_API}/${kotId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ placed: true }),
//       });

//       // 2. Update table status
//       const statusRes = await fetch(STATUS_API);
//       const tables = await statusRes.json();
//       const target = tables.find((t) => t.tableId === tableId);

//       if (target) {
//         await fetch(`${STATUS_API}/${target.id}`, {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ status: "placed" }),
//         });
//       }

//       // 3. Refresh KOTs
//       fetchKOTs();
//     } catch (error) {
//       console.error("Failed to update order status:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100">
//       {/* Navbar */}
//       <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
//         <h2 className="text-2xl font-bold text-green-800">
//           🍽️ Kitchen Order Tickets
//         </h2>
//         <button
//           onClick={handleLogout}
//           className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
//         >
//           Logout
//         </button>
//       </div>

//       {/* KOT Cards */}
//       <div className="p-6">
//         {kots.length === 0 ? (
//           <p className="text-center text-gray-500 mt-10">No KOTs available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
//             {kots
//               .slice()
//               .reverse()
//               .map((kot, idx) => {
//                 const isPlaced = kot.placed;

//                 return (
//                   <div
//                     key={idx}
//                     className={`rounded-xl p-5 shadow-xl transition-transform transform hover:scale-[1.02] duration-300 border-4 ${
//                       isPlaced
//                         ? "bg-green-500 border-green-600 text-white"
//                         : "bg-white border-yellow-300 text-gray-800"
//                     }`}
//                   >
//                     <div className="flex justify-between items-center mb-2">
//                       <h3 className="text-xl font-bold">
//                         🪑 Table <span className="text-2xl">{kot.tableId}</span>
//                       </h3>
//                       <span className="text-sm font-semibold">
//                         #KOT {kot.kotNumber}
//                       </span>
//                     </div>

//                     <p
//                       className={`text-xs italic mb-4 ${
//                         isPlaced ? "text-green-100" : "text-gray-500"
//                       }`}
//                     >
//                       ⏱ {new Date(kot.createdAt).toLocaleString()}
//                     </p>

//                     <div
//                       className={`rounded-lg px-3 py-2 mb-4 ${
//                         isPlaced
//                           ? "bg-green-600 text-green-100"
//                           : "bg-yellow-50 text-gray-800"
//                       }`}
//                     >
//                       <p className="font-semibold mb-2 text-center">
//                         🍲 Ordered Items:
//                       </p>
//                       <table className="w-full text-sm border border-gray-300">
//                         <thead>
//                           <tr
//                             className={`border p-2 font-semibold ${
//                               isPlaced ? "bg-green-500 text-white" : ""
//                             }`}
//                           >
//                             <th className="border p-2 text-left">Item</th>
//                             <th className="border p-2 text-left">Quantity</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {kot.items.map((item, i) => (
//                             <tr key={i}>
//                               <td className="border p-2">{item.name}</td>
//                               <td className="border p-2 font-semibold">
//                                 {item.quantity}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>

//                     {!isPlaced ? (
//                       <button
//                         onClick={() => handleOrderPlaced(kot.id, kot.tableId)}
//                         className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md"
//                       >
//                         ✅ Mark as Placed
//                       </button>
//                     ) : (
//                       <div className="text-center text-white font-bold tracking-wider">
//                         ✅ ORDER PLACED
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserAllKot;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const KOT_API = "https://64b7959321b9aa6eb0788288.mockapi.io/sasi";
const STATUS_API = "https://63ae7fb43e46516916732319.mockapi.io/project";

const UserAllKot = ({ setAuth }) => {
  const navigate = useNavigate();
  const [kots, setKOTs] = useState([]);

  useEffect(() => {
    fetchKOTs();
  }, []);

  const fetchKOTs = async () => {
    try {
      const response = await fetch(KOT_API);
      const data = await response.json();
      const validKots = data.filter(
        (k) => k.kotNumber && k.items && k.items.length
      );
      setKOTs(validKots);
    } catch (error) {
      console.error("Error fetching KOTs:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginType");
    setAuth(false);
    navigate("/login", { replace: true });
  };

  const handleOrderPlaced = async (kotId, tableId) => {
    try {
      await fetch(`${KOT_API}/${kotId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ placed: true }),
      });

      const statusRes = await fetch(STATUS_API);
      const tables = await statusRes.json();
      const target = tables.find((t) => t.tableId === tableId);

      if (target) {
        await fetch(`${STATUS_API}/${target.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "placed" }),
        });
      }

      fetchKOTs();
    } catch (error) {
      console.error("Failed to update order status:", error);
    }
  };

  // ✅ Delete KOT
  const handleDeleteKOT = async (kotId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this KOT?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`${KOT_API}/${kotId}`, {
        method: "DELETE",
      });

      setKOTs((prev) => prev.filter((k) => k.id !== kotId));
    } catch (error) {
      console.error("Failed to delete KOT:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100">
      {/* Navbar */}
      <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <h2 className="text-2xl font-bold text-green-800">
          🍽️ Kitchen Order Tickets
        </h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* KOT Cards */}
      <div className="p-6">
        {kots.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No KOTs available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {kots
              .slice()
              .reverse()
              .map((kot, idx) => {
                const isPlaced = kot.placed;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl p-5 shadow-xl transition-transform transform hover:scale-[1.02] duration-300 border-4 ${
                      isPlaced
                        ? "bg-green-500 border-green-600 text-white"
                        : "bg-white border-yellow-300 text-gray-800"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold">
                        🪑 Table <span className="text-2xl">{kot.tableId}</span>
                      </h3>
                      <span className="text-sm font-semibold">
                        #KOT {kot.kotNumber}
                      </span>
                    </div>

                    <p
                      className={`text-xs italic mb-4 ${
                        isPlaced ? "text-green-100" : "text-gray-500"
                      }`}
                    >
                      ⏱ {new Date(kot.createdAt).toLocaleString()}
                    </p>

                    <div
                      className={`rounded-lg px-3 py-2 mb-4 ${
                        isPlaced
                          ? "bg-green-600 text-green-100"
                          : "bg-yellow-50 text-gray-800"
                      }`}
                    >
                      <p className="font-semibold mb-2 text-center">
                        🍲 Ordered Items:
                      </p>
                      <table className="w-full text-sm border border-gray-300">
                        <thead>
                          <tr
                            className={`border p-2 font-semibold ${
                              isPlaced ? "bg-green-500 text-white" : ""
                            }`}
                          >
                            <th className="border p-2 text-left">Item</th>
                            <th className="border p-2 text-left">Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          {kot.items.map((item, i) => (
                            <tr key={i}>
                              <td className="border p-2">{item.name}</td>
                              <td className="border p-2 font-semibold">
                                {item.quantity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {!isPlaced ? (
                        <button
                          onClick={() => handleOrderPlaced(kot.id, kot.tableId)}
                          className="flex-1 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-md"
                        >
                          ✅ Mark as Placed
                        </button>
                      ) : (
                        <div className="flex-1 text-center text-white font-bold tracking-wider py-2 bg-green-600 rounded-md">
                          ✅ ORDER PLACED
                        </div>
                      )}

                      {/* 🗑️ Delete Button */}
                      <button
                        onClick={() => handleDeleteKOT(kot.id)}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-3 rounded-md"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAllKot;
