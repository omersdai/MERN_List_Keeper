import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser } from '../actions/userActions';
import { createList, getInventoryList } from '../actions/listActions';
import '../styles/screens/ListInventoryScreen.scss';

const ListInventoryScreen = (props) => {
  const userId = '61462902969c22c63acde0a5';

  const [listName, setListName] = useState('');
  const dispatch = useDispatch();

  const { listInventory } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUser(userId)); // for testing purposes
    dispatch(getInventoryList(userId));
  }, [dispatch]);

  const addScreenEl = document.getElementById('addScreen');

  const addClickHandler = (e) => addScreenEl.classList.toggle('hide');
  const addSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createList(userId, listName));
    setListName('');
    addScreenEl.classList.toggle('hide');
  };

  // listInventory.listInventory.forEach((list) =>
  //   list.items.forEach((item) => console.log(item))
  // );

  return (
    <Fragment>
      <div className="list-inventory">
        <ul>
          {listInventory.listInventory &&
            listInventory.listInventory.map((list) => (
              <Link key={list._id} to={`/list/${list._id}`}>
                <li>
                  <div className="list-box">
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
        <button onClick={addClickHandler}>Add New List</button>
      </div>
      <div id="addScreen" className="hide add-list-screen">
        <div className="top-right">
          <button>
            <i
              className="fas fa-times-circle fa-2x"
              onClick={addClickHandler}
            ></i>
          </button>
        </div>
        <form onSubmit={addSubmitHandler}>
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
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </Fragment>
  );
};

export default ListInventoryScreen;
