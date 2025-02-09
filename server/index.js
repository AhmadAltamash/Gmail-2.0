import express from 'express'

const app = express();

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    return res.status(200).json({message: "working"});
});