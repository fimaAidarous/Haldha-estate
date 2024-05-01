import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
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

app.listen (500, () => {
    console.log('Server is running on port 500!');
}
);