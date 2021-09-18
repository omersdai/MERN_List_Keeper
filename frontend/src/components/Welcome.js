// import { Fragment } from 'react';
import '../styles/components/Welcome.scss';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Welcome to List Keeper</h1>
      <h3>Log in to access your lists.</h3>
      <h3>
        Don't have an account? Sign up today to keep track of your lists from
        anywhere for free!
      </h3>
    </div>
  );
};

export default Welcome;
