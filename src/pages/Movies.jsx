import React, { useState, useEffect } from "react";
import MovieList from "../components/movies/MovieList";
import MovieListHeading from "../components/movies/MovieListHeading";
import SearchBox from "../components/movies/SearchBox";
import AddFavourites from "../components/movies/AddFavourites";
import RemoveFavourites from "../components/movies/RemoveFavourites";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  return (
    <>
      <section>
        <section className="movies">
          <div>
            <div class="d-flex justify-content-center">
              <div className="search-title">
                <MovieListHeading heading="Search fo Movies" />
              </div>
              <div className="search-input">
                <SearchBox
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <MovieList
                movies={movies}
                handleFavouritesClick={addFavouriteMovie}
                favouriteComponent={AddFavourites}
              />
            </div>
            <div className="row d-flex align-items-center mt-4 mb-4">
              <MovieListHeading heading="Favourites" />
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites}
              />
            </div>
          </div>
        </section>
        <section className="heading">
          <h1> </h1>
        </section>
      </section>
    </>
  );
};

export default Movies;
