import React from 'react';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Nav from '../components/Nav';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div>
        <Announcement />
       <Nav /> 
       <Slider />
       <Categories />
    </div>
  )
}

export default Home;
