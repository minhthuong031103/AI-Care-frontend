import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const onClickLogin = () => {
    navigate('/login');
  };

  const onClickLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    navigate('/login');
  };

  const [activePage, setActivePage] = useState('/');
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <h3 className="logo">Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul
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
            to="/profile"
            className={activePage === 'profile' ? 'bg-[#C4DFDF]' : ''}
            onClick={() => setActivePage('profile')}
          >
            <li>Tài khoản</li>
          </Link>

          <button type="Button" onClick={token ? onClickLogout : onClickLogin}>
            <p
              className="font-inter font-medium bg-[#27374D] text-white px-5 py-3
            rounded-md ml-4"
            >
              {token ? 'Đăng xuất' : 'Đăng nhập'}
            </p>
          </button>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
export default Navbar;
