import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import { ErrorMiddleware } from './middleware/error';
import userRouter from './routes/user.route';
import courseRouter from './routes/course.route';
import orderRouter from './routes/order.route';
import notificationRoute from './routes/notification.route';
import analyticsRouter from './routes/analytics.route';
import layoutRouter from './routes/layout.route';
import { rateLimit } from 'express-rate-limit'

export const app = express();

// body-parser
app.use(express.json({ limit: '50mb' }));

//cookie-parser
app.use(cookieParser());

//cors => Cross-Origin Resource Sharing
app.use(cors({
    origin: process.env.ORIGIN
}));


// Rate limiter
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
})

// Routes
app.use("/api/v1",userRouter,courseRouter, orderRouter, notificationRoute,analyticsRouter,layoutRouter);


// testing api
app.get('/test', (req:Request, res:Response, next:NextFunction) => {
    res.send(200).json({
        success: true,
        message: "Server is running"
    });
});

// unkonwn route
app.all('*', (req:Request, res:Response , next:NextFunction) => {
    const err = new Error(`Can't find ${req.originalUrl} on this server`) as any;
    err.statusCode = '404';
    next(err);
    })

// Rate limiter    (middleware calls)
app.use(limiter)

app.use(ErrorMiddleware);