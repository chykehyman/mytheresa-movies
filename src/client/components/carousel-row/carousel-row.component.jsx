import { useState, useEffect } from "react";
import "./carousel-row.component.scss";

import axiosInstance from "../../api/axios";
import { baseImageUrl } from "../../constants";

const CarouselRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axiosInstance.get(fetchUrl);
      setMovies(request.data.results);
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="row__poster">
            <img
              key={movie.id}
              src={`${baseImageUrl}${movie?.poster_path}`}
              alt={movie.name}
            />
            <div className="row__poster--overlay">
              {new Date(movie?.release_date).getFullYear() || 2022}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselRow;
