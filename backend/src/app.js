import express from "express";
import { config } from "dotenv";
import { connectDb } from "./utils/connect.js";


config({
    path: "./.env"
});
//db connect
const port = process.env.PORT || 8000;
const mongoURI = process.env.DATABASE_URL || "";
connectDb(mongoURI);
const app = express();

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});