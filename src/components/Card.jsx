import React from 'react'
import { Link } from 'react-router-dom'

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

  const getRarityColor = (rarity) => {
    switch(rarity.toLowerCase()) {
      case 'uncommon': return 'bg-green-600';
      case 'rare': return 'bg-blue-600';
      case 'epic': return 'bg-purple-600';
      case 'legendary': return 'bg-orange-500';
      default: return 'bg-green-600';
    }
  };

  const getRarityBorderColor = (rarity) => {
    switch(rarity.toLowerCase()) {
      case 'uncommon': return 'border-green-600 text-green-600 hover:bg-green-600';
      case 'rare': return 'border-blue-600 text-blue-600 hover:bg-blue-600';
      case 'epic': return 'border-purple-600 text-purple-600 hover:bg-purple-600';
      case 'legendary': return 'border-orange-500 text-orange-500 hover:bg-orange-500';
      default: return 'border-green-600 text-green-600 hover:bg-green-600';
    }
  };

  const rarity = getCardRarity(data.worth);

  return (
    <div className="flex flex-col w-[80%] md:w-[30%] lg:w-[20%] min-w-[20%] bg-neutral-900 rounded-lg gap-1 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <img className="w-full object-cover rounded-t-lg" src={data.image} alt={data.title} />
      <div className={`text-left p-1 -mt-1 text-sm ${getRarityColor(rarity)}`}>
        <h3>{rarity}</h3>
      </div>
      <div className="p-2">
        <h3 className="text-xl truncate text-left">{data.title}</h3>
        <p className="text-left text-gray-400 truncate text-sm">{data.description}</p>
        <Link 
          to={`/game-details/${data.id}`} 
          className={`inline-block px-4 py-2 mt-2 border rounded-md transition-colors duration-300 hover:text-white w-24 text-center ${getRarityBorderColor(rarity)}`}
        >
          Claim
        </Link>
      </div>
    </div>
  )
}

export default Card