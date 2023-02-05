
import { useState } from "react";
export default function ToggleButton({ title, isActive }) {
    const [toggle, setToggle] = useState(isActive);
    return (
        <button className={toggle ? "btn tertiary extra-lite-text x-padding" : "btn extra-lite dark-text x-padding"} 
        onClick={() => setToggle(!toggle)}>
            {title}
        </button>
    );
}