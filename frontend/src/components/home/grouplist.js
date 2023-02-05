import React from 'react'
import './home.css'

export default function GroupList({groups}) {
  return (
    <div className='group-list'>
        {groups.map(group => <GroupListItem group={group} />)}
    </div>
  )
}


function GroupListItem({group}) { // Groups should have a name, description, and image
  return (
    <div className='group-list-item'>
        <img src={group.image} alt={group.name + " Picture"} />
        <div>
            <h3>{group.name}</h3>
            <p>We are going to {group.description}!</p>
        </div>
    </div>
  )
}
