import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className="background">
            <div id="picCarosel" className="">
                <div className="carousel-item active">
                    <img></img>
                </div>
                <div id="title" className="">
                    <h1>Algorithm</h1>
                    <p>this is a paragraph</p>
                </div>
                <button className='btn primary light-text'>Create an account</button>
                <p> Already have an account? <a> sign in</a></p>
            </div>
        </div >
    )
}
