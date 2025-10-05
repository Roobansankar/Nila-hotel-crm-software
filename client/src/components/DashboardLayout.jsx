// import { useState } from "react";
// import { Menu, X, LayoutDashboard, FileText, LogOut } from "lucide-react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";

// const navLinks = [
//   {
//     name: "Dashboard",
//     path: "/",
//     icon: <LayoutDashboard size={18} />,
//   },
//   {
//     name: "Operations",
//     path: "/operations",
//     icon: <FileText size={18} />,
//   },

//   {
//     name: "All Invoice Details",
//     path: "/all-invoice-details",
//     icon: <FileText size={18} />,
//   },
//   {
//     name: "All KOTs",
//     path: "/all-kots",
//     icon: <FileText size={18} />,
//   },
//   {
//     name: "Create Kitchen User",
//     path: "/create-user",
//     icon: <FileText size={18} />,
//   },

//   {
//     name: "Create waiter",
//     path: "/create-waiter",
//     icon: <FileText size={18} />,
//   },
//   {
//     name: "All kitchen users",
//     path: "/all-kitchen-users",
//     icon: <FileText size={18} />,
//   },

//   {
//     name: "All Waiter users",
//     path: "/all-waiter-users",
//     icon: <FileText size={18} />,
//   },
// ];

// const DashboardLayout = ({ setAuth }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setAuth(false);
//     navigate("/login", { replace: true }); // Replace to prevent back button
//   };

//   return (
//     // <div className="flex h-screen overflow-hidden">
//     //   {/* Sidebar */}
//     //   <div
//     //     className={`bg-black text-white h-full fixed top-0 left-0 z-50 w-64 transform transition-transform duration-300
//     //     ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
//     //   >
//     //     <div className="flex justify-between items-center p-4 border-b border-gray-700">
//     //       <h2 className="text-xl font-bold">Nilasoru</h2>
//     //       <button onClick={closeSidebar} className="md:hidden">
//     //         <X size={24} />
//     //       </button>
//     //     </div>

//     //     <nav className="p-4 space-y-3">
//     //       {navLinks.map((link) => (
//     //         <NavLink
//     //           to={link.path}
//     //           key={link.name}
//     //           onClick={closeSidebar}
//     //           className={({ isActive }) =>
//     //             `flex items-center gap-2 px-3 py-2 text-sm font-medium transition
//     //             ${
//     //               isActive
//     //                 ? "bg-yellow-500 text-black rounded-lg"
//     //                 : "hover:bg-gray-800 rounded-md"
//     //             }`
//     //           }
//     //         >
//     //           {link.icon}
//     //           <span>{link.name}</span>
//     //         </NavLink>
//     //       ))}
//     //     </nav>
//     //   </div>

//     //   {/* Content Area */}
//     //   <div
//     //     className={`flex-1 flex flex-col transition-all duration-300
//     //     ${isSidebarOpen ? "md:ml-64" : "ml-0"}`}
//     //   >
//     //     {/* Navbar */}
//     //     <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
//     //       <button onClick={toggleSidebar} className="text-black">
//     //         <Menu size={24} />
//     //       </button>
//     //       <h1 className="text-xl font-semibold">Dashboard</h1>
//     //       <button
//     //         onClick={handleLogout}
//     //         className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium"
//     //       >
//     //         <LogOut size={18} />
//     //         Logout
//     //       </button>
//     //     </header>

//     //     {/* Page Content */}
//     //     <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
//     //       <Outlet />
//     //     </main>
//     //   </div>
//     // </div>
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div
//         className={`bg-black text-white h-full fixed top-0 left-0 z-50 w-64 transform transition-transform duration-300
//       ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//       } md:translate-x-0`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-700">
//           <h2 className="text-xl font-bold">Nilasoru</h2>
//           {/* ❌ Close button only on mobile */}
//           <button onClick={closeSidebar} className="md:hidden">
//             <X size={24} />
//           </button>
//         </div>

//         <nav className="p-4 space-y-3">
//           {navLinks.map((link) => (
//             <NavLink
//               to={link.path}
//               key={link.name}
//               onClick={closeSidebar}
//               className={({ isActive }) =>
//                 `flex items-center gap-2 px-3 py-2 text-sm font-medium transition
//             ${
//               isActive
//                 ? "bg-yellow-500 text-black rounded-lg"
//                 : "hover:bg-gray-800 rounded-md"
//             }`
//               }
//             >
//               {link.icon}
//               <span>{link.name}</span>
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       {/* Content Area */}
//       <div
//         className={`flex-1 flex flex-col transition-all duration-300
//       ${isSidebarOpen ? "md:ml-64" : "ml-0"} md:ml-64`}
//       >
//         {/* Navbar */}
//         <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
//           {/* 🍔 Menu button only on mobile */}
//           <button onClick={toggleSidebar} className="text-black md:hidden">
//             <Menu size={24} />
//           </button>
//           <h1 className="text-xl font-semibold">Dashboard</h1>
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium"
//           >
//             <LogOut size={18} />
//             Logout
//           </button>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import { useState } from "react";
import { Menu, X, LayoutDashboard, FileText, LogOut } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard size={18} /> },
  { name: "Operations", path: "/operations", icon: <FileText size={18} /> },
  {
    name: "All Invoice Details",
    path: "/all-invoice-details",
    icon: <FileText size={18} />,
  },
  { name: "All KOTs", path: "/all-kots", icon: <FileText size={18} /> },
  {
    name: "Create Kitchen User",
    path: "/create-user",
    icon: <FileText size={18} />,
  },
  {
    name: "Create waiter",
    path: "/create-waiter",
    icon: <FileText size={18} />,
  },
  {
    name: "All kitchen users",
    path: "/all-kitchen-users",
    icon: <FileText size={18} />,
  },
  {
    name: "All Waiter users",
    path: "/all-waiter-users",
    icon: <FileText size={18} />,
  },
];

const DashboardLayout = ({ setAuth }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`bg-black text-white h-full fixed top-0 left-0 z-50 w-64 transform transition-transform duration-300
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Nilasoru</h2>
          {/* Close button only on mobile */}
          <button onClick={closeSidebar} className="md:hidden">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              to={link.path}
              key={link.name}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-2 text-sm font-medium transition
                ${
                  isActive
                    ? "bg-yellow-500 text-black rounded-lg"
                    : "hover:bg-gray-800 rounded-md"
                }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300
        ${isSidebarOpen ? "md:ml-64" : "ml-0"} md:ml-64`}
      >
        {/* Navbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
          {/* Menu button only on mobile */}
          <button onClick={toggleSidebar} className="text-black md:hidden">
            <Menu size={24} />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-red-500 hover:text-red-700 font-medium"
          >
            <LogOut size={18} />
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
