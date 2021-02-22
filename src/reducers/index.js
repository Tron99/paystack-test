import {
  FETCH_MOVIES_SUCCES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES,
  FETCH_CHARACTER_SUCCES,
  FETCH_CHARACTER_ERROR,
  FETCH_CHARACTER,
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
export const charactersReducer = (state = { charactersArr: [] }, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      return Object.assign({}, state, { isLoading: true });
    case FETCH_CHARACTER_SUCCES:
      return Object.assign({}, state, {
        charactersArr: [...state.charactersArr, action.payload],
        isLoading: false,
      });
    case FETCH_CHARACTER_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        err: action.err.message,
      });
    default:
      return state;
  }
};
