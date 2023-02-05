import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./profiledeets.css";
import TextInput from '../textInput/textInput';

export default function ProfileDetails() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        alert("Submitted!");
    }
    return (
        <div className='container background'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='secondary-negative-text'>Profile details</h1>
                <input type='file' id='file' className='inputfile' />
                <TextInput type='text' name='name' placeholder='Name (as preferred)' />
                <TextInput type='email' name='email' placeholder='Pronouns' />
                <TextInput type='email' name='email' placeholder='Birthdate (mm/dd/yyyy)' />
                <button className='btn primary light-text x-padding' type='submit'>Confirm</button>
            </form>
        </div>
    )
}
