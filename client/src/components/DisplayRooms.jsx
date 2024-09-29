import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './styles/DisplayRooms.css';

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
            <h1 className="Header1">ChatBoxes</h1>
            <div className="fetchData">
                {records.map((list, index) => (
                    <h2 key={index}>
                        {list.name}
                        {list.owner}
                        <Link to={'/'}>Home</Link>
                    </h2>
                ))}
            </div>
        </div>
    )
}