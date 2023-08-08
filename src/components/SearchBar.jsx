import React from 'react'
import searchIcon from '../assets/icons/search.svg'

export default function SearchBar() {
  return (
    <>
        <div className="flex  items-center bg-white rounded-lg px-2 shadow-sm">
          <input
            type="text"
            placeholder="חפש"
            style={{
                backgroundImage: `url(${searchIcon})`,
                backgroundPosition: "right 5px center",
                backgroundRepeat: "no-repeat",
                paddingRight: "40px"
                
              }}
            className="py-2 px-3 bg-transparent focus:outline-none  "
          />
         
        </div>
    </>
  )
}