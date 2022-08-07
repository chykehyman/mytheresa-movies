import "./related-movies.feature.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance, { MOVIE_URL } from "../../api/api.service";
import { BASE_IMAGE_URL } from "../../constants";
import LoaderComponent from "../../components/loader/loader.component";

const RelatedMoviesFeature = () => {
  const { id } = useParams();
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const relatedMovies = await axiosInstance.get(
        MOVIE_URL.relatedMovies(id)
      );
      setRelatedMovies(relatedMovies?.data?.results);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) return <LoaderComponent />;

  return (
    <div className="related-movies__container">
      <h3>Related Movies</h3>
      <div className="related-movies__grid">
        {relatedMovies?.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="related-movies__grid--box">
              <img
                src={`${BASE_IMAGE_URL}${
                  movie?.poster_path || movie?.backdrop_path
                }`}
                alt=""
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedMoviesFeature;
