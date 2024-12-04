import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DisplayChatbox() {
    const [posts, setPosts] = useState([]);
    let { room } = useParams();


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
                        <div className="text-md">Posted: {list.date} </div><br></br>
                        <div className="btn btn-primary hover:bg-transparent hover:text-primary font-bold mb-5">Delete</div>
                        <br></br>
                        <div className="btn btn-primary hover:bg-transparent hover:text-primary font-bold mb-5">Edit</div>
                    </h2>
                ))}
            </div>
        </div>
    )
}