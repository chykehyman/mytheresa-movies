import "./footer.component.scss";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const FooterComponent = () => (
  <footer className="footer">
    <p>2022 MyTheresa Movies - All rights reserved</p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
    </p>
  </footer>
);

export default FooterComponent;
