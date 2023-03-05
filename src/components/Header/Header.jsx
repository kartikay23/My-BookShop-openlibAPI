import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Your choice of Books are here !!</h2><br />
                <p className='header-text fs-18 fw-3'>Type into the search bar and find your desired books from vast open library resource, along with the details. </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header