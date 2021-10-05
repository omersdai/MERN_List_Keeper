import axios from 'axios';
import {
  LIST_INVENTORY_REQUEST,
  LIST_INVENTORY_SUCCESS,
  LIST_INVENTORY_FAIL,
  LIST_ADD_REQUEST,
  LIST_ADD_SUCCESS,
  LIST_ADD_FAIL,
} from '../constants/listConstants';

export const getInventoryList = (id) => async (dispatch) => {
  try {
    dispatch({ type: LIST_INVENTORY_REQUEST });

    console.log(id);
    const { data } = await axios.get(`/api/lists/${id}`);

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

export const createList = (userId, listName) => async (dispatch) => {
  try {
    dispatch({ type: LIST_ADD_REQUEST });

    console.log(userId, listName);

    const { data } = await axios.post(`/api/lists/${userId}`, {
      name: listName,
    });

    dispatch({ type: LIST_ADD_SUCCESS, payload: data });
    dispatch(getInventoryList(userId));
  } catch (error) {
    dispatch({
      type: LIST_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
