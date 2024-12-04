import React from "react";
import { Link } from "react-router-dom";

export default function RoomList() {
const rooms = ['Nature', 'Cars', 'Movies', 'Food', 'Sports']

    return (
        <div>
            <h2 className="text-secondary">Available Rooms</h2>
         
            <ul>
                {rooms.map((room, index) => (
                    <li key={index}>
                        <Link to={`/room/${room}`} className="text-primary hover:text-secondary">{room}</Link>
                    </li>
                ))}
            </ul>
    
        </div>
    )
}

