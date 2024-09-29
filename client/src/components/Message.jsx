import React from "react";
import DisplayMessages from "./DisplayMessages";
import MessageInput from "./MessageInput";
import './styles/Rooms.css';

export default function Messsage() {
    return (
        <div className="Room">
            <MessageInput></MessageInput>
            <DisplayMessages></DisplayMessages>
        </div>
    )
}