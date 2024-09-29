import React, { useState } from "react";
import "./styles/AddRoom.css";
import { useParams } from "react-router-dom";

export default function DisplayMessages() {
    const [body, setBody] = useState();
    let { room } = useParams();

    async function postMessage(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/message/${room}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                room,
                body
            })
        })

        const responseBody = await response.json();

        if (response.status === 200) {
            console.log(responseBody);
        } else {
            console.log(responseBody.message);
        }
    }

    return (
    <form onSubmit={DisplayMessages} class='AddRoom'>
        <h3>Add Message</h3>
        <textarea placeholder="body" onChange={(e) => setBody(e.target.value)}></textarea>
        <button type="submit">Post</button>
    </form>
        )
}
