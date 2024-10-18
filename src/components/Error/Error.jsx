import React from 'react'
import './Error.scss'

const Error = ({ error }) => {
  return (
    <div className='error'>
        <h2 className='error-title'>Error</h2>
        <p className='error-text'>{error.message}</p>
    </div>
  )
}

export default Error