import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./Styles/Navbar.css";
import mylogo from "../assets/images/logo.png";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setTheme(savedTheme);
  }, []);

  // Toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme); // <- This updates the icon!
  };
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <div className="my-logo">
          <img src={mylogo} alt="my-logo" />
          Chaz.
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className="menu-container">
        <ul className={`nav-links ${isOpen ? "active" : ""}`} id="navLinks">
          <li>
            <Link to="hero" smooth={true} duration={10}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={10}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={10}>
              SKILLS
            </Link>
          </li>
          <li>
            <Link to="credentials" smooth={true} duration={10}>
              CREDENTIALS
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={10}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={`theme ${theme === "dark" ? "dark" : "light"}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className="theme-icon">
          {theme === "light" ? (
            <Sun className="sun-icon" />
          ) : (
            <Moon className="moon-icon" />
          )}
        </div>
      </button>
    </nav>
  );
}
