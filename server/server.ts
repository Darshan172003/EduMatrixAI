import { app } from "./app";
import 'dotenv/config'
import connectDB from "./utils/db";
import http from 'http';
import cloudinary from 'cloudinary'
import { initSocketServer } from "./socketServer";


const server = http.createServer(app);



// Cloudinary configuration
cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
});

initSocketServer(server);


server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});
