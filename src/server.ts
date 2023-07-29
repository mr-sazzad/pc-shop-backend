import mongoose from "mongoose";
import app from "./app";

const port = process.env.APPLICATION_PORT;

const connectDB = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URI as string);

    console.log("Database Connected");

    app.listen(port, () => {
      console.log(`PC Store listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

connectDB();
