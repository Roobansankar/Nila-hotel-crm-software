import React from "react";

const AddItemModal = ({
  show,
  onClose,
  selectedCategory,
  newItemName,
  setNewItemName,
  newItemPrice,
  setNewItemPrice,
  setItemsByCategory,
  setPriceMap,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-blue-700 bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80">
        <h3 className="text-lg font-bold mb-4">
          Add New Item to {selectedCategory}
        </h3>
        <input
          type="text"
          className="border px-3 py-2 w-full rounded mb-3"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          type="number"
          className="border px-3 py-2 w-full rounded mb-4"
          placeholder="Item price (₹)"
          value={newItemPrice}
          onChange={(e) => setNewItemPrice(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-400 px-3 py-1 rounded text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (newItemName && newItemPrice) {
                setItemsByCategory((prev) => ({
                  ...prev,
                  [selectedCategory]: [
                    ...(prev[selectedCategory] || []),
                    newItemName,
                  ],
                }));

                setPriceMap((prev) => ({
                  ...prev,
                  [newItemName]: parseInt(newItemPrice),
                }));

                setNewItemName("");
                setNewItemPrice("");
                onClose();
              }
            }}
            className="bg-blue-600 px-3 py-1 rounded text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
