import React from 'react'
import { Link } from 'react-router-dom'

const Submenu = () => {
  return (
    <div className="flex justify-center p-0.5 bg-neutral-800">
      <ul className="flex m-0 p-0">
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/steam" className="text-gray-500 hover:text-white text-lg">Steam</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/epic-games-store" className="text-gray-500 hover:text-white text-lg">Epic Games</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/itchio" className="text-gray-500 hover:text-white text-lg">Itch.io</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/gog" className="text-gray-500 hover:text-white text-lg">GOG</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/xbox-one" className="text-gray-500 hover:text-white text-lg">Xbox One</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/ps4" className="text-gray-500 hover:text-white text-lg">PS4</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/android" className="text-gray-500 hover:text-white text-lg">Android</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/ios" className="text-gray-500 hover:text-white text-lg">IOS</Link>
        </li>
        <li className="mr-4 last:mr-0">
          <Link to="/giveaways/drm-free" className="text-gray-500 hover:text-white text-lg">DRM-Free</Link>
        </li>
      </ul>
    </div>
  )
}

export default Submenu