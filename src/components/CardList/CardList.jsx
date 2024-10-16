import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './CardList.scss'

function CardList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCurrentMonthYear = () => {
    const now = new Date();
    const options = { month: "long", year: "numeric" };
    return now.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const fetchGames = async () => {
      const url =
        "https://gamerpower.p.rapidapi.com/api/giveaways";
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
        setGames(result);
      } catch (err) {
        setError("Failed to fetch games");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="game-list">
      <h2>Available Giveaways - {getCurrentMonthYear()}</h2>
      <div className="card-container">
        {games.map((game) => (
          <Card key={game.id} data={game}></Card>
        ))}
      </div>
    </div>
  );
}

export default CardList