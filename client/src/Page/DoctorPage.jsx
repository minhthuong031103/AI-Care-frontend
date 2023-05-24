import React, { useState } from 'react';

import { doctorList } from './config/data';
import DoctorList from '../components/Doctors/DoctorList/DoctorList';
import DoctorSearchBar from '../components/Doctors/SearchBar/DoctorSearchBar';

import DoctorBanner from '../components/Doctors/DoctorBanner';

const DoctorPage = () => {
  const [doctors, setDoctors] = useState(doctorList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allDoctors = doctorList;
    const filteredDoctors = allDoctors.filter((doctor) =>
      doctor.city.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setDoctors(filteredDoctors);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setDoctors(doctorList);
    setSearchKey('');
  };

  return (
    <div className="bg-[#f5f5f5f5]">
      <DoctorBanner></DoctorBanner>
      {/* Search Bar */}
      <DoctorSearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {!doctors.length ? (
        <>
          <div className="emptyList-wrap">
            <img src="/assets/images/13525-empty.gif" alt="empty" />
          </div>
        </>
      ) : (
        <DoctorList doctors={doctors} />
      )}
    </div>
  );
};

export default DoctorPage;
