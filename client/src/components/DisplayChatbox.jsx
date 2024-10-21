import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from 'date-fns';

export default function DisplayChatbox() {
    const [posts, setPosts] = useState([]);
    let { room } = useParams();
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MMMM dd, yyyy');

    useEffect(() => {
        fetch(`http://localhost:3000/message/${room}`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, [posts]);

    return (
        <div>
            {/* message board posts */}
            <div>
                {posts.map((list, index) => (
                    <h2 key={index} className="border-4 border-solid rounded-full border-white p-5 mb-9 font-bold">
                        <div className="text-3xl mb-2">{list.user} <br></br></div>
                        <div className="text-2xl pb-5 font-teal">Message: {list.post}<br></br></div>
                        <div className="text-md">Posted: {formattedDate}</div><br></br>
                    </h2>
                ))}
            </div>
        </div>
    )
}