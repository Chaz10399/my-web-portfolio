import "./FooterPages.css";
import { Link } from "react-scroll";

export default function FooterPages() {
  return (
    <ul className="footer-nav mb-24">
      <li>
        <Link to="hero" smooth={true} duration={10}>
          <p>About |</p>
        </Link>
      </li>
      <li>
        <Link to="services" smooth={true} duration={10}>
          <p>Service |</p>
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={10}>
          <p>Skills |</p>
        </Link>
      </li>
      <li>
        <Link to="credentials" smooth={true} duration={10}>
          <p>Credentials |</p>
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={10}>
          <p>Contact</p>
        </Link>
      </li>
    </ul>
  );
}
