// // App.js
// import { Routes, Route } from "react-router-dom";
// import DashboardLayout from "./components/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Billing from "./pages/Billing";

// import Home from "./pages/Home";
// import InvoiceDetails from "./pages/InvoiceDetails";
// import AllInvoiceDetails from "./pages/AllInvoiceDetails";
// import Operations from "./pages/Operations";
// import AllKOTsDetails from "./pages/AllKOTsDetails";

// import Menu from "./pages/Menu";
// import Orders from "./pages/Orders";
// import KotDashboard from "./pages/KotDashboard";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<DashboardLayout />}>
//         <Route index element={<Dashboard />} />
//         <Route path="billing" element={<Billing />} />

//         <Route path="/home/:tableId" element={<Home />} />
//         <Route
//           path="/invoice-details"
//           element={<InvoiceDetails onSave={(data) => console.log(data)} />}
//         />
//         <Route path="/all-invoice-details" element={<AllInvoiceDetails />} />
//         <Route path="/operations" element={<Operations />} />
//         <Route path="/all-kots" element={<AllKOTsDetails />} />
//         <Route path="/operations/orders" element={<Orders />} />
//         <Route path="/operations/menu" element={<Menu />} />
//         <Route path="/operations/kots" element={<KotDashboard />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import DashboardLayout from "./components/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Billing from "./pages/Billing";
// import Home from "./pages/Home";
// import InvoiceDetails from "./pages/InvoiceDetails";
// import AllInvoiceDetails from "./pages/AllInvoiceDetails";
// import Operations from "./pages/Operations";
// import AllKOTsDetails from "./pages/AllKOTsDetails";
// import Menu from "./pages/Menu";
// import Orders from "./pages/Orders";
// import KotDashboard from "./pages/KotDashboard";
// import Login from "./pages/Login";
// import { useState } from "react";

// const App = () => {
//   const [auth, setAuth] = useState(!!localStorage.getItem("token"));

//   const PrivateRoute = ({ children }) => {
//     return auth ? children : <Navigate to="/login" />;
//   };

//   return (
//     <Routes>
//       <Route path="/login" element={<Login setAuth={setAuth} />} />
//       <Route
//         path="/"
//         element={
//           <PrivateRoute>
//             <DashboardLayout setAuth={setAuth} />
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<Dashboard />} />
//         <Route path="billing" element={<Billing />} />
//         <Route path="/home/:tableId" element={<Home />} />
//         <Route path="/invoice-details" element={<InvoiceDetails />} />
//         <Route path="/all-invoice-details" element={<AllInvoiceDetails />} />
//         <Route path="/operations" element={<Operations />} />
//         <Route path="/all-kots" element={<AllKOTsDetails />} />
//         <Route path="/operations/orders" element={<Orders />} />
//         <Route path="/operations/menu" element={<Menu />} />
//         <Route path="/operations/kots" element={<KotDashboard />} />
//       </Route>
//     </Routes>
//   );
// };

// export default App;

// import { Routes, Route, Navigate } from "react-router-dom";
// import DashboardLayout from "./components/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Billing from "./pages/Billing";
// import Home from "./pages/Home";
// import InvoiceDetails from "./pages/InvoiceDetails";
// import AllInvoiceDetails from "./pages/AllInvoiceDetails";
// import Operations from "./pages/Operations";
// import AllKOTsDetails from "./pages/AllKOTsDetails";
// import Menu from "./pages/Menu";
// import Orders from "./pages/Orders";
// import KotDashboard from "./pages/KotDashboard";
// import Login from "./pages/Login";
// import { useState } from "react";
// import CreateUser from "./pages/CreateUser";

// const App = () => {
//   const [auth, setAuth] = useState(!!localStorage.getItem("token"));

//   // Protect routes
//   const PrivateRoute = ({ children }) => {
//     return auth ? children : <Navigate to="/login" replace />;
//   };

//   // Prevent logged-in users from going to login page
//   const PublicRoute = ({ children }) => {
//     return !auth ? children : <Navigate to="/" replace />;
//   };

//   return (
//     <Routes>
//       {/* Public Login Route */}
//       <Route
//         path="/login"
//         element={
//           <PublicRoute>
//             <Login setAuth={setAuth} />
//           </PublicRoute>
//         }
//       />

