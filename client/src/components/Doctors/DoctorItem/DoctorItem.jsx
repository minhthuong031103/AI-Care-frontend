import React from 'react';
import { Link } from 'react-router-dom';
import { GrLinkNext } from 'react-icons/gr';

import './styles.css';

const DoctorItem = ({
  doctor: { description, name, vip, city, certificate, address, avatar, id },
}) => {
  return (
    <Link to={`/doctor/${id}`}>
      {' '}
      <div className="blogItem-wrap">
        <img className="blogItem-cover" src={avatar} alt="cover" />
        <div>
          <button className=" px-4 py-2 disabled w-fit h-fit sm:px-8 sm:py-2 bg-[#30A2FF] text-white rounded-md">
            {city}
          </button>{' '}
          {vip ? (
            <button className=" px-4 py-2 disabled w-fit h-fit sm:px-8 sm:py-2 bg-[#FFC26F] text-white rounded-md">
              Được đề nghị
            </button>
          ) : (
            <></>
          )}
        </div>

        <h3>B.S {name}</h3>
        <p className="blogItem-desc">{description}</p>

        <div className="flex items-end mt-10 justify-end">
          <button type="Button">
            <p
              className="font-inter font-medium bg-blue-500 text-white px-4 py-2
          rounded-md "
            >
              <p>
                <GrLinkNext size={25} />
              </p>
            </p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default DoctorItem;
