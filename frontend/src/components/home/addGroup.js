import React, { useState } from 'react'
import TextInput from '../textInput/textInput'
import { addGroup, checkFields } from '../../utils/apiAdapter'
import { useNavigate } from 'react-router-dom';

export default function AddGroup() {
    const [successCode, setSuccessCode] = useState(0); // 0 - no response, 1 - error, 2 - success
    const [message, setMessage]  = useState("");
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        if(!checkFields(e, ['name', 'description', 'image'])) {
            setSuccessCode(1);
            setMessage("Please fill all fields");
            return;
        }
        addGroup({
            name: e.target.name.value,
            description: e.target.description.value,
            image: e.target.image.value,
        }).then((res) => {
            setSuccessCode(2);
            setMessage("Group Created!");
            navigate('/home');
        }).catch((err) => {
            setSuccessCode(1);
            setMessage("Error Creating Group");
        })

    }
    return (
        <div className='container'>
            <h1>Create Group</h1>
            <form onSubmit={handleSubmit} className="form">
                <TextInput type='text' name='name' placeholder='Group Name' />
                <TextInput type='text' name='description' placeholder='Group Destination' />
                <TextInput type='text' name='image' placeholder='Group Image' />
                <button type={'submit'} className='btn primary light-text'>Create Group</button>
            </form>
            {successCode === 1 ? <p className='secondary-negative-text'>{message}</p> : null}
        </div>
    )
}
