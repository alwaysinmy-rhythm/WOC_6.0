import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
      <Link to='/private/HomePage' id='page_link'> <h4 id='navbartext'>Home</h4></Link>
      <Link to='/private/AccountPage' id='page_link'> <h4 id='navbartext'>Account</h4></Link>

      
      </ul>
    </nav>
  );
}

export default Navbar;
