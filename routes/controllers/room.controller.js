import { Router } from "express";
import Room from "../models/room.model.js";

const router = Router();

//room endpoint
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
        response.send(allRooms)
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

//updates room in database
router.put("/room", async (request, response) => {
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
router.delete("/room", async (request, response) => {
    try {
        const deleteRoom = await Room.deleteOne({ _id: request.params._id });
        response.send(deleteRoom);
    } catch (err){
        response.status(500).send({
            messgae: err.message
        });
    }
});

export default router;