// import React, { useEffect, useState } from "react";

// const MenuPage = () => {
//   const [foodCategories, setFoodCategories] = useState(() => {
//     return JSON.parse(localStorage.getItem("foodCategories")) || [];
//   });

//   const [itemsByCategory, setItemsByCategory] = useState(() => {
//     return JSON.parse(localStorage.getItem("itemsByCategory")) || {};
//   });

//   const [priceMap, setPriceMap] = useState(() => {
//     return JSON.parse(localStorage.getItem("priceMap")) || {};
//   });

//   const [selectedCategory, setSelectedCategory] = useState(
//     foodCategories[0] || ""
//   );
//   const [newItemName, setNewItemName] = useState("");
//   const [newItemPrice, setNewItemPrice] = useState("");
//   const [newCategory, setNewCategory] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [editedItemName, setEditedItemName] = useState("");
//   const [editedItemPrice, setEditedItemPrice] = useState("");

//   useEffect(() => {
//     localStorage.setItem("foodCategories", JSON.stringify(foodCategories));
//     localStorage.setItem("itemsByCategory", JSON.stringify(itemsByCategory));
//     localStorage.setItem("priceMap", JSON.stringify(priceMap));
//   }, [foodCategories, itemsByCategory, priceMap]);

//   const handleAddCategory = () => {
//     if (!newCategory.trim()) return alert("Enter a category name");
//     if (foodCategories.includes(newCategory)) return alert("Category exists");
//     const updated = [...foodCategories, newCategory];
//     setFoodCategories(updated);
//     setItemsByCategory({ ...itemsByCategory, [newCategory]: [] });
//     setSelectedCategory(newCategory);
//     setNewCategory("");
//   };

//   const handleDeleteCategory = () => {
//     if (!window.confirm(`Delete category "${selectedCategory}"?`)) return;
//     const updatedCategories = foodCategories.filter(
//       (c) => c !== selectedCategory
//     );
//     const updatedItems = { ...itemsByCategory };
//     const updatedPrices = { ...priceMap };
//     (updatedItems[selectedCategory] || []).forEach(
//       (item) => delete updatedPrices[item]
//     );
//     delete updatedItems[selectedCategory];
//     setFoodCategories(updatedCategories);
//     setItemsByCategory(updatedItems);
//     setPriceMap(updatedPrices);
//     setSelectedCategory(updatedCategories[0] || "");
//   };

//   const handleAddItem = () => {
//     if (!newItemName.trim() || !newItemPrice)
//       return alert("Enter item name and price");
//     const currentItems = itemsByCategory[selectedCategory] || [];
//     if (currentItems.includes(newItemName)) return alert("Item already exists");
//     const updated = [...currentItems, newItemName];
//     setItemsByCategory({ ...itemsByCategory, [selectedCategory]: updated });
//     setPriceMap({ ...priceMap, [newItemName]: Number(newItemPrice) });
//     setNewItemName("");
//     setNewItemPrice("");
//   };

//   const handleDeleteItem = (item) => {
//     const filtered = itemsByCategory[selectedCategory].filter(
//       (i) => i !== item
//     );
//     const updatedPrices = { ...priceMap };
//     delete updatedPrices[item];
//     setItemsByCategory({ ...itemsByCategory, [selectedCategory]: filtered });
//     setPriceMap(updatedPrices);
//   };

//   const handleEditItem = (item, index) => {
//     setEditingIndex(index);
//     setEditedItemName(item);
//     setEditedItemPrice(priceMap[item]);
//   };

//   const handleSaveItem = (originalItem) => {
//     const updatedList = [...itemsByCategory[selectedCategory]];
//     updatedList[editingIndex] = editedItemName;
//     const updatedPrices = { ...priceMap };
//     delete updatedPrices[originalItem];
//     updatedPrices[editedItemName] = Number(editedItemPrice);
//     setItemsByCategory({ ...itemsByCategory, [selectedCategory]: updatedList });
//     setPriceMap(updatedPrices);
//     setEditingIndex(null);
//   };

//   return (
//     <div className="p-6 max-w-7xl mx-auto space-y-6">
//       <h1 className="text-3xl font-bold text-center">
//         🍽️ Restaurant Menu Management
//       </h1>

//       {/* Combined Flex Row */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Category Management */}
//         <div className="bg-white p-4 rounded shadow w-full md:w-1/2 space-y-4">
//           <h2 className="text-xl font-semibold">Category Management</h2>
//           <div className="flex flex-wrap gap-2">
//             <input
//               type="text"
//               placeholder="New Category"
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               className="border p-2 flex-1 rounded"
//             />
//             <button
//               onClick={handleAddCategory}
//               className="bg-blue-600 text-white px-4 py-2 rounded"
//             >
//               Add Category
//             </button>
//           </div>

