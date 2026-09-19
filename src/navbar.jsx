import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import VIOLETBLUELOGO from './assets/violetbluelogo.png';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Work & Systems', path: '/work' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`custom-navbar sticky-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Brand Logo & Name */}
        <Link to="/" className="brand-wrapper">
          <div className="brand-logo-glow">
            <img src={VIOLETBLUELOGO} alt="Michael Basweti Logo" className="brand-logo-img" />
          </div>
          <div>
            <h1 className="brand-text-name">BASWETI</h1>
            <p className="brand-subtext">LEAD SYSTEMS ARCHITECT</p>
          </div>
        </Link>

        {/* Availability Badge (Desktop) */}
        <div className="d-none d-xl-flex">
          <div className="status-badge-nav">
            <span className="status-dot"></span>
            <span>Open to High-Impact Leadership & Advisory</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="d-none d-lg-flex align-items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link-custom ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Social Links & CTA */}
          <div className="d-flex align-items-center gap-2 ms-3 ps-3 border-start border-secondary">
            <a
              href="https://github.com/michael-basweti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '36px', height: '36px' }}
              title="GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://linkedin.com/in/engineer-michael-basweti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-light rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ width: '36px', height: '36px' }}
              title="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
            </a>
            <Link to="/contact" className="btn-modern-primary py-2 px-3 ms-1" style={{ fontSize: '0.85rem' }}>
              Let's Talk
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="btn btn-outline-light d-lg-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="d-lg-none bg-dark border-top border-secondary p-4">
          <div className="status-badge-nav mb-3">
            <span className="status-dot"></span>
            <span>Open to High-Impact Leadership & Advisory</span>
          </div>

          <div className="d-flex flex-column gap-2 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link-custom ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="d-flex align-items-center gap-3 pt-3 border-top border-secondary">
            <a
              href="https://github.com/michael-basweti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
            >
              <FaGithub /> GitHub <FiExternalLink size={12} />
            </a>
            <a
              href="https://linkedin.com/in/engineer-michael-basweti"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
            >
              <FaLinkedin /> LinkedIn <FiExternalLink size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;