import React, { useState } from 'react';

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
        <svg
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
          />
        </svg>
      </div>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

export default Accordion;
