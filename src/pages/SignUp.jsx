import React from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const SignUp = () => {
  return (
    <div className='signup'>
      <Navbar></Navbar>
      <SignUpForm></SignUpForm>
      <Footer></Footer>
    </div>
  )
}

export default SignUp