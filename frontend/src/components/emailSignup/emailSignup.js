import React from 'react'

export default function EmailSignUp() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Submitted!");
    }
    return (
        <div className='container background'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='secondary-negative-text'>Sign up</h1>
                <button className='btn primary light-text x-padding' type='submit'>Wign up with Google</button>
            </form>
        </div>
    )
}
