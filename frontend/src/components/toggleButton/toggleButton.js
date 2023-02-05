
import { useState } from "react";
export default function ToggleButton({ title, isActive, icon}) {
    const [toggle, setToggle] = useState(isActive);
    return (
        <button className={toggle ? "btn tertiary extra-lite-text x-padding" : "btn extra-lite dark-text x-padding"} 
        onClick={() => setToggle(!toggle)}>
            <div className="flex-center row gap">
            {icon}
            {title}
            </div>
        </button>
    );
}