import { Router } from "express";
import { findAllUsers, createUser } from "../controllers/user.controller";
const router = Router();

// get all users from the database
// create a user
router.route("/").get(findAllUsers).post(createUser);

export default router;
