import React from "react";
import "./landing.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Login from "../login/login";

export default function interestPage() {

    return (
        <div className="background h-100 container dark-text">
            
            <div id="title" className="">
                <h1 className="secondary-negative-text">Wandr</h1>
                <p className="dark-text">Users going through a vetting process to ensure you never match with bots</p>
            </div>
            <Link to={'/signup'} className="rounter-link"><button className="btn primary light-text x-padding"> Create an account</button></Link>
            <Link to={'/signup'} className="router-link">
                <button className="btn primary light-text x-padding">Create an account</button>
            </Link>
            <p>Already have an account?&nbsp;
                <Link to={"/login"} className="router-link"><span className="secondary-negative-text link">Sign in</span></Link>
            </p>
        </div>
    );
}