import React from 'react';
import CardList from '../components/CardList';
import Navbar from '../components/Navbar';
import Submenu from '../components/Submenu';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

function Home() {
  const { platform } = useParams();
  return (
    <div className="home">
      <Navbar></Navbar>
      <Submenu></Submenu>
      <CardList platform={platform}></CardList>
      <Footer></Footer>
    </div>
  );
}

export default Home;
