import React from "react";
import "./landing.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Login from "../login/login";
import mainImage from "../../images/mainImage.jpg";


export default function Landing() {

    return (
        <div className="background h-100 container dark-text">
                <h1 className="secondary-negative-text">wandr</h1>
                <br></br>
            <div id="carousel" className="pic-carousel">
                <div className="carousel-item">
                    <img height="400" src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded" />
                </div>
                <div className="carousel-item active">
                    <img height="400" src={mainImage} alt="deez" className="rounded" />
                </div>
                <div className="carousel-item">
                    <img height="400" src="https://guides.nynhp.org/media/i6859.jpg" alt="deez" className="rounded" />
                </div>
            </div>
            <div id="title" className="">
                <p className="dark-text">Not all who <span className="secondary-negative-text"><strong>wandr</strong></span> are lost.</p>
            </div>
            <br></br>
            <Link to={'/signup'} className="router-link">
                <button className="btn primary light-text x-padding">Create an account</button>
            </Link>
            <p>Already have an account?&nbsp;
                <Link to={"/login"} className="router-link"><span className="secondary-negative-text link">Sign in</span></Link>
            </p>
        </div>
    );
}