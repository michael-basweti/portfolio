import React, { useState, useEffect, useCallback } from 'react';
import Modal from 'react-modal';
import {
  FaBriefcase,
  FaServer,
  FaCheckCircle,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand
} from 'react-icons/fa';
import { FiLayers, FiDatabase, FiExternalLink, FiServer } from 'react-icons/fi';

import CASE1 from './assets/case1.jpg';
import CASE2 from './assets/case2.jpg';
import CASE3 from './assets/case3.jpg';
import CASE4 from './assets/case4.jpg';
import CASE5 from './assets/case5.jpg';
import EZRA from './assets/ezra.png';

import CLAIM1 from './assets/claim1.jpg';
import CLAIM2 from './assets/claim2.jpg';
import CLAIM3 from './assets/claim3.jpg';
import CLAIM4 from './assets/claim4.jpg';
import CLAIM5 from './assets/claim5.jpg';
import CLAIM6 from './assets/claim6.jpg';
import CLAIM7 from './assets/claim7.jpg';

import DMS1 from './assets/dms1.jpg';
import DMS2 from './assets/dms2.jpg';
import DMS3 from './assets/dms3.jpg';
import DMS4 from './assets/dms4.jpg';

import NATION_COURIER_DASH from './assets/nation_courier_dash.jpg';
import NATION_COURIER_HOME_PAGE from './assets/nation_courier_home_page.jpg';
import NEAREST_AGENT from './assets/nearest_agent.jpg';
import CONVERGE from './assets/converge.jpg';

Modal.setAppElement('#root');

