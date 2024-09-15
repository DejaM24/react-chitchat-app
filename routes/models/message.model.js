import { Schema, model } from "mongoose";

const messageSchema = new Schema({
    when: {
        type: Date,
        default: Date.now
    },
    user: String,
    room: String,
    post: String
});

export default model("Message", messageSchema);