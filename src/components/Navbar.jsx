import React from 'react';
import SearchBar from './SearchBar';
import Menu from './Menu';
import image from '../assets/images/bgBlue.png'

const Navbar = () => {
    
  return (
    <nav className=" p-4 h-40 relative" style={{ backgroundImage:`url(${image})` ,backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
      <div className="flex items-center justify-around ">
      <Menu/>
    
      <SearchBar/>
      </div>
    </nav>
  );
};

export default Navbar;
