import React from 'react';
import Slider from 'react-slick';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import CASE1 from './assets/case1.jpg';
import CASE2 from './assets/case2.jpg';
import CLAIM4 from './assets/claim4.jpg';
import CLAIM6 from './assets/claim6.jpg';
import DMS2 from './assets/dms2.jpg';
import EZRA from './assets/ezra.png'
import DMS4 from './assets/dms4.jpg';
import NATION_COURIER_DASH from './assets/nation_courier_dash.jpg';
import NATION_COURIER_HOME_PAGE from './assets/nation_courier_home_page.jpg';
import NEAREST_AGENT from './assets/nearest_agent.jpg';
import CONVERGE from './assets/converge.jpg';

const SHOWCASE_SLIDES = [
  {
    title: 'Converge — Intelligent Meeting Room Management',
    category: 'Workspace & Distributed Tech',
    image: CONVERGE,
    desc: 'Intelligent meeting room management application managing room availability for Andelans with Google Calendar sync (+50% efficiency).',
    tech: ['GraphQL', 'Python / Django', 'React', 'Google Calendar API'],
  },
  {
    title: 'Nation Courier Logistics & Dispatch Engine',
    category: 'Distributed Logistics',
    image: NATION_COURIER_DASH,
    desc: 'Regional courier management with nearest-agent routing and corporate client portals ($1M+ in contracts).',
    tech: ['Python / Django', 'React', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Nearest Agent Routing & Geographic Mapping',
    category: 'Field Operations',
    image: NEAREST_AGENT,
    desc: 'Interactive agent locator and drop-off routing for East Africa courier operations.',
    tech: ['React', 'GeoIP / Maps', 'REST APIs'],
  },
  {
    title: 'Cross-Border Claims & Payment Processing',
    category: 'Fintech & Finance Automation',
    image: CLAIM4,
    desc: 'Multi-country finance reconciliation engine deployed across Kenya, Uganda, and Tanzania.',
    tech: ['Django REST', 'Zoho Payments', 'PostgreSQL'],
  },
  {
    title: 'Nationwide Distributor Management (DMS)',
    category: 'Supply Chain & ERP',
    image: DMS2,
    desc: 'Daily newspaper distribution logistics integrated directly with in-house SAP ERP.',
    tech: ['Django', 'SAP ERP', 'JavaScript', 'AWS'],
  },
  {
    title: 'Enterprise Legal Case & Litigation Management',
    category: 'Governance & Legal',
    image: CASE2,
    desc: 'Contract lifecycle and litigation tracking system for enterprise counsel.',
    tech: ['Python', 'PostgreSQL', 'Workflow Automation'],
  },
  {
    title: 'Claims Audit & Financial Verification Grid',
    category: 'Internal Audit',
    image: CLAIM6,
    desc: 'Real-time ledger and invoice verification dashboard for internal finance teams.',
    tech: ['Django REST', 'React', 'Financial Auditing'],
  },
];

const SlickArrowLeft = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-prev-custom"
      aria-label="Previous"
      style={{
        position: 'absolute',
        top: '50%',
        left: '15px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        background: 'rgba(7, 10, 19, 0.85)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%',
        width: '42px',
        height: '42px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
      }}
    >
      <FaChevronLeft size={16} />
    </button>
  );
};

const SlickArrowRight = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-next-custom"
      aria-label="Next"
      style={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        transform: 'translateY(-50%)',
        zIndex: 10,
        background: 'rgba(7, 10, 19, 0.85)',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '50%',
        width: '42px',
        height: '42px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
      }}
    >
      <FaChevronRight size={16} />
    </button>
  );
};

const SliderProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="position-relative py-3">
      <Slider {...settings}>
        {SHOWCASE_SLIDES.map((slide, idx) => (
          <div key={idx} className="px-2 pb-4">
            <div className="project-card">
              <div className="project-img-wrapper" style={{ height: '240px' }}>
                <img src={slide.image} alt={slide.title} className="project-img" />
                <span className="project-badge-overlay">{slide.category}</span>
              </div>
              <div className="project-body">
                <h4 className="project-title" style={{ fontSize: '1.15rem' }}>
                  {slide.title}
                </h4>
                <p className="project-desc" style={{ fontSize: '0.88rem' }}>
                  {slide.desc}
                </p>
                <div className="tech-tag-list mb-3">
                  {slide.tech.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="d-flex align-items-center justify-content-between pt-2 border-top border-secondary">
                  <Link
                    to="/work"
                    className="btn-modern-outline py-1 px-3 d-inline-flex align-items-center gap-2 text-decoration-none"
                    style={{ fontSize: '0.8rem' }}
                  >
                    Explore System Specs <FaExternalLinkAlt size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderProjects;