//           {foodCategories.length > 0 && (
//             <div className="flex flex-wrap gap-2 items-center">
//               <select
//                 value={selectedCategory}
//                 onChange={(e) => setSelectedCategory(e.target.value)}
//                 className="border p-2 rounded flex-1"
//               >
//                 {foodCategories.map((cat) => (
//                   <option key={cat}>{cat}</option>
//                 ))}
//               </select>
//               <button
//                 onClick={handleDeleteCategory}
//                 className="bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Delete Category
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Item Management */}
//         {selectedCategory && (
//           <div className="bg-white p-4 rounded shadow w-full md:w-1/2 space-y-4">
//             <h2 className="text-xl font-semibold">
//               Manage Items in{" "}
//               <span className="text-blue-700">{selectedCategory}</span>
//             </h2>
//             <div className="flex flex-wrap gap-2">
//               <input
//                 type="text"
//                 placeholder="Item Name"
//                 value={newItemName}
//                 onChange={(e) => setNewItemName(e.target.value)}
//                 className="border p-2 rounded flex-1"
//               />
//               <input
//                 type="number"
//                 placeholder="Price"
//                 value={newItemPrice}
//                 onChange={(e) => setNewItemPrice(e.target.value)}
//                 className="border p-2 rounded w-32"
//               />
//               <button
//                 onClick={handleAddItem}
//                 className="bg-green-600 text-white px-4 py-2 rounded"
//               >
//                 Add Item
//               </button>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm border">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="border p-2 text-left">Item</th>
//                     <th className="border p-2 text-left">Price</th>
//                     <th className="border p-2 text-left">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {(itemsByCategory[selectedCategory] || []).map(
//                     (item, index) => (
//                       <tr key={item} className="border-t">
//                         <td className="p-2">
//                           {editingIndex === index ? (
//                             <input
//                               value={editedItemName}
//                               onChange={(e) =>
//                                 setEditedItemName(e.target.value)
//                               }
//                               className="border rounded p-1 w-full"
//                             />
//                           ) : (
//                             item
//                           )}
//                         </td>
//                         <td className="p-2">
//                           {editingIndex === index ? (
//                             <input
//                               type="number"
//                               value={editedItemPrice}
//                               onChange={(e) =>
//                                 setEditedItemPrice(e.target.value)
//                               }
//                               className="border rounded p-1 w-24"
//                             />
//                           ) : (
//                             `₹${priceMap[item]}`
//                           )}
//                         </td>
//                         <td className="p-2 space-x-2">
//                           {editingIndex === index ? (
//                             <>
//                               <button
//                                 onClick={() => handleSaveItem(item)}
//                                 className="bg-blue-500 text-white px-3 py-1 rounded"
//                               >
//                                 Save
//                               </button>
//                               <button
//                                 onClick={() => setEditingIndex(null)}
//                                 className="bg-gray-400 text-white px-3 py-1 rounded"
//                               >
//                                 Cancel
//                               </button>
//                             </>
//                           ) : (
//                             <>
//                               <button
//                                 onClick={() => handleEditItem(item, index)}
//                                 className="bg-yellow-500 text-white px-3 py-1 rounded"
//                               >
//                                 Edit
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteItem(item)}
//                                 className="bg-red-500 text-white px-3 py-1 rounded"
//                               >
//                                 Delete
//                               </button>
//                             </>
//                           )}
//                         </td>
//                       </tr>
//                     )
//                   )}
//                   {(itemsByCategory[selectedCategory] || []).length === 0 && (
//                     <tr>
//                       <td colSpan="3" className="text-center text-gray-500 p-4">
//                         No items in this category.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuPage;

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://63ae7fb43e46516916732319.mockapi.io/Rooban";

