import React from "react";
import "./signup.css";
import logotransparent from '../../images/wandrLogoRmvBkgd.png';
import { Link } from 'react-router-dom';

export default function Signup() {
    return (
        <div className="background h-100 container">
            <div className="top">
                <img src={logotransparent} alt="logo" height="300" className="rounded"/>
                <div id="title" className="">
                    <h1>Sign up to start wandering</h1>
                    <Link to={"/emailSignup"} className="router-link">
                        <button className="btn primary light-text x-padding">
                            <p>Continue with email</p>
                        </button></Link>
                    <br></br>
                    <br></br>
                    <button className="light-btn background dark-text x-padding">
                        <p>Continue with phone number</p>
                    </button>
                </div>  
            </div>
        </div>
    )
}