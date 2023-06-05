import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Benefit from '../components/Benefit';
import Intro from '../components/Intro';
import Footerr from '../components/Footerr';

export default function HomeTest() {
  useEffect(() => {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)responseData\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    );

    if (cookieValue) {
      const responseData = JSON.parse(decodeURIComponent(cookieValue));
      localStorage.setItem('username', responseData.name);
      localStorage.setItem('_id', responseData._id);
      localStorage.setItem('token', responseData.token);

      // Clear the cookie after processing it
      document.cookie =
        'responseData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      // Reload the page after storing the data
      window.location.reload();
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
