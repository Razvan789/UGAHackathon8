import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className="background container">
            <div id="picCarosel" className="">
                <div className="carousel-item active">
                    <img></img>
                </div>
                <div id="title" className="">
                    <h1>You're invited to wandr.</h1>
                    <p>Sign up now</p>
                </div>
                <button id="create-account" className='btn primary light-text'>
                    Create an account
                    </button>
                <p> Already have an account? <a> sign in</a></p>
            </div>
        </div >
    )
}
