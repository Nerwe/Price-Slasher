import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({data}) => {
  
  return (
    <div className="game-card">
      <img className="card-image" src={data.image} alt={data.title} />
      <div className="card-rare">
        <h3>rare</h3>
      </div>
      <div className="card-about-container">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
        <Link to="game-details" state={{ data: data.id }} className="card-claim-button">Claim</Link>
      </div>
    </div>
  )
}

export default Card