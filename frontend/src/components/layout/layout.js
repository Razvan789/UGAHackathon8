import React from 'react'
import './layout.css'
import '../../App.css';
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="App">
            <div className="background screen-h dark-text">
                <Outlet />
            </div>
        </div>
    )
}
