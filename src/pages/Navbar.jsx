import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <Link to='/private/HomePage' id='page_link'> Home</Link>
      <Link to='/private/AccountPage' id='page_link'> Account</Link>
       
      </ul>
    </nav>
  );
}

export default Navbar;
