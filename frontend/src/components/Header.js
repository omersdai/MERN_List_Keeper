import React from 'react';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header>
      <a href='/'>
        <h1>List Keeper</h1>
      </a>
      <ul>
        <li>
          <a href='/login'>
            <i className='fas fa-sign-in-alt'></i> Log In
          </a>
        </li>
        <li>
          <a href='/signup'>
            <i className='fas fa-user-plus'></i> Sign Up
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
