import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import VIOLETBLUELOGO from "./assets/violetbluelogo.png";

const Navbar = () => {
  const location = useLocation();
  const navbarRef = useRef(null);

  const handleLinkClick = () => {
    const collapseElement = new window.bootstrap.Collapse(navbarRef.current, {
      toggle: false,
    });
    collapseElement.hide();
  };

  return (
    <div className="navbar-container sticky-top">
      <nav
        className="navbar bg-dark navbar-expand-lg bg-body-tertiary container-fluid sticky-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand color-theme" to="/">
            <img src={VIOLETBLUELOGO} width={55} alt="" />{" "}
            <span className="ml-0 p-1">BASWETI</span>{" "}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNavDropdown"
            ref={navbarRef}
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item mx-2">
                <a
                  href="https://github.com/michael-basweti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaGithub size={20} />
                </a>
              </li>

              <li className="nav-item mx-2">
                <a
                  href="https://linkedin.com/in/engineer-michael-basweti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  <FaLinkedin size={20} />
                </a>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                  to="/about"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/experience" ? "active" : ""}`}
                  to="/experience"
                  onClick={handleLinkClick}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/work" ? "active" : ""}`}
                  to="/work"
                  onClick={handleLinkClick}
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
                  to="/contact"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr className="border border-6 mt-0 opacity-75" />
    </div>
  );
};

export default Navbar;
