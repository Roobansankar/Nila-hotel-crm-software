// import React, { useEffect, useState } from "react";

// const AllKOTsDetails = () => {
//   const [kots, setKOTs] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedItems, setEditedItems] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);
//   }, []);

//   const handleDelete = (index) => {
//     const updatedKOTs = [...kots];
//     updatedKOTs.splice(index, 1);
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//   };

//   const handleEditClick = (index) => {
//     setEditIndex(index);
//     setEditedItems([...kots[index].items]);
//   };

//   const handleQtyChange = (i, value) => {
//     const updatedItems = [...editedItems];
//     updatedItems[i].quantity = parseInt(value) || 0;
//     setEditedItems(updatedItems);
//   };

//   const handleSaveEdit = () => {
//     const updatedKOTs = [...kots];
//     updatedKOTs[editIndex].items = editedItems;
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//     setEditIndex(null);
//   };

//   return (
//     <div className="p-4" style={{ backgroundColor: "white" }}>
//       <h2 className="text-xl font-bold mb-4">All KOTs Details</h2>

//       {kots.length === 0 ? (
//         <p className="text-gray-500">No KOTs available.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full border border-collapse text-sm">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="border p-2">KOT No</th>
//                 <th className="border p-2">Table ID</th>
//                 <th className="border p-2">Items</th>
//                 <th className="border p-2">Created At</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {kots.map((kot, idx) => (
//                 <tr key={idx} className="border-b">
//                   <td className="border p-2 text-center">{kot.kotNumber}</td>
//                   <td className="border p-2 text-center">{kot.tableId}</td>
//                   <td className="border p-2 text-center">
//                     {kot.items.map((item, i) => (
//                       <div key={i}>
//                         {item.name} × {item.quantity}
//                       </div>
//                     ))}
//                   </td>
//                   <td className="border p-2 text-xs text-gray-500 text-center">
//                     {new Date(kot.createdAt).toLocaleString()}
//                   </td>
//                   <td className="border p-2 text-center space-x-2">
//                     <button
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                       onClick={() => handleEditClick(idx)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
//                       onClick={() => handleDelete(idx)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">Edit KOT Items</h3>
//             <div className="space-y-3 max-h-60 overflow-y-auto">
//               {editedItems.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between gap-2"
//                 >
//                   <span className="w-1/2">{item.name}</span>
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => handleQtyChange(i, e.target.value)}
//                     className="border px-2 py-1 w-1/2 text-sm rounded"
//                     min="1"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6 flex justify-end gap-2">
//               <button
//                 onClick={() => setEditIndex(null)}
//                 className="px-4 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveEdit}
//                 className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
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

// export default AllKOTsDetails;

//user
// import React, { useEffect, useState } from "react";

// const AllKOTsDetails = () => {
//   const [kots, setKOTs] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedItems, setEditedItems] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);

//   }, []);

//   const handleDelete = (index) => {
//     const updatedKOTs = [...kots];
//     updatedKOTs.splice(index, 1);
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//   };

//   const handleEditClick = (index) => {
//     setEditIndex(index);
//     setEditedItems([...kots[index].items]);
//   };

//   const handleQtyChange = (i, value) => {
//     const updatedItems = [...editedItems];
//     updatedItems[i].quantity = parseInt(value) || 0;
//     setEditedItems(updatedItems);
//   };

//   const handleSaveEdit = () => {
//     const updatedKOTs = [...kots];
//     updatedKOTs[editIndex].items = editedItems;
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//     setEditIndex(null);
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4 text-center">🧾 Kitchen Orders</h2>

//       {kots.length === 0 ? (
//         <p className="text-gray-500 text-center">No KOTs available.</p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {/* {kots.map((kot, idx) => ( */}
//           {kots
//             .slice()
//             .reverse()
//             .map((kot, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white shadow-lg rounded-lg p-4 space-y-3 border-l-4 border-blue-500"
//               >
//                 <div className="text-sm text-gray-500">
//                   KOT No: #{kot.kotNumber}
//                 </div>
//                 <div className="text-lg font-semibold">
//                   🪑 Table: {kot.tableId}
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   ⏱ {new Date(kot.createdAt).toLocaleString()}
//                 </div>

//                 <div className="mt-2">
//                   <p className="font-semibold">🍽️ Items:</p>
//                   <ul className="list-disc list-inside text-sm text-gray-700">
//                     {kot.items.map((item, i) => (
//                       <li key={i}>
//                         {item.name} × {item.quantity}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex justify-end gap-2 mt-3">
//                   <button
//                     onClick={() => handleEditClick(idx)}
//                     className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(idx)}
//                     className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">✏️ Edit Items</h3>
//             <div className="space-y-3 max-h-60 overflow-y-auto">
//               {editedItems.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between gap-2"
//                 >
//                   <span className="w-1/2">{item.name}</span>
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => handleQtyChange(i, e.target.value)}
//                     className="border px-2 py-1 w-1/2 text-sm rounded"
//                     min="1"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6 flex justify-end gap-2">
//               <button
//                 onClick={() => setEditIndex(null)}
//                 className="px-4 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveEdit}
//                 className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
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

