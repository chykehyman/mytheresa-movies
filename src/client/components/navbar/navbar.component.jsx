import "./navbar.component.scss";
import { Link } from "react-router-dom";
import { AiOutlineReconciliation } from "react-icons/ai";

const Navbar = () => {
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
      <button type="button" className="navbar__wishlist-icon">
        <AiOutlineReconciliation />
        <span className="navbar__wishlist-item-qty">2</span>
      </button>
    </nav>
  );
};

export default Navbar;
