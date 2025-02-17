import express from 'express';
import dotenv from 'dotenv';
import dbconfig from './DB/dbconfig.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import userRouter from './Routes/userRoutes.js';
import emailRouter from './Routes/emailRoutes.js'

dotenv.config({});
dbconfig();

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions= {
    origin: 'https://gmail-2-0-1.onrender.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
app.use(cors(corsOptions));

//routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/email", emailRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
