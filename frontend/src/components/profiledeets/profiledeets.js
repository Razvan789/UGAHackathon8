import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./profiledeets.css";
import TextInput from '../textInput/textInput';
import { useNavigate } from 'react-router-dom';

export default function ProfileDetails() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        navigate('/iama');
    }
    return (
        <div className='container background'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 className='secondary-negative-text'>Profile details</h1>
                <input type='file' id='file' className='inputfile' />
                <TextInput type='text' name='name' placeholder='Name (as preferred)' />
                <TextInput type='text' name='text' placeholder='Pronouns' />
                <TextInput type='text' name='text' placeholder='Birthdate (mm/dd/yyyy)' />
                <button className='btn primary light-text x-padding' type='submit'>Confirm</button>
            </form>
        </div>
    )
}
