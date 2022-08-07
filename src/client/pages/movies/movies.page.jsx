import "./movies.page.scss";
import { useState, useEffect } from "react";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";

import axiosInstance, { MOVIE_URL } from "../../api/api.service";
import CarouselRowComponent from "../../components/carousel-row/carousel-row.component";
import { BASE_IMAGE_URL } from "../../constants";
import { truncateText } from "../../helpers";
import LoaderComponent from "../../components/loader/loader.component";

const MoviesPage = () => {
  const [trendingMovie, setTrendingMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axiosInstance.get(MOVIE_URL.originals);
      const trendingMovies = request.data.results;
      const randomTrendingMovie =
        trendingMovies[Math.floor(Math.random() * trendingMovies.length - 1)];
      setTrendingMovie(randomTrendingMovie);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <LoaderComponent message="Loading movies" />;

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgb(0,0,0,0.7), rgb(0,0,0,0.1)), url(${BASE_IMAGE_URL}${trendingMovie?.backdrop_path})`,
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            {trendingMovie?.title || trendingMovie?.original_title}
          </h1>
          <h3 className="banner__description">
            {truncateText(trendingMovie?.overview, 145)}
          </h3>
          <div className="banner__buttons">
            <button className="banner__button">
              <AiFillPlayCircle /> Play
            </button>
            <button className="banner__button">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
        <div className="banner--fadeBottom" />
      </header>
      <CarouselRowComponent
        title="Trending Now"
        fetchUrl={MOVIE_URL.trending}
      />
      <CarouselRowComponent title="Action Series" fetchUrl={MOVIE_URL.action} />
      <CarouselRowComponent title="Horror Series" fetchUrl={MOVIE_URL.horror} />
    </>
  );
};

export default MoviesPage;
