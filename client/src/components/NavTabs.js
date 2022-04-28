import React from 'react';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#homepage"
          onClick={() => handlePageChange('Homepage')}
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Homepage
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#dashboard"
          onClick={() => handlePageChange('DashBoard')}
          className={currentPage === 'DashBoard' ? 'nav-link active' : 'nav-link'}
        >
          DashBoard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Recipies"
          onClick={() => handlePageChange('Recipies')}
          className={currentPage === 'Recipies' ? 'nav-link active' : 'nav-link'}
        >
          Recipies
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#grocerylist"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('GroceryList')}
          className={currentPage === 'GroceryList' ? 'nav-link active' : 'nav-link'}
        >
          Grocery List
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Login"
          onClick={() => handlePageChange('Login')}
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;