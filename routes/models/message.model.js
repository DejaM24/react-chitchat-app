import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    user: String,
    post: String
});

export default model("Message", messageSchema);