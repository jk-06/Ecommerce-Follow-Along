// const express = require("express");
// const app = express();
// const ErrorHandler = require("./middleware/error");
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const router = require("./controller/user.js");
// const cors =  require("cors");
// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());
// //app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use("/",express.static("uploads"));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(err.statusCode || 500).json({
//         success: false,
//         message: err.message || "Internal Server Error",
//     });
// });
// // config
// if (process.env.NODE_ENV !== "PRODUCTION") {
//     require("dotenv").config({
//         path: "config/.env",
//     });
// };
// const product = require("./controller/product")
// app.use(bodyParser.json())
// app.use(ErrorHandler);
// app.use("/api/v2/user", router)
// app.use("/api/v2/product", router)

// module.exports = app;

const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const ErrorHandler = require("./middleware/error");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Configure CORS to allow requests from React frontend
app.use(cors({
  origin: 'http://localhost:3000', // Update this if your frontend is hosted elsewhere
  credentials: true, // Enable if you need to send cookies or authentication headers
}));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Serve static files for uploads and products
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/products', express.static(path.join(__dirname, 'products')));

// Import Routes
const userRoutes = require("./controller/user");
const productRoutes = require('./controller/product');

// Route Handling
app.use("/api/v2/user", userRoutes);
app.use("/api/v2/product", productRoutes);

// Error Handling Middleware
app.use(ErrorHandler);

module.exports = app;
