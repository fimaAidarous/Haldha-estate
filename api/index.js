import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import autherRouter from './routes/authenRoute.js';
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

app.listen (500, () => {
    console.log('Server is running on port 500!');
}
);

app.use("/api/user", userRouter);
app.use('/api/auth',autherRouter);

// Middleware
app.use((err, req,res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});