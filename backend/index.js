import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.js";
const port = process.env.PORT || 5000;
connectDB();
const app = express();

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