const PROJECTS_DATA = [
  {
    id: 'nation-courier',
    category: 'logistics',
    categoryLabel: 'Distributed Logistics',
    title: 'Nation Courier Logistics & Dispatch Engine',
    subtitle: 'Cross-border courier automation platform across East Africa',
    coverImage: NATION_COURIER_DASH,
    images: [
      { src: NATION_COURIER_DASH, caption: 'Operations Dashboard - Real-time parcel tracking and dispatch metrics' },
      { src: NATION_COURIER_HOME_PAGE, caption: 'Customer & Corporate Portal - Waybill creation and service overview' },
      { src: NEAREST_AGENT, caption: 'Nearest Agent Routing - Geographic lookup for pickup & drop-off centers' },
    ],
    summary:
      'Principal architect for the Nation Courier digital platform, serving corporate contracts including Airtel, D Light, and The Aga Khan Foundation throughout Kenya, Uganda, and Tanzania.',
    highlights: [
      'Engineered automated dispatch algorithm with nearest-agent routing to minimize transit delay.',
      'Constructed RESTful API suite backed by PostgreSQL for multi-regional logistics tracking.',
      'Delivered responsive web and field agent interfaces with React and React Native.',
    ],
    architecture: {
      backend: 'Django REST Framework, Python',
      database: 'PostgreSQL on AWS RDS',
      frontend: 'React, React Native, Bootstrap',
      cloud: 'AWS EC2, S3, CloudWatch',
    },
    metrics: [
      { label: 'Coverage', value: '3 East African Countries' },
      { label: 'Partners', value: 'Airtel, Aga Khan, D.Light' },
      { label: 'Role', value: 'Principal Software Engineer' },
    ],
  },
  {
    id: 'nmg-claims',
    category: 'fintech',
    categoryLabel: 'Fintech & Payments',
    title: 'Cross-Border Claims & Financial Payments Engine',
    subtitle: 'Regional multi-currency finance payout and verification engine',
    coverImage: CLAIM4,
    images: [
      { src: CLAIM4, caption: 'Payment Approvals Workflow - Multi-tier verification pipeline' },
      { src: CLAIM5, caption: 'Claims Batch Processing - Corporate disbursements and settlement' },
      { src: CLAIM6, caption: 'Financial Audit Dashboard - Transaction status tracking and reconciliation' },
      { src: CLAIM7, caption: 'Regional Disbursement Grid - Processing payouts in KES, UGX, and TZS' },
      { src: CLAIM1, caption: 'Finance Department Entry Portal' },
      { src: CLAIM2, caption: 'Expense Verification Details View' },
      { src: CLAIM3, caption: 'Settlement Confirmation and Ledger Sync' },
    ],
    summary:
      'Architected and rolled out an automated finance and claims payment engine for Nation Media Group finance teams across Kenya, Uganda, and Tanzania with direct Zoho Payments integration.',
    highlights: [
      'Eliminated manual paper audits by digitizing payment requisition, verification, and disbursement.',
      'Integrated real-time bank reconciliation and Zoho payment gateways for cross-border currency payouts.',
      'Implemented strict role-based audit trails complying with regional financial audit standards.',
    ],
    architecture: {
      backend: 'Django REST Framework, Express.js',
      database: 'PostgreSQL, Redis Cache',
      integrations: 'Zoho Payments API, Banking Gateways',
      frontend: 'React, Vite, CSS Modules',
    },
    metrics: [
      { label: 'Territories', value: 'Kenya, Uganda, Tanzania' },
      { label: 'Integration', value: 'Zoho & Bank APIs' },
      { label: 'Efficiency Gain', value: '75% Faster Processing' },
    ],
  },
  {
    id: 'nmg-dms',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP & Supply Chain',
    title: 'Distributor Management System (DMS) & SAP Sync',
    subtitle: 'Nationwide publication distribution and warehouse inventory management',
    coverImage: DMS2,
    images: [
      { src: DMS2, caption: 'Distributor Invoicing & Delivery Manifest Management' },
      { src: DMS1, caption: 'Inventory Ledger - Daily print run allocation & returns tracking' },
      { src: DMS3, caption: 'Regional Dispatch Dashboard for Field Representatives' },
      { src: DMS4, caption: 'Billing Reconciliation & Returns Processing' },
    ],
    summary:
      'Designed and deployed the countrywide Distributor Management System directly integrated with Nation Media Group’s in-house SAP ERP, managing daily newspaper and magazine logistics.',
    highlights: [
      'Connected custom distribution pipelines to SAP ERP for automated billing, returns, and inventory synchronization.',
      'Engineered automated SQL data migration pipelines for seamless legacy data onboarding.',
      'Trained hundreds of regional distributors across Kenya and provided continuous high-availability maintenance.',
    ],
    architecture: {
      backend: 'Django, Python, SQL Stored Procedures',
      database: 'PostgreSQL, SAP DB Sync',
      infrastructure: 'AWS Cloud Hosting, RDS',
      frontend: 'JavaScript, jQuery, Bootstrap',
    },
    metrics: [
      { label: 'Scope', value: 'Nationwide Kenya Coverage' },
      { label: 'Core Sync', value: 'SAP ERP Integration' },
      { label: 'Uptime', value: '99.9% Critical Operations' },
    ],
  },
  {
    id: 'nmg-legal',
    category: 'enterprise',
    categoryLabel: 'Governance & Legal Tech',
    title: 'Enterprise Legal Case & Compliance Engine',
    subtitle: 'Litigation tracking, contract lifecycle, and counsel management',
    coverImage: CASE2,
    images: [
      { src: CASE2, caption: 'Legal Case Registry - Active litigation docket and court dates' },
      { src: CASE3, caption: 'Case Details & Document Repository' },
      { src: CASE4, caption: 'Hearing Schedules & External Counsel Assignment' },
      { src: CASE5, caption: 'Settlement Analytics & Legal Risk Matrix' },
      { src: CASE1, caption: 'Legal Department Portal Navigation' },
    ],
    summary:
      'Engineered a centralized legal management system for corporate counsel at Nation Media Group, automating case lifecycles, court hearing alerts, and contract compliance.',
    highlights: [
      'Digitized enterprise case files and external counsel assignments into a unified secure repository.',
      'Configured automated notification alerts for impending court deadlines and regulatory filings.',
      'Reduced document retrieval time by 80% with indexed search across thousands of case archives.',
    ],
    architecture: {
      backend: 'Django, Python REST Services',
      database: 'PostgreSQL with RBAC Encryption',
      frontend: 'React, Bootstrap',
      infrastructure: 'AWS S3 (Encrypted Document Vault)',
    },
    metrics: [
      { label: 'Department', value: 'Corporate Legal & Governance' },
      { label: 'Security', value: 'Encrypted Vault & RBAC' },
      { label: 'Impact', value: '100% Digital Case Tracking' },
    ],
  },
  {
    id: 'dtone-lending',
    category: 'telco',
    categoryLabel: 'Telco & High-Throughput Engines',
    title: 'DTOne Telco Credit, Airtime & Voice Lending Microservices',
    subtitle: 'High-throughput microservices serving telco subscribers across Africa & Asia',
    coverImage: EZRA,
    images: [
      { src: EZRA, caption: 'Customer Care Interface (CCI) - Telco subscriber account lookup' },
    ],
    summary:
      'Backend engineer delivering high-volume airtime, data, and voice credit lending platforms integrated directly with national telecom providers across Africa and Asia.',
    highlights: [
      'Developed SMS-based data and voice lending services for MTN South Africa with high concurrent throughput.',
      'Built automated SMS scheduling engines for Blue Label Mozambique and USSD configuration for MTN Guinea Conakry.',
      'Implemented Airtime lending microservices for Airtel Uganda with low-latency transactional integrity.',
      'Contributed to the Customer Care Interface (CCI) built with Clojure and React for fast subscriber query resolution.',
    ],
    architecture: {
      backend: 'Clojure, Java, REST & USSD Gateways',
      database: 'Distributed DB Clustered Queues',
      protocols: 'USSD, SMS Protocols, Telco SMPP',
      frontend: 'React (Customer Care Interface)',
    },
    metrics: [
      { label: 'Markets', value: 'South Africa, Uganda, Mozambique, Guinea' },
      { label: 'Core Stack', value: 'Clojure & Java' },
      { label: 'Scale', value: 'Millions of Subscriber Hits' },
    ],
  },
  {
    id: 'andela-converge',
    category: 'distributed',
    categoryLabel: 'Intelligent Workspace Tech',
    title: 'Converge — Intelligent Meeting Room Management',
    subtitle: 'Automated meeting room availability, analytics dashboard & Google Calendar sync for Andelans',
    coverImage: CONVERGE,
    images: [
      { src: CONVERGE, caption: 'Converge Ecosystem — Web Analytics Dashboard, In-Room Tablet Display & Mobile Companion' },
      { src: CASE4, caption: 'Meeting Room Resource Allocation & Scheduling Telemetry' },
    ],
    summary:
      'Engineered Converge, an intelligent meeting room management application that streamlined room availability and scheduling for Andelans across pan-African hubs. Built event-driven microservices linked with Google Calendar APIs, increasing room booking efficiency by 50%.',
    highlights: [
      'Engineered real-time bi-directional Google Calendar API sync microservices processing calendar webhook updates.',
      'Developed GraphQL API federation for unified room querying, automated scheduling, and in-room tablet displays.',
      'Implemented event-driven push notifications ensuring zero scheduling collisions across multi-country offices.',
      'Created web analytics dashboard tracking room usage, meeting duration frequency, and booking statistics.',
    ],
    architecture: {
      backend: 'Python, Django REST Framework, GraphQL',
      integrations: 'Google Calendar API, Webhooks, Push Services',
      frontend: 'React, Redux, Tablet In-Room Display App',
      infrastructure: 'Docker, CircleCI, AWS',
    },
    metrics: [
      { label: 'Efficiency Gain', value: '+50% Booking Speed' },
      { label: 'Organization', value: 'Andela Pan-Africa' },
      { label: 'Core Stack', value: 'GraphQL & Python' },
    ],
  },
  // {
  //   id: 'andela-authors-haven',
  //   category: 'distributed',
  //   categoryLabel: 'Knowledge & Publishing Tech',
  //   title: 'Authors Haven — Collaborative Engineering Knowledge Platform',
  //   subtitle: 'Medium-inspired publication & article sharing platform for distributed engineering teams',
  //   coverImage: CASE1,
  //   images: [
  //     { src: CASE1, caption: 'Authors Haven Portal — Article Feed, Tag Navigation & Rich Markdown Publishing' },
  //   ],
  //   summary:
  //     'Developed Authors Haven, a high-performance publishing application for Andelans to share informative technical articles, conduct peer reviews, and foster distributed engineering knowledge sharing.',
  //   highlights: [
  //     'Constructed RESTful API backend with Django REST Framework, PostgreSQL, and JWT authentication.',
  //     'Implemented rich text editing, social interactions (claps, bookmarks, comments), and tag-based search.',
  //     'Built responsive frontend interfaces in React and Redux with automated unit and integration tests.',
  //   ],
  //   architecture: {
  //     backend: 'Django REST Framework, Python',
  //     database: 'PostgreSQL, Redis',
  //     frontend: 'React, Redux, CSS Modules',
  //     testing: 'PyTest, Jest, CI/CD Pipeline',
  //   },
  //   metrics: [
  //     { label: 'Community', value: 'Andela Engineers Across Africa' },
  //     { label: 'Architecture', value: 'RESTful API + React' },
  //     { label: 'Security', value: 'JWT Authentication & RBAC' },
  //   ],
  // },
];