//       {/* Protected Routes */}
//       <Route
//         path="/"
//         element={
//           <PrivateRoute>
//             <DashboardLayout setAuth={setAuth} />
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<Dashboard />} />
//         <Route path="billing" element={<Billing />} />
//         <Route path="/home/:tableId" element={<Home />} />
//         <Route path="/invoice-details" element={<InvoiceDetails />} />
//         <Route path="/all-invoice-details" element={<AllInvoiceDetails />} />
//         <Route path="/operations" element={<Operations />} />
//         <Route path="/all-kots" element={<AllKOTsDetails />} />
//         <Route path="/operations/orders" element={<Orders />} />
//         <Route path="/operations/menu" element={<Menu />} />
//         <Route path="/operations/kots" element={<KotDashboard />} />
//         <Route path="/create-user" element={<CreateUser />} />
//       </Route>

//       {/* Fallback for unknown routes */}
//       <Route
//         path="*"
//         element={<Navigate to={auth ? "/" : "/login"} replace />}
//       />
//     </Routes>
//   );
// };

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";
import Home from "./pages/Home";
import InvoiceDetails from "./pages/InvoiceDetails";
import AllInvoiceDetails from "./pages/AllInvoiceDetails";
import Operations from "./pages/Operations";
import AllKOTsDetails from "./pages/AllKOTsDetails";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import KotDashboard from "./pages/KotDashboard";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import UserAllKot from "./pages/UserAllKot"; // User-only page
import { useState } from "react";
import Customers from "./pages/Customers";
import BillKotPrint from "./pages/Bill-kotPrint";
import CreateWaiter from "./pages/CreateWaiter";
import WaiterDashboard from "./pages/WaiterDashboard";

const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem("token"));
  const loginType = localStorage.getItem("loginType"); // "admin" or "user"

  // Protect routes
  const PrivateRoute = ({ children }) => {
    return auth ? children : <Navigate to="/login" replace />;
  };

  // Prevent logged-in users from going to login page
  const PublicRoute = ({ children }) => {
    return !auth ? children : <Navigate to="/" replace />;
  };

  return (
    <Routes>
      {/* Public Login Route */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login setAuth={setAuth} />
          </PublicRoute>
        }
      />

      {/* Admin Routes */}
      {loginType === "admin" && (
        <Route
          path="/"
          element={
            <PrivateRoute>
              <DashboardLayout setAuth={setAuth} />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="billing" element={<Billing />} />
          <Route path="home/:tableId" element={<Home />} />
          <Route path="invoice-details" element={<InvoiceDetails />} />
          <Route path="all-invoice-details" element={<AllInvoiceDetails />} />
          <Route path="operations" element={<Operations />} />
          <Route path="all-kots" element={<AllKOTsDetails />} />
          <Route path="operations/orders" element={<Orders />} />
          <Route path="operations/menu" element={<Menu />} />
          <Route path="operations/kots" element={<KotDashboard />} />
          <Route path="operations/customers" element={<Customers />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="operations/bill-kot-print" element={<BillKotPrint />} />
          <Route path="create-waiter" element={<CreateWaiter />} />
        </Route>
      )}

      {/* User Routes */}
      {/* {loginType === "user" && (
        <Route
          path="/user-kots"
          element={
            <PrivateRoute>
              <UserAllKot />
            </PrivateRoute>
          }
        />
      )} */}
      {loginType === "user" && (
        <Route
          path="/user-kots"
          element={
            <PrivateRoute>
              <UserAllKot setAuth={setAuth} />
              {/* Pass setAuth */}
            </PrivateRoute>
          }
        />
      )}

      {/* Waiter Route */}
      {/* {loginType === "waiter" && (
        <Route
          path="/waiter-dashboard"
          element={
            <PrivateRoute>
              <WaiterDashboard setAuth={setAuth} />
            </PrivateRoute>
          }
        />
      )} */}
      {loginType === "waiter" && (
        <Route
          path="/waiter-dashboard/*"
          element={
            <PrivateRoute>
              <WaiterDashboard setAuth={setAuth} />
            </PrivateRoute>
          }
        />
      )}

      {/* Fallback for unknown routes */}
      <Route
        path="*"
        element={
          <Navigate
            // to={auth ? (loginType === "admin" ? "/" : "/user-kots") : "/login"}
            to={
              auth
                ? loginType === "admin"
                  ? "/"
                  : loginType === "waiter"
                  ? "/waiter-dashboard"
                  : "/user-kots"
                : "/login"
            }
            replace
          />
        }
      />
    </Routes>
  );
};

export default App;
