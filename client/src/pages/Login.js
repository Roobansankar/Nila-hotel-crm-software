// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setAuth }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/admin/login", {
//         username,
//         password,
//       });
//       localStorage.setItem("token", res.data.token);
//       setAuth(true);
//       navigate("/");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           Admin Login
//         </h2>
//         {error && (
//           <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
//         )}
//         <form onSubmit={handleLogin} className="space-y-5">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setAuth }) => {
//   const [loginType, setLoginType] = useState("admin"); // "admin" or "user"
//   const [adminUsername, setAdminUsername] = useState("");
//   const [adminPassword, setAdminPassword] = useState("");
//   const [userUsername, setUserUsername] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const username = loginType === "admin" ? adminUsername : userUsername;
//     const password = loginType === "admin" ? adminPassword : userPassword;

//     try {
//       const url =
//         loginType === "admin"
//           ? "http://localhost:5000/api/admin/login"
//           : "http://localhost:5000/api/user/login";

//       const res = await axios.post(url, { username, password });

//       // Store token and login type
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("loginType", loginType);

//       setAuth(true);

//       if (loginType === "admin") {
//         navigate("/");
//       } else {
//         navigate("/user-kots"); // User-specific page
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           {loginType === "admin" ? "Admin Login" : "User Login"}
//         </h2>

//         {/* Error Message */}
//         {error && (
//           <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
//         )}

//         {/* Toggle Buttons */}
//         <div className="flex mb-4 rounded-lg overflow-hidden border border-gray-300">
//           <button
//             type="button"
//             className={`flex-1 py-2 transition ${
//               loginType === "admin"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setLoginType("admin")}
//           >
//             Admin
//           </button>
//           <button
//             type="button"
//             className={`flex-1 py-2 transition ${
//               loginType === "user"
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-200 text-gray-700"
//             }`}
//             onClick={() => setLoginType("user")}
//           >
//             User
//           </button>
//         </div>

//         {/* Admin Login Form */}
//         {loginType === "admin" && (
//           <form onSubmit={handleLogin} className="space-y-5">
//             <input
//               type="text"
//               placeholder="Admin Username"
//               value={adminUsername}
//               onChange={(e) => setAdminUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Admin Password"
//               value={adminPassword}
//               onChange={(e) => setAdminPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300"
//             >
//               Login as Admin
//             </button>
//           </form>
//         )}

