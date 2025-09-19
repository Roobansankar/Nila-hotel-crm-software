import React from "react";

const InvoiceModal = ({
  show,
  onClose,
  cart,
  getPrice,
  handleUpdateStatus,
  tableId,
  invoiceNumber,
  setInvoiceNumber,
  customerName,
  setCustomerName,
  customerMobile,
  setCustomerMobile,
  customerGST,
  setCustomerGST,
  isPrinting,
  setIsPrinting,
  cgstRate,
  sgstRate,
}) => {
  if (!show) return null;

  const subtotal = Object.keys(cart).reduce(
    (total, item) => total + getPrice(item) * cart[item],
    0
  );
  const cgst = (subtotal * cgstRate) / 100;
  const sgst = (subtotal * sgstRate) / 100;
  const total = subtotal + cgst + sgst;

  const handleClose = () => {
    onClose();
    setCustomerName("");
    setCustomerMobile("");
    setCustomerGST("");
    setIsPrinting(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className="bg-white p-6 rounded-lg w-[90%] max-w-2xl h-[90%]"
        id="print-section"
      >
        <h2 className="text-xl font-bold text-center mb-2">
          Nila Soru - Salem
        </h2>
        <p className="text-center text-sm mb-4">Invoice</p>
        <p>
          Table No: <b>{tableId}</b>
        </p>

        <div className="flex justify-between text-sm mb-2">
          <div>
            Invoice No: <span className="font-semibold">{invoiceNumber}</span>
          </div>
          <div>Date: {new Date().toLocaleDateString()}</div>
        </div>

        {/* Customer details fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          {isPrinting ? (
            <>
              <div className="text-sm font-medium">
                Name: <span className="font-normal">{customerName}</span>
              </div>
              <div className="text-sm font-medium">
                Mobile: <span className="font-normal">{customerMobile}</span>
              </div>
              <div className="text-sm font-medium md:col-span-2">
                GST Number: <span className="font-normal">{customerGST}</span>
              </div>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Customer Name"
                className="border px-3 py-2 rounded"
                value={customerName}
                required
                onChange={(e) => setCustomerName(e.target.value)}
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="border px-3 py-2 rounded"
                value={customerMobile}
                required
                onChange={(e) => setCustomerMobile(e.target.value)}
              />

              <input
                type="text"
                placeholder="GST Number"
                className="border px-3 py-2 rounded md:col-span-2"
                value={customerGST}
                required
                onChange={(e) => setCustomerGST(e.target.value)}
              />
            </>
          )}
        </div>
        {/* </div> */}

        {/* <table className="w-full text-sm mb-4 border"> */}
        {/* Items table */}

        {/* </table> */}
        <table className="w-full text-sm mb-4 border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Item</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(cart).map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 border">{item}</td>
                <td className="p-2 border text-center">{cart[item]}</td>
                <td className="p-2 border text-right">
                  ₹{getPrice(item) * cart[item]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-sm text-right space-y-1 mb-4">
          <div>Subtotal: ₹{subtotal.toFixed(2)}</div>
          <div>CGST (2.5%): ₹{cgst.toFixed(2)}</div>
          <div>SGST (2.5%): ₹{sgst.toFixed(2)}</div>
        </div>

        <div className="text-right font-semibold text-lg mb-4">
          Grand Total: ₹{total.toFixed(2)}
        </div>

        <div className="flex justify-end gap-2">
          <button
            // onClick={onClose}
            onClick={handleClose}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded print-hidden"
          >
            Cancel
          </button>
          {/* <button
            onClick={() => {
              if (
                !customerName.trim() ||
                !customerMobile.trim() ||
                !customerGST.trim()
              ) {
                alert("Please fill all required fields");
                return;
              }

              setIsPrinting(true);
              setTimeout(() => {
                window.print();
                // onClose();
                handleClose();
                handleUpdateStatus("paid");
                setIsPrinting(false);
              }, 100);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded print-hidden"
          >
            Print
          </button> */}
          <button
            onClick={() => {
              if (
                !customerName.trim() ||
                !customerMobile.trim() ||
                !customerGST.trim()
              ) {
                alert("Please fill all required fields");
                return;
              }

              const shouldStore = window.confirm(
                "Do you want to store this invoice?"
              );
              if (shouldStore) {
                const invoiceData = {
                  tableId,
                  invoiceNumber,
                  customerName,
                  customerMobile,
                  customerGST,
                  items: Object.keys(cart).map((item) => ({
                    name: item,
                    qty: cart[item],
                    price: getPrice(item),
                    total: getPrice(item) * cart[item],
                  })),
                  subtotal: subtotal.toFixed(2),
                  cgst: cgst.toFixed(2),
                  sgst: sgst.toFixed(2),
                  grandTotal: total.toFixed(2),
                  date: new Date().toLocaleString(),
                };

                // Get existing invoices or initialize an empty array
                const existingInvoices =
                  JSON.parse(localStorage.getItem("invoices")) || [];
                existingInvoices.push(invoiceData);
                localStorage.setItem(
                  "invoices",
                  JSON.stringify(existingInvoices)
                );
              }

              setIsPrinting(true);
              setTimeout(() => {
                window.print();
                handleClose();
                handleUpdateStatus("paid");
                setIsPrinting(false);
              }, 100);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded print-hidden"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
