import express, { json } from "express";
import cors from "cors";
import userRouter from "./routes/user.router";
const app = express();
// app.use(cors);
app.use(json());
// create user router and add route handlers
app.use("/users", userRouter);
export default app;
