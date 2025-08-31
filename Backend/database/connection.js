import mongoose from "mongoose";

export const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "hosptalApp",
    })
    .then(() => {
      console.log("connect to mongodb");
    })
    .catch((error) => {
      console.log("db connection error");
    });
};
