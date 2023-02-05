import React, { useState } from 'react'
import TextInput from '../textInput/textInput';
import { insertUser, checkFields } from '../../utils/apiAdapter';
import { Link, useNavigate } from 'react-router-dom';


export default function EmailSignUp() {
    const [success, setSucess] = useState(0); // 0 - waiting, 1 - success, 2 - error
    const [errorMessage, setErrorMessage] = useState('Error Occured, please try again later');
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if (!checkFields(e, ['name', 'email', 'password', 'confirmPassword'])) {
            setErrorMessage('Please fill all fields');
            setSucess(2);
            return;
        }
        if (e.target.password.value !== e.target.confirmPassword.value) {
            setErrorMessage('Passwords do not match');
            setSucess(2);
            return;
        }
        insertUser({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }).then((res) => {
            setSucess(1);
            window.sessionStorage.setItem('message', "Account Created!");
            navigate('/iama');
        })
        .catch((err) => {
            setErrorMessage(err.message);
            setSucess(2);
        });
    }

    return (
        <div className='container background'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='secondary-negative-text'>Sign up</h1>
                <TextInput type='text' name='name' placeholder='Name' />
                <TextInput type='email' name='email' placeholder='Email' />
                <TextInput type='password' name='password' placeholder='Password' />
                <TextInput type='password' name='confirmPassword' placeholder='Confirm Password' />
                <button className='btn primary light-text x-padding' type='submit'>Sign up</button>
                {
                    success === 2 ? 
                    <p className='secondary-negative-text'>{errorMessage}</p> : null
                }
                <p> Already have an account?
                    <Link to={'/login'}>
                        <span className="secondary-negative-text link">Sign in</span>
                    </Link>
                </p>
            </form>
        </div>
    )
}


