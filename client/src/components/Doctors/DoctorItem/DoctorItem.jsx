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
        <p className="chip">{city}</p>
        <h3>{name}</h3>
        <p className="blogItem-desc">{description}</p>

        <div className="flex items-end mt-10 justify-end">
          <button type="Button">
            <p
              className="font-inter font-medium bg-[#A5C0DD] text-[#0C134F] px-4 py-2
          rounded-md "
            >
              ➝
            </p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DoctorItem;
