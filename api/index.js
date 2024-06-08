import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import authenRouter from './routes/authenRoute.js';
import cookieParser from 'cookie-parser';


dotenv.config();

mongoose
.connect(process.env.mongo)
.then( () => {
 console.log('Conected to MongoDB')
})
.catch((err) => {
 console.log(err);
});
const app = express();

app.use(express.json());

app.use(cookieParser());

app.listen (8000, () => {
    console.log('Server is running on port 8000!');
}
);
app.use("/api/user", userRouter);
app.use('/api/auth',authenRouter);

// Middleware
app.use((err, req,res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});