// export default AllKOTsDetails;

// import React, { useEffect, useState } from "react";

// const AllKOTsDetails = () => {
//   const [kots, setKOTs] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);
//   const [editedItems, setEditedItems] = useState([]);

//   useEffect(() => {
//     const storedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//     setKOTs(storedKOTs);
//     console.log(storedKOTs);

//     const interval = setInterval(() => {
//       const refreshedKOTs = JSON.parse(localStorage.getItem("kots") || "[]");
//       setKOTs(refreshedKOTs);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleDelete = (index) => {
//     const updatedKOTs = [...kots];
//     updatedKOTs.splice(index, 1);
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//   };

//   const handleEditClick = (index) => {
//     setEditIndex(index);
//     setEditedItems([...kots[index].items]);
//   };

//   const handleQtyChange = (i, value) => {
//     const updatedItems = [...editedItems];
//     updatedItems[i].quantity = parseInt(value) || 0;
//     setEditedItems(updatedItems);
//   };

//   const handleSaveEdit = () => {
//     const updatedKOTs = [...kots];
//     updatedKOTs[editIndex].items = editedItems;
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//     setEditIndex(null);
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4 text-center">🧾 Kitchen Orders</h2>

//       {kots.length === 0 ? (
//         <p className="text-gray-500 text-center">No KOTs available.</p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {kots
//             .slice()
//             .reverse()
//             .map((kot, idx) => {
//               const status = localStorage.getItem(`status-${kot.tableId}`);
//               const isPlaced = status === "placed";
//               const bgColor = isPlaced
//                 ? "bg-green-500 border-green-500"
//                 : "bg-white border-blue-500";

//               return (
//                 <div
//                   key={idx}
//                   className={`shadow-lg rounded-lg p-4 space-y-3 border-l-4 ${bgColor}`}
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

//                   <div className="mt-2">
//                     <p className="font-semibold">🍽️ Items:</p>
//                     <ul className="list-disc list-inside text-sm text-gray-700">
//                       {kot.items.map((item, i) => (
//                         <li key={i}>
//                           {item.name} × {item.quantity}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="flex justify-end gap-2 mt-3">
//                     <button
//                       onClick={() => handleEditClick(idx)}
//                       className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(idx)}
//                       className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editIndex !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">✏️ Edit Items</h3>
//             <div className="space-y-3 max-h-60 overflow-y-auto">
//               {editedItems.map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center justify-between gap-2"
//                 >
//                   <span className="w-1/2">{item.name}</span>
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => handleQtyChange(i, e.target.value)}
//                     className="border px-2 py-1 w-1/2 text-sm rounded"
//                     min="1"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6 flex justify-end gap-2">
//               <button
//                 onClick={() => setEditIndex(null)}
//                 className="px-4 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveEdit}
//                 className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
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

// export default AllKOTsDetails;

// import React, { useEffect, useState } from "react";

// const AllKOTsDetails = () => {
//   const [kots, setKOTs] = useState([]);
//   const [editKOTNumber, setEditKOTNumber] = useState(null);
//   const [editedItems, setEditedItems] = useState([]);

//   useEffect(() => {
//     const loadKOTs = () => {
//       const stored = JSON.parse(localStorage.getItem("kots") || "[]");
//       setKOTs(stored);
//     };

//     loadKOTs();

//     const interval = setInterval(loadKOTs, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleDelete = (kotNumber) => {
//     const updated = kots.filter((k) => k.kotNumber !== kotNumber);
//     setKOTs(updated);
//     localStorage.setItem("kots", JSON.stringify(updated));
//   };

//   const handleEditClick = (kotNumber) => {
//     const kotToEdit = kots.find((k) => k.kotNumber === kotNumber);
//     if (kotToEdit) {
//       setEditKOTNumber(kotNumber);
//       setEditedItems(kotToEdit.items.map((item) => ({ ...item })));
//     }
//   };

//   const handleItemChange = (index, field, value) => {
//     const updated = [...editedItems];
//     updated[index][field] = field === "quantity" ? parseInt(value) || 0 : value;
//     setEditedItems(updated);
//   };

//   const handleSaveEdit = () => {
//     const updatedKOTs = kots.map((k) =>
//       k.kotNumber === editKOTNumber ? { ...k, items: editedItems } : k
//     );
//     setKOTs(updatedKOTs);
//     localStorage.setItem("kots", JSON.stringify(updatedKOTs));
//     setEditKOTNumber(null);
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4 text-center">🧾 Kitchen Orders</h2>

