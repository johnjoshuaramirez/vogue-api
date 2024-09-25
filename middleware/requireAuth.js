const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Check if the authorization header exists
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  // Extract token from header
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token missing or malformed" });
  }

  try {
    // Verify token and extract the user's ID
    const { _id } = jwt.verify(token, process.env.SECRET);

    // Attach the user's data to the request object
    req.user = await User.findOne({ _id }).select("_id");

    // Continue to the next middleware
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
