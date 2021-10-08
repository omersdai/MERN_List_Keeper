import axios from 'axios';
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
  SAVE_LIST_REQUEST,
  SAVE_LIST_SUCCESS,
  SAVE_LIST_FAIL,
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  TOGGLE_LIST_ITEM,
} from '../constants/listConstants';

export const getInventoryList = (id) => async (dispatch) => {
  try {
    dispatch({ type: LIST_INVENTORY_REQUEST });

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

export const getList = (userId, listId) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_REQUEST });

    const { data } = await axios.get(`/api/lists/${userId}/${listId}`);

    dispatch({ type: GET_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addListItem = (newItem) => async (dispatch) => {
  dispatch({ type: ADD_LIST_ITEM, payload: newItem });
};
export const toggleListItem = (idx) => async (dispatch) => {
  dispatch({ type: TOGGLE_LIST_ITEM, payload: idx });
};

export const deleteListItem = (idx) => async (dispatch) => {
  dispatch({ type: DELETE_LIST_ITEM, payload: idx });
};

export const saveList = (userId, list) => async (dispatch) => {
  try {
    dispatch({ type: SAVE_LIST_REQUEST });

    const { data } = await axios.put(`/api/lists/${userId}`, list);

    dispatch({ type: SAVE_LIST_SUCCESS, payload: data });
    dispatch(getInventoryList(userId));
  } catch (error) {
    dispatch({
      type: SAVE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
