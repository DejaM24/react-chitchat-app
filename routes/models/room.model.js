import { Schema, model } from "mongoose";

const roomSchema = new Schema({
    name: String
});

export default model("Room", roomSchema);