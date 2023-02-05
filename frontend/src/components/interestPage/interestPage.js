import React from "react";
import "./interestPage.css";
import { Link } from "react-router-dom";
import ToggleButton from "../toggleButton/toggleButton";


export default function interestPage() {

    return (
        <div className="container flex-center">
            <h1>Intrests</h1>
            <div className="btn-group">
                <ToggleButton title="Photography" isActive={true} />
                <ToggleButton title="Cooking" isActive={false} />
                <ToggleButton title="Art" isActive={false} />
                <ToggleButton title="Extreme" isActive={false} />
                <ToggleButton title="Night Life" isActive={false} />
                <ToggleButton title="Shopping" isActive={false} />
                <ToggleButton title="Museums" isActive={false} />
                <ToggleButton title="Sports" isActive={false} />
                <ToggleButton title="Hiking" isActive={false} />
                <ToggleButton title="Shopping" isActive={false} />
                <ToggleButton title="Live Music" isActive={false} />
                <ToggleButton title="Backpacking" isActive={false} />
            </div>
            <p></p>
            <Link to={'/signup'} className="router-link">
                <button className="btn primary light-text x-padding">Continue</button>
            </Link>

        </div>
    )
}