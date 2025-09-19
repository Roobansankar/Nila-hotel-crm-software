const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   const token = req.header("Authorization")?.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "Access Denied" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.admin = decoded;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };

// module.exports = auth;

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log("🔐 Incoming Token:", token);

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token Decoded:", decoded);
    req.admin = decoded;
    next();
  } catch (err) {
    console.error("❌ Token Verification Failed:", err.message);
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = auth;
