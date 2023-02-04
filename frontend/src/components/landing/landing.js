import React from "react";
import "./landing.css";
import { motion } from "framer-motion";

export default function Landing() {

    return (
        <div className="background h-100 container dark-text">
            <div id="carousel" className="pic-carousel">
                <div className="carousel-item">
                    <img height="400" src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded" />
                </div>
                <div className="carousel-item active">
                    <img height="400" src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded" />
                </div>
                <div className="carousel-item">
                    <img height="400" src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded" />
                </div>
            </div>
            <div id="title" className="">
                <h1 className="secondary-negative-text">Wandr</h1>
                <p className="dark-text">Users going through a vetting process to ensure you never match with bots</p>
            </div>
            <button className="btn primary light-text x-padding"> Create an account</button>
            <p>Already have an account?&nbsp;
                <span className="secondary-negative-text link">Sign in</span>
            </p>
        </div>
    );
}