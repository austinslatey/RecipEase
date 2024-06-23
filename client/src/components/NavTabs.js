import React from 'react';
import Auth from '../utils/auth'


function NavTabs({ currentPage, handlePageChange }) {

  const loggedIn = Auth.loggedIn();
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <ul className="nav nav-tabs" style={{ minHeight: '20px', backgroundColor: "#90E0EF" }}>
      <li className="nav-item">
        <a
          href="#homepage"
          onClick={() => handlePageChange('Homepage')}
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Homepage
        </a>
      </li>
      {loggedIn ? (
        <li className="nav-item">
          <a
            href="#dashboard"
            onClick={() => handlePageChange('Dashboard')}
            className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
          >
            Dashboard
          </a>
        </li>
      ) : null}
      {loggedIn ? (

        <li className="nav-item">
          <a
            href="#Recipes"
            onClick={() => handlePageChange('Recipes')}
            className={currentPage === 'Recipes' ? 'nav-link active' : 'nav-link'}
          >
            Recipes
          </a>
        </li>
      ) : null}
      {loggedIn ? (
        <li className="nav-item">
          <a
            href="#grocerylist"
            onClick={() => handlePageChange('GroceryList')}
            className={currentPage === 'GroceryList' ? 'nav-link active' : 'nav-link'}
          >
            Grocery List
          </a>
        </li>
      ) : null}
      {!loggedIn ? (
        <li className="nav-item">
          <a
            href="#Login"
            onClick={() => handlePageChange('Login')}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Login
          </a>
        </li>
      ) : null}
      {!loggedIn ? (
        <li className="nav-item">
          <a
            href="#SignUp"
            onClick={() => handlePageChange('SignUp')}
            className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
          >
            Sign Up
          </a>
        </li>
      ) : null}
      {loggedIn ? (
        <li className="nav-item">
          <a
            href="#Logout"
            onClick={logout}
            className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Log Out
          </a>
        </li>
      ) : null}
    </ul>
  );
}


export default NavTabs;
