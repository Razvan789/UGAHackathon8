import React, {useState, useEffect} from 'react'
import './welcome.css'

export default function WelcomeMessage({userID}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:5000/users?userID=${userID}`).then(res => res.json()).then(data => {
            console.log(data)
            setUser(data[0].name);
            console.log(data[0].name);
        })
    }, [userID])

    return (
        <>
            <h1>Welcome to wandr!</h1>
            <p>User with ID {userID} is: {user}</p>
        </>
    )
}
