import React from 'react';
import HomeHeader from './HomeHeader';
import Stats from '../Stats/Stats';
import Steps from '../Steps/Steps';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Stats />
      <Steps />
      <Contact />
      <AboutUs />
    </>
  )
}

export default Home