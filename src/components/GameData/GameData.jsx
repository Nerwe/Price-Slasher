import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import useFetch from '../../hooks/useFetch';
import './GameData.scss';

const GameData = () => {
  const { id } = useParams();

  if (isNaN(id)) {
    return <h2>Invalid ID format. Please use a numeric ID.</h2>;
  }

  const { data, loading, error } = useFetch(`https://gamerpower.p.rapidapi.com/api/giveaway?id=${id}`);

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  return (
    <div className="game-data">
      <div className="game-container">
        <div className="game-header">
          <div>
            <img className="game-image" src={data.image} alt={data.title}></img>
          </div>
          <div className="game-info">
            <h3 className="game-title">{data.title}</h3>
            <p className="game-description">Platforms: {data.platforms}</p>
            <p className="game-description">Type: {data.type}</p>
          </div>
        </div>
        <div className="game-body">
          <div className="game-about">
            <h3 className="game-title">About this giveaway</h3>
            <p className="game-description">{data.description}</p>
          </div>
          <div className="game-buttons">
            <Link to={data.open_giveaway_url} className="claim-button">Claim Game
            </Link>
            <Link to="#" className="regular-button">Add to collection
            </Link>
            <Link to="#" className="regular-button">Save game
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameData