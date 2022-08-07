import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieTrailer from "movie-trailer";
import axiosInstance, { MOVIE_URL } from "../../api/api.service";
import LoaderComponent from "../../components/loader/loader.component";
import MovieTrailerComponent from "../../components/movie-trailer/movie-trailer.component";
import MovieDescriptionComponent from "../../components/movie-description/movie-description.component";

const MovieInfoFeature = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const geMovieTrailer = (movie) => {
    movieTrailer(
      movie?.title ||
        movie?.original_title ||
        movie?.name ||
        movie?.original_name ||
        ""
    )
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axiosInstance.get(MOVIE_URL.movieDetails(id));
      geMovieTrailer(request.data);
      setMovie(request.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) return <LoaderComponent />;

  return (
    <div className="movie-info__container">
      <MovieDescriptionComponent movie={movie} />
      <MovieTrailerComponent videoId={trailerUrl} opts={opts} />
    </div>
  );
};

export default MovieInfoFeature;
