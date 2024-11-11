import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Card from './Card'
import Pagination from './Pagination';
import Loading from './Loading';
import Error from './Error';
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
    <div className="flex flex-col gap-5 h-auto">
      <h2 className="mt-2">Available Giveaways - {getCurrentMonthYear()}</h2>
      <div className="flex flex-wrap gap-5 justify-center">
        {displayedItems.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}></Pagination>
    </div>
  );
}

export default CardList