// import { Button } from '@mui/material';
import React, { useState } from 'react';
import './NavTabs.css';
import { Button } from './Button';




function NavTabs({ currentPage, handlePageChange }) {
  // const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }

  }

  window.addEventListener('resize', showButton);
  return (
    <nav>
    <div>
    <ul className="nav nav-tabs">
      <li className="nav-links">
        <a
          href="#homepage"
          onClick={() => handlePageChange('Homepage')}
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Homepage
        </a>
      </li>
      <li className="nav-links">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('DashBoard')}
          className={currentPage === 'DashBoard' ? 'nav-link active' : 'nav-link'}
        >
          DashBoard
        </a>
      </li>
      <li className="nav-links">
        <a
          href="#Recipies"
          onClick={() => handlePageChange('Recipies')}
          className={currentPage === 'Recipies' ? 'nav-link active' : 'nav-link'}
        >
          Recipies
        </a>
      </li>
      <li className="nav-links">
        <a
          href="#grocerylist"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('GroceryList')}
          className={currentPage === 'GroceryList' ? 'nav-link active' : 'nav-link'}
        >
          Grocery List
        </a>
      </li>
      <li className="nav-links">
        <a
          href="#Login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-links">
        <a
          href="#SignUp"
          onClick={() => handlePageChange('SignUp')}
          className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
        >
          SignUp
        </a>
      </li>
    </ul>
    {button && <Button buttonStyle='btn--outine'>SIGN UP</Button>}
  </div>
  </nav>
  );
}

export default NavTabs;