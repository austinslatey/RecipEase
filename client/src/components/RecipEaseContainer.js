import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Recipies from "./pages/Recipies";
import GroceryList from "./pages/GroceryList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';







export default function RecipEaseContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  //checking each condition to see what page we are on , then rendering that page, otherwise rendering the contact form
  const renderPage = () => {
    if (currentPage === "Homepage") {
      return <Homepage />;
    }
    if (currentPage === "Dashboard") {
      return <Dashboard />;
    }
    if (currentPage === "Recipies") {
      return <Recipies />;
    }
    if (currentPage === "GroceryList") {
      return <GroceryList />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    if (currentPage === "Login") return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div style={c2Style}>
      <div>
      {/* the handlepage function is what were using as prop */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
    </div>
  );
}

const c2Style = {
  background: 'steelblue',
  color: 'white',
  padding: '2.0rem',
  text: 'black'
}
