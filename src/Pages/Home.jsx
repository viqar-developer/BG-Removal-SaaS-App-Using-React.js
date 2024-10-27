import React from 'react';
import Header from '../Components/Header';
import Steps from '../Components/Steps';
import BgSlider from '../Components/BgSlider';
import Testimonials1 from '../Components/Testimonials1';
import Upload from '../Components/Upload';

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonials1 />
      <Upload />
    </div>
  );
}

export default Home;
