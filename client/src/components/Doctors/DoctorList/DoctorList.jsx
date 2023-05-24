import React from 'react';

import './styles.css';
import DoctorItem from '../DoctorItem/DoctorItem';

const DoctorList = ({ doctors }) => {
  return (
    <div className="blogList-wrap">
      {doctors?.map((doctor) => (
        <DoctorItem doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorList;
