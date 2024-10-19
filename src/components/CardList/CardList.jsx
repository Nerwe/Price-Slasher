import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './CardList.scss'
import { useParams } from 'react-router-dom';

const CardList = () => {
  const { platform } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;

  const url = platform
    ? `https://gamerpower.p.rapidapi.com/api/giveaways?platform=${platform}`
    : `https://gamerpower.p.rapidapi.com/api/giveaways`;
  const { data, loading, error } = useFetch(url);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [platform]);

  const totalPages = Math.ceil(data.length / itemPerPage);
  const displayedItems = data.slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage);

  const getCurrentMonthYear = () => {
    const now = new Date();
    const options = { month: "long", year: "numeric" };
    return now.toLocaleDateString("en-US", options);
  };

  if (loading) return <Loading/>;
  if (error) return <Error error={error}/>;

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