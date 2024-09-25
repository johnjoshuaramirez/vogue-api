const Product = require("../models/productModel");

// POST a new product
const addProduct = async (req, res) => {
  const { name, price, description, stock, imageUrl, category, trending } =
    req.body;

  // add data to db
  try {
    const product = await Product.create({
      name,
      price,
      description,
      stock,
      imageUrl,
      category,
      trending
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a single product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error("Error fetching product by ID: ", err);
    res.status(500).json({ message: "Failed to get product" });
  }
};

// GET products based on category
const getProducts = async (req, res) => {
  try {
    const { category, search } = req.query;

    let query = {};
    if (category) {
      query.category = category;
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const products = await Product.find(query);
    console.log(query);
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products", err);
    res.status(500).json({ message: "Failed to get products" });
  }
};

// GET all trending products
const getTrendingProducts = async (req, res) => {
  try {
    const trendingProducts = await Product.find({ trending: true });

    res.status(200).json(trendingProducts);
  } catch (err) {
    console.error("Error fetching trending products", err);
    res.status(500).json({ message: "Failed to get trending products" });
  }
};

module.exports = {
  addProduct,
  getProduct,
  getProducts,
  getTrendingProducts
};
