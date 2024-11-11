import React from 'react'
import LogInForm from '../components/LogInForm/'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const LogIn = () => {
  return (
    <div className='login'>
        <Navbar></Navbar>
        <LogInForm></LogInForm>
        <Footer></Footer>
    </div>
  )
}

export default LogIn