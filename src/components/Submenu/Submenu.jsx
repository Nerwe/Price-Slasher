import React from 'react'
import { Link } from 'react-router-dom'
import './Submenu.scss'

const Submenu = () => {
  return (
    <div className='submenu'>
        <ul className='submenu-links'>
            <li><Link to="/giveaways/steam">Steam</Link></li>
            <li><Link to="/giveaways/epic-games-store">Epic Games</Link></li>
            <li><Link to="/giveaways/itchio">Itch.io</Link></li>
            <li><Link to="/giveaways/gog">GOG</Link></li>
            <li><Link to="/giveaways/xbox-one">Xbox One</Link></li>
            <li><Link to="/giveaways/ps4">PS4</Link></li>
            <li><Link to="/giveaways/android">Android</Link></li>
            <li><Link to="/giveaways/ios">IOS</Link></li>
            <li><Link to="/giveaways/drm-free">DRM-Free</Link></li>
        </ul>
    </div>
  )
}

export default Submenu