import React from 'react';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <h1>List Keeper</h1>
      </Link>
      <ul>
        <li>
          <Link to='/login'>
            <i className='fas fa-sign-in-alt'></i> Log In
          </Link>
        </li>
        <li>
          <Link to='/signup'>
            <i className='fas fa-user-plus'></i> Sign Up
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
