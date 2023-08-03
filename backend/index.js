import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.js";
const port = process.env.PORT || 5000;
connectDB();
const app = express();

// Allow requests from the specified origin
const allowedOrigins = ["http://127.0.0.1:5173", "http://localhost:5000"]; // Add more origins if needed
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.get("/", (req, res) => {
  res.send("api working");
});

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
app.use("/api/products", productRoutes);
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
