import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo2 from '/src/migae-semibold-1.png';
import DisplayDate from './DisplayDate.jsx';
import DisplayChatbox from './DisplayChatbox.jsx';


export default function DisplayMessages() {
    const [body, setBody] = useState();
    let { room } = useParams();
    const navigate = useNavigate();
    const [roomName, setRoomName] = useState({});
    const [date, setDate] = useState('');
    const [user, setUser] = useState('');
    const [post, setPost] = useState('');

    // const [posts, setPosts] = useState([]);


    // useEffect(() => {
    //     fetch(`http://localhost:3000/message/${room}`)
    //     .then(response => response.json())
    //     .then(data => setPosts(data))
    //     .catch(err => console.log(err))
    // }, [posts]);

    async function listRoom() {
        const data = localStorage.getItem(`${room}`)
        console.log("Room Name:", data);
        if (!data) {
            console.log("Error")
            return;
        }

        const response = await fetch(`http://localhost:3000/message/${room}`, {
            method: "GET",
            header: {
                "content-type": "application/json"
            },
        });

        if (response.status === 200) {
            const body = await response.json();
            setRoomName(body);
        } else {
            console.log("ERROR!")
        }

        useEffect(() => {
            listRoom()
        }, []);
    }

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
                date,
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

            {/* header */}
            <h1 className="font-bold">Welcome to the {room} Chatbox</h1>


            {/* <div>
            {records.indexOf((list) => (
                <div key={list}>
                    <div>{list.name}</div>
                </div> 
            ))}
            </div> */}

            {/* message box */}
            <form className='flex items-center flex-col border-2 border-white rounded-md' onSubmit={postMessage}>
                <h3 className="font-bold text-2xl m-5">Add Comment</h3>
                <label>Name:</label>
                <input value={user} onChange={e => setName(e.target.value)} placeholder='Type here..' className="m-5"></input>
                <label>Post:</label>
                <textarea value={post} onChange={e => setPost(e.target.value)} placeholder="Comment here..." className="p-14 m-5"></textarea>
                <label>Date:</label>
                <div className="m-8">{<DisplayDate></DisplayDate>}</div>
                <button type="submit" className="btn-outline btn-primary hover:bg-primary font-bold mb-5">Post</button>
            </form>

        <div>
            {<DisplayChatbox></DisplayChatbox>}
        </div>
{/* 
            <div>
            {posts.map((list, index) => (
                    <h2 key={index} className="border-4 border-solid rounded-full border-white p-5 mb-9 font-bold"> */}
                        {/* <div className="text-2xl" >User:</div> */}
                        {/* <div className="text-4xl mb-2">{list.name} <br></br></div>
                        <div className="pb-5 font-teal">Message: {list.post}<br></br></div>
                        <div>{list.date}</div><br></br>
                    </h2>
                ))}
            </div> */}

        </div>

    )
}
