import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaUsersCog,
  FaArrowRight,
  FaBriefcase,
  FaCodeBranch,
  FaTerminal,
  FaExternalLinkAlt,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';
import { FiLayers, FiDatabase, FiCpu, FiCheckCircle, FiMail } from 'react-icons/fi';

import SliderProjects from './SliderProjects';
import Skills from './Skills';
import InteractiveTerminal from './InteractiveTerminal';
import FRRONTPHOTO from './assets/front-photo.jpg';

const PILLARS = [
  {
    icon: FaServer,
    title: 'High-Throughput Distributed APIs',
    desc: 'Designing fault-tolerant REST & microservice architectures in Python (Django/DRF, FastAPI), Node.js, and Clojure capable of sub-second transaction bursts.',
    tech: ['Django REST', 'FastAPI', 'Clojure', 'PostgreSQL', 'Kafka'],
  },
  {
    icon: FaBrain,
    title: 'Data Engineering & AI/LLM Pipelines',
    desc: 'Building modern data warehousing solutions with Prefect, ClickHouse, and Medallion architecture, paired with LangChain & LangGraph intelligent workflows.',
    tech: ['Prefect ETL', 'ClickHouse', 'LangChain', 'LangGraph', 'PostgreSQL'],
  },
  {
    icon: FaNetworkWired,
    title: 'Cross-Border Fintech & Telco Engines',
    desc: 'Engineered regional lending microservices for MTN South Africa & Airtel Uganda (+30% lending rate), and automated finance claims with Zoho & M-Pesa.',
    tech: ['M-Pesa API', 'Zoho Payments', 'SMS/USSD Protocols', 'Telco SMPP'],
  },
  {
    icon: FiDatabase,
    title: 'Enterprise ERP & Logistics Sync',
    desc: 'Principal architect of the Nation Courier platform ($1M+ in corporate partnerships) and Distributor Management System integrated with SAP ERP (-80% bad debts).',
    tech: ['SAP RFC/BAPI', 'AWS RDS', 'Nearest-Agent Routing', 'SQL Optimization'],
  },
];

