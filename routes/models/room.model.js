import { Schema, model } from "mongoose";

const roomSchema = new Schema({
    name: String,
    descripton: String,
    addedUsers: Array
});

export default model("Room", roomSchema);