import React from 'react';
import HomeHeader from './HomeHeader';
import Stats from '../Stats/Stats';
import Steps from '../Steps/Steps';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Stats />
      <Steps />
      <Contact />
    </>
  )
}

export default Home