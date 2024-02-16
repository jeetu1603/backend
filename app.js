import express from "express";
import { config } from "dotenv";
import course from "./routes/courseRoutes.js";
import user from "./routes/userRoutes.js";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";

const app = express();
config({
  path: "./config/config.env",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", course);
app.use("/api/v1", user);

app.use(ErrorMiddleware);

export default app;
