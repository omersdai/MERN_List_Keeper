import {
  LIST_INVENTORY_REQUEST,
  LIST_INVENTORY_SUCCESS,
  LIST_INVENTORY_FAIL,
  LIST_ADD_REQUEST,
  LIST_ADD_SUCCESS,
  LIST_ADD_FAIL,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
  ADD_LIST_ITEM,
  SAVE_LIST_SUCCESS,
  SAVE_LIST_REQUEST,
  SAVE_LIST_FAIL,
} from '../constants/listConstants';

export const listInventoryReducer = (
  state = { loading: true, listInventory: [] },
  action
) => {
  switch (action.type) {
    case LIST_INVENTORY_REQUEST:
      return { loading: true, listInventory: [] };
    case LIST_INVENTORY_SUCCESS:
      return { loading: false, listInventory: action.payload };
    case LIST_INVENTORY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listReducer = (state = { loading: true, list: {} }, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return { loading: true, list: {} };
    case GET_LIST_SUCCESS:
      return { loading: false, list: action.payload };
    case GET_LIST_FAIL:
      return { loading: false, error: action.payload };
    case LIST_ADD_REQUEST:
      return { loading: true, list: {} };
    case LIST_ADD_SUCCESS:
      return { loading: false, list: action.payload };
    case LIST_ADD_FAIL:
      return { loading: false, error: action.payload };
    case SAVE_LIST_REQUEST:
      return { ...state, loading: true };
    case SAVE_LIST_SUCCESS:
      return { loading: false, list: action.payload };
    case SAVE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case ADD_LIST_ITEM:
      return {
        ...state,
        list: { ...state.list, items: [...state.list.items, action.payload] },
      };
    default:
      return state;
  }
};

//   export const userReducer = (state = { user: {} }, action) => {
//     switch (action.type) {
//       case GET_USER_REQUEST:
//         return { loading: true, user: {} };
//       case GET_USER_SUCCESS:
//         return { loading: false, user: action.payload };
//       case GET_USER_FAIL:
//         return { loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };
