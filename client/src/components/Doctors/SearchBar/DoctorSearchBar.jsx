import React from 'react';
import './styles.css';

const DoctorSearchBar = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Tìm kiếm bác sĩ theo thành phố, tỉnh thành..."
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button
        type="submit"
        className="w-30 text-white my-2 bg-[#060606] 
          rounded-md px-8 py-5 text-center
           flex items-center justify-center"
      >
        Tìm kiếm
      </button>
    </form>
  </div>
);

export default DoctorSearchBar;
