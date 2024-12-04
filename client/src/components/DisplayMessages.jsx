import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo2 from '/src/migae-semibold-1.png';
import DisplayDate from './DisplayDate.jsx';
import DisplayChatbox from './DisplayChatbox.jsx';


export default function DisplayMessages() {
    let { room } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');
    const [records, setRecords] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/message/${room}`)
            .then(response => response.json())
            .then(data => setRecords(data))
            .catch(err => console.log(err))
    }, [records]);

    function navigateBack() {
        navigate('/room');
    }

    async function postMessage(e) {
        e.preventDefault();

        const response = await fetch(`http://localhost:3000/message/${room}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                user,
                post
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
        <div>
            {/*navbar*/}
            <div className="navbar fixed top-7 left-10 w-full">
                <div className="navbar-start">
                    <img src={Logo2} className='logo2'></img>
                </div>
                <div className="navbar-end">
                    <button onClick={() => navigateBack()} className="block btn-outline btn-primary hover:bg-primary font-bold mx-32 px-8 py-3">Back</button>
                </div>
            </div>
        
            {/* room header */}
            <h1 className="font-bold mt-28 mb-10 sticky">Welcome to the Chatbox</h1>

            {/* message box */}
            <form onSubmit={postMessage} className='flex items-center flex-col border-2 border-white rounded-md'>
                <h3 className="font-bold text-2xl m-5">Add Message</h3>
                <label>Name:</label>
                <input value={user} onChange={e => setUser(e.target.value)} placeholder='Type here...' className="m-5 rounded-md shadow-lg"></input>
                <label>Message:</label>
                <textarea value={post} onChange={e => setPost(e.target.value)} placeholder="Type here..." className="pb-32 pr-32 m-5 rounded-md shadow-lg"></textarea>
                <label>Date:</label>
                <div className="m-8">{<DisplayDate></DisplayDate>}</div>
                <button type="submit" className="btn-outline btn-primary hover:bg-primary font-bold mb-5">Post</button>
            </form>

            {/* message board header */}
            <div>
                <div className='font-bold text-2xl m-10'>
                    Message Board
                </div>

                {/* other user messages */}
                <div>
                    {<DisplayChatbox></DisplayChatbox>}
                </div>

            </div>

        </div>

    )
}
