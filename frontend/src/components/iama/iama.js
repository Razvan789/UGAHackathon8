import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./iama.css";
import ToggleButton from "../toggleButton/toggleButton";

export default function Iama() {
    return (
        <div className="container flex-center">
            <h1>I am a </h1>
            <div className="btn-group">
                <ToggleButton title="Woman" isActive={true} />
                <ToggleButton title="Man" isActive={false} />
                <ToggleButton title="Non-binary" isActive={false} />
                <ToggleButton title="Other" isActive={false} />
               
            </div>
            <p></p>
            <Link to={'/ispeak'} className="router-link">
                <button className="btn primary light-text x-padding">Continue</button>
            </Link>

        </div>
    )
}