import React, {useEffect, useState} from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../textInput/textInput';
import { loginUser, checkFields } from '../../utils/apiAdapter';

export default function Login() {
    const [message, setMessage] = useState(window.sessionStorage.getItem('message') || '');
    // window.sessionStorage.removeItem('message');
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        if (!checkFields(e, ['email', 'password'])) {
            setMessage('Please fill all fields');
            return;
        }
        loginUser({
            email: e.target.email.value,
            password: e.target.password.value,
        }).then((res) => {
            console.log(res);
            window.sessionStorage.setItem('user', JSON.stringify(res));
            navigate('/home');
        }).catch((err) => {
            setMessage("User not found, please try again");
        });

    }  

    useEffect(() => {
        //If user is already logged in, redirect to home
        if(window.sessionStorage.getItem('user')) {
            navigate('/home');
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