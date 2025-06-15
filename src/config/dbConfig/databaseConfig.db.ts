import 'dotenv/config';
import mongoose from 'mongoose';
const MONGODB_URL: string = process.env.MONGODB_CONNECTION_STRING  as string;
const connectedToMongoDB = async() => {
    try {
        if (!MONGODB_URL) {
            console.log("MONGODB URL doesn't exist!");
            return;
        }
        await mongoose.connect(MONGODB_URL);
        console.log("DB connection is successful!");
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}
export default connectedToMongoDB;