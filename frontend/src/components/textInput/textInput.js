import React from "react"
import './textInput.css'

export default function TextInput({ type, name, placeholder }) {
    return (
        <div className='input-container'>
            <input id={name} className='input' type={type} name={name} placeholder=" " />
            <label htmlFor={name} className='label'>{placeholder}</label>
        </div>
    )
}