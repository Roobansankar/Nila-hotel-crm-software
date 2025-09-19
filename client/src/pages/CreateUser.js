import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // Admin token
      const res = await axios.post(
        "http://localhost:5000/api/user/create",
        { username, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message);
      setUsername("");
      setPassword("");
    } catch (err) {
      setMessage(err.response?.data?.message || "Error creating user");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create User</h2>
        {message && (
          <p className="text-center text-sm text-blue-500">{message}</p>
        )}
        <form onSubmit={handleCreateUser} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
