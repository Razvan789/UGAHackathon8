import React, { useEffect, useState } from "react";
import "./ispeak.css";

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


        </div>
    )
}
function ToggleButton({ title, isActive }) {
    const [toggle, setToggle] = useState(isActive);
    return (
        <button className={toggle ? "btn tertiary extra-lite-text x-padding" : "btn extra-lite dark-text x-padding"} 
        onClick={() => setToggle(!toggle)}>
            {title}
        </button>
    );
}