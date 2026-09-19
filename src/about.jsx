import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaServer,
  FaUsersCog,
  FaShieldAlt,
  FaRocket,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaLanguage,
  FaBrain,
  FaDatabase,
  FaCheckCircle
} from 'react-icons/fa';
import { FiCheckCircle, FiMapPin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi';
import MichaelPhoto from './assets/michaelphoto.png';
import Skills from './Skills';

const PHILOSOPHIES = [
  {
    icon: FaServer,
    title: 'Architected for Resilience',
    desc: 'Distributed systems must anticipate failure gracefully. I focus on idempotency, transactional consistency, fault-tolerant queueing, and microservices.',
  },
  {
    icon: FaRocket,
    title: 'Scalability with Pragmatism',
    desc: 'Avoiding premature complexity while ensuring backend APIs, ETL data pipelines, and database schemas smoothly scale across regional operations.',
  },
  {
    icon: FaBrain,
    title: 'Data Engineering & AI Innovation',
    desc: 'Leveraging modern data warehousing (ClickHouse, Prefect) and AI/LLM technologies (LangChain, LangGraph) to automate intelligent enterprise workflows.',
  },
  {
    icon: FaShieldAlt,
    title: 'Security & Enterprise Governance',
    desc: 'From financial payments compliance (M-Pesa, Zoho, Banking) to SAP ERP sync, every interface is guarded with robust RBAC, audit trails, and cybersecurity.',
  },
];

const ACHIEVEMENTS = [
  {
    metric: '$1M+',
    label: 'Partnership Contracts Secured',
    detail: 'Architected courier and finance platforms, securing $1M+ in partnerships with Airtel, D-Light & Aga Khan Foundation.',
  },
  {
    metric: '80%',
    label: 'Bad Debt Reduction',
    detail: 'Built Django-based Distributor Management System integrated with SAP, eliminating manual uploads and slashing bad debts.',
  },
  {
    metric: '30%',
    label: 'Telco Lending Increase',
    detail: 'Engineered high-concurrency Clojure & Java lending microservices across MTN South Africa, Airtel Uganda, and Mozambique.',
  },
  {
    metric: '15%',
    label: 'Faster Transaction Speeds',
    detail: 'Rolled out multi-currency digital payment rails across Kenya, Uganda, and Tanzania.',
  },
  {
    metric: '50%',
    label: 'Booking Efficiency Boost',
    detail: 'Engineered event-driven push microservices and Google Calendar API integration at Andela.',
  },
  {
    metric: '30%',
    label: 'Agile Velocity & Confluence Gains',
    detail: 'Optimized sprint cadences as Scrum Master and unified technical documentation standards.',
  },
];

const STRENGTHS = [
  {
    title: 'High-Throughput Backends',
    items: [
      'Python (Django, DRF, Flask, FastAPI)',
      'Node.js & Express.js API gateways',
      'Clojure, Java & Spring Boot microservices',
      'PostgreSQL, MySQL, ClickHouse & NoSQL',
    ],
  },
  {
    title: 'Data Engineering & AI/LLMs',
    items: [
      'Prefect & Airflow ETL orchestration',
      'ClickHouse data warehousing & Medallion architecture',
      'LangChain & LangGraph agentic pipelines',
      'SQL optimization & automated data migration',
    ],
  },
  {
    title: 'Enterprise & Payment Integrations',
    items: [
      'SAP ERP logistics & finance synchronization',
      'M-Pesa API & Zoho Payments integration',
      'Microsoft Graph API enterprise automation',
      'Telco SMS & USSD real-time lending gateways',
    ],
  },
];

const About = () => {
  return (
    <div className="section-wrapper py-5">
      <div className="container">
        {/* Profile Hero Section */}
        <div className="row g-5 align-items-center mb-5" data-aos="fade-up">
          <div className="col-lg-5 col-12 text-center">
            <div className="position-relative d-inline-block">
              <div
                className="rounded-4 overflow-hidden p-2 position-relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(6, 182, 212, 0.4))',
                  boxShadow: '0 0 40px rgba(99, 102, 241, 0.25)',
                  maxWidth: '380px',
                }}
              >
                <img
                  src={MichaelPhoto}
                  alt="Michael Alex Basweti"
                  className="img-fluid rounded-4"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    background: '#0a0f1d',
                  }}
                />
              </div>

              {/* Status Pill on Photo */}
              <div
                className="position-absolute bottom-0 start-50 translate-middle-x mb-n3 px-3 py-2 rounded-pill bg-dark border border-secondary shadow-lg d-flex align-items-center gap-2 text-white font-mono"
                style={{ fontSize: '0.78rem', whiteSpace: 'nowrap' }}
              >
                <span className="status-dot"></span>
                <span>8+ Years Production Engineering & Leadership</span>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-12">
            <span className="section-badge">Tech Lead & Systems Architect</span>
            <h1 className="display-4 text-gradient mb-3 font-weight-bold">
              Michael Alex Basweti
            </h1>
            <div className="d-flex flex-wrap align-items-center gap-3 mb-4 text-secondary font-mono small">
              <span className="d-flex align-items-center gap-1 text-cyan">
                <FiMapPin /> Nairobi, Kenya
              </span>
              <span>•</span>
              <span className="text-white">Technical Lead (Back Office Systems) @ Nation Media Group</span>
              <span>•</span>
              <span className="text-emerald">mbasweti.netlify.app</span>
            </div>

            <p className="lead text-light mb-3" style={{ fontSize: '1.08rem', lineHeight: '1.7' }}>
              I am a <strong className="text-cyan">Tech Lead and Senior Software Engineer</strong> with over <strong className="text-white">8+ years of experience</strong> architecting scalable backend systems, data pipelines, and distributed platforms across East Africa.
            </p>

            <p className="text-secondary mb-3" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
              My background blends deep expertise in <strong>Python, Django REST Framework, Clojure, Java, and AWS</strong> with hands-on leadership in <strong>data engineering (Prefect, ClickHouse)</strong> and emerging <strong>AI/LLM technologies (LangChain, LangGraph)</strong>. I specialize in delivering mission-critical payment gateways, logistics automation, and enterprise ERP integrations.
            </p>

            <p className="text-secondary mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
              At <strong>Nation Media Group</strong>, I lead engineering and data initiatives across Kenya, Uganda, and Tanzania, serving as Scrum Master and mentoring engineers in clean architecture and SQL optimization. Previously at <strong>DT One Group</strong> and <strong>Andela</strong>, I engineered high-throughput telco lending microservices and real-time scheduling engines.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <Link to="/contact" className="btn-modern-primary py-2 px-4">
                <FiMail /> Get in Touch
              </Link>
              <Link to="/work" className="btn-modern-secondary py-2 px-4">
                <FaBriefcase /> Explore Case Studies
              </Link>
              <a
                href="https://linkedin.com/in/engineer-michael-basweti"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern-outline py-2 px-3 d-inline-flex align-items-center gap-2"
              >
                LinkedIn Profile <FiExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Education & Language Bar */}
        <div className="row g-4 mb-5" data-aos="fade-up">
          <div className="col-md-6 col-12">
            <div className="contact-info-item p-3 mb-0 h-100">
              <div className="contact-icon-wrapper" style={{ background: 'rgba(99, 102, 241, 0.15)', borderColor: 'rgba(99, 102, 241, 0.3)', color: '#818cf8' }}>
                <FaGraduationCap size={22} />
              </div>
              <div>
                <span className="text-muted small d-block font-mono" style={{ fontSize: '0.72rem' }}>ACADEMIC BACKGROUND</span>
                <h6 className="text-white font-weight-bold mb-1">Bachelor of Science in Computer Science</h6>
                <p className="text-secondary small mb-0">Laikipia University • Kenya (12/2017)</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="contact-info-item p-3 mb-0 h-100">
              <div className="contact-icon-wrapper" style={{ background: 'rgba(6, 182, 212, 0.15)', borderColor: 'rgba(6, 182, 212, 0.3)', color: '#38bdf8' }}>
                <FaLanguage size={22} />
              </div>
              <div>
                <span className="text-muted small d-block font-mono" style={{ fontSize: '0.72rem' }}>SPOKEN LANGUAGES</span>
                <div className="d-flex align-items-center gap-3 text-white small">
                  <span><strong>English:</strong> <span className="text-cyan">Proficient</span></span>
                  <span>•</span>
                  <span><strong>Swahili:</strong> <span className="text-emerald">Native</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Career Metrics / Achievements Grid */}
        <div className="my-5 pt-2" data-aos="fade-up">
          <div className="section-header">
            <span className="section-badge">Verified Career Impact</span>
            <h2 className="section-title text-gradient">Quantified Key Achievements</h2>
            <p className="section-lead">
              Measurable operational and financial outcomes delivered across enterprise, fintech, and telco ecosystems.
            </p>
          </div>

          <div className="row g-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-12">
                <div className="metric-card h-100">
                  <div className="metric-number text-gradient-cyan mb-2">{ach.metric}</div>
                  <div className="metric-label mb-2" style={{ fontSize: '0.95rem' }}>{ach.label}</div>
                  <p className="metric-subtext" style={{ fontSize: '0.82rem', lineHeight: '1.5' }}>
                    {ach.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="my-5 pt-4" data-aos="fade-up">
          <div className="section-header">
            <span className="section-badge">Core Pillars</span>
            <h2 className="section-title text-gradient">Architectural Philosophy</h2>
            <p className="section-lead">
              The engineering standards and values that guide how I design, review, and deploy production software.
            </p>
          </div>

          <div className="row g-4">
            {PHILOSOPHIES.map((phi, i) => {
              const Icon = phi.icon;
              return (
                <div key={i} className="col-lg-3 col-md-6 col-12">
                  <div className="pillar-card p-4">
                    <div className="pillar-icon-box">
                      <Icon size={24} />
                    </div>
                    <h5 className="pillar-title" style={{ fontSize: '1.1rem' }}>
                      {phi.title}
                    </h5>
                    <p className="pillar-desc" style={{ fontSize: '0.86rem' }}>
                      {phi.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths / What I Bring */}
        <div className="my-5 pt-4" data-aos="fade-up">
          <div className="section-header">
            <span className="section-badge">Domain Mastery</span>
            <h2 className="section-title text-gradient">Core Technical Domains</h2>
          </div>

          <div className="row g-4">
            {STRENGTHS.map((str, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 col-12">
                <div className="skill-category-box p-4">
                  <h5 className="text-white mb-3 d-flex align-items-center gap-2 font-weight-bold" style={{ fontSize: '1.05rem' }}>
                    <FaCheckCircle className="text-cyan" /> {str.title}
                  </h5>
                  <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary mb-0">
                    {str.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="d-flex align-items-center gap-2">
                        <span className="text-emerald">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Snapshot */}
        <div className="mt-5">
          <Skills title="Comprehensive Capabilities Matrix" showHeader={true} />
        </div>
      </div>
    </div>
  );
};

export default About;