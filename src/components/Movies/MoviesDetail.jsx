import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MoviesDetail = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const { id } = useParams(); // Destructure id directly

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=6a43f971&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchMovie(data);
        console.log(data);
      });
  }, [id]); // Update the effect dependency to include id

  return (
    <>
      {searchMovie && (
        <div className="movies-card" key={searchMovie.Title}>
          <h1>{searchMovie.Type} details:</h1>

          <img src={searchMovie.Poster} alt="Poster" />
          <h2>Title: {searchMovie.Title}</h2>
          <p>Year: {searchMovie.Year}</p>
          <p>Rating: {searchMovie.imdbRating}</p>
          <p>Released: {searchMovie.Released}</p>
          <p>Runtime: {searchMovie.Runtime}</p>
          <p>Genre: {searchMovie.Genre}</p>
          <p>Writer: {searchMovie.Writer}</p>
          <p>Language: {searchMovie.Language}</p>
          {searchMovie.Type === "series" && (
            <p>Seasons: {searchMovie.totalSeasons}</p>
          )}

          <Link to="/">Back</Link>
        </div>
      )}
    </>
  );
};

export default MoviesDetail;
