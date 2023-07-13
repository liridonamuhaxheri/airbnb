import React from "react";
import Navbar from "./navbar";
import header from "../images/Group 77.png"
export default function Hero   ()
{
    return (
       
        <div>
            <div className="header">
                <img className="headerimage" src={header}/>
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}