import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userListReducer, userReducer } from './reducers/userReducers';
import { listInventoryReducer, listReducer } from './reducers/listReducers';

const reducer = combineReducers({
  userList: userListReducer,
  user: userReducer,
  listInventory: listInventoryReducer,
  list: listReducer,
});
const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
