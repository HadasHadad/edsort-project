import React from 'react'
import searchIcon from '../assets/icons/search.svg'
import filterIcon from '../assets/icons/filtering.svg'

export default function SearchBar() {
  return (
    <>
      <div className="relative flex items-center">
        <img
          src={filterIcon}
          alt="filter"
          className="h-4 w-4 absolute left-3"
        />
        <input
          type="text"
          placeholder="חפש"
          className="py-2 px-10 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:border-blue-300"
        />
        <img
          src={searchIcon}
          alt="search"
          className="h-4 w-4 absolute right-3"
        />
      </div>
    </>
  );
}