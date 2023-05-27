import React from 'react';

const Banner = () => {
  return (
    <div className='w-full h-full relative p-0'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center items-center'>
          <img src='/images/logoWeb.png' alt='logo-app' className='w-[200px] h-[200px]' />
          <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black'>
            AI<span className='text-blue-500'>CARE</span>
          </h1>
          {/* <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>UIT</span> offers functions that support students in their academic journey, including guidance, counseling, and psychological support</h1> */}
        </div>
        <img className='w-full max-h-[500px] object-cover' src='/images/backgroundWeb.png' alt='/' />
      </div>
      <style jsx>{`
        @media (max-width: 640px) {
          .max-h-[500px] {
            max-height: 300px;
          }
          .text-4xl {
            font-size: 2rem;
          }
          .text-5xl {
            font-size: 2.25rem;
          }
          .text-6xl {
            font-size: 2.5rem;
          }
          .text-7xl {
            font-size: 2.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
