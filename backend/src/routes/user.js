import express from "express";
import { signUp } from "../controllers/user";

const app = express.Router();

app.get("/register", signUp);

export default app;
