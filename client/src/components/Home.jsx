import React, { useEffect, useState } from "react";
import Logo from '/src/emoji.svg'
import Logo2 from '/src/migae-semibold-1.png'
import { Routes, Route } from 'react-router-dom';
import '/src/App.css'
import '/src/index.css'
import { useNavigate } from "react-router-dom"



export default function Home() {
    const navigate = useNavigate();

    function navigateRoom() {
        navigate('/room');
    }

    return (
        <div className="box">
            
            <div>
                <a>
                    <img src={Logo} className="logo react" alt="React logo" />
                </a>
            </div>

            <h1 className="font-bold">WELCOME TO</h1>

            <div className="card">
                <img src={Logo2} className='logo2'></img>
            </div>

            <button onClick={() => navigateRoom()} className="block btn-outline btn-primary hover:bg-primary font-bold px-8 py-3">Explore</button>

           

        </div>
    )
}