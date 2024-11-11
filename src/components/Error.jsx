import React from 'react'

const Error = ({ error }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-red-500 text-lg">Error</h2>
      <p className="text-white text-2xl">{error.message}</p>
    </div>
  )
}

export default Error