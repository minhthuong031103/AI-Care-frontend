import React from 'react'
import {FcFlashOn, FcLike, FcClock, FcRatings} from 'react-icons/fc'
import { RiHeartPulseFill, RiAccountCircleFill } from "react-icons/ri";
import {
    AiFillEdit,
  AiTwotoneFire
} from "react-icons/ai";
const Benefit = () => {
    return (
      <div className='w-full h-screen'>
        <div className='grid grid-cols-2 md:grid-cols-2 justify-center space-betwwen text-center my-[50px] flex '>
            <div>
                <FcFlashOn size={80} className='ml-[190px]'/>
                <h3 className='text-xl font-bold mr-[200px]'>Lắng nghe, thấu hiểu</h3>
                <p className='mr-[210px]'>Lắng nghe, chia sẻ, đưa lời khuyên nhanh chóng.</p>
                </div>
            <div>
                <AiFillEdit size={80} className='ml-[390px] text-[#a784dc]'/>
                <h3 className=' ml-[200px] text-xl font-bold'>Theo dõi sức khỏe tinh thần</h3>
                <p className='ml-[230px]'>Giúp ghi chép, theo dõi tâm trạng mỗi ngày.</p>
            </div>
        
                <div>
                <RiHeartPulseFill className='text-[#2e55a9] ml-[180px]' size={80} />
                <h3 className='text-xl font-bold mr-[200px]'>Điều trị tổn thương tinh thần</h3>
                <p className='mr-[190px]'>Tạo cơ hội kết nối với những bác sĩ tâm lý uy tín.</p>
            </div>
            <div>
                <AiTwotoneFire size={80} className='text-orange-600 ml-[390px]'/>
                <h3 className='text-xl font-bold ml-[230px]'>Rèn luyện</h3>
                <p className='ml-[240px]'>Cung cấp các bài tập nhằm nâng cao sức khỏe.</p>
            </div>
      </div>
            <div className='bg-black h-[100px] flex justify-center items-center'>
                <h1 className='text-white text-3xl font-bold'>Ứng dụng trí tuệ nhân tạo nhằm nâng cao sức khỏe tinh thần cho mọi người</h1>
            </div>
    </div>
  )
}

export default Benefit