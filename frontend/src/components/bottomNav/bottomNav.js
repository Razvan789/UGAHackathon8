import React from 'react'
import './bottomNav.css'
import {ReactComponent as HomeIcon} from '../../images/message.svg'
import {ReactComponent as LikeIcon} from '../../images/like.svg'
import {ReactComponent as CardIcon} from '../../images/cards.svg'
import {ReactComponent as PeopleIcon} from '../../images/people.svg'

import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <div className='bottom-nav'>
        <BottomNavItem icon={<CardIcon height={40} width={60}/>} link="/home"/>
        <BottomNavItem icon={<LikeIcon height={40} width={60}/>} link="/home"/>
        <BottomNavItem isActive icon={<HomeIcon height={40} width={60}/>} link="/home"/>
        <BottomNavItem icon={<PeopleIcon height={40} width={60}/>} link="/home"/>

    </div>
  )
}


function BottomNavItem({icon, link, isActive = false}) {
    return (
      <Link to={link}>
        <div className={isActive ? "primary-text" : "dark-text"}>
            {icon}
        </div>
      </Link>
    )
} 