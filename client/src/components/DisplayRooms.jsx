import React, { useState, useEffect } from "react";
import './styles/DisplayRooms.css';
import { Link } from "react-router-dom";

export default function DisplayRooms() {
    const [records, setRecords] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/room")
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, [records]);

    return (
        <div>
            <h1 className="font-medium mb-5">ChatBoxes</h1>

            <div>
                {records.map((list, index) => (
                    <h2 key={index} className="border-4 border-solid rounded-full border-white p-5 mb-9 font-bold">
                        <div className="text-2xl">Let's discuss...</div>
                        <div className="text-4xl mb-2">{list.name} <br></br></div>
                        <div className="pb-5 font-teal">Chatbox Owner: {list.owner}<br></br></div>
                        <Link to={`/message/${list._id}`} className="border-2 rounded-full p-2 px-5 btn-outline btn-primary hover:bg-primary">Open</Link><br></br>
                    </h2>
                ))}
            </div>
        </div>
    )
}