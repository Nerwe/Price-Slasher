import React from 'react'
import CardList from '../components/CardList/CardList'
import Navbar from '../components/Navbar/Navbar'
import Submenu from '../components/Submenu/Submenu'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Submenu></Submenu>
        <CardList></CardList>
        <Footer></Footer>
    </div>
  )
}

export default Home