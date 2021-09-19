import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../actions/userActions';
import { getInventoryList } from '../actions/listActions';
import '../styles/screens/ListInventoryScreen.scss';

const ListInventoryScreen = () => {
  const userId = '61462902969c22c63acde0a5';
  const dispatch = useDispatch();

  const { user, listInventory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUser(userId)); // for testing purposes
    dispatch(getInventoryList(userId));
  }, [dispatch]);
  return (
    <div className='list-inventory'>
      <ul>
        {listInventory.listInventory.map((list) => (
          <li key={list._id}>
            <div className='list-box'>
              <h3>{list.name}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInventoryScreen;
