import "./movie-trailer.component.scss";
import YouTube from "react-youtube";

const MovieTrailerComponent = ({ videoId, opts }) => (
  <section className="movie-trailer__container">
    <p>Watch trailer here</p>
    <YouTube videoId={videoId} opts={opts} />
  </section>
);

export default MovieTrailerComponent;
