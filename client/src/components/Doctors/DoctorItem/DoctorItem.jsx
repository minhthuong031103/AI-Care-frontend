import React from 'react';
import { Link } from 'react-router-dom';
import {GrLinkNext} from 'react-icons/gr'

import './styles.css';

const DoctorItem = ({
  doctor: { description, name, city, certificate, address, avatar, id },
}) => {
  return (
    <Link to={`/doctor/${id}`}>
      {' '}
      <div className="blogItem-wrap">
        <img className="blogItem-cover" src={avatar} alt="cover" />
        <p className="">{city}</p>
        <h3 className='text-xl'>{name}</h3>
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
