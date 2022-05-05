import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={{ minHeight: '20px', backgroundColor:"#90E0EF"}}>
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
          onClick={() => handlePageChange('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Dashboard
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Recipes"
          onClick={() => handlePageChange('Recipes')}
          className={currentPage === 'Recipes' ? 'nav-link active' : 'nav-link'}
        >
          Recipies
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#grocerylist"    
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
          <li className="nav-item">
            <a
              href="#SignUp"
              onClick={() => handlePageChange('SignUp')}
              className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
            >
              SignUp
            </a>
          </li>
        </ul>
    );
}


export default NavTabs;
