const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = _id => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signinUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signin(email, password);

    const token = createToken(user._id);

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const signupUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;

  try {
    const user = await User.signup(email, firstName, lastName, password);

    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const userData = await User.findById(userId);

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { signinUser, signupUser, getUser };
