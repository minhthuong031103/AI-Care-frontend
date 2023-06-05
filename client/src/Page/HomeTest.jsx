import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Benefit from '../components/Benefit';
import Intro from '../components/Intro';
import Footerr from '../components/Footerr';
import { useNavigate } from 'react-router-dom';

export default function HomeTest() {
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
      const responseDataString = urlParams.get('responseData');
      const responseDataObject = JSON.parse(responseDataString);
      // Use the responseData as needed
      localStorage.setItem('token', responseDataObject.token);
      localStorage.setItem('_id', responseDataObject._id);
      localStorage.setItem('username', responseDataObject.name);
      console.log(responseDataObject);
      navigate('/');
    }
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
