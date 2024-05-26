import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connected to ${process.env.DB_NAME} database`);
  } catch (error) {
    console.log("CONNECTION TO DB FAILED!!", error.message);
  }
};

export default connectToDb;
