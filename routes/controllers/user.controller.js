import { Router, response } from "express";
import User from "../models/user.model.js";


const router = Router();

//user endpoint
router.post("/", async (request, response) => {
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
router.put("/", async (request,resopnse) => {
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
router.delete("", async (request, response) => {
    try {
        const deleteUser = await User.deleteOne({ _id: request.params._id });
        response.send(deleteUser);
    } catch (err) {
        response.status(500).send({
            message: err.message
        });
    }
});

export default router;