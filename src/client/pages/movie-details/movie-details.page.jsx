import "./movie-details.page.scss";
import RelatedMoviesFeature from "../../features/related-movies/related-movies.feature";
import MovieInfoFeature from "../../features/movie-info/movie-info.feature";

const MovieDetailsPage = () => (
  <div className="movie-details__container">
    <MovieInfoFeature />
    <RelatedMoviesFeature />
  </div>
);

export default MovieDetailsPage;
