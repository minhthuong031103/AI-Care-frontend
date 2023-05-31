import { useColorScheme } from '@mui/material';
import React, { useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import dayjs from 'dayjs';

import GlobalContext from '../../assets/context/GlobalContext';
export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <div>
      <header className="flex items-center">
        <img
          src="/images/calendar.png"
          alt="calendar.png"
          className="w-12 h-12 mr-2"
        />
        <h1 className="text-3xl text-blue-500 font-bold">
          Lịch theo dõi tâm trạng
        </h1>
        <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
          Hôm nay
        </button>
        <button
          onClick={handlePrevMonth}
          className="cursor-pointer text-gray-600 mx-2"
        >
          <FaChevronLeft />
        </button>
        <button
          className="cursor-pointer text-gray-600 mx-2"
          onClick={handleNextMonth}
        >
          <FaChevronRight />
        </button>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
        </h2>
      </header>
      {/* <p className=' text-[#666e75] text-[14px] max-w-[500px]'>Đừng quên đánh dấu trạng thái cảm xúc và ghi chú vào lịch để theo dõi cảm xúc nha!</p> */}
    </div>
  );
}
