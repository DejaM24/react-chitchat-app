import React, { useState } from "react";
import '/src/App.css'
import '/src/index.css'
import { useNavigate } from "react-router-dom"
import Logo2 from '/src/migae-semibold-1.png'
import "./styles/Room.css";
import DisplayRooms from "./DisplayRooms";



export default function Room() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [showModal, setShowModal] = React.useState(false);




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

      {/*page header caption */}
      <div className="">
        <div className="font-semibold text-4xl p-3">Open a chatbox to see what's all the chat about </div>
        <div className="font-semibold text-4xl"> Or add your own </div>
      </div>

      {/*new chatbox button */}
      <div>

      <button
            className="block btn-outline btn-primary hover:bg-primary font-bold mx-72 mt-4"
            type="button"
            onClick={() => setShowModal(true)}
          >
            + Add A New Chatbox
          </button>

          {/* divider */}
          <hr />

          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold text-black">
                        Create A New Chatbox
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*form*/}
                    <div className="relative p-20 mx-20 flex flex-auto">
                      <form onSubmit={createRoom}  className="my-4 text-lg leading-relaxed flex flex-col">

                        <label className="text-black font-bold">Chatbox Name: </label>
                        <input placeholder="Type here..." value={name} className="rounded-md m-4 text-center" onChange={e => setName(e.target.value)}></input>

                        <hr />

                        <label className="text-black font-bold">Chatbox Owner: </label>
                        <input placeholder="Type here..." value={owner} className="rounded-md m-4 text-center" onChange={e => setOwner(e.target.value)}></input>

                        <hr />

                        <button onClick={() => setShowModal(false)} className="text-black font-bold" type="submit">Submit</button>

                        <button
                        className="block btn-outline btn-secondary hover:bg-secondary font-bold"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        {/*save user's submitted form here*/}
                         Add New Chatbox
                      </button> 

                      </form>
                     </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="block btn-outline btn-primary hover:bg-primary font-bold mr-3"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="block btn-outline btn-secondary hover:bg-secondary font-bold"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        {/*save user's submitted form here*/}
                        Add New Chatbox
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
          ) : null}

      </div>

    <form onSubmit={createRoom}>
     <label>Chatbox Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Type here..."></input>

      <label>Chatbox Owner:</label>
        <input value={owner} onChange={e => setOwner(e.target.value)} placeholder="Type here..."></input>

        <button type="submit">Submit</button>
      </form>

      {name !== '' && <p>Your {name} chatbox is saved!</p>}

      {owner !== '' && <p>Thank you {owner}!</p>} 

<DisplayRooms></DisplayRooms>

    </div>
  )
}