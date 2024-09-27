import React, { useState } from "react";
import '/src/App.css'
import '/src/index.css'
import { useNavigate } from "react-router-dom"
import Logo2 from '/src/migae-semibold-1.png'
import "./styles/Room.css";


export default function Room() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');


  function navigateHome() {
    navigate('/');
  }

async function createRoom(e){
  e.preventDefault();

  const response = await fetch("http://localhost:3000/room", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      name,
      owner
    })
  });

  const responseBody = await response.json();

  if (response.status === 2000) {
    console.log(responseBody);
  } else {
    console.log(responseBody.message)
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
          <button onClick={() => navigateHome()} className="block btn-outline btn-primary hover:bg-primary font-bold mx-32 px-8 py-3">Home</button>
        </div>
      </div>

      {/*page description */}
      <div className="">
        <div className="font-semibold text-4xl p-3">Open a chatbox to see what's all the chat about </div>
        <div className="font-semibold text-4xl"> Or add your own </div>
      </div>

      {/*add a new chatbox button */}
      {/* <div>
        <AddRoom></AddRoom>
      </div> */}

      <form onSubmit={createRoom}>
     <label>Chatbox Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Type here..."></input>

      <label>Chatbox Owner:</label>
        <input value={owner} onChange={e => setOwner(e.target.value)} placeholder="Type here..."></input>

        <button type="submit">Submit</button>
      </form>

      {name !== '' && <p>Your {name} chatbox is saved!</p>}

      {owner !== '' && <p>Thank you {owner}!</p>}






    </div>
  )
}