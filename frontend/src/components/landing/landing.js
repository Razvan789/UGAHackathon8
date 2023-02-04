import React from "react";
import "./landing.css";

export default function Landing() {

    return (
        <div className="background h-100 container">
            <div id="picCarosel" className="">
                <div className="carousel-item active">
                    <img height="500" src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded" />
                </div>
                <div id="title" className="">
                    <h1>Venture</h1>
                    <p>Users going through a vetting process to ensure you never match with bots</p>
                </div>
                <button className="btn primary"> Create an account</button>
                <p>Already have an account? <a>Sign in</a></p>
            </div>
        </div>
    );
}