import axios from 'axios';
import {
  LIST_INVENTORY_REQUEST,
  LIST_INVENTORY_SUCCESS,
  LIST_INVENTORY_FAIL,
  LIST_ADD_REQUEST,
} from '../constants/listConstants';

export const getInventoryList = (id) => async (dispatch) => {
  try {
    dispatch({ type: LIST_INVENTORY_REQUEST });

    console.log(id);
    const { data } = await axios.get('/api/lists', {
      headers: { 'Content-Type': 'application/json' },
      data: { user: id },
    });

    dispatch({
      type: LIST_INVENTORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_INVENTORY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createList = (name) => (dispatch) => {
  try {
    dispatch({ type: LIST_ADD_REQUEST });
  } catch (error) {}
};
