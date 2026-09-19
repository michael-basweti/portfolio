import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Contact from './contact';
import Experience from './experience';
import Work from './work';
import Navbar from './navbar';
import Footer from './footer';
import ScrollToTop from './ScrollToTop';

const RouteComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100" style={{ background: 'var(--bg-primary)' }}>
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default RouteComponent;