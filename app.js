// import express from "express";
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const testRouter = require("./routes/test");



const port = 5500;

//set routes from handlers/endpoints
app.use("/", indexRouter);
app.use("/test", testRouter);


//starts server
app.listen(port, () => {
    console.log(`React-chitchat-app is now running on port ${port}.`)
});
