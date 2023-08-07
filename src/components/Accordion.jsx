import React, { useState } from 'react';
import icon from '../assets/icons/chevron-down.svg';
const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-md shadow-md">
      <div
        className="flex items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
       <img src={icon} alt="arrow" />
      </div>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
