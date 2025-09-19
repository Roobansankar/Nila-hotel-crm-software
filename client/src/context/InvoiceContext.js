import React, { createContext, useContext, useState } from "react";

const InvoiceContext = createContext();

export const useInvoice = () => useContext(InvoiceContext);

export const InvoiceProvider = ({ children }) => {
  const [invoiceData, setInvoiceData] = useState({
    cart: {},
    invoiceNumber: "",
    customerName: "",
    customerMobile: "",
    customerGST: "",
    tableId: "",
    cgstRate: 2.5,
    sgstRate: 2.5,
  });

  return (
    <InvoiceContext.Provider value={{ invoiceData, setInvoiceData }}>
      {children}
    </InvoiceContext.Provider>
  );
};
