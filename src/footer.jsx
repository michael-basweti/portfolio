import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import VIOLETBLUELOGO from './assets/violetbluelogo.png';

const Footer = () => {
  const [nairobiTime, setNairobiTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Nairobi timezone (UTC+3)
      const options = {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setNairobiTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Column 1: Brand & Status */}
          <div className="col-lg-5 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="brand-logo-glow" style={{ width: '38px', height: '38px' }}>
                <img src={VIOLETBLUELOGO} alt="Michael Basweti Logo" className="brand-logo-img" />
              </div>
              <div>
                <h5 className="text-white mb-0 font-weight-bold">MICHAEL ALEX BASWETI</h5>
                <span className="text-cyan small font-mono">Lead Software Engineer & Architect</span>
              </div>
            </div>
            <p className="text-secondary small mb-3" style={{ maxWidth: '380px' }}>
              Specialized in designing fault-tolerant distributed backends, multi-country fintech & telco engines, and scalable enterprise logistics platforms across East Africa.
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3">
              <span className="badge bg-dark border border-secondary text-secondary font-mono small d-flex align-items-center gap-1 py-2 px-3">
                <FiMapPin className="text-cyan" /> Nairobi, Kenya
              </span>
              <span className="badge bg-dark border border-secondary text-secondary font-mono small d-flex align-items-center gap-1 py-2 px-3">
                <FiClock className="text-emerald" /> EAT (UTC+3): {nairobiTime || 'Calculating...'}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="col-lg-3 col-md-3 col-6">
            <h6 className="text-white font-mono text-uppercase mb-3 font-weight-bold" style={{ letterSpacing: '0.08em' }}>
              Navigation
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-secondary text-decoration-none hover-white">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary text-decoration-none hover-white">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-secondary text-decoration-none hover-white">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-secondary text-decoration-none hover-white">
                  Systems & Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary text-decoration-none hover-white">
                  Contact Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="col-lg-4 col-md-3 col-6">
            <h6 className="text-white font-mono text-uppercase mb-3 font-weight-bold" style={{ letterSpacing: '0.08em' }}>
              Connect
            </h6>
            <div className="d-flex flex-column gap-2 small mb-3">
              <a
                href="mailto:michaelbasweti@gmail.com"
                className="text-secondary text-decoration-none d-flex align-items-center gap-2"
              >
                <FiMail className="text-cyan" /> michaelbasweti@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/engineer-michael-basweti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none d-flex align-items-center gap-2"
              >
                <FaLinkedin className="text-primary" /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/michael-basweti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-decoration-none d-flex align-items-center gap-2"
              >
                <FaGithub className="text-white" /> GitHub Profile
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center gap-2 rounded-pill px-3 py-1"
            >
              <FaArrowUp size={12} /> Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-top border-secondary d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-secondary small font-mono">
          <div>
            © {new Date().getFullYear()} Michael Alex Basweti. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="status-dot"></span>
            <span>All production services operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
