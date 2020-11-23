import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'
import Task from '../../assets/Tasks.svg'

function Navigation() {
    return (
        <div className='nav-container'>
            <Link to="/">
                <img src={Task} className="logo-image" />
            </Link>
        </div>
    )
}

export default Navigation
