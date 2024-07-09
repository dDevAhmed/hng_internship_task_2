// src/pages/Home.js
import React from 'react';
import Navbar from '../components/nabvar/Navbar';
import HeroSection from '../components/herosection/HeroSection';
import CollectionSection from '../components/collectionsection/CollectionSection';
// import Navbar from '../components/Navbar';
// import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CollectionSection />
      {/* <HeroSection /> */}
      {/* <h1>Home Page</h1> */}
    </div>
  );
};

export default Home;
