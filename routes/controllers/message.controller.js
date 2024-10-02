import { Router } from "express";
import Message from "../models/message.model.js";

const router = Router();

//message endpoint
router.post("/message/:room", async (request, response) => {
    try {
        const message = new Message({
            // ...request.body,
            date: request.body.date,
            name: request.body.user,
            post: request.body.post
            // room: request.params.room,
        });
        await message.save();
        response.send({
            message: "Post successfully added."
        });
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//displays all messages created 
router.get("/message/:room", async (request, response) => {
    try {
        const allMessages = await Message.find({});
        response.send(allMessages);
    }  catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//updates message in database
router.put("/message/:_id", async (request, response) => {
    try {
        const updateMessage = await Message.findOneAndUpdate({ _id: request.params._id }, request.body, {new: true});
        response.send(updateMessage);
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//deletes message from database 
router.delete("/message/:_id", async (request, response) => {
    try {
        const deleteMessage = await Message.deleteOne({ _id: request.params._id });
        response.send(deleteMessage);
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

export default router;