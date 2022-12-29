import { SET_DATA, SET_LOADING } from "../actions/actionType";

const inisitialState = {
  data: [],
  loading: true,
};

const animeStore = (state = inisitialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
export default animeStore;
