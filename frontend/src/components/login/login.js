import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';

export default function login() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        alert("Submitted!");
    }
    return (
        <div className='container background'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='secondary-negative-text'>Login</h1>
                
                <TextInput type='email' name='email' placeholder='Email' />
                <TextInput type='password' name='password' placeholder='Password' />
                <button className='btn primary light-text x-padding' type='submit'>Log in</button>
                <p> Don't have an account? </p>
                <Link to = {'/signup'} className = "router-link">
                    <button className="btn primary light-text x-padding">Sign up</button>
                </Link>
            </form>
        </div>
    )
}
function TextInput({ type, name, placeholder }) {
    return (
        <div className='input-container'>
            <label htmlFor={name} className='label'>{placeholder}</label>
            <input id={name} className='input' type={type} name={name} placeholder={placeholder} />
        </div>
    )
}