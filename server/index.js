import express from 'express';
import dotenv from 'dotenv';
import dbconfig from './DB/dbconfig.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

dotenv.config({});
dbconfig();

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions= {
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
