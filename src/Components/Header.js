import React from "react"
import trollFace from "../images/trollFace.png"
export default function Header(){
    return (
        <div className="header" >
            <img src={trollFace} className="header--image" alt="Troll Face" />
            <h2 className="header--title" >Meme Generator</h2>
            <h3 className="header--project" >React Project </h3>
        </div>
    )
}