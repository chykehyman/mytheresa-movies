import { useState, useEffect } from "react";
import "./carousel-row.component.scss";

import axiosInstance from "../../api/api.service";
import { BASE_IMAGE_URL } from "../../constants";
import { Link } from "react-router-dom";

const CarouselRowComponent = ({ title, fetchUrl }) => {
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
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="row__poster">
              <img
                src={`${BASE_IMAGE_URL}${movie?.poster_path}`}
                alt={movie.name}
              />
              <div className="row__poster--overlay">
                {new Date(movie?.release_date).getFullYear() || 2022}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarouselRowComponent;
