import "./navbar.component.scss";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineReconciliation } from "react-icons/ai";
import useLocalStorage from "../../hooks/localStorageHook";
import { WISH_LIST_STORAGE_KEY } from "../../constants";

const NavbarComponent = () => {
  const [wishListItems] = useLocalStorage(WISH_LIST_STORAGE_KEY, []);
  const wishListCount =
    wishListItems.length > 9 ? "9+" : String(wishListItems.length);

  return (
    <nav className="navbar">
      <p className="logo">
        <Link to="/">
          <img
            src="https://play-lh.googleusercontent.com/K-4Ecd8LsLCnXfHoCFx2XjGR0FIycP9r_-9m04mkCoXh-3JsIMBIq_oMSLKt25ZO8wk"
            alt="logo"
          />
          MyTheresa Movies
        </Link>
      </p>
      <Link to="/wish-list">
        <button type="button" className="navbar__wishlist-icon">
          <AiOutlineReconciliation />
          <span
            data-testid="wish-list-count"
            className="navbar__wishlist-item-qty"
          >
            {wishListCount}
          </span>
        </button>
      </Link>
    </nav>
  );
};

export default NavbarComponent;
