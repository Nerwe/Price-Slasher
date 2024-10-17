import React from 'react'
import { Link } from 'react-router-dom'
import './Submenu.scss'

const Submenu = () => {
  return (
    <div className='submenu'>
        <ul className='submenu-links'>
            <li><Link>Epic Games</Link></li>
            <li><Link>Steam</Link></li>
            <li><Link>Itch.io</Link></li>
            <li><Link>GOG</Link></li>
        </ul>
    </div>
  )
}

export default Submenu