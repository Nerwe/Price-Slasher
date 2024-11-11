import React from 'react'
import SignUpForm from '../components/SignUpForm/'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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