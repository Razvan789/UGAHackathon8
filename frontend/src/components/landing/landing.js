import React from "react";
import "./landing.css";

export default function Landing() {
  return (
    <div className="background">
        <div id="picCarosel" className="">
            <div className="carousel-item active">
                <img src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded"/>
            </div>
            <div id="title" className="">
                <h1>Algorithm</h1>
                <p>Users going through a vetting process to ensure you never match with bots</p>
            </div>
            <button className="btn-primary"> Create an account</button>
            <p>Already have an account? <a>Sign in</a></p>
        </div>            
    </div>
  );
}