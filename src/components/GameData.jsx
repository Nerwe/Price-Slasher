import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import Footer from './Footer';
import Navbar from './Navbar';

const GameData = () => {
  const { id } = useParams();

  if (isNaN(id)) {
    return <h2 className="text-center text-red-500">Invalid ID format. Please use a numeric ID.</h2>;
  }

  const { data, loading, error } = useFetch(`https://gamerpower.p.rapidapi.com/api/giveaway?id=${id}`);

  if (loading) return <Loading />;
  if (error) return <Error error={error}/>;

  return (
    <div className="min-h-screen bg-slate-300 dark:bg-neutral-800 text-gray-900 dark:text-gray-100 flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-96">
            <img 
              className="w-full h-full object-cover" 
              src={data.image} 
              alt={data.title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900 to-transparent p-6">
              <h1 className="text-4xl font-bold text-white mb-2">{data.title}</h1>
              <div className="flex flex-wrap gap-2">
                {data.platforms.split(', ').map((platform, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">About this giveaway</h2>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">{data.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-200 dark:bg-neutral-700 p-4 rounded-lg">
                    <h3 className="text-gray-600 dark:text-gray-300 text-sm mb-1">Worth</h3>
                    <p className="text-gray-900 dark:text-white font-semibold">{data.worth}</p>
                  </div>
                  <div className="bg-gray-200 dark:bg-neutral-700 p-4 rounded-lg">
                    <h3 className="text-gray-600 dark:text-gray-300 text-sm mb-1">Type</h3>
                    <p className="text-gray-900 dark:text-white font-semibold">{data.type}</p>
                  </div>
                  <div className="bg-gray-200 dark:bg-neutral-700 p-4 rounded-lg">
                    <h3 className="text-gray-600 dark:text-gray-300 text-sm mb-1">Status</h3>
                    <p className="text-gray-900 dark:text-white font-semibold">{data.status}</p>
                  </div>
                  <div className="bg-gray-200 dark:bg-neutral-700 p-4 rounded-lg">
                    <h3 className="text-gray-600 dark:text-gray-300 text-sm mb-1">Users</h3>
                    <p className="text-gray-900 dark:text-white font-semibold">{data.users}+ claimed</p>
                  </div>
                </div>

                <div className="bg-gray-200 dark:bg-neutral-700 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-2">Instructions</h3>
                  <p className="text-gray-700 dark:text-gray-200">{data.instructions}</p>
                </div>
              </div>
              
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <Link 
                    to={data.open_giveaway_url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg font-semibold mb-4 hover:bg-orange-600 transition-colors"
                  >
                    Claim Game
                  </Link>
                  
                  <button 
                    className="block w-full bg-transparent border-2 border-green-500 text-green-500 text-center py-3 rounded-lg font-semibold mb-4 hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Add to Collection
                  </button>
                  
                  {data.published_date && (
                    <div className="text-center text-gray-600 dark:text-gray-300 text-sm">
                      Published: {new Date(data.published_date).toLocaleDateString()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GameData;
