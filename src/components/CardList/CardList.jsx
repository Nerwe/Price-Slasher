import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination';
import './CardList.scss'

function CardList() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 9;
  const { data, loading, error } = useFetch('https://gamerpower.p.rapidapi.com/api/giveaways');
  const totalPages = Math.ceil(data.length / itemPerPage);
  const displayedItems = data.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);

  const getCurrentMonthYear = () => {
    const now = new Date();
    const options = { month: "long", year: "numeric" };
    return now.toLocaleDateString("en-US", options);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="game-list">
      <h2 className='game-list-title'>Available Giveaways - {getCurrentMonthYear()}</h2>
      <div className="card-container">
        {displayedItems.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}></Pagination>
    </div>
  );
}

export default CardList