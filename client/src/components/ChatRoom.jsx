
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ChatRoom() {
    const { roomId, room } = useParams();
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    const [showModals, setShowModals] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:3000/`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => (console.log(err)))
    }, [posts])

    function navigateBack() {
        navigate('/')
    }

    async function createRoom(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/room/${room}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user,
                post,
            })
        });

        const responseBody = await response.json();

        if (response.status === 200) {
            console.log(responseBody);
        } else {
            console.log(responseBody.message)
        }
    }
    return (
        <div>
            {/* back button */}
            <div>
                <button onClick={navigateBack}>Back</button>
            </div>

            {/* page header */}
            <h1>Welcome to the {roomId} Chat Room</h1>

            {/* add a new message button  */}
            <button
                className="flex btn-outline btn-primary hover:bg-primary font-bold text-2xl mx-72 mt-8 mb-8"
                onClick={() => setShowModals(true)}>
                + Add A New Message
            </button>

            {showModals ? (<>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="bg-neutral-100 rounded-2xl shadow-xl relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-4xl text-neutral-950 font-semibold text-black mx-20 my-36">
                                    Create a New Message
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModals(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                                <div className="relative p-18 mx-20 mt-6 flex flex-auto">
                                    <form className="my-4 text-lg leading-relaxed flex flex-col" onSubmit={createRoom}>

                                        <label className="text-neutral-950 font-bold"> Name:</label>
                                        <input className="rounded-md p-1" value={user} onChange={e => setUser(e.target.value)} placeholder="Type here..."></input>
                                        <br></br>

                                        <label className="text-neutral-950 font-bold"> Message:</label>
                                        <textarea className="rounded-md p-1 pb-20 pr-10" value={post} onChange={e => setPost(e.target.value)} placeholder="Type here..."></textarea>
                                        <br></br>



                                        <button
                                            className="block btn-outline btn-secondary hover:bg-secondary font-bold"
                                            type="submit"
                                            onSubmit={() => setShowModals(false)}>Post</button>
                                        <br></br>

                                        <button
                                            className="block btn-outline btn-primary hover:bg-primary font-bold"
                                            type="button"
                                            onClick={() => setShowModals(false)}>Close</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null}

            {/* displays of messages */}
            <div>
                {posts.map((list, index) => (
                    <h2 key={index} className="border border-solid">
                        <div>{list.name}</div>
                        <div>{list.user}</div>
                    </h2>
                ))}
            </div>

        </div>
    )
}