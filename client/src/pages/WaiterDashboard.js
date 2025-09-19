// import { Routes, Route, useNavigate } from "react-router-dom";
// import TableView from "../components/waiter/TableView";
// import Home from "../components/waiter/Home";
// import ButtonDashboard from "./ButtonDashboard";

// const WaiterDashboard = ({ setAuth }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("loginType");
//     setAuth(false);
//     navigate("/login", { replace: true });
//   };

//   return (
//     <div>
//       <Routes>
//         <Route index element={<TableView />} />
//         <Route
//           path="home/:tableId"
//           element={<Home handleLogout={handleLogout} />}
//         />

//         <Route path="button-dashboard" element={<ButtonDashboard />} />
//       </Routes>
//     </div>
//   );
// };

// export default WaiterDashboard;

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import TableView from "../components/waiter/TableView";
import Home from "../components/waiter/Home";
import ButtonDashboard from "./ButtonDashboard";

const WaiterDashboard = ({ setAuth }) => {
  const navigate = useNavigate();

  // ✅ Shared state
  const [cart, setCart] = useState({});
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [customerGST, setCustomerGST] = useState("");
  const [isPrinting, setIsPrinting] = useState(false);

  const cgstRate = 2.5;
  const sgstRate = 2.5;

  const getPrice = (item) => {
    const priceMap = JSON.parse(localStorage.getItem("priceMap")) || {};
    return priceMap[item] || 50;
  };

  const handleUpdateStatus = (newStatus, tableId) => {
    if (newStatus === "paid") {
      setCart({});
      localStorage.removeItem(`cart-${tableId}`);
      localStorage.removeItem(`status-${tableId}`);
    } else {
      localStorage.setItem(`status-${tableId}`, newStatus);
      localStorage.setItem(`cart-${tableId}`, JSON.stringify(cart));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loginType");
    setAuth(false);
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <Routes>
        <Route index element={<TableView handleLogout={handleLogout} />} />
        <Route
          path="home/:tableId"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              getPrice={getPrice}
              handleUpdateStatus={handleUpdateStatus}
              setInvoiceNumber={setInvoiceNumber}
              setShowInvoiceModal={setShowInvoiceModal}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="button-dashboard"
          element={
            <ButtonDashboard
              cart={cart}
              getPrice={getPrice}
              invoiceNumber={invoiceNumber}
              setInvoiceNumber={setInvoiceNumber}
              showInvoiceModal={showInvoiceModal}
              setShowInvoiceModal={setShowInvoiceModal}
              customerName={customerName}
              setCustomerName={setCustomerName}
              customerMobile={customerMobile}
              setCustomerMobile={setCustomerMobile}
              customerGST={customerGST}
              setCustomerGST={setCustomerGST}
              isPrinting={isPrinting}
              setIsPrinting={setIsPrinting}
              cgstRate={cgstRate}
              sgstRate={sgstRate}
              handleUpdateStatus={handleUpdateStatus}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default WaiterDashboard;
