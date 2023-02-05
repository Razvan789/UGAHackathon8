import React, { useState, useEffect } from 'react'
import TextInput from '../textInput/textInput'
import GroupList from './grouplist'
import './home.css'
import { getGroups } from '../../utils/apiAdapter'
import { ReactComponent as NewIcon } from '../../images/new.svg'
import { Link } from 'react-router-dom'




export default function Home() {
    const [search, setSearch] = useState('test');
    // This is where we will store the groups that we get from the API
    const [groups, setGroups] = useState([{}]);

    const [filteredGroups, setFilteredGroups] = useState(groups);

    useEffect(() => {
        getGroups().then(groups => {
            console.log(groups);
            setGroups(groups)
            setFilteredGroups(groups);
        }).catch(err => {
            console.log("The error is ", err);
        })
    }, [])

    useEffect(() => {
        setFilteredGroups(groups.filter(group => group.name?.toLowerCase().includes(search.toLowerCase()) || group?.description?.toLowerCase().includes(search.toLowerCase())));

    }, [search])

    function handleSearch(e) {
        e.preventDefault();
        setSearch(e.target.search.value);
    }
    return (
        <>
        <div className='container background flex-center flex-start'>
            <div className='home-top'>
                <form onSubmit={handleSearch}>
                    <TextInput type='text' name='search' placeholder='Search Groups' />
                </form>
                <Link to='/addGroup' style={{display: "flex"}}>
                    <button className='btn primary light-text x-padding'><NewIcon width={25} height={25} /></button>
                </Link>
            </div>
            <GroupList groups={filteredGroups} />

        </div>
        </>
    )
}
