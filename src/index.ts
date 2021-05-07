import mongoose from "mongoose";
import app from "./app";
import { DB_URL } from "./config/database.config";
// connect to database
// launch app

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((connection) => {
    console.log("Connected to database");
    try {
      app.listen(3000, () => {
        console.log("App launched on port 3000");
      });
    } catch (err) {
      console.log("Error", err);
      throw err;
    }
  })
  .catch((err) => {
    console.log("Error in connecting to database");
  });
