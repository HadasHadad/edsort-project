import React from 'react';
import menuIcon from '../assets/icons/menu.svg'
import image from '../assets/images/bgBlue.png'
import searchIcon from '../assets/icons/search.svg'
const Navbar = () => {
    
  return (
    <nav className=" p-4" style={{ backgroundImage:`url(${image})` }}>
      <div className="flex items-center justify-evenly ">
      <img src={menuIcon} alt="SVG menu "/>
    
        <div className="flex items-center bg-white rounded-lg px-2  ">
          <input
            type="text"
            placeholder="חפש"
            style={{
                backgroundImage: `url(${searchIcon})`,
                backgroundPosition: "right 5px center",
                backgroundRepeat: "no-repeat",
                paddingRight: "40px"
                
              }}
            className="py-2 px-3 bg-transparent focus:outline-none "
          />
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
