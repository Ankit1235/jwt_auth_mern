import express from "express";

const app = express();
const PORT = 5500;

app.listen(PORT, () =>
{
    console.log("Server is listeing at PORT", PORT);
});


