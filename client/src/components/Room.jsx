import React from "react";
import '/src/App.css'
import '/src/index.css'
import { useNavigate } from "react-router-dom"
import Logo2 from '/src/migae-semibold-1.png'

export default function Room() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = React.useState(false);

    function navigateHome() {
        navigate('/');
    }
    return (
        <div className="box">

            <div className="navbar">
                <div className="navbar-start">
                    <img src={Logo2} className='logo2'></img>
                </div>
                <div className="navbar-end">
                    <button onClick={() => navigateHome()} className="block btn-outline btn-primary hover:bg-primary font-bold">Home</button>
                </div>
            </div>


            <p className="font-bold">Here Lies All The Chatboxes You Can Chat Inside Of!</p>
            <p className="font-bold">Check It Out!</p>
        

            <>
      <button
        className="block btn-outline btn-primary hover:bg-primary font-bold"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Add A New Chatbox
      </button>
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
                  <form className="my-4 text-lg leading-relaxed flex flex-col">

                   <label className="text-black font-bold">Chatbox Name: </label>
                   <input placeholder="Type here..." className="rounded-md m-4 text-center"></input>

                   <label className="text-black font-bold">Chatbox Owner: </label>
                   <input placeholder="Type here..." className="rounded-md m-4 text-center"></input>

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
                    type="button"
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
    </>

            <ul className="menu menu-lg bg-base-200 rounded-box w-56">
                {/* <li><a>+ Add A New Room</a></li> */}
                <li><a>Chatbox 1</a></li>
                <li><a>Chatbox 2</a></li>
                <li><a>Chatbox 3</a></li>
            </ul>


            
        </div>
    )
}