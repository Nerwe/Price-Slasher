import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './GameData.scss'

const GameData = () => {
  const location = useLocation();
  const gameData = location.state?.data;

  const [game, setGame] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const url = "https://gamerpower.p.rapidapi.com/api/giveaway?id="+gameData;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "cf7081efd9msh93ef3622db49254p149560jsnaf65762ada2f",
          "x-rapidapi-host": "gamerpower.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setGame(result);
      } catch (err) {
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="game-data">
      <div className="game-container">
        <div className="game-header">
          <div>
            <img className="game-image" src={game.image} alt={game.title}></img>
          </div>
          <div className="game-info">
            <h3 className="game-title">{game.title}</h3>
            <p className="game-description">Platforms: {game.platforms}</p>
            <p className="game-description">Type: {game.type}</p>
          </div>
        </div>
        <div className="game-body">
          <div className="game-about">
            <h3 className="game-title">About this giveaway</h3>
            <p className="game-description">{game.description}</p>
          </div>
          <div className="game-buttons">
            <Link to={game.open_giveaway_url} className="claim-button">Claim Game
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