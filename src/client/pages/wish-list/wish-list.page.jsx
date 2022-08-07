import "./wish-list.page.scss";
import { Link } from "react-router-dom";
import { BASE_IMAGE_URL, WISH_LIST_STORAGE_KEY } from "../../constants";
import useLocalStorage from "../../hooks/localStorageHook";

const WishListPage = () => {
  const [wishListItems] = useLocalStorage(WISH_LIST_STORAGE_KEY, []);

  return (
    <div className="wish-list__container">
      <h3>My Wish List</h3>
      <div className="wish-list__grid">
        {wishListItems?.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="wish-list__grid--box">
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

export default WishListPage;
