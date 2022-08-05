import "./home.page.scss";
import { useState, useEffect } from "react";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";

import axiosInstance, { MOVIE_URL } from "../../api/axios";
import CarouselRow from "../../components/carousel-row/carousel-row.component";
import { baseImageUrl } from "../../constants";

const HomePage = () => {
  const [trendingMovie, setTrendingMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const request = await axiosInstance.get(MOVIE_URL.originals);
      const trendingMovies = request.data.results;
      const randomTrendingMovie =
        trendingMovies[Math.floor(Math.random() * trendingMovies.length - 1)];
      setTrendingMovie(randomTrendingMovie);
    };
    fetchData();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? str.substr(0, n - 1) + "..." : str;

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url(${baseImageUrl}${trendingMovie?.backdrop_path})`,
        }}
      >
        <div className="banner__content">
          <h1 className="banner__title">
            {trendingMovie?.title || trendingMovie?.original_title}
          </h1>
          <h3 className="banner__description">
            {truncate(trendingMovie?.overview, 145)}
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
      <CarouselRow title="Trending Now" fetchUrl={MOVIE_URL.trending} />
      <CarouselRow title="Action Series" fetchUrl={MOVIE_URL.action} />
      <CarouselRow title="Horror Series" fetchUrl={MOVIE_URL.horror} />
    </>
  );
};

export default HomePage;
