import mongoose from "mongoose";
import "dotenv/config";


const dbUrl:string = process.env.MONGODB_URI || "";

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any) => {
            console.log(`Connected to database ${data.connection.host}`);
        });
    } catch (error:any) {
        console.log(`Error: ${error.message}`);
        setTimeout(connectDB, 5000);
    }
};

export default connectDB;