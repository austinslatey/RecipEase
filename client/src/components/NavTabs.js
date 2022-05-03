import React from 'react';


function NavTabs({ currentPage, handlePageChange }){
  return (
  
        <ul className="nav nav-tabs" style={c3Style}>
          <li className="nav-item">
            <a
             style={{
              color: "#001233"}} 
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
              href="#Recipes"
              onClick={() => handlePageChange('Recipes')}
              className={currentPage === 'Recipes' ? 'nav-link active' : 'nav-link'}
            >
              Recipes
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
const c3Style = {
  background: '#48CAE4',
  color: 'white',
  padding: '2.0rem',
  text: 'white'
}
 

export default NavTabs;