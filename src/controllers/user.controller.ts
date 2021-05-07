import { RequestHandler } from "express";
import User from "../models/user.model";

export const findAllUsers: RequestHandler = async (req, res, next) => {
  const allUsers = await User.find();
  res.status(200).json({
    message: "All users found",
    data: [...allUsers],
  });
};

export const createUser: RequestHandler = async (req, res, next) => {
  let { body } = req;
  let newUser = new User(body);
  newUser = await newUser.save();
  res.status(201).json({
    message: "User created",
    data: {
      user: newUser,
    },
  });
};
