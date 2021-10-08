import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addListItem,
  deleteListItem,
  getList,
  saveList,
  toggleListItem,
} from '../actions/listActions';
import { getUser } from '../actions/userActions';
import '../styles/screens/ListScreen.scss';

const ListScreen = (props) => {
  const userId = '61462902969c22c63acde0a5';
  const { id: listId } = props.match.params;
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state);

  const [newItem, setNewItem] = useState('');

  const onLabelClick = (e) => {
    e.preventDefault();
    dispatch(toggleListItem(parseInt(e.currentTarget.id)));
  };

  const onCrossClick = (e) => {
    dispatch(deleteListItem(parseInt(e.currentTarget.id)));
  };

  const onNewItemClick = (e) => {
    dispatch(addListItem({ text: newItem, isChecked: false }));
    setNewItem('');
  };

  const onSaveListClick = (e) => {
    dispatch(saveList(userId, list.list));
  };

  useEffect(() => {
    dispatch(getUser(userId)); // for testing purposes
    dispatch(getList(userId, listId));
  }, [dispatch, listId]);
  return (
    <Fragment>
      {!list.loading && (
        <div className="list-screen">
          <h1>{list.list.name}</h1>
          <ul>
            {list.list.items.map((item, idx) => (
              <li key={idx}>
                <label id={idx} onClick={onLabelClick}>
                  <input type="checkbox" checked={item.isChecked} />

                  <div
                    className={`item-text ${
                      item.isChecked ? 'item-checked' : ''
                    }`}
                  >
                    {item.text}
                  </div>
                </label>
                <button
                  className="delete-button"
                  onClick={onCrossClick}
                  id={idx}
                >
                  <i className="fas fa-times-circle fa-2x"></i>
                </button>
              </li>
            ))}
          </ul>

          <label>
            <input
              type="text"
              className="new-item-input"
              value={newItem}
              onInput={(e) => setNewItem(e.target.value)}
            />
          </label>

          <div className="button-container">
            <button onClick={onNewItemClick}>Add New Item</button>
            <button onClick={onSaveListClick}>Save List</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListScreen;