const METRICS = [
  {
    number: '8+',
    label: 'Years Production Experience',
    subtext: 'Tech lead & distributed systems architect',
  },
  {
    number: '$1M+',
    label: 'Partnership Contracts Secured',
    subtext: 'Airtel, D-Light & Aga Khan Foundation',
  },
  {
    number: '80%',
    label: 'Bad Debt Reduction',
    subtext: 'DMS platform integrated with SAP ERP',
  },
  {
    number: '+30%',
    label: 'Telco Lending Growth & Velocity',
    subtext: 'Airtime lending & Agile team optimization',
  },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* 1. Hero Section */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7 col-12" data-aos="fade-right">
              {/* Status Badge */}
              <div className="hero-badge">
                <span className="status-dot"></span>
                <span>Tech Lead & Systems Architect • Nairobi, Kenya</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-title">
                Hi, I’m <span className="text-gradient-cyan">Michael Alex Basweti</span>.
              </h1>

              {/* Sub-headline */}
              <p className="hero-lead">
                A Tech Lead with 8+ years designing high-throughput backends, cross-border payment rails, and enterprise data platforms.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <Link to="/work" className="btn-modern-primary">
                  <FaBriefcase /> Explore Systems
                </Link>
                <Link to="/contact" className="btn-modern-secondary">
                  <FiMail /> Get in Touch
                </Link>
              </div>

              {/* Quick Tech Badges */}
              <div className="d-flex align-items-center gap-2 flex-wrap small font-mono mt-1">
                <span className="core-stacks-label">
                  <FiCpu className="text-cyan" /> Core Stack:
                </span>
                <span className="tech-tag">Python & Django</span>
                <span className="tech-tag">Prefect & ClickHouse</span>
                <span className="tech-tag">Clojure & Java</span>
                <span className="tech-tag">AWS & Docker</span>
                <span className="tech-tag">M-Pesa API</span>
              </div>
            </div>

            {/* Right: Interactive Terminal Widget */}
            <div className="col-lg-5 col-12" data-aos="fade-left">
              <InteractiveTerminal />
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="metrics-grid mt-5" data-aos="fade-up">
            {METRICS.map((m, index) => (
              <div className="metric-card" key={index}>
                <div className="metric-number text-gradient-cyan">{m.number}</div>
                <div className="metric-label">{m.label}</div>
                <p className="metric-subtext">{m.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Engineering Pillars */}
      <section className="section-wrapper">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Core Competencies</span>
            <h2 className="section-title text-gradient">Engineered for Reliability & Scale</h2>
            <p className="section-lead">
              Transforming complex enterprise challenges into high-performance, maintainable software architectures.
            </p>
          </div>

          <div className="row g-4" data-aos="fade-up">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="col-lg-6 col-12">
                  <div className="pillar-card">
                    <div className="pillar-icon-box">
                      <Icon size={24} />
                    </div>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.desc}</p>
                    <div className="tech-tag-list pt-2 border-top border-secondary">
                      {pillar.tech.map((t, i) => (
                        <span key={i} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Production Systems Carousel */}
      <section className="section-wrapper py-5" style={{ background: 'rgba(13, 19, 34, 0.4)' }}>
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4" data-aos="fade-up">
            <div>
              <span className="section-badge">Production Deployments</span>
              <h2 className="section-title text-gradient mb-1">Featured Systems & Case Studies</h2>
              <p className="text-secondary small font-mono mb-0">
                Logistics automation, multi-country fintech, and enterprise ERP sync.
              </p>
            </div>
            <Link to="/work" className="btn-modern-outline mt-3 mt-md-0 d-inline-flex align-items-center gap-2">
              View All Case Studies ({6}) <FaArrowRight size={12} />
            </Link>
          </div>

          <div data-aos="zoom-in">
            <SliderProjects />
          </div>
        </div>
      </section>

      {/* 4. Engineer Profile Summary */}
      <section className="section-wrapper">
        <div className="container">
          <div className="p-4 p-md-5 rounded-4 bg-surface" data-aos="fade-up">
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 text-center">
                <div className="position-relative d-inline-block">
                  <img
                    src={FRRONTPHOTO}
                    alt="Michael Alex Basweti"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{
                      maxWidth: '280px',
                      border: '2px solid rgba(99, 102, 241, 0.4)',
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-50 translate-middle-x mb-n3 px-3 py-1 rounded-pill bg-dark border border-secondary shadow text-cyan font-mono small"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    Nairobi, Kenya
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <span className="section-badge">Leadership Profile</span>
                <h3 className="display-6 text-white font-weight-bold mb-3">
                  Michael Alex Basweti
                </h3>
                <h5 className="text-cyan font-mono mb-4">
                  Technical Lead (Back Office Systems) @ Nation Media Group • B.Sc. Computer Science
                </h5>

                <p className="text-secondary" style={{ lineHeight: '1.7' }}>
                  With over <strong>8+ years</strong> of production experience, I bridge technical excellence with commercial strategy. My sweet spot is high-concurrency backend architecture: designing reliable RESTful APIs, orchestrating ETL pipelines with <strong>Prefect & ClickHouse</strong>, developing microservices in <strong>Python, Clojure, and Java</strong>, and unifying mission-critical enterprise systems with <strong>SAP ERP</strong>, <strong>M-Pesa API</strong>, and <strong>Microsoft Graph</strong>.
                </p>

                <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                  As a Scrum Master and engineering lead, I’ve improved team delivery velocity by <strong>30%</strong>, secured <strong>$1M+</strong> in enterprise logistics contracts, reduced corporate bad debts by <strong>80%</strong>, and unified cross-office engineering teams across Nairobi, Kampala, and Dar es Salaam.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link to="/about" className="btn-modern-primary">
                    Read Full Story & Philosophy <FaArrowRight size={12} />
                  </Link>
                  <Link to="/experience" className="btn-modern-secondary">
                    <FaBriefcase /> View Career Timeline
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills & Tech Radar Matrix */}
      <Skills title="Technical Capabilities Matrix" showHeader={true} />

      {/* 6. Call to Action Banner */}
      <section className="section-wrapper pb-5">
        <div className="container">
          <div
            className="p-5 rounded-4 text-center position-relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 27, 75, 0.7))',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              boxShadow: '0 0 50px rgba(99, 102, 241, 0.15)',
            }}
            data-aos="zoom-in"
          >
            <span className="section-badge mb-2">Collaboration & Consulting</span>
            <h2 className="display-5 text-white font-weight-bold mb-3">
              Ready to Architect Your Next Scalable System?
            </h2>
            <p className="text-secondary lead mx-auto mb-4" style={{ maxWidth: '640px' }}>
              Whether you need senior technical leadership, distributed backend consulting, ETL data warehousing, or enterprise ERP integrations, let’s build something extraordinary together.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-modern-primary py-3 px-5" style={{ fontSize: '1.05rem' }}>
                <FiMail /> Initiate Contact
              </Link>
              <a
                href="https://linkedin.com/in/engineer-michael-basweti"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern-secondary py-3 px-4"
                style={{ fontSize: '1.05rem' }}
              >
                Connect on LinkedIn <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;