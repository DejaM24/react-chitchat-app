import React, { useState } from 'react';
import { useForm } from "react-hook-form";



export default function AddRoom() {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [showModal, setShowModal] = React.useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

 

    async function addNewRoom(event) {
        event.preventDefault();

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

    

    

        // const responseBody = await response.json();

        // if (response.status === 200) {
        //     console.log(responseBody);
        // } else {
        //     console.log(responseBody.message);
        // }
    }

    return (
        <div>
             {/* <button
            className="block btn-outline btn-primary hover:bg-primary font-bold mx-72 mt-4"
            type="button"
            onClick={() => setShowModal(true)}
          >
            + Add A New Chatbox
          </button> */}

            {/* border line */}
          {/* <div className="my-24 border-t-2 bg-white"></div> */}
          {/* <hr />

       

          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
                  {/*content*/}
                  {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
                    {/*header*/}
                    {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
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
                    </div> */}
                    {/*form*/}
                    {/* <div className="relative p-20 mx-20 flex flex-auto">
                      <form onSubmit={addNewRoom}  className="my-4 text-lg leading-relaxed flex flex-col">

                        <label className="text-black font-bold">Chatbox Name: </label>
                        <input placeholder="Type here..." value={name} className="rounded-md m-4 text-center" onChange={e => setName(e.target.value)}></input>

                        <hr />

                        <label className="text-black font-bold">Chatbox Owner: </label>
                        <input placeholder="Type here..." value={owner} className="rounded-md m-4 text-center" onChange={e => setOwner(e.target.value)}></input>

                        <hr />

                        <button onClick={() => setShowModal(false)} className="text-black font-bold" type="submit">Submit</button> */}
{/* 
                        <button
                        className="block btn-outline btn-secondary hover:bg-secondary font-bold"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      >
                        {/*save user's submitted form here*/}
                        {/* Add New Chatbox
                      </button> */} 

                      {/* </form> */}
                    {/* </div> */}
                    {/*footer*/}
                    {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="block btn-outline btn-primary hover:bg-primary font-bold mr-3"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button> */}
                      {/* <button
                        className="block btn-outline btn-secondary hover:bg-secondary font-bold"
                        type="submit"
                        onClick={() => setShowModal(false)}
                      > */}
                        {/*save user's submitted form here*/}
                        {/* Add New Chatbox
                      </button> */}
                    {/* </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
          ) : null} */}

    

        </div>
    )
}