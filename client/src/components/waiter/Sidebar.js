import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Sidebar = ({
  handleLogout,
  open,
  setOpen,
  foodCategories,
  selectedCategory,
  setSelectedCategory,
  handleDeleteCategory,
  setShowCategoryModal,
}) => (
  <div
    className={`${open ? "block" : "hidden"} md:block bg-[#0e0e0e] h-screen ${
      open ? "w-64" : "w-16"
    } duration-300 text-gray-100 px-2 flex flex-col border-r border-gray-700
  fixed md:static z-50 top-0 left-0`}
  >
    {/* <div className="py-4 flex justify-between items-center px-2">
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 text-lg font-bold">
        {open && "Nilasoru"}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
        >
          Logout
        </button>
      </div>
      <HiMenuAlt3
        size={26}
        className="cursor-pointer md:hidden"
        onClick={() => setOpen(false)}
      />
    </div> */}
    <div className="py-4 flex justify-between items-center px-2">
      {/* Left Side: Nilasoru */}
      <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 text-lg font-bold">
        {open && "Nilasoru"}
      </div>

      {/* Right Side: Logout + Menu */}
      <div className="flex items-center gap-2">
        {/* <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white text-sm py-1 px-2 rounded"
        >
          Logout
        </button> */}
        <HiMenuAlt3
          size={26}
          className="cursor-pointer md:hidden"
          onClick={() => setOpen(false)}
        />
      </div>
    </div>

    {/* <div className="flex justify-center mb-2">
      {open ? (
        <button
          onClick={() => setShowCategoryModal(true)}
          className="w-full py-1 px-2 text-sm bg-green-700 hover:bg-green-800 rounded"
        >
          + Add Category
        </button>
      ) : (
        <button
          onClick={() => setShowCategoryModal(true)}
          className="bg-green-700 hover:bg-green-800 rounded-full p-2"
          title="Add Category"
        >
          +
        </button>
      )}
    </div> */}

    {/* <div className="flex-grow overflow-y-auto flex flex-col gap-2 pb-4 "> */}
    <div className="scrollbar-thin overflow-y-auto max-h-[calc(100vh-140px)] flex flex-col gap-2 pb-4">
      {foodCategories.map((cat, idx) => (
        <div
          key={idx}
          className={`flex items-center ${
            open ? "justify-between" : "justify-center"
          } px-2 py-2 rounded-md text-sm transition-colors ${
            selectedCategory === cat
              ? "bg-gray-700 text-white font-semibold"
              : "hover:bg-gray-800 text-gray-300"
          }`}
        >
          <button
            onClick={() => {
              setSelectedCategory(cat);
              if (window.innerWidth < 768) setOpen(false);
            }}
            className="flex-1 text-left truncate"
          >
            {open ? cat : cat[0]}
          </button>

          {open && (
            <button
              onClick={() => handleDeleteCategory(cat)}
              className="text-red-400 hover:text-red-600 ml-2 text-xs"
              title="Delete Category"
            >
              ✕
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
