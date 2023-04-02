import asyncHandler from "express-async-handler";
import generateToken from "../../utils/generateToken.js";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const createUser = asyncHandler(async (req, res, next) => {
  const newUser = new User(req.body);
  console.log(newUser);
  try {
    const savedUser = await newUser.save();

    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const userAuth = asyncHandler(async (req, res, next) => {

console.log(req.body);

  const { email, password } = req.body;
  console.log("d65aaaaaaaaaaaaaaaaaaaaamlllllllllllllltttttttttttttttttttiiiiiiiiiiiiiiii");
  console.log(password);

  const savedUser = await User.findOne({ email: email });
  if (savedUser && (await savedUser.matchPassword(password))) {
    res.json({
      _id: savedUser._id,
      name: savedUser.name,
      isAdmin: savedUser.isAdmin,
      token: generateToken(savedUser._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email or password");
  }
});

export const getUserProfile = asyncHandler(async (req, res, next) => {
  console.log("id : " + req.user._id);
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      id: user._id,
      name: user.name,
      isAdmin: user.isAdmin,
    });
  }
});

export const registerUser = asyncHandler(async (req, res, next) => {
  if (await User.findOne({ email: req.body.email })) {
    res.status(400);
    next(new Error("User already exists."));
   return
  }



  const newUser = new User(req.body);

  try {
    
    const savedUser = await newUser.save();
    res.status(201).json({
      _id: savedUser._id,
      email : savedUser.email , 
      name: savedUser.name,
      isAdmin: savedUser.isAdmin,
      token: generateToken(savedUser._id),
    });
   next()
  } catch (err) {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
    console.log(err)
    res.status(500);
    next(new Error("Something went wrong"));
  }
});

export const updateUser = asyncHandler(async (req, res, next) => {
  try {
    const savedUser = await User.findByIdAndUpdate(
      findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    );
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findUsers = asyncHandler(async (req, res, next) => {
  try {
    const Users = await User.find();

    if (Users) {
      res.status(200).json(Users);
    } else {
      res.status(404);
      err = new Error("User not found");
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export const findUserbyid = asyncHandler(async (req, res, next) => {
  try {
    const Users = await User.findById(req.params.id);

    if (Users) {
      res.status(200).json(Users);
    } else {
      const err = new Error(`not found`);
      res.status(404);
      next(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
