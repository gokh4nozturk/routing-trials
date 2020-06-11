import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function FilmDetail({ match }) {
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchFilm();
    //console.table(match);
  }, []);

  const fetchFilm = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US`
    ).then((res) => res.data);
    // console.log(data);
    setFilm(data);
  };

  const history = useHistory();

  return (
    <div>
      <h1>{film.title}</h1>
      <p>Overivew : {film.overview}</p>

      <hr />

      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default FilmDetail;
