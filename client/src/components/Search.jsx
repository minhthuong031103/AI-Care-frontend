import React, { useEffect, useState } from 'react';
import { BsSearchHeartFill } from 'react-icons/bs';

export default function Search({ value, handleSearchKey, setSearchKey }) {
  const tags = [
    {
      id: 1,
      name: 'Tâm lý học',
    },
    {
      id: 2,
      name: 'Tâm lý học nam giới',
    },
    {
      id: 3,
      name: 'Tâm lý học nữ giới',
    },
    {
      id: 4,
      name: 'Tâm lý học trẻ em',
    },
    {
      id: 5,
      name: 'Bệnh tâm lý',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="max-h-[500px] relative w-full">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col justify-center items-center top-[0px]">
          <img
            src="/images/logoWeb.png"
            alt="logo-app"
            className="w-[280px] h-[280px]"
          />
          {/* <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-500'>UIT</span> offers functions that support students in their academic journey, including guidance, counseling, and psychological support</h1> */}
        </div>
        <img
          className="w-full max-h-[700px] object-cover"
          src="/images/backgroundWeb.png"
          alt="/"
        />
      </div>

      <div className="bg-white w-full sm:w-[610px] shadow-lg p-1 rounded-lg mt-[-117px] mx-[20%] sm:mx-auto flex items-center z-10">
        <input
          onChange={handleSearchKey}
          value={value}
          type="text"
          placeholder="Tìm kiếm"
          className="outline-none ml-2 w-full h-[20px]"
        />
        <BsSearchHeartFill className="text-[30px] text-blue-500" />
      </div>

      <div className="flex flex-wrap justify-center mt-2 z-10 text-xs gap-6 sm:gap-2">
        {tags.map((item, index) => (
          <ul
            key={item.id}
            onClick={() => {
              setActiveIndex(index);
              handleSearchKey(tags[index].name); // Pass the selected tag name to the handleSearchKey function
            }}
            className={`p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] transition-all duration-100 ease-in-out
        ${index === activeIndex ? 'bg-blue-500 text-white' : null}`}
          >
            <li className="line-clamp-1">{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
