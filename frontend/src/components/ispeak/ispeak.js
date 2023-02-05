import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ispeak.css";
import ToggleButton from "../toggleButton/toggleButton";
export default function Ispeak() {
    return (
        <div className="container flex-center">
            <h1>I speak </h1>
            <div className="btn-group">
                <ToggleButton title="English" isActive={true} />
                <ToggleButton title="Spanish" isActive={false} />
                <ToggleButton title="Romanian" isActive={false} />
                <ToggleButton title="Tamil" isActive={false} />
                <ToggleButton title="Arabic" isActive={false} />
                <ToggleButton title="Chinese" isActive={false} />
            </div>
            <p></p>
            <Link to={'/interestPage'} className="router-link">
                <button className="btn primary light-text x-padding">Continue</button>
            </Link>

        </div>
    )
}
