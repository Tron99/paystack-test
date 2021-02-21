import {
  FETCH_MOVIES_SUCCES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES,
} from '../constants';

export const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return Object.assign({}, state, { isLoading: true });
    case FETCH_MOVIES_SUCCES:
      return Object.assign({}, state, {
        moviesArr: action.payload,
        isLoading: false,
      });
    case FETCH_MOVIES_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        err: action.err.message,
      });
    default:
      return state;
  }
};
