import React from 'react'
import Banner from '../components/Banner'
import Benefit from '../components/Benefit'
import Intro from '../components/Intro'
import Footerr from '../components/Footerr'

export default function HomeTest() {
  return (
      <div>
      <Banner />
      <div>

      <img className="absolute w-[45%] h-[80%] z-20 top-[48%] left-[52%] transform -translate-x-1/2" src={"/images/demo1.png"} alt="demo1" />
      </div>
      <Benefit />
      <Intro />
      <Footerr/>
    </div>
  )
}
