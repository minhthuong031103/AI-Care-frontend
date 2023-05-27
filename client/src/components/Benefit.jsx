import React from 'react';
import { FcFlashOn } from 'react-icons/fc';
import { RiHeartPulseFill} from 'react-icons/ri';
import { AiFillEdit, AiTwotoneFire } from 'react-icons/ai';

const Benefit = () => {
  return (
    <div className='w-full h-full min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center my-8 md:my-16'>
        <div className="col-span-1">
          <div>
            <FcFlashOn size={80} className='mx-auto' />
            <h3 className='text-xl font-bold'>Lắng nghe, thấu hiểu</h3>
            <p>Lắng nghe, chia sẻ, đưa lời khuyên nhanh chóng.</p>
          </div>
          <div>
            <AiFillEdit size={80} className='mx-auto text-[#a784dc]' />
            <h3 className='text-xl font-bold'>Theo dõi sức khỏe tinh thần</h3>
            <p>Giúp ghi chép, theo dõi tâm trạng mỗi ngày.</p>
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="w-full h-full object-cover"
            src="/images/demo1.png"
            alt="demo1"
          />
        </div>
        <div className="col-span-1">
          <div>
            <RiHeartPulseFill className='text-[#2e55a9] mx-auto' size={80} />
            <h3 className='text-xl font-bold'>Điều trị tổn thương tinh thần</h3>
            <p>Tạo cơ hội kết nối với những bác sĩ tâm lý uy tín.</p>
          </div>
          <div>
            <AiTwotoneFire size={80} className='text-orange-600 mx-auto' />
            <h3 className='text-xl font-bold'>Rèn luyện</h3>
            <p>Cung cấp các bài tập nhằm nâng cao sức khỏe.</p>
          </div>
        </div>
      </div>
      <div className='bg-black h-[100px] flex justify-center items-center py-[10px]'>
        <h1 className='text-white text-3xl font-bold'>
          Ứng dụng trí tuệ nhân tạo xây dựng sức khỏe tinh thần
        </h1>
      </div>
    </div>
  );
};

export default Benefit;







