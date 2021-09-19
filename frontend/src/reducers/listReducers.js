import {
  LIST_INVENTORY_REQUEST,
  LIST_INVENTORY_SUCCESS,
  LIST_INVENTORY_FAIL,
} from '../constants/listConstants';

export const listInventoryReducer = (state = { listInventory: [] }, action) => {
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
