import React from 'react'
import './layout.css'
import '../../App.css';
import { Outlet } from 'react-router-dom'
import BottomNav from '../bottomNav/bottomNav';
import { isLoggedIn } from '../../utils/apiAdapter';

export default function Layout() {

    return (
        <div className="App">
            <div className="background screen-h dark-text">
                <Outlet />
                {isLoggedIn() ? (
                    <>
                        <div className='bottom-spacer'></div>
                        <BottomNav />
                    </>
                ) : null}
            </div>

        </div>
    )
}
