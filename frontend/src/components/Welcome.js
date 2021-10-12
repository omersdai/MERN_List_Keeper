// import { Fragment } from 'react';
import '../styles/components/Welcome.scss';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="welcome">
      <h1>Welcome to List Keeper</h1>
      <h3>Log in to access your lists.</h3>
      <h3>
        Don't have an account? Sign up today to keep track of your lists from
        anywhere for free!
      </h3>
      <Link to="/listinventory">
        <button className="btn">Go to my list inventory</button>
      </Link>
    </div>
  );
};

export default Welcome;
