require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");

const app = express();

app.use(express.json()); // Parse incoming JSON requests

// Log incoming request paths and methods
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Route handlers
app.use("/api/products", productRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/cart", cartRoutes);

// Use port 10000 or the environment's port
const PORT = 10000;

// Connect to MongoDB and start the server
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.vevs0.mongodb.net/vogue?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to db");
      console.log("listening on port", PORT);
    });
  })
  .catch(error => {
    console.log(error);
  });
