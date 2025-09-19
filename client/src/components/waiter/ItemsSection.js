import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const ItemsSection = ({
  setOpen,
  tableId,
  selectedCategory,
  matchedCategory,
  searchText,
  setSearchText,
  items,
  handleAddToCart,
  handleDeleteItem,
  getPrice,
  setShowItemModal,
}) => (
  <div className="md:w-3/5 w-full bg-gray-100 flex flex-col h-full">
    <div className="sticky top-0 z-40 bg-gray-100 p-4 pb-2 shadow-sm md:static md:shadow-none">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          className="md:hidden bg-gray-800 text-white p-2 rounded"
          onClick={() => setOpen(true)}
        >
          <HiMenuAlt3 size={20} />
        </button>

        <input
          type="text"
          placeholder="Search items or categories..."
          className="px-3 py-2 rounded-md w-full text-black outline-none text-sm"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </div>

    <div className="px-4 mt-3 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Table: {tableId} – {matchedCategory || selectedCategory}
      </h2>
      {/* <button
        onClick={() => setShowItemModal(true)}
        className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + Add Item
      </button> */}
    </div>

    <div className="flex-1 overflow-y-auto p-4 pt-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleAddToCart(item)}
            className="relative p-4 w-full text-left bg-white rounded shadow hover:shadow-md font-medium cursor-pointer border-t-4 border-green-500"
          >
            <div>{item}</div>
            <div className="text-xs text-gray-500">₹{getPrice(item)}</div>
            <span
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteItem(item);
              }}
              className="absolute top-1 right-2 text-red-500 text-sm hover:text-red-700"
              title="Delete Item"
            >
              ✕
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ItemsSection;
