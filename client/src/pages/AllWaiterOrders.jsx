// src/pages/AllWaiterOrders.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const AllWaiterOrders = () => {
  const [usernames, setUsernames] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // 1. Fetch usernames from backend
    axios
      .get("http://localhost:5000/api/waiter/usernames")
      .then((res) => setUsernames(res.data))
      .catch((err) => console.error("❌ Failed to load usernames", err));

    // 2. Get orders from localStorage
    const localOrders = JSON.parse(localStorage.getItem("waiterOrders")) || [];
    setOrders(localOrders);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Waiter Orders</h2>

      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-4 py-2">Waiter</th>
            <th className="border px-4 py-2">Table</th>
            <th className="border px-4 py-2">Items</th>
            <th className="border px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{order.waiter || "-"}</td>
              <td className="border px-4 py-2">{order.tableId}</td>
              <td className="border px-4 py-2">
                {order.items?.map((item, i) => (
                  <div key={i}>
                    {item.name} × {item.quantity}
                  </div>
                ))}
              </td>
              <td className="border px-4 py-2">
                {new Date(order.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllWaiterOrders;
