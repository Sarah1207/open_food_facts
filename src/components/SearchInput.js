import React from "react";

const SearchInput = ({ value, handleChange, placeholder }) => {
  return (
    <div className="input__container">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};

export default SearchInput;
