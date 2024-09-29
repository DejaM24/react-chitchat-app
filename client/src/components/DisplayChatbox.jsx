import React from "react";
import { useNavigate } from "react-router-dom";

export default function DisplayChatbox() {
    const navigate = useNavigate();

    function navigateHome() {
        navigate("/")
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

<div>
    <h2>
        You made it!
    </h2>
</div>
        </div>
    )
}