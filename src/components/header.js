import React from "react";
import "../style.css";
import Hero from "./hero";
import Navbar from "./navbar"
export default function Header ()
{
    return (
        <div  className="navbar">
            <Navbar/>
            <Hero/>
        </div>)

}
