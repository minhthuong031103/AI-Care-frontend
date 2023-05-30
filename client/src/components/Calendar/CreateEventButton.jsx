import React from 'react'
import { CgMathPlus } from 'react-icons/cg'
import GlobalContext from '../../assets/context/GlobalContext'
import { useContext } from 'react'
export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
      >
        <CgMathPlus className="w-7 h-7"/>
        <span className="pl-3 pr-7"> Tạo mới</span>
    </button>
  )
}
