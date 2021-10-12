import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import '../styles/screens/HomeScreen.scss';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : user ? (
        <div className="welcome">
          <Link to="/listinventory">
            <button className="btn">Go to my list inventory</button>
          </Link>
        </div>
      ) : (
        <div className="welcome">
          <h1>Welcome to List Keeper</h1>
          <h3>Log in to access your lists.</h3>
          <h3>
            Don't have an account? Sign up today to keep track of your lists
            from anywhere for free!
          </h3>
        </div>
      )}
    </Fragment>
  );
};

export default HomeScreen;
