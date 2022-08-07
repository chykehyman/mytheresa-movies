import "./footer.component.scss";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FOOTER_TEXT } from "../../constants";

const FooterComponent = () => (
  <footer className="footer">
    <p>{FOOTER_TEXT}</p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
    </p>
  </footer>
);

export default FooterComponent;
