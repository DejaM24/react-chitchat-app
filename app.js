import express from "express";
import indexRouter from "./routes/index.js";
import testRouter from"./routes/test.js";


const app = express();
const port = 5500;

//set routes from handlers/endpoints
app.use("/", indexRouter);
app.use("/test", testRouter);


//starts server
app.listen(port, () => {
    console.log(`React-chitchat-app is now running on port ${port}.`)
});
