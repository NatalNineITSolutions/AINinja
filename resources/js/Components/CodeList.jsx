import React, { useState } from 'react';

const CodeList = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle dropdown selection change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <p>Choose a Fruit:</p>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Language</option>
        <option value="java">java</option>
        <option value="c">c prog</option>
      </select>
      {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
    </div>
  );
};

export default CodeList;
