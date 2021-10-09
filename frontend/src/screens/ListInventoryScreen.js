import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import {
  createList,
  deleteList,
  getInventoryList,
} from '../actions/listActions';
import '../styles/screens/ListInventoryScreen.scss';

const ListInventoryScreen = (props) => {
  const userId = '61462902969c22c63acde0a5';

  const dispatch = useDispatch();
  const [listName, setListName] = useState('');
  const [hideAddScreen, setHideAddScreen] = useState(true);
  const [hideDeleteScreen, setHideDeleteScreen] = useState(true);
  const [list, setList] = useState(null);

  const { listInventory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUser(userId)); // for testing purposes
    dispatch(getInventoryList(userId));
  }, [dispatch]);

  // HANDLERS
  const toggleDeletePopup = (e) => {
    e.preventDefault();

    const selectedList = listInventory.listInventory.find(
      (list) => list._id === e.currentTarget.id
    );

    setList(selectedList);
    setHideDeleteScreen(!hideDeleteScreen);
  };

  const toggleAddPopup = (e) => {
    setHideAddScreen(!hideAddScreen);
    setListName('');
  };

  const onAddSubmit = (e) => {
    e.preventDefault();
    dispatch(createList(userId, listName));
    setListName('');
    setHideAddScreen(!hideAddScreen);
  };

  const onDeleteSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteList(userId, list._id));
    setList(null);
    setHideDeleteScreen(!hideDeleteScreen);
  };

  return (
    <Fragment>
      <div className="list-inventory">
        <ul>
          {listInventory.listInventory &&
            listInventory.listInventory.map((list) => (
              <Link key={list._id} to={`/list/${list._id}`}>
                <li>
                  <div className="list-box">
                    <button
                      className="delete-btn"
                      onClick={toggleDeletePopup}
                      id={list._id}
                    >
                      <i className="fas fa-times-circle fa-2x"></i>
                    </button>
                    <h3>{list.name}</h3>
                    <h4>
                      {list.items.reduce(
                        (sum, value) => sum + (value.isCrossed ? 1 : 0),
                        0
                      )}
                      /{list.items.length} active items
                    </h4>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
        <button className="add-btn" onClick={toggleAddPopup}>
          Add New List
        </button>
      </div>
      <div className={`popup-screen add-screen ${hideAddScreen ? 'hide' : ''}`}>
        <button className="cross-btn">
          <i className="fas fa-times-circle fa-2x" onClick={toggleAddPopup}></i>
        </button>

        <form onSubmit={onAddSubmit}>
          <h1>Create a new list:</h1>
          <div className="form-control">
            <label>
              Name: <br />
              <input
                type="text"
                placeholder="Enter name"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
              />
            </label>
          </div>
          <button className="popup-btn">Submit</button>
        </form>
      </div>
      <div
        className={`popup-screen delete-screen ${
          hideDeleteScreen ? 'hide' : ''
        }`}
      >
        <button className="cross-btn">
          <i
            className="fas fa-times-circle fa-2x"
            onClick={toggleDeletePopup}
          ></i>
        </button>

        <form onSubmit={onDeleteSubmit}>
          <h1>Are you sure you want to delete the list named</h1>
          <h2>{list ? list.name : ''}</h2>

          <button className="popup-btn">Delete</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ListInventoryScreen;
