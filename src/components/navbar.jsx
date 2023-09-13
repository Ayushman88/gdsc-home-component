import React from 'react';
import logo from '../assets/GDSC-LOGO.png';
import mitLogo from '../assets/mitadtlogo.png';
import {Link} from 'react-scroll'
function Header() {
  
  return (
    <>
      <header className="header p-10">
        <div className="nav bg-opacity-100 bg-transparent w-88vw h-4vw rounded-2xl ml-3vw flex items-center">
          <div className="nav-first flex items-center w-22vw">
            <img src={logo} width={100} alt="" />
          </div>
          <div className="nav-second w-28vw flex mx-auto space-x-12 font-sans text-gray-500 text-lg cursor-pointer">
            <span><Link to='aboutus'>About Us</Link></span>
            <span><Link to="#tech">Technologies</Link></span>
            <span><Link to="ourteam">Team</Link></span>
            <span><Link to="events">Our Events</Link></span>
            <span><Link to='contact'>Contact Us</Link></span>
          </div>
          <button  className="hidden">
          </button>
          <img className="mit h-4.5vw ml-2vw mr-4" src={mitLogo} width={100} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