const FILTER_TABS = [
  { id: 'all', label: 'All Architectures' },
  { id: 'logistics', label: 'Logistics & Dispatch' },
  { id: 'fintech', label: 'Fintech & Payments' },
  { id: 'enterprise', label: 'Enterprise ERP & Legal' },
  { id: 'telco', label: 'Telco & High Scale' },
  { id: 'distributed', label: 'Workspace & Knowledge Tech' },
];

const Work = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  const openProjectModal = (project, startIdx = 0) => {
    setSelectedProject(project);
    setActiveImageIndex(startIdx);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const handleNextImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  }, [selectedProject]);

  const handlePrevImage = useCallback(() => {
    if (!selectedProject) return;
    setActiveImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  }, [selectedProject]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handleNextImage, handlePrevImage]);

  return (
    <div className="section-wrapper py-5">
      <div className="container">
        {/* Page Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Case Studies & Production Systems</span>
          <h1 className="section-title text-gradient">Architected for Scale & Reliability</h1>
          <p className="section-lead">
            A comprehensive review of mission-critical systems, distributed APIs, and enterprise ERP integrations engineered for regional and pan-African operations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs-wrapper mb-5" data-aos="fade-up">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`filter-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="row g-4" data-aos="fade-up">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-lg-6 col-12">
              <div className="project-card">
                {/* Image Banner */}
                <div
                  className="project-img-wrapper cursor-pointer"
                  onClick={() => openProjectModal(project)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={project.coverImage} alt={project.title} className="project-img" />
                  <span className="project-badge-overlay">{project.categoryLabel}</span>
                  <div
                    className="position-absolute bottom-0 end-0 m-3 p-2 rounded-circle bg-dark text-white border border-secondary d-flex align-items-center justify-content-center"
                    style={{ width: '36px', height: '36px', opacity: 0.9 }}
                    title="View Full Gallery"
                  >
                    <FaExpand size={14} />
                  </div>
                </div>

                {/* Body Content */}
                <div className="project-body">
                  <div className="mb-2">
                    <h3 className="project-title" style={{ fontSize: '1.28rem' }}>
                      {project.title}
                    </h3>
                    <p className="text-cyan small font-mono mb-2">{project.subtitle}</p>
                  </div>

                  <p className="project-desc">{project.summary}</p>

                  {/* Metrics Strip */}
                  <div className="project-stats-strip">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="project-stat-item">
                        <div className="project-stat-val">{m.value}</div>
                        <div className="project-stat-lbl">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Tags */}
                  <div className="d-flex flex-column gap-1 mb-3 small">
                    <div className="d-flex align-items-center gap-2 text-secondary font-mono" style={{ fontSize: '0.78rem' }}>
                      <FiServer className="text-cyan" /> <strong>Core:</strong> {project.architecture.backend}
                    </div>
                    <div className="d-flex align-items-center gap-2 text-secondary font-mono" style={{ fontSize: '0.78rem' }}>
                      <FiDatabase className="text-emerald" /> <strong>Data:</strong> {project.architecture.database}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="d-flex align-items-center justify-content-between pt-3 mt-auto border-top border-secondary">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="btn-modern-primary py-2 px-3"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <FaBriefcase className="me-1" /> View System Specs & Gallery ({project.images.length})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Details & Screenshot Lightbox Modal */}
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay-custom"
            className="modal-content-custom p-0"
            contentLabel="Project Details Modal"
          >
            <div className="p-4 border-bottom border-secondary d-flex align-items-center justify-content-between bg-dark">
              <div>
                <span className="badge bg-primary mb-1 font-mono">{selectedProject.categoryLabel}</span>
                <h4 className="text-white mb-0 font-weight-bold">{selectedProject.title}</h4>
                <span className="text-cyan small font-mono">{selectedProject.subtitle}</span>
              </div>
              <button
                onClick={closeModal}
                className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center"
                style={{ width: '38px', height: '38px' }}
                aria-label="Close modal"
              >
                <FaTimes size={18} />
              </button>
            </div>

            <div className="p-4" style={{ maxHeight: '72vh', overflowY: 'auto' }}>
              {/* Main Image Lightbox with Controls */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="mb-4">
                  <div className="position-relative bg-black rounded-3 overflow-hidden d-flex align-items-center justify-content-center" style={{ minHeight: '340px', maxHeight: '480px' }}>
                    <img
                      src={selectedProject.images[activeImageIndex].src}
                      alt={`Screenshot ${activeImageIndex + 1}`}
                      className="img-fluid"
                      style={{ maxHeight: '480px', objectFit: 'contain' }}
                    />

                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="btn position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle bg-dark text-white border border-secondary p-2 d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px', opacity: 0.85 }}
                          title="Previous screenshot"
                        >
                          <FaChevronLeft size={16} />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="btn position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle bg-dark text-white border border-secondary p-2 d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px', opacity: 0.85 }}
                          title="Next screenshot"
                        >
                          <FaChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Caption & Counter */}
                  <div className="d-flex align-items-center justify-content-between mt-2 px-1">
                    <span className="text-secondary small font-mono">
                      {selectedProject.images[activeImageIndex].caption || 'System Interface Screenshot'}
                    </span>
                    <span className="badge bg-secondary font-mono">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </span>
                  </div>

                  {/* Thumbnails */}
                  {selectedProject.images.length > 1 && (
                    <div className="gallery-thumbs">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`gallery-thumb-btn ${idx === activeImageIndex ? 'active' : ''}`}
                        >
                          <img src={img.src} alt="" className="gallery-thumb-img" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* System Architecture & Engineering Breakdown */}
              <div className="row g-4">
                <div className="col-lg-7 col-12">
                  <h5 className="text-white mb-3 d-flex align-items-center gap-2">
                    <FaCheckCircle className="text-emerald" /> Architecture & Key Accomplishments
                  </h5>
                  <ul className="text-secondary small ps-3 mb-4" style={{ lineHeight: '1.7' }}>
                    {selectedProject.highlights.map((item, i) => (
                      <li key={i} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h5 className="text-white mb-2 d-flex align-items-center gap-2">
                    <FiLayers className="text-cyan" /> Project Overview
                  </h5>
                  <p className="text-secondary small" style={{ lineHeight: '1.7' }}>
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="col-lg-5 col-12">
                  <div className="p-3 rounded-3 bg-dark border border-secondary">
                    <h6 className="text-white font-mono text-uppercase mb-3 font-weight-bold" style={{ fontSize: '0.85rem' }}>
                      Technology Specifications
                    </h6>
                    <div className="d-flex flex-column gap-2 small">
                      <div>
                        <span className="text-muted font-mono d-block" style={{ fontSize: '0.72rem' }}>BACKEND ENGINE</span>
                        <span className="text-white font-mono">{selectedProject.architecture.backend}</span>
                      </div>
                      <div>
                        <span className="text-muted font-mono d-block" style={{ fontSize: '0.72rem' }}>DATABASE & PERSISTENCE</span>
                        <span className="text-white font-mono">{selectedProject.architecture.database}</span>
                      </div>
                      {selectedProject.architecture.integrations && (
                        <div>
                          <span className="text-muted font-mono d-block" style={{ fontSize: '0.72rem' }}>ENTERPRISE INTEGRATIONS</span>
                          <span className="text-cyan font-mono">{selectedProject.architecture.integrations}</span>
                        </div>
                      )}
                      {selectedProject.architecture.frontend && (
                        <div>
                          <span className="text-muted font-mono d-block" style={{ fontSize: '0.72rem' }}>USER INTERFACE</span>
                          <span className="text-white font-mono">{selectedProject.architecture.frontend}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-top border-secondary">
                      <h6 className="text-white font-mono text-uppercase mb-2" style={{ fontSize: '0.78rem' }}>
                        Production Scope
                      </h6>
                      <div className="d-flex flex-column gap-2">
                        {selectedProject.metrics.map((m, i) => (
                          <div key={i} className="d-flex justify-content-between font-mono" style={{ fontSize: '0.78rem' }}>
                            <span className="text-muted">{m.label}:</span>
                            <span className="text-emerald font-weight-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 border-top border-secondary d-flex justify-content-end bg-dark">
              <button onClick={closeModal} className="btn btn-outline-light px-4">
                Close
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Work;
