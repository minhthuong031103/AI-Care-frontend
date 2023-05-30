import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const DoctorItem = ({
  doctor: { description, name, city, certificate, address, avatar, id },
}) => {
  return (
    <Link to={`/doctor/${id}`}>
      {' '}
      <div className="blogItem-wrap">
        <img className="blogItem-cover" src={avatar} alt="cover" />
        <button className=" px-4 py-2 disabled w-fit h-fit sm:px-8 sm:py-2 bg-[#B0DAFF] text-white rounded-md">
          {city}
        </button>{' '}
        <h3>B.S {name}</h3>
        <p className="blogItem-desc">{description}</p>
        <div className="flex items-end mt-10 justify-end">
          <button type="Button">
            <p
              className="font-inter font-medium bg-blue-500 text-white px-4 py-2
          rounded-md "
            >
              <p className>➝</p>
            </p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DoctorItem;
