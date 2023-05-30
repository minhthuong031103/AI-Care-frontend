import React from 'react';
import FormField from '../../Diary/FormField';

const DoctorSearchBar = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <div className="searchBar-wrap  w-fit-content mx-auto my-10 p-2 rounded-md">
    <div className="mt-10 ">
      <FormField
        labelName="Tìm kiếm"
        type="text"
        name="text"
        placeholder="Tìm kiếm bác sĩ theo thành phố, tỉnh thành..."
        value={value}
        handleChange={handleSearchKey}
      />
    </div>
    <form onSubmit={formSubmit} className="mt-10">
      {/* <input
        type="text"
        placeholder="Tìm kiếm bác sĩ theo thành phố, tỉnh thành..."
        value={value}
        onChange={handleSearchKey}
        className="outline-none border-none w-full sm:w-500"
      /> */}
      {value && (
        <span className="pr-2 cursor-pointer" onClick={clearSearch}>
          X
        </span>
      )}
      <button
        type="submit"
        className="px-4 py-2 sm:px-8 sm:py-2 bg-[#3b82f6] text-white rounded-md"
      >
        Tìm kiếm
      </button>
    </form>
  </div>
);

export default DoctorSearchBar;
