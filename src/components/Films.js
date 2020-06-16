import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

function Films() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchFilms();
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, []);

  const fetchFilms = async () => {
    const data = await Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=8ebecc9f6798ef3e2aa77ea37765848b&language=en-US&page=${page}`
    ).then((response) => response.data);
    console.log(data.results);

    setFilms(data.results);
  };

  return (
    <div>
      <h1>Films Page</h1>
      <div>
        <button
          onClick={() => {
            setPage(page + 1);
            // fetchFilms();
          }}
        >
          Load More
        </button>
      </div>
      <hr />
      {films.map((item) => (
        <p key={item.id}>
          <Link to={`/films/${item.id}`}>{item.title}</Link>
        </p>
      ))}
      <hr />
    </div>
  );
}

export default Films;
