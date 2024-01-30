import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button">
        {selectedOption ? selectedOption.label : 'Select an option'}
      </button>
      <ul className="dropdown-menu">
        {options.map((option) => (
          <li key={option.value} onClick={() => handleSelect(option)}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
