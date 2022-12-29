import { SET_DATA, SET_LOADING } from "./actionType";

export const setAnimeData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setLoading = (data) => ({
  type: SET_LOADING,
  payload: data,
});