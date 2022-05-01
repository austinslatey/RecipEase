import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';




function NavTabs({ currentPage, handlePageChange }){
  
  const [value, setValue] = React.useState('one');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%' }}>
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="Item One" />
      <Tab value="two" label="Item Two" />
      <Tab value="three" label="Item Three" />
    </Tabs>
  </Box>
  
        // <ul className="nav nav-tabs">
        //   <li className="nav-item">
        //     <a
        //      style={{
        //       color: "#001233"}} 
        //       href="#homepage"
        //       onClick={() => handlePageChange('Homepage')}
        //       className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        //     >
        //       Homepage
        //     </a>
        //   </li>
        //   <li className="nav-item">
        //     <a
        //       href="#dashboard"
        //       onClick={() => handlePageChange('DashBoard')}
        //       className={currentPage === 'DashBoard' ? 'nav-link active' : 'nav-link'}
        //     >
        //       DashBoard
        //     </a>
        //   </li>
        //   <li className="nav-item">
        //     <a
        //       href="#Recipies"
        //       onClick={() => handlePageChange('Recipies')}
        //       className={currentPage === 'Recipies' ? 'nav-link active' : 'nav-link'}
        //     >
        //       Recipies
        //     </a>
        //   </li>
        //   <li className="nav-item">
        //     <a
        //       href="#grocerylist"
        //       //  TODO: Add a comment explaining what this logic is doing
    
        //       onClick={() => handlePageChange('GroceryList')}
        //       className={currentPage === 'GroceryList' ? 'nav-link active' : 'nav-link'}
        //     >
        //       Grocery List
        //     </a>
        //   </li>
        //   <li className="nav-item">
        //     <a
        //       href="#Login"
        //       onClick={() => handlePageChange('Login')}
        //       className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        //     >
        //       Login
        //     </a>
        //   </li>
        //   <li className="nav-item">
        //     <a
        //       href="#SignUp"
        //       onClick={() => handlePageChange('SignUp')}
        //       className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
        //     >
        //       SignUp
        //     </a>
        //   </li>
        // </ul>
    );
}
// const c3Style = {
//   background: 'steelblue',
//   color: 'white',
//   padding: '2.0rem',
//   text: 'white'
// }
 

export default NavTabs;