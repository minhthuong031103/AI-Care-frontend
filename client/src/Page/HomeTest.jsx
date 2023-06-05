import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Benefit from '../components/Benefit';
import Intro from '../components/Intro';
import Footerr from '../components/Footerr';

export default function HomeTest() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const responseData = urlParams.get('responseData');

    // Use the responseData as needed
    console.log(responseData);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <Banner />

      {/* <img className="absolute w-[45%] h-[80%] z-20 top-[48%] left-[52%] transform -translate-x-1/2" src={"/images/demo1.png"} alt="demo1" /> */}

      <div className="w-full">
        <Benefit />
        <Intro />
        <Footerr />
      </div>
    </div>
  );
}
