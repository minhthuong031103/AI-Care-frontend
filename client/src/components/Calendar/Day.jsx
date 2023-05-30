import dayjs from 'dayjs';
import React, {useContext, useEffect, useState} from 'react';
import GlobalContext from '../../assets/context/GlobalContext';

export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  return (
    <div className='border border-gray-300 flex flex-col'>
      <header className='flex flex-col items-center'>
        {rowIdx === 0 && (
          <p className='text-sm mt-1 mb-0'>{day.format('ddd').toUpperCase()}</p>
        )}

        <div>

          <p
            className={`text-sm p-1 mt-1 text-center ${getCurrentDayClass()}`}
            // style={{ paddingBottom: rowIdx === 0 ? '100px' : '', height: rowIdx > 0 ? '125px' : '', borderTop: rowIdx === 0 ? '1px solid black' : '' }}
            style={{ marginBottom: rowIdx === 0 ? '0px' : '',  height: rowIdx === 0 ? '50px' : ''}}
          >
            {day.format('DD')}
          </p>
        </div>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}
