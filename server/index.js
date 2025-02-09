import express from 'express';
import dotenv from 'dotenv';
import dbconfig from './DB/dbconfig.js';

dotenv.config({});
dbconfig();

const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    return res.status(200).json({message: "working"});
});