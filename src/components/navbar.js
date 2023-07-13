import React from "react";
import airbnb from "../images/airbnb.png"
export default function Navbar(){
    return (
        <div className="logo">
        <img className="logoimg" src={airbnb}/>
    </div>
    )
}