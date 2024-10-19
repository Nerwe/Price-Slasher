import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({ data }) => {
  const getCardRarity = (worth) => {
    const price = parseFloat(worth.replace('$', ''));
  
    if (price <= 10) {
      return "Rare";
    } else if (price <= 30) {
      return "Epic";
    } else if (price > 30){
      return "Legendary";
    } else {
      return "Uncommon";
    }
  };

  const rarity = getCardRarity(data.worth);

  return (
    <div className="game-card">
      <img className="card-image" src={data.image} alt={data.title} />
      <div className={`card-rare ${rarity.toLowerCase()}`}>
        <h3>{rarity}</h3>
      </div>
      <div className="card-about-container">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
        <Link to={`/game-details/${data.id}`} className={`card-claim-button ${rarity.toLowerCase()}`}>Claim</Link>
      </div>
    </div>
  )
}

export default Card