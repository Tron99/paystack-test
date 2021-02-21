import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../actions/index';

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, movies, err } = useSelector(
    state => ({
      isLoading: state.isLoading,
      movies: state.movies,
      err: state?.err
    })
  );

  useEffect(
    function () {
      dispatch(getMovies());
    },
    [dispatch]
  );

  const {moviesArr} = movies;
  return (
   
      <div className="container">
        <ul>
          <React.Fragment>
          {
            moviesArr && moviesArr.map(item =>{
              return <li>{item.title}</li>
            })
          }
          </React.Fragment>
        </ul>
      </div>
  );
};

export default Home;
