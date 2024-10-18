import React from 'react'
import CardList from '../components/CardList/CardList'
import Navbar from '../components/Navbar/Navbar'
import Submenu from '../components/Submenu/Submenu'
import Footer from '../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import './Home.scss'

function Home() {
  const { platform } = useParams();
  return (
    <div className='home'>
        <Navbar></Navbar>
        <Submenu></Submenu>
        <CardList platform={platform}></CardList>
        <Footer></Footer>
    </div>
  )
}

export default Home