import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const logoutHandler = (e) => dispatch(logoutUser());
  return (
    <header>
      <Link to="/">
        <h1>List Keeper</h1>
      </Link>
      <ul>
        {user ? (
          <Fragment>
            <Link to="/profile">
              <i className="fas fa-user"></i> {user.name}
            </Link>
            <li onClick={logoutHandler}>
              <i className="fas fa-sign-in-alt"></i> Log Out
            </li>
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="/login">
                <i className="fas fa-sign-in-alt"></i> Log In
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
          </Fragment>
        )}
      </ul>
    </header>
  );
};

export default Header;
