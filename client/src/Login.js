// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setAuth }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     if (!username || !password) {
//       alert("Please enter both username and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await res.json();
//       setLoading(false);

//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       // Store token in localStorage
//       localStorage.setItem("token", data.token);
//       setAuth(true);
//       navigate("/"); // Redirect to dashboard
//     } catch (err) {
//       setLoading(false);
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="w-full max-w-sm p-8 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Admin Login
//         </h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className={`w-full text-white py-2 rounded transition duration-200 ${
//             loading
//               ? "bg-blue-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
