import { Schema, model } from "mongoose";

const roomSchema = new Schema({
    name: String,
    owner: String,
});

export default model("Room", roomSchema);