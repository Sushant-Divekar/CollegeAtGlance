import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className='plogo'><p className='plogoname'>CAG</p></div>
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='menu'>
        <Link to='/' onClick={toggleMenu}><h4>Home</h4></Link>
        <Link to='/prediction' onClick={toggleMenu}><h4>Prediction</h4></Link>
        {/* <Link to='/counselling' onClick={toggleMenu}><h4>Councelling</h4></Link> */}
        <Link to='/diary' onClick={toggleMenu}><h4>Diary</h4></Link>
        <Link to='/about' onClick={toggleMenu}><h4>About</h4></Link>
        <Link to='/contact' onClick={toggleMenu}><h4>Contact</h4></Link>
      </div>
    </div>
  );
};

export default Navbar;
