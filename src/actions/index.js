import {
  FETCH_MOVIES,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_SUCCES,
  FETCH_CHARACTER,
  FETCH_CHARACTER_ERROR,
  FETCH_CHARACTER_SUCCES,
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
export const getCharacter = (charUrl) => {
  const charArr = [];
  return async function (dispatch) {
    dispatch({ type: FETCH_CHARACTER });
    try {
      const response = await fetch(charUrl);
      const character = await response.json();
      console.log('charRes', character);
      dispatch({
        type: FETCH_CHARACTER_SUCCES,
        payload: character,
      });
      charArr.push(character);
    } catch (error) {
      console.log('fetch character error', error);
      dispatch({
        type: FETCH_CHARACTER_ERROR,
        err: error,
      });
    }
  };
};
