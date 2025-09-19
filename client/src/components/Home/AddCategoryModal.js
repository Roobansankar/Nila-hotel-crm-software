// // components/Home/AddCategoryModal.js
// import React from "react";

// const AddCategoryModal = ({
//   show,
//   onClose,
//   newCategory,
//   setNewCategory,
//   foodCategories,
//   setFoodCategories,
//   selectedCategory,
//   setSelectedCategory,
// }) => {
//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 bg-blue-700 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="bg-white p-6 rounded-lg w-80">
//         <h3 className="text-lg font-bold mb-4">Add New Category</h3>
//         <input
//           type="text"
//           className="border px-3 py-2 w-full rounded mb-4"
//           placeholder="Category name"
//           value={newCategory}
//           onChange={(e) => setNewCategory(e.target.value)}
//         />
//         <div className="flex justify-end gap-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-400 px-3 py-1 rounded text-white"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={() => {
//               if (newCategory && !foodCategories.includes(newCategory)) {
//                 setFoodCategories([...foodCategories, newCategory]);
//                 setSelectedCategory(newCategory);
//               }
//               setNewCategory("");
//               onClose();
//             }}
//             className="bg-green-600 px-3 py-1 rounded text-white"
//           >
//             Add
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCategoryModal;

import React from "react";
import axios from "axios";

const AddCategoryModal = ({
  show,
  onClose,
  newCategory,
  setNewCategory,
  foodCategories,
  setFoodCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  if (!show) return null;

  const handleAddCategory = async () => {
    if (!newCategory || foodCategories.includes(newCategory)) return;

    try {
      const res = await axios.post("http://localhost:5000/api/categories", {
        name: newCategory,
      });
      setFoodCategories([...foodCategories, res.data.name]);
      setSelectedCategory(res.data.name);
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error);
    }

    setNewCategory("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-blue-700 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h3 className="text-lg font-bold mb-4">Add New Category</h3>
        <input
          type="text"
          className="border px-3 py-2 w-full rounded mb-4"
          placeholder="Category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-400 px-3 py-1 rounded text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleAddCategory}
            className="bg-green-600 px-3 py-1 rounded text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;
