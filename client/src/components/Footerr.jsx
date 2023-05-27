import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
        <div className='sm:flex text-center flex-col justify-center items-center'>
          <div className='flex justify-center items-center ml-[-55px]'>
            <img src='/images/logoWeb.png' alt='logo-app' className='w-[120px] h-[120px]' />
            <h1 className='px-2 text-4xl font-bold text-black'>
              AI<span className='text-blue-500'>CARE</span>
            </h1>
          </div>

          <div className='flex justify-center w-full sm:max-w-[200px] mt-0 cursor-pointer'>
            <FaFacebook className='icon text-[#1b74e4] mr-4' size={30} />
            <FaInstagram className='icon text-[#f14d4b] mr-4' size={30} />
            <AiTwotoneMail className='icon text-red-600' size={30} />
          </div>
        </div>

        <div className='flex justify-center p-4'>
          <p>© 2023 AICARE. Đã đăng ký Bản quyền.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
