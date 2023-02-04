import React from 'react'

export default function EmailSignUp() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        alert("Submitted!");
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

