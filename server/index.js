// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// const adminRoutes = require("./routes/adminRoutes");
// app.use("/api/admin", adminRoutes);

// const userRoutes = require("./routes/userRoutes");
// app.use("/api/user", userRoutes);

// const waiterRoutes = require("./routes/waiterRoutes");
// app.use("/api/waiter", waiterRoutes);

// app.use("/api/categories", require("./routes/categories"));
// app.use("/api/items", require("./routes/items"));
// app.use("/api/prices", require("./routes/prices"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();

// // ✅ Explicit CORS config for Vercel
// const corsOptions = {
//   origin: "*", // allow any origin
//   methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
// };

// app.use(cors(corsOptions));

// app.use(express.json());

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// // Routes
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/user", require("./routes/userRoutes"));
// app.use("/api/waiter", require("./routes/waiterRoutes"));
// app.use("/api/categories", require("./routes/categories"));
// app.use("/api/items", require("./routes/items"));
// app.use("/api/prices", require("./routes/prices"));

// const PORT = process.env.PORT || 5000;

// // ✅ If running locally
// if (process.env.NODE_ENV !== "production") {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// }

// // ✅ Export for Vercel
// module.exports = app;

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// ✅ Explicit CORS config for Vercel
const corsOptions = {
  origin: "*", // allow any origin
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/waiter", require("./routes/waiterRoutes"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/items", require("./routes/items"));
app.use("/api/prices", require("./routes/prices"));

// ✅ Test route (important for checking deployment)
app.get("/", (req, res) => {
  res.send("🚀 Backend API is running on Vercel!");
});

const PORT = process.env.PORT || 5000;

// ✅ Run locally only
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running locally on port ${PORT}`));
}

// ✅ Export app for Vercel
module.exports = app;
