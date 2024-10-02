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
            <div>
            {posts.map((list, index) => (
                    <h2 key={index} className="border-4 border-solid rounded-full border-white p-5 mb-9 font-bold">
                        {/* <div className="text-2xl" >User:</div> */}
                        <div className="text-4xl mb-2">{list.name} <br></br></div>
                        <div className="pb-5 font-teal">Message: {list.post}<br></br></div>
                        <div>{list.date}</div><br></br>
                    </h2>
                ))}
            </div>
        </div>
    )
}