import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, listUsers } from '../actions/userActions';
import Welcome from '../components/Welcome';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  // const user = useSelector((state) => state.user);
  const { loading, error } = userList;

  useEffect(() => {
    dispatch(listUsers());
    dispatch(getUser('61462902969c22c63acde0a5')); // for testing purposes
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Welcome />
      )}
    </Fragment>
  );
};

export default HomeScreen;
