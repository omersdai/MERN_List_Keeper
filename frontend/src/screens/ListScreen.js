import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addListItem,
  deleteListItem,
  getList,
  saveList,
  toggleListItem,
} from '../actions/listActions';
import '../styles/screens/ListScreen.scss';

const ListScreen = (props) => {
  const { id: listId } = props.match.params;
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state);

  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    dispatch(getList(listId));
  }, [dispatch, listId]);

  // HANDLERS
  const onLabelClick = (e) => {
    e.preventDefault();
    dispatch(toggleListItem(parseInt(e.currentTarget.id)));
  };

  const onCrossClick = (e) => {
    dispatch(deleteListItem(parseInt(e.currentTarget.id)));
  };

  const onNewItemClick = (e) => {
    if (newItem.trim() === '') return;
    dispatch(addListItem({ text: newItem, isChecked: false }));
    setNewItem('');
  };

  const onSaveListClick = (e) => {
    dispatch(saveList(list.list));
  };

  return (
    <Fragment>
      {!list.loading && (
        <div className="list-screen">
          <h1>{list.list.name}</h1>
          <ul>
            {list.list.items.map((item, idx) => (
              <li key={idx}>
                <label id={idx} onClick={onLabelClick}>
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    id={idx}
                    onChange={(e) => {
                      setTimeout(
                        () => (e.target.checked = !item.isChecked),
                        10
                      );
                    }}
                  />

                  <div
                    className={`item-text ${
                      item.isChecked ? 'item-checked' : ''
                    }`}
                  >
                    {item.text}
                  </div>
                </label>
                <button className="delete-btn" onClick={onCrossClick} id={idx}>
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

          <div className="btn-container">
            <button onClick={onNewItemClick}>Add New Item</button>
            <button onClick={onSaveListClick}>Save List</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListScreen;
