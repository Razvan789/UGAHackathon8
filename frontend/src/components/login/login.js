import React, {useEffect, useState} from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../textInput/textInput';

export default function Login() {
    const [message, setMessage] = useState(window.sessionStorage.getItem('message') || '');
    window.sessionStorage.removeItem('message');
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        alert("Submitted!");
    }

    useEffect(() => {
        //If user is already logged in, redirect to home
        if(window.sessionStorage.getItem('user')) {
            navigate('/');
        }
    }, []);



    return (
        <div className='container background'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='secondary-negative-text'>Login</h1>
                <TextInput type='email' name='email' placeholder='Email' />
                <TextInput type='password' name='password' placeholder='Password' />
                <button className='btn primary light-text x-padding' type='submit'>Log in</button>
                <p>{message}</p>
                <p> Don't have an account? </p>
                <Link to = {'/signup'} className = "router-link">
                    <button className="btn primary light-text x-padding">Sign up</button>
                </Link>
            </form>
        </div>
    )
}