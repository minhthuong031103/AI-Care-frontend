import React, { useEffect, useState } from 'react';
// import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Transition } from '@headlessui/react';
import { Button } from '@mui/material';
// import { Link } from 'react-scroll';
const Navbar = () => {
  const currentPath = window.location.pathname;
  const pr = currentPath.substring(1); // Removes the leading slash
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(pr);
  const onClickLogin = () => {
    setActivePage('/login');
    navigate('/login');
  };

  const onClickLogout = () => {
    setActivePage('/login');
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    navigate('/login');
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <nav className="navbar">
        <h3 className="logo">Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
      {/* <ul
          className={Mobile ? 'nav-links-mobile' : 'nav-links'}
          onClick={() => setMobile(false)}
        >
          <Link
            to="/"
            className={activePage === '/' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('/')}
          >
            <li>Trang chủ</li>
          </Link>
          <Link
            to="/exercise"
            className={activePage === 'exercise' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('exercise')}
          >
            <li>Tập luyện</li>
          </Link>
          <Link
            to="/community"
            className={activePage === 'community' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('community')}
          >
            <li>Cộng đồng</li>
          </Link>
          <Link
            to="/schedule"
            className={activePage === 'schedule' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('schedule')}
          >
            <li>Đặt lịch khám</li>
          </Link>
          <Link
            to="/diary"
            className={activePage === 'diary' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('diary')}
          >
            <li>Nhật ký</li>
          </Link>
          <Link
            to="/contact"
            className={activePage === 'contact' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('contact')}
          >
            <li></li>
          </Link>
          <Link to="/login">
            <button type="Button">
              <p
                className="font-inter font-medium bg-[#27374D] text-white px-5 py-3
            rounded-md ml-4"
              >
                Login
              </p>
            </button>
          </Link>
        </ul> */}
      {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
      {/* <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav> */}{' '}
      <div>
        <nav className=" shadow-sm w-full z-10">
          <div className="w-full">
            <div className="flex items-center h-20 w-full">
              <div className="flex items-center  mx-20  justify-between w-full">
                <div className="flex justify-center items-center flex-shrink-0 ">
                  <h1 className=" font-bold text-3xl cursor-pointer">
                    AI-<span className="text-blue-500">Care</span>
                  </h1>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      onClick={() => setActivePage('')}
                      activeClass="Home"
                      to="/"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-lg font-medium ${
                        activePage === '' ? 'bg-[#C4DFDF]' : ''
                      }`}
                    >
                      Trang chủ
                    </Link>
                    <Link
                      onClick={() => setActivePage('chat')}
                      activeClass="about"
                      to="/chat"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-lg font-medium ${
                        activePage === 'chat' ? 'bg-[#C4DFDF]' : ''
                      }`}
                    >
                      AI-Care chat
                    </Link>
                    <Link
                      onClick={() => setActivePage('exercise')}
                      activeClass="work"
                      to="/exercise"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-lg font-medium ${
                        activePage === 'exercise' ? 'bg-[#C4DFDF]' : ''
                      }`}
                    >
                      Tập luyện
                    </Link>

                    <Link
                      onClick={() => setActivePage('schedule')}
                      activeClass="Services"
                      to="/schedule"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-lg font-medium ${
                        activePage === 'schedule' ? 'bg-[#C4DFDF]' : ''
                      }`}
                    >
                      Bác sĩ tâm lý
                    </Link>
                    <Link
                      onClick={() => setActivePage('diary')}
                      activeClass="Services"
                      to="/diary"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-lg font-medium ${
                        activePage === 'diary' ? 'bg-[#C4DFDF]' : ''
                      }`}
                    >
                      Nhật ký
                    </Link>
                    <Link
                      onClick={() => setActivePage('profile')}
                      activeClass="Services"
                      to="/profile"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className={`cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-lg font-medium ${
                        activePage === 'profile' ? 'bg-[#C4DFDF]' : ''
                      }`}
                    >
                      Tài khoản
                    </Link>

                    <button
                      type="button"
                      onClick={token ? onClickLogout : onClickLogin}
                      offset={50}
                      className="cursor-pointer bg-[#27374D] text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-black"
                    >
                      {token ? 'Đăng xuất' : 'Đăng nhập'}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mr-10 flex md:hidden ">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-blue-600 inline-flex  items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                >
                  <Link
                    to="/"
                    activeClass="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Trang chủ
                  </Link>
                  <Link
                    activeClass="about"
                    to="/chat"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    AI-Care chat
                  </Link>

                  <Link
                    activeClass="work"
                    to="/exercise"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Tập luyện
                  </Link>
                  <Link
                    activeClass="services"
                    to="/schedule"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Bác sĩ tâm lý
                  </Link>

                  <Link
                    activeClass="work"
                    to="/diary"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Nhật ký
                  </Link>
                  <Link
                    activeClass="work"
                    to="/profile"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Tài khoản
                  </Link>

                  <button
                    type="button"
                    onClick={token ? onClickLogout : onClickLogin}
                    offset={50}
                    className="cursor-pointer bg-[#27374D] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                  >
                    {token ? 'Đăng xuất' : 'Đăng nhập'}
                  </button>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
