import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./iama.css";
import ToggleButton from "../toggleButton/toggleButton";

export default function Iama() {
    return (
        <div className="container flex-center">
            <h1>I am </h1>
            <div className="btn-group">
                <ToggleButton title="Female" isActive={true} />
                <ToggleButton title="Male" isActive={false} />
                <ToggleButton title="Non-binary" isActive={false} />
                <ToggleButton title="Other" isActive={false} />
            </div>
            <p></p>
            <Link to={'/interestPage'} className="router-link">
                <button className="btn primary light-text x-padding">Continue</button>
            </Link>

        </div>
    )
}