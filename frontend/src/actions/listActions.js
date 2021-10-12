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
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAIL,
} from '../constants/listConstants';

export const getInventoryList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_INVENTORY_REQUEST });

    const {
      user: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get('/api/lists/', config);

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

export const createList = (listName) => async (dispatch, getState) => {
  try {
    dispatch({ type: LIST_ADD_REQUEST });

    const {
      user: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.post(
      '/api/lists',
      {
        name: listName,
      },
      config
    );

    dispatch({ type: LIST_ADD_SUCCESS, payload: data });
    dispatch(getInventoryList());
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

export const getList = (listId) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_LIST_REQUEST });

    const {
      user: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.get(`/api/lists/${listId}`, config);

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

export const saveList = (list) => async (dispatch, getState) => {
  try {
    dispatch({ type: SAVE_LIST_REQUEST });

    const {
      user: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const { data } = await axios.put('/api/lists', list, config);

    dispatch({ type: SAVE_LIST_SUCCESS, payload: data });
    dispatch(getInventoryList());
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

export const deleteList = (listId) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_LIST_REQUEST });

    const {
      user: { user },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    await axios.delete(`/api/lists/${listId}`, config); // returns deleted list

    dispatch({ type: DELETE_LIST_SUCCESS });
    dispatch(getInventoryList());
  } catch (error) {
    dispatch({
      type: DELETE_LIST_FAIL,
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
