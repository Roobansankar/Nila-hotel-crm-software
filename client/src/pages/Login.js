// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = ({ setAuth }) => {
//   const [loginType, setLoginType] = useState("admin");
//   const [adminUsername, setAdminUsername] = useState("");
//   const [adminPassword, setAdminPassword] = useState("");
//   const [userUsername, setUserUsername] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [waiterUsername, setWaiterUsername] = useState("");
//   const [waiterPassword, setWaiterPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // ✅ Base API URL (switches automatically)
//   const API_BASE =
//     process.env.NODE_ENV === "production"
//       ? "https://nila-hotel-crm-software-9gdn.vercel.app" // empty means use the same domain on Vercel
//       : "http://localhost:5000"; // local backend

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     let username, password, url;

//     if (loginType === "admin") {
//       username = adminUsername;
//       password = adminPassword;
//       url = `${API_BASE}/api/admin/login`;
//     } else if (loginType === "user") {
//       username = userUsername;
//       password = userPassword;
//       url = `${API_BASE}/api/user/login`;
//     } else {
//       username = waiterUsername;
//       password = waiterPassword;
//       url = `${API_BASE}/api/waiter/login`;
//       localStorage.setItem("waiterUsername", waiterUsername);
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
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           {loginType.charAt(0).toUpperCase() + loginType.slice(1)} Login
//         </h2>

//         {error && (
//           <p className="mb-4 text-sm text-red-500 text-center">{error}</p>
//         )}

//         {/* Tabs */}
//         <div className="flex mb-6 overflow-hidden rounded-lg border border-gray-300">
//           {["admin", "user", "waiter"].map((type) => (
//             <button
//               key={type}
//               type="button"
//               className={`flex-1 py-2 text-sm font-medium transition ${
//                 loginType === type
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//               onClick={() => setLoginType(type)}
//             >
//               {type.charAt(0).toUpperCase() + type.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Shared Form */}
//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="text"
//             placeholder={`${
//               loginType.charAt(0).toUpperCase() + loginType.slice(1)
//             } Username`}
//             value={
//               loginType === "admin"
//                 ? adminUsername
//                 : loginType === "user"
//                 ? userUsername
//                 : waiterUsername
//             }
//             onChange={(e) => {
//               if (loginType === "admin") setAdminUsername(e.target.value);
//               else if (loginType === "user") setUserUsername(e.target.value);
//               else setWaiterUsername(e.target.value);
//             }}
//             required
//             className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder={`${
//               loginType.charAt(0).toUpperCase() + loginType.slice(1)
//             } Password`}
//             value={
//               loginType === "admin"
//                 ? adminPassword
//                 : loginType === "user"
//                 ? userPassword
//                 : waiterPassword
//             }
//             onChange={(e) => {
//               if (loginType === "admin") setAdminPassword(e.target.value);
//               else if (loginType === "user") setUserPassword(e.target.value);
//               else setWaiterPassword(e.target.value);
//             }}
//             required
//             className="w-full px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className={`w-full py-2 rounded-lg text-white font-medium text-sm transition ${
//               loginType === "admin"
//                 ? "bg-blue-600 hover:bg-blue-700"
//                 : loginType === "user"
//                 ? "bg-green-600 hover:bg-green-700"
//                 : "bg-purple-600 hover:bg-purple-700"
//             }`}
//           >
//             Login as {loginType.charAt(0).toUpperCase() + loginType.slice(1)}
//           </button>
//         </form>
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

  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://nila-hotel-crm-software-9gdn.vercel.app"
      : "http://localhost:5000";

  const handleLogin = async (e) => {
    e.preventDefault();

    let username, password, url;

    if (loginType === "admin") {
      username = adminUsername;
      password = adminPassword;
      url = `${API_BASE}/api/admin/login`;
    } else if (loginType === "kitchen") {
      // ✅ kitchen uses user API
      username = userUsername;
      password = userPassword;
      url = `${API_BASE}/api/user/login`;
    } else if (loginType === "waiter") {
      username = waiterUsername;
      password = waiterPassword;
      url = `${API_BASE}/api/waiter/login`;
      localStorage.setItem("waiterUsername", waiterUsername);
    }

    try {
      const res = await axios.post(url, { username, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("loginType", loginType);
      setAuth(true);

      if (loginType === "admin") navigate("/");
      else if (loginType === "kitchen") navigate("/user-kots");
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
          {["admin", "kitchen", "waiter"].map((type) => (
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
                : loginType === "kitchen"
                ? userUsername
                : waiterUsername
            }
            onChange={(e) => {
              if (loginType === "admin") setAdminUsername(e.target.value);
              else if (loginType === "kitchen") setUserUsername(e.target.value);
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
                : loginType === "kitchen"
                ? userPassword
                : waiterPassword
            }
            onChange={(e) => {
              if (loginType === "admin") setAdminPassword(e.target.value);
              else if (loginType === "kitchen") setUserPassword(e.target.value);
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
                : loginType === "kitchen"
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
