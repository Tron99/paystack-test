import React, { useEffect, useState,useRef, useStateRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies,getCharacter } from '../actions/index';
import { ReactComponent as Logo } from '../assets/star-wars-4.svg';

const Home = () => {
  const dispatch = useDispatch();
  const [selectedMovie, setSelected] = useState(0);

  const { isLoading, movies, err } = useSelector((state) => ({
    isLoading: state.isLoading,
    movies: state.movies,
    err: state?.err,
  }));
  const { moviesArr } = movies;

  const handleChange = (e) => {
    let selected = moviesArr.filter((item) => {
      return item.episode_id === parseInt(e.target.value);
    });
    setSelected(selected);
  };

  const moviesRef = useRef(selectedMovie)
  useEffect(() => {
    moviesRef.current = selectedMovie
    console.log(moviesRef.current)

    moviesRef.current["0"] && moviesRef.current["0"].characters.forEach((item)=>{
      console.log("urlChar", item)
      dispatch(getCharacter(item))
    })
  }, [selectedMovie])

  useEffect(
    function () {
      dispatch(getMovies());
    },
    [dispatch]
  );

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Star Wars
          </a>
        </div>
      </nav>
      <div className="container search">
        <div className="row d-flex flex-row justify-content-center">
          <div className=" justify-self-center col-md-8">
            <form className="movie-form">
              <div className="form-group">
                <select
                  className="form-control"
                  id="movieSelection"
                  onChange={handleChange}
                  placeholder="Select movie"
                >
                  <React.Fragment>
                    <option selected>Select Movie</option>

                    {moviesArr &&
                      moviesArr.map((item) => {
                        return (
                          <option value={item.episode_id}>{item.title}</option>
                        );
                      })}
                  </React.Fragment>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          {!selectedMovie && <Logo className="logoImage" />}
        </div>
        {selectedMovie && (
          <marquee scrollamount="2" width="60%" direction="up" height="100px">
            {selectedMovie[0].opening_crawl}{' '}
          </marquee>
        )}
      </div>
    </div>
  );
};

export default Home;