const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await axios.get(API_URL);
    setMenuData(res.data);
    if (res.data.length && !selectedCategoryId) {
      setSelectedCategoryId(res.data[0].id);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return alert("Enter a category name");

    const exists = menuData.some((cat) => cat.category === newCategory);
    if (exists) return alert("Category already exists");

    const res = await axios.post(API_URL, {
      category: newCategory,
      items: [],
    });

    setMenuData((prev) => [...prev, res.data]);
    setSelectedCategoryId(res.data.id);
    setNewCategory("");
  };

  const handleDeleteCategory = async () => {
    if (!window.confirm("Delete selected category?")) return;
    await axios.delete(`${API_URL}/${selectedCategoryId}`);
    const updated = menuData.filter((cat) => cat.id !== selectedCategoryId);
    setMenuData(updated);
    setSelectedCategoryId(updated[0]?.id || "");
  };

  const handleAddItem = async () => {
    if (!newItemName.trim() || !newItemPrice)
      return alert("Enter item name and price");

    const category = menuData.find((c) => c.id === selectedCategoryId);
    const exists = category.items.some((item) => item.name === newItemName);
    if (exists) return alert("Item already exists");

    const updatedItems = [
      ...category.items,
      { name: newItemName, price: Number(newItemPrice) },
    ];

    const res = await axios.put(`${API_URL}/${selectedCategoryId}`, {
      ...category,
      items: updatedItems,
    });

    const updatedMenu = menuData.map((c) =>
      c.id === selectedCategoryId ? res.data : c
    );

    setMenuData(updatedMenu);
    setNewItemName("");
    setNewItemPrice("");
  };

  const handleDeleteItem = async (itemName) => {
    const category = menuData.find((c) => c.id === selectedCategoryId);
    const updatedItems = category.items.filter(
      (item) => item.name !== itemName
    );

    const res = await axios.put(`${API_URL}/${selectedCategoryId}`, {
      ...category,
      items: updatedItems,
    });

    const updatedMenu = menuData.map((c) =>
      c.id === selectedCategoryId ? res.data : c
    );

    setMenuData(updatedMenu);
  };

  const handleEditItem = (item) => {
    setEditingItem({ ...item });
  };

  const handleSaveItem = async () => {
    const category = menuData.find((c) => c.id === selectedCategoryId);
    const updatedItems = category.items.map((item) =>
      item.name === editingItem.originalName
        ? { name: editingItem.name, price: Number(editingItem.price) }
        : item
    );

    const res = await axios.put(`${API_URL}/${selectedCategoryId}`, {
      ...category,
      items: updatedItems,
    });

    const updatedMenu = menuData.map((c) =>
      c.id === selectedCategoryId ? res.data : c
    );

    setMenuData(updatedMenu);
    setEditingItem(null);
  };

  const selectedCategory = menuData.find((c) => c.id === selectedCategoryId);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">
        🍽️ Restaurant Menu Management (API Version)
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Category Management */}
        <div className="bg-white p-4 rounded shadow w-full md:w-1/2 space-y-4">
          <h2 className="text-xl font-semibold">Category Management</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="New Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="border p-2 flex-1 rounded"
            />
            <button
              onClick={handleAddCategory}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add Category
            </button>
          </div>

          {menuData.length > 0 && (
            <div className="flex gap-2 mt-2">
              <select
                value={selectedCategoryId}
                onChange={(e) => setSelectedCategoryId(e.target.value)}
                className="border p-2 rounded flex-1"
              >
                {menuData.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.category}
                  </option>
                ))}
              </select>
              <button
                onClick={handleDeleteCategory}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete Category
              </button>
            </div>
          )}
        </div>

        {/* Item Management */}
        {selectedCategory && (
          <div className="bg-white p-4 rounded shadow w-full md:w-1/2 space-y-4">
            <h2 className="text-xl font-semibold">
              Items in{" "}
              <span className="text-blue-700">{selectedCategory.category}</span>
            </h2>

            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                placeholder="Item Name"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="border p-2 rounded flex-1"
              />
              <input
                type="number"
                placeholder="Price"
                value={newItemPrice}
                onChange={(e) => setNewItemPrice(e.target.value)}
                className="border p-2 rounded w-32"
              />
              <button
                onClick={handleAddItem}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Add Item
              </button>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border mt-2">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-2 text-left">Item</th>
                    <th className="border p-2 text-left">Price</th>
                    <th className="border p-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedCategory.items.length > 0 ? (
                    selectedCategory.items.map((item, index) => (
                      <tr key={index}>
                        <td className="border p-2">
                          {editingItem?.originalName === item.name ? (
                            <input
                              value={editingItem.name}
                              onChange={(e) =>
                                setEditingItem((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              className="border p-1 rounded"
                            />
                          ) : (
                            item.name
                          )}
                        </td>
                        <td className="border p-2">
                          {editingItem?.originalName === item.name ? (
                            <input
                              type="number"
                              value={editingItem.price}
                              onChange={(e) =>
                                setEditingItem((prev) => ({
                                  ...prev,
                                  price: e.target.value,
                                }))
                              }
                              className="border p-1 rounded w-20"
                            />
                          ) : (
                            `₹${item.price}`
                          )}
                        </td>
                        <td className="border p-2">
                          {editingItem?.originalName === item.name ? (
                            <>
                              <button
                                onClick={handleSaveItem}
                                className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                              >
                                Save
                              </button>
                              <button
                                onClick={() => setEditingItem(null)}
                                className="bg-gray-400 text-white px-3 py-1 rounded"
                              >
                                Cancel
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() =>
                                  handleEditItem({
                                    ...item,
                                    originalName: item.name,
                                  })
                                }
                                className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteItem(item.name)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                              >
                                Delete
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-gray-500 p-4">
                        No items in this category.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
