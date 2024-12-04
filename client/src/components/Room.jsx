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
  const [showModals, setShowModals] = useState(false);

  function navigateHome() {
    navigate('/');
  }

  async function createRoom(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/room", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name
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
      {/*navbar*/}
      <div className="navbar fixed top-7 left-10 w-full">
        <div className="navbar-start">
          <img src={Logo2} className='logo2'></img>
        </div>
        <div className="navbar-end">
          <button onClick={() => navigateHome()} className="block btn-outline btn-primary hover:bg-primary font-bold mx-32 px-8 py-3">Home</button>
        </div>
      </div>

      {/* new chatbox button  */}
      <div>
        <button 
        className="flex btn-outline btn-primary hover:bg-primary font-bold text-2xl mx-72 mt-28 mb-8"
        onClick={() => setShowModals(true)}>
          + Add A New Room
        </button>

        {showModals ? (<>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="bg-neutral-100 rounded-2xl shadow-xl relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-4xl text-neutral-950 font-semibold text-black mx-20 my-36">
                    Create a New Room
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

                      <label className="text-neutral-950 font-bold">Chatbox Name:</label>
                      <input className="rounded-md" value={name} onChange={e => setName(e.target.value)} placeholder="Type here..."></input>
                      <br></br>

                     

                      <button 
                      className="block btn-outline btn-secondary hover:bg-secondary font-bold" 
                      type="submit" 
                      onSubmit={() => setShowModals(false)}> + Add New Room</button>
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
      </div>


      {/* <form onSubmit={createRoom}>
     <label>Chatbox Name:</label>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Type here..."></input>

      <label>Chatbox Owner:</label>
        <input value={owner} onChange={e => setOwner(e.target.value)} placeholder="Type here..."></input>

        <button type="submit">Submit</button>
      </form> */}



      <DisplayRooms></DisplayRooms>

    </div>
  )
}