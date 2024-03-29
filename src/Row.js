import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import ReactDOM from 'react-dom';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //a snipet of code which runs everytim whenever a row is produced

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id} //jo usko uniquely define kare wo key hoti h//
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      
      {/*  */}
    </div>
  );
}

export default Row;
[]