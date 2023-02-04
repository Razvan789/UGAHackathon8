import React from "react";
import "./ispeak.css";

export default function Ispeak() {
    return (
    <>
       <h1>I speak </h1>
       <ul>
       <button className="btn tertiary extra-lite x-padding"> <li>English</li> </button>
       <br></br>
       <button className="btn tertiary white x-padding"> <li>Spanish</li> </button>
      <br></br>
      <button className="btn tertiary light-text x-padding"> <li>Arabic</li> </button>
      <br></br>
      <button className="btn tertiary light-text x-padding"> <li>Chinese</li> </button>
       <br></br>
       <button className="btn tertiary light-text x-padding"><li>Choose another</li></button>
       </ul>
      
   
   </>
    )
}
