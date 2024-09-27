import express, { request, response } from "express";
import "dotenv/config";
import cors from "cors";
import indexRouter from "./routes/index.js";
import roomRouter from "./routes/controllers/room.controller.js";
import mongoose from "mongoose";


//runs express server
const app = express();
app.use(express.json());
app.use(cors());
app.listen(process.env.SERVER_PORT, () => {
    console.log(`React-chitchat-app is now running on port ${process.env.SERVER_PORT}.`)
});

//set routes from handlers/endpoints
app.use("/", indexRouter);
app.use("/", roomRouter);

//mongoose connection
mongoose.connect(process.env.ATLAS_CONNECTION);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Database successfully connected.");
});

db.on("error", console.error.bind(console, "Connection error:"))

