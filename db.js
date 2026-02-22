import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connectToDb() {
    try {
        const result = await mongoose.connect(process.env.MONGO_URI,{
            dbName: process.env.DB_NAME,
        });
        if (result) {
            console.log("Connected to MongoDB successfully.");
            return true;
        } else {
            console.error("Failed to connect to MongoDB.");
            return false;
        }
    } catch (err) {
        console.error("An error occurred while connecting to MongoDB:", err);
        return false;
    }
};

export async function closeDbConnection() {
    try {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB.");
    } catch (err) {
        console.error("An error occurred while disconnecting from MongoDB:", err);
    }
};  

// export default connectToDb;