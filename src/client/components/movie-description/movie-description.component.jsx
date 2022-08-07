import "./movie-description.component.scss";
import { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { BASE_IMAGE_URL, WISH_LIST_STORAGE_KEY } from "../../constants";
import { truncateText } from "../../helpers";
import useLocalStorage from "../../hooks/localStorageHook";

const MovieDescriptionComponent = ({ movie }) => {
  const [wishListItems, setWishListItems] = useLocalStorage(
    WISH_LIST_STORAGE_KEY,
    []
  );
  const [isAddedToWishList, setIsAddedToWishList] = useState(false);
  useEffect(() => {
    const itemIndex = wishListItems?.findIndex(
      (wishListItem) => wishListItem.id === movie.id
    );
    if (itemIndex === -1) setIsAddedToWishList(false);
    else setIsAddedToWishList(true);
  }, [movie, wishListItems]);

  const handleAddOrRemoveWishListItem = () => {
    let updatedWishListItems;

    if (!isAddedToWishList) {
      updatedWishListItems = [{ ...movie }, ...wishListItems];
    } else {
      updatedWishListItems = [...wishListItems].filter(
        (wishListItem) => wishListItem.id !== movie.id
      );
    }
    setWishListItems(JSON.stringify(updatedWishListItems));
  };

  return (
    <section className="movie-description__main">
      <img
        src={`${BASE_IMAGE_URL}${movie?.poster_path || movie?.backdrop_path}`}
        alt="movie photo"
      />
      <div className="movie-description__main--content">
        <section>
          {movie?.genres?.map((genre) => (
            <span className="genre" key={genre.id}>
              {genre.name}
            </span>
          ))}
        </section>
        <h1>{movie.title || movie.original_title}</h1>
        <section className="rating">
          <span>IMDb</span>
          <span>{`${Math.round(movie?.vote_average * 10) / 10} (${
            movie?.vote_count
          } votes)`}</span>
        </section>
        <p>{truncateText(movie?.overview, 250)}</p>
        <section className="extra--info">
          <p>
            Country: <span>{movie?.production_countries?.[0]?.name}</span>
          </p>
          <p>
            Duration: <span>{movie?.runtime} mins</span>
          </p>
          <p>
            Release:{" "}
            <span>
              {movie?.release_date &&
                new Date(movie?.release_date).getFullYear()}
            </span>
          </p>
        </section>
        <section className="wish--list_action">
          <MdFavorite
            onClick={handleAddOrRemoveWishListItem}
            color={isAddedToWishList ? "#d11a3a" : "#302d2d"}
          />
        </section>
      </div>
    </section>
  );
};

export default MovieDescriptionComponent;
