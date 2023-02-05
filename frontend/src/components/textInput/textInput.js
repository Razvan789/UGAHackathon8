import React from "react"
import './textInput.css'

export default function TextInput({ type, name, placeholder, value, onChange }) {
    return (
        <div className='input-container'>
            {value && onChange ? //Controlled input
                <input id={name} className='input' type={type} name={name} placeholder=" " value={value} onChange={onChange} /> 
            : // Uncontrolled input
                <input id={name} className='input' type={type} name={name} placeholder=" " />
            }
            <label htmlFor={name} className='label'>{placeholder}</label>
        </div>
    )
}