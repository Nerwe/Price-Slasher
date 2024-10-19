import React from 'react'
import LogInForm from '../components/LogInForm/LogInForm'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

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