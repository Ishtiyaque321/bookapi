// NavBar.js
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className='flex gap-10 p-4 m-4'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/ContactUs">Contact Us</Link>
        </li>

      </ul>
    </nav>
  );
};

export default NavBar;
