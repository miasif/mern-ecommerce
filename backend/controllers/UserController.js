import User from "../models/User.js";
import Product from "../models/User.js";
import jwt from "jsonwebtoken";

const authUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });

      res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60 * 1000,
      });
      res.json({
        _id: user._id,
        name: user.name,
        email: email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  } catch (error) {
    res.status(401);
    throw new Error("Something went wrong");
  }
};
const registerUser = async (req, res) => {};
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Log out successfully" });
};
const getUserProfile = async (req, res) => {
  res.send("profile");
};
const updateUserProfile = async (req, res) => {};
const getUsers = async (req, res) => {
  res.send("getUsers");
};
const deleteUser = async (req, res) => {};
const getUserByID = async (req, res) => {};
const updateUser = async (req, res) => {};

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByID,
  updateUser,
};
