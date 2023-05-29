import React from 'react';
export default function FormField({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
  disabled,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className=" text-xs bg-[#ECECF1] py-1 
            px-2 rounded-[5px] "
          >
            Ngẫu nhiên
          </button>
        )}
      </div>

      <input
        disabled={disabled}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900
      text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]
      outline-none block  w-full sm:w-[60%] p-3"
      ></input>
    </div>
  );
}
