import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addListItem, getList, saveList } from '../actions/listActions';
import { getUser } from '../actions/userActions';
import '../styles/screens/ListScreen.scss';

const ListScreen = (props) => {
  const userId = '61462902969c22c63acde0a5';
  const { id: listId } = props.match.params;
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state);

  // const list = {
  //   list: {
  //     name: 'This a random temp list',
  //     items: [
  //       {
  //         text: 'this is 1asdasdasdasdasdasdas asdas asdasdasdasd as dasdas dasd as dasd asdas dasdas as das',
  //       },
  //       { text: 'this is 1' },
  //       { text: 'this is 1' },
  //       { text: 'this is 1' },
  //     ],
  //   },
  // };

  const [newItem, setNewItem] = useState('');

  const onNewItemClick = (e) => {
    dispatch(addListItem({ text: newItem }));
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
      {list.loading || (
        <div className="list-screen">
          <h1>{list.list.name}</h1>
          <ul>
            {list.list.items.map((item, idx) => (
              <li key={idx}>
                <label>
                  <input type="checkbox" />
                  {item.text}
                </label>
              </li>
            ))}
          </ul>

          <label>
            <input
              type="text"
              value={newItem}
              onInput={(e) => setNewItem(e.target.value)}
            />
          </label>

          <div className="button-container">
            <button onClick={onNewItemClick}>New Item</button>
            <button onClick={onSaveListClick}>Save List</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ListScreen;