//       {kots.length === 0 ? (
//         <p className="text-gray-500 text-center">No KOTs available.</p>
//       ) : (
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[...kots].reverse().map((kot) => {
//             // const status = localStorage.getItem(`status-${kot.tableId}`);
//             // const isPlaced = status === "placed";
//             const isPlaced = kot.placed === true;

//             const bgColor = isPlaced
//               ? "bg-green-500 border-green-500"
//               : "bg-white border-blue-500";

//             return (
//               <div
//                 key={kot.kotNumber}
//                 className={`shadow-lg rounded-lg p-4 space-y-3 border-l-4 ${bgColor}`}
//               >
//                 <div className="text-sm text-gray-500">
//                   KOT No: #{kot.kotNumber}
//                 </div>
//                 <div className="text-lg font-semibold">
//                   🪑 Table: {kot.tableId}
//                 </div>
//                 <div className="text-sm text-gray-600">
//                   ⏱ {new Date(kot.createdAt).toLocaleString()}
//                 </div>

//                 <div className="mt-2">
//                   <p className="font-semibold">🍽️ Items:</p>
//                   <ul className="list-disc list-inside text-sm text-gray-700">
//                     {kot.items.map((item, i) => (
//                       <li key={i}>
//                         {item.name} × {item.quantity}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex justify-end gap-2 mt-3">
//                   <button
//                     onClick={() => handleEditClick(kot.kotNumber)}
//                     className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(kot.kotNumber)}
//                     className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {/* Edit Modal */}
//       {editKOTNumber !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//             <h3 className="text-lg font-bold mb-4">✏️ Edit Items</h3>
//             <div className="space-y-3 max-h-60 overflow-y-auto">
//               {editedItems.map((item, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <input
//                     type="text"
//                     value={item.name}
//                     onChange={(e) =>
//                       handleItemChange(idx, "name", e.target.value)
//                     }
//                     className="border p-1 w-1/2"
//                   />
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       handleItemChange(idx, "quantity", e.target.value)
//                     }
//                     className="border p-1 w-1/3"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6 flex justify-end gap-2">
//               <button
//                 onClick={() => setEditKOTNumber(null)}
//                 className="px-4 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSaveEdit}
//                 className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
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

// export default AllKOTsDetails;

import React, { useEffect, useState } from "react";

const API_URL = "https://64b7959321b9aa6eb0788288.mockapi.io/sasi";

const AllKOTsDetails = () => {
  const [kots, setKOTs] = useState([]);
  const [editKOTNumber, setEditKOTNumber] = useState(null);
  const [editedItems, setEditedItems] = useState([]);

  const fetchKOTs = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setKOTs(data);
    } catch (err) {
      console.error("Failed to fetch KOTs:", err);
    }
  };

  useEffect(() => {
    fetchKOTs();
  }, []);

  const handleDelete = async (kotId) => {
    try {
      await fetch(`${API_URL}/${kotId}`, {
        method: "DELETE",
      });
      fetchKOTs(); // refresh after delete
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleEditClick = (kotNumber) => {
    const kotToEdit = kots.find((k) => k.kotNumber === kotNumber);
    if (kotToEdit) {
      setEditKOTNumber(kotNumber);
      setEditedItems(kotToEdit.items.map((item) => ({ ...item })));
    }
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...editedItems];
    updated[index][field] = field === "quantity" ? parseInt(value) || 0 : value;
    setEditedItems(updated);
  };

  const handleSaveEdit = async () => {
    const kotToUpdate = kots.find((k) => k.kotNumber === editKOTNumber);
    if (!kotToUpdate) return;

    try {
      await fetch(`${API_URL}/${kotToUpdate.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...kotToUpdate, items: editedItems }),
      });
      setEditKOTNumber(null);
      fetchKOTs(); // refresh after update
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-center">🧾 Kitchen Orders</h2>

      {kots.length === 0 ? (
        <p className="text-gray-500 text-center">No KOTs available.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...kots].reverse().map((kot) => {
            const isPlaced = kot.placed === true;
            const bgColor = isPlaced
              ? "bg-green-500 border-green-500"
              : "bg-white border-blue-500";

            return (
              <div
                key={kot.kotNumber}
                className={`shadow-lg rounded-lg p-4 space-y-3 border-l-4 ${bgColor}`}
              >
                <div className="text-sm text-gray-500">
                  KOT No: #{kot.kotNumber}
                </div>
                <div className="text-lg font-semibold">
                  🪑 Table: {kot.tableId}
                </div>
                <div className="text-sm text-gray-600">
                  ⏱ {new Date(kot.createdAt).toLocaleString()}
                </div>

                <div className="mt-2">
                  <p className="font-semibold">🍽️ Items:</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {kot.items?.map((item, i) => (
                      <li key={i}>
                        {item.name} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end gap-2 mt-3">
                  <button
                    onClick={() => handleEditClick(kot.kotNumber)}
                    className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(kot.id)}
                    className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Edit Modal */}
      {editKOTNumber !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">✏️ Edit Items</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {editedItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      handleItemChange(idx, "name", e.target.value)
                    }
                    className="border p-1 w-1/2"
                  />
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(idx, "quantity", e.target.value)
                    }
                    className="border p-1 w-1/3"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setEditKOTNumber(null)}
                className="px-4 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
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

export default AllKOTsDetails;
