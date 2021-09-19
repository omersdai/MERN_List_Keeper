import {
  LIST_INVENTORY_REQUEST,
  LIST_INVENTORY_SUCCESS,
  LIST_INVENTORY_FAIL,
} from '../constants/listConstants';

//   export const userListReducer = (state = { users: [] }, action) => {
//     switch (action.type) {
//       case USER_LIST_REQUEST:
//         return { loading: true, users: [] };
//       case USER_LIST_SUCCESS:
//         return { loading: false, users: action.payload };
//       case USER_LIST_FAIL:
//         return { loading: false, error: action.payload };
//       default:
//         return state;
//     }
//   };

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
