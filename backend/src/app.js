import express from "express";
import { config } from "dotenv";
import { connectDb } from "./utils/connect.js";
import cookieParser from "cookie-parser"

import userRoute  from "./routes/user.js"
import { errorMidleware } from "./middlewares/error.js";

config({
    path: "./.env"
});

const app = express();
app.use(express.json())
app.use(cookieParser())
//db connect
const port = process.env.PORT || 8000;
const mongoURI = process.env.DATABASE_URL || "";
connectDb(mongoURI);

app.use("/api/v1/user",userRoute);
app.use(errorMidleware)

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
});