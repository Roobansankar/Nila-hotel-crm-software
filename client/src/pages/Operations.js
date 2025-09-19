// import React from "react";
// import {
//   FileText,
//   ShoppingCart,
//   Receipt,
//   User,
//   List,
//   Printer,
// } from "lucide-react";

// const topFeatures = [
//   { name: "Orders", icon: <FileText size={24} /> },
//   { name: "Online Orders", icon: <ShoppingCart size={24} /> },
//   { name: "KOTs", icon: <Receipt size={24} /> },
//   { name: "Customers", icon: <User size={24} /> },
// ];

// const configFeatures = [
//   { name: "Menu", icon: <List size={24} /> },
//   { name: "Bill/KOT Print", icon: <Printer size={24} /> },
// ];

// const Operations = () => {
//   return (
//     <div className="p-4">
//       {/* Main Section Heading */}
//       <h2 className="text-xl font-semibold mb-4">Operations</h2>

//       {/* Top Feature Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
//         {topFeatures.map((item) => (
//           <div
//             key={item.name}
//             className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
//           >
//             <div className="text-yellow-600 mb-2">{item.icon}</div>
//             <span className="text-sm font-medium">{item.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Configuration Heading */}
//       <h3 className="text-md font-semibold mb-4">
//         Set the configuration for your restaurant
//       </h3>

//       {/* Config Feature Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//         {configFeatures.map((item) => (
//           <div
//             key={item.name}
//             className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
//           >
//             <div className="text-yellow-600 mb-2">{item.icon}</div>
//             <span className="text-sm font-medium text-center">{item.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Operations;

import React from "react";
import {
  FileText,
  ShoppingCart,
  Receipt,
  User,
  List,
  Printer,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

const topFeatures = [
  { name: "Orders", icon: <FileText size={24} />, path: "/operations/orders" },
  {
    name: "Online Orders",
    icon: <ShoppingCart size={24} />,
    path: "/online-orders",
  },
  { name: "KOTs", icon: <Receipt size={24} />, path: "/operations/kots" },
  {
    name: "Customers",
    icon: <User size={24} />,
    path: "/operations/customers",
  },
];

const configFeatures = [
  { name: "Menu", icon: <List size={24} />, path: "/operations/menu" },
  {
    name: "Bill/KOT Print",
    icon: <Printer size={24} />,
    path: "/operations/bill-kot-print",
  },
];

const Operations = () => {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div className="p-4">
      {/* Main Section Heading */}
      <h2 className="text-xl font-semibold mb-4">Operations</h2>

      {/* Top Feature Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {topFeatures.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)} // Navigate on click
            className="cursor-pointer flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <div className="text-yellow-600 mb-2">{item.icon}</div>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Configuration Heading */}
      <h3 className="text-md font-semibold mb-4">
        Set the configuration for your restaurant
      </h3>

      {/* Config Feature Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {configFeatures.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)} // Navigate on click
            className="cursor-pointer flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <div className="text-yellow-600 mb-2">{item.icon}</div>
            <span className="text-sm font-medium text-center">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Operations;
