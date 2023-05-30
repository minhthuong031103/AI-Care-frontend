import React, {useState, useContext, useEffect} from 'react'
import { getMonth } from '../../utils/ContCal'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import Sidebar from './Sidebar'
import GlobalContext from '../../assets/context/GlobalContext'
import EventModal from './EventModal'
function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, showEventModal } = useContext(GlobalContext);
  
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);


  return (
    <div>
      <React.Fragment>
        {showEventModal && <EventModal />}
        <div className='h-screen flex flex-col'>
          <CalendarHeader/>
          <div className='flex flex-1'>
            <Sidebar />
            <Month month={currentMonth} />
          </div>
        </div>
      </React.Fragment>
    </div>
  )
}

export default Calendar