import { Router } from 'express';
import Room from './models/room.model.js';
import Message from './models/message.model.js';
import User from './models/user.model.js';

const router = Router();

//room controllers
//creates new room submiited by owner
router.post("/room", async (request, response) => {
    try {
        const room = new Room({
            name: request.body.name,
            owner: request.body.owner,
        });
        await room.save();
        response.send({
            message: "Room successfully created."
        });
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//displays all rooms created
router.get("/room", async (request, response) => {
    try {
        const allRooms = await Room.find({});
        response.send(allRooms);
    } catch (err) {
        response.status(500).send({
            message: err.message
        })
    } 
});

//updates room in database
router.put("/room/:id", async (request, response) => {
    try {
        const updateRoom = await Room.findOneAndUpdate({ _id: request.params._id }, request.body, {new: true});
        response.send(updateRoom);
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//deletes room from database
router.delete("/room/:_id", async (request, response) => {
    try {
        const deleteRoom = await Room.deleteOne({ _id: request.params._id });
        response.send(deleteRoom);
    } catch (err){
        response.status(500).send({
            messgae: err.message
        });
    }
});

//user controllers
//user endpoint
router.post("/room", async (request, response) => {
    try {
        const checkUser = await User.exists({
            username: request.body.username
        });
        if (checkUser === null){
            const user = new User({
                username: request.body.username
            });
            await user.save();
        } else {
            response.send("Username already exists. Please select another username.")
        }
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//updates user in database
router.put("/user/:_id", async (request,resopnse) => {
    try {
        const updateUser = await User.findOneAndUpdate({ _id: request.params._id }, request.body, {new: true});
        resopnse.send(updateUser);
    } catch (err) {
        resopnse.status(500).send({
            message: err.message
        });
    }
});

//deletes user from database
router.delete("/user/:_id", async (request, response) => {
    try {
        const deleteUser = await User.deleteOne({ _id: request.params._id });
        response.send(deleteUser);
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//message controllers
//message endpoint
router.post("/message/:room", async (request, response) => {
    try {
        const message = new Message({
            ...request.body,
            user: request.user._id,
            room: request.params.room,
            post: request.body.post
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

//post endpoint
router.post("/message/:room", async (request, response) => {
    try {
        const post = new Message({
            date: request.body.date,
            user: request.body.user,
            post: request.body.post
        });
        await post.save();
        response.send({
            message: "Room successfully created."
        });
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//displays all post created in each individual chatbox
router.get("/message/:room", async (request, response) => {
    try {
        const allPost = await Message.find({});
        response.send(allPost)
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

export default router;

