import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <ul className='footer-links'>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
            </ul>
            <ul className='footer-links'>
                <li><Link to="">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
            </ul>
            <ul className='footer-links'>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
                <li><Link to="#">Asdasd</Link></li>
            </ul>
            <div className='logo-container'>
                <img src='favicon.ico'></img>
            </div>
        </div>
        <div className='footer-text'>
            <p>© 2024, nullyar</p>
        </div>
    </footer>
  )
}

export default Footer