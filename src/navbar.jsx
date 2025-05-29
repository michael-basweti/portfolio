import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import VIOLETBLUELOGO from "./assets/violetbluelogo.png";

const Navbar = () => {
  const location = useLocation();
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

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto align-items-center">
              {/* GitHub Icon */}
              <li className="nav-item mx-2">
                <a
                  href="https://github.com/michael-basweti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaGithub size={20} />
                </a>
              </li>

              {/* LinkedIn Icon */}
              <li className="nav-item mx-2">
                <a
                  href="https://linkedin.com/in/engineer-michael-basweti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaLinkedin size={20} />
                </a>
              </li>

              {/* Regular Nav Links */}
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/experience" ? "active" : ""
                  }`}
                  to="/experience"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/work" ? "active" : ""
                  }`}
                  to="/work"
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                  to="/contact"
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