//         {/* User Login Form */}
//         {loginType === "user" && (
//           <form onSubmit={handleLogin} className="space-y-5">
//             <input
//               type="text"
//               placeholder="User Username"
//               value={userUsername}
//               onChange={(e) => setUserUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <input
//               type="password"
//               placeholder="User Password"
//               value={userPassword}
//               onChange={(e) => setUserPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300"
//             >
//               Login as User
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setAuth }) => {
//   const [loginType, setLoginType] = useState("admin"); // "admin", "user", "waiter"
//   const [adminUsername, setAdminUsername] = useState("");
//   const [adminPassword, setAdminPassword] = useState("");
//   const [userUsername, setUserUsername] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [waiterUsername, setWaiterUsername] = useState("");
//   const [waiterPassword, setWaiterPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     let username, password, url;

//     if (loginType === "admin") {
//       username = adminUsername;
//       password = adminPassword;
//       url = "http://localhost:5000/api/admin/login";
//     } else if (loginType === "user") {
//       username = userUsername;
//       password = userPassword;
//       url = "http://localhost:5000/api/user/login";
//     } else {
//       username = waiterUsername;
//       password = waiterPassword;
//       url = "http://localhost:5000/api/waiter/login";
//     }

//     try {
//       const res = await axios.post(url, { username, password });
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("loginType", loginType);
//       setAuth(true);

//       if (loginType === "admin") navigate("/");
//       else if (loginType === "user") navigate("/user-kots");
//       else navigate("/waiter-dashboard");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           {loginType.charAt(0).toUpperCase() + loginType.slice(1)} Login
//         </h2>

//         {error && (
//           <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
//         )}

//         {/* Tabs */}
//         <div className="flex mb-4 rounded-lg overflow-hidden border border-gray-300">
//           {["admin", "user", "waiter"].map((type) => (
//             <button
//               key={type}
//               type="button"
//               className={`flex-1 py-2 transition ${
//                 loginType === type
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200 text-gray-700"
//               }`}
//               onClick={() => setLoginType(type)}
//             >
//               {type.charAt(0).toUpperCase() + type.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Admin Form */}
//         {loginType === "admin" && (
//           <form onSubmit={handleLogin} className="space-y-5">
//             <input
//               type="text"
//               placeholder="Admin Username"
//               value={adminUsername}
//               onChange={(e) => setAdminUsername(e.target.value)}
//               required
//               className="input"
//             />
//             <input
//               type="password"
//               placeholder="Admin Password"
//               value={adminPassword}
//               onChange={(e) => setAdminPassword(e.target.value)}
//               required
//               className="input"
//             />
//             <button className="btn-blue">Login as Admin</button>
//           </form>
//         )}

//         {/* User Form */}
//         {loginType === "user" && (
//           <form onSubmit={handleLogin} className="space-y-5">
//             <input
//               type="text"
//               placeholder="User Username"
//               value={userUsername}
//               onChange={(e) => setUserUsername(e.target.value)}
//               required
//               className="input"
//             />
//             <input
//               type="password"
//               placeholder="User Password"
//               value={userPassword}
//               onChange={(e) => setUserPassword(e.target.value)}
//               required
//               className="input"
//             />
//             <button className="btn-green">Login as User</button>
//           </form>
//         )}

//         {/* Waiter Form */}
//         {loginType === "waiter" && (
//           <form onSubmit={handleLogin} className="space-y-5">
//             <input
//               type="text"
//               placeholder="Waiter Username"
//               value={waiterUsername}
//               onChange={(e) => setWaiterUsername(e.target.value)}
//               required
//               className="input"
//             />
//             <input
//               type="password"
//               placeholder="Waiter Password"
//               value={waiterPassword}
//               onChange={(e) => setWaiterPassword(e.target.value)}
//               required
//               className="input"
//             />
//             <button className="btn-purple">Login as Waiter</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [loginType, setLoginType] = useState("admin");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [userUsername, setUserUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [waiterUsername, setWaiterUsername] = useState("");
  const [waiterPassword, setWaiterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let username, password, url;

    if (loginType === "admin") {
      username = adminUsername;
      password = adminPassword;
      url = "http://localhost:5000/api/admin/login";
    } else if (loginType === "user") {
      username = userUsername;
      password = userPassword;
      url = "http://localhost:5000/api/user/login";
    } else {
      username = waiterUsername;
      password = waiterPassword;
      url = "http://localhost:5000/api/waiter/login";
      localStorage.setItem("waiterUsername", waiterUsername);
    }

    try {
      const res = await axios.post(url, { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loginType", loginType);
      setAuth(true);

      if (loginType === "admin") navigate("/");
      else if (loginType === "user") navigate("/user-kots");
      else navigate("/waiter-dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          {loginType.charAt(0).toUpperCase() + loginType.slice(1)} Login
        </h2>

        {error && (
          <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
        )}

        {/* Tabs */}
        <div className="flex mb-6 overflow-hidden rounded-lg border border-gray-300">
          {["admin", "user", "waiter"].map((type) => (
            <button
              key={type}
              type="button"
              className={`flex-1 py-2 text-sm font-medium transition ${
                loginType === type
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setLoginType(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Shared Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder={`${
              loginType.charAt(0).toUpperCase() + loginType.slice(1)
            } Username`}
            value={
              loginType === "admin"
                ? adminUsername
                : loginType === "user"
                ? userUsername
                : waiterUsername
            }
            onChange={(e) => {
              if (loginType === "admin") setAdminUsername(e.target.value);
              else if (loginType === "user") setUserUsername(e.target.value);
              else setWaiterUsername(e.target.value);
            }}
            required
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder={`${
              loginType.charAt(0).toUpperCase() + loginType.slice(1)
            } Password`}
            value={
              loginType === "admin"
                ? adminPassword
                : loginType === "user"
                ? userPassword
                : waiterPassword
            }
            onChange={(e) => {
              if (loginType === "admin") setAdminPassword(e.target.value);
              else if (loginType === "user") setUserPassword(e.target.value);
              else setWaiterPassword(e.target.value);
            }}
            required
            className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-medium text-sm transition ${
              loginType === "admin"
                ? "bg-blue-600 hover:bg-blue-700"
                : loginType === "user"
                ? "bg-green-600 hover:bg-green-700"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            Login as {loginType.charAt(0).toUpperCase() + loginType.slice(1)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
