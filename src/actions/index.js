import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCES,
} from '../constants';

export const getMovies = () => {
  return async function (dispatch) {
    dispatch({ type: FETCH_MOVIES });
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const movies = await response.json();
      console.log('fetching ...', movies.results);
      dispatch({
        type: FETCH_MOVIES_SUCCES,
        payload: movies.results,
      });
    } catch (error) {
      console.log('fetch error', error);
      dispatch({
        type: FETCH_MOVIES_ERROR,
        err: error,
      });
    }
  };
};
