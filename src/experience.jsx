import React, { useState } from 'react';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBriefcase, FaCode, FaUsersCog, FaServer, FaBrain } from 'react-icons/fa';
import { FiLayers, FiDatabase } from 'react-icons/fi';

const EXPERIENCES = [
  {
    role: 'Technical Lead (Back Office Systems)',
    company: 'Nation Media Group',
    location: 'Nairobi, Kenya',
    period: '03/2023 – Present',
    duration: 'Current Role',
    type: 'Full-time',
    isCurrent: true,
    summary:
      'Directing backend architecture, ETL data engineering, and cross-border digital platforms across Kenya, Uganda, and Tanzania. Spearheaded $1M+ enterprise partnership rollouts and enterprise data warehousing.',
    achievements: [
      {
        category: 'architecture',
        label: 'Data Engineering, Cloud & System Architecture',
        icon: FaServer,
        points: [
          'Built robust ETL pipelines and analytical data warehouse solutions leveraging Prefect, ClickHouse, and PostgreSQL.',
          'Architected finance and courier platforms, securing $1M+ in commercial partnerships with Airtel, D-Light, and The Aga Khan Foundation.',
          'Integrated Zoho Payments and Microsoft Graph APIs to automate cross-border finance disbursements and enterprise workflows.',
          'Leveraged AWS, Docker, and GitHub Actions for continuous integration and fault-tolerant cloud deployments.',
        ],
      },
      {
        category: 'leadership',
        label: 'Engineering Leadership & Agile Governance',
        icon: FaUsersCog,
        points: [
          'Led engineering and data initiatives across NMG’s East African hubs (Nairobi, Kampala, Dar es Salaam).',
          'Served as Scrum Master, boosting Agile team velocity by 30% through sprint optimization.',
          'Increased documentation efficiency by 30% through standardized Confluence architectural blueprints.',
          'Mentored engineers in backend API design, SQL optimization, and modern data engineering practices.',
        ],
      },
    ],
    techStack: ['Python', 'Django REST', 'Prefect', 'ClickHouse', 'PostgreSQL', 'AWS', 'Docker', 'Microsoft Graph API', 'Zoho API', 'GitHub Actions'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'DT One Group',
    location: 'Nairobi, Kenya',
    period: '05/2022 – 02/2023',
    duration: '10 mos',
    type: 'Full-time',
    isCurrent: false,
    summary:
      'Engineered high-throughput fintech and telecom lending engines powering millions of mobile subscriber transactions across African and Asian telco providers.',
    achievements: [
      {
        category: 'architecture',
        label: 'Telco Lending Microservices & High Scale',
        icon: FaServer,
        points: [
          'Developed backend services for telecom lending platforms across Africa and Asia, increasing lending rates by up to 30%.',
          'Built real-time airtime lending and USSD solutions for Airtel Uganda and MTN Guinea, improving financial service accessibility.',
          'Developed high-performance backend microservices using Clojure and Java, with React frontend contributions.',
          'Supported Agile adoption across engineering teams through sprint planning and streamlined delivery workflows.',
        ],
      },
    ],
    techStack: ['Clojure', 'Java', 'React', 'Microservices', 'USSD Protocols', 'SMS Scheduling', 'PostgreSQL'],
  },
  {
    role: 'Software Engineer',
    company: 'Nation Media Group',
    location: 'Nairobi, Kenya',
    period: '03/2020 – 04/2022',
    duration: '2 yrs 2 mos',
    type: 'Full-time',
    isCurrent: false,
    summary:
      'Led the end-to-end development of a scalable courier automation platform and distributed back-office interfaces.',
    achievements: [
      {
        category: 'architecture',
        label: 'Courier Platform Engineering',
        icon: FaServer,
        points: [
          'Led development of a scalable courier automation platform using Python, React, REST APIs, and PostgreSQL.',
          'Designed resilient system architecture and high-performance APIs, ensuring scalability and 99.9% uptime.',
          'Led user training across Kenya and Uganda, continuously enhancing the platform based on field operational feedback.',
        ],
      },
    ],
    techStack: ['Python', 'Django REST', 'React', 'React Native', 'PostgreSQL', 'REST APIs', 'AWS'],
  },
  {
    role: 'Software Engineer Consultant',
    company: 'Nation Media Group',
    location: 'Nairobi, Kenya',
    period: '09/2019 – 02/2020',
    duration: '6 mos',
    type: 'Contract',
    isCurrent: false,
    summary:
      'Engineered the Distributor Management System (DMS) integrated directly with enterprise SAP ERP.',
    achievements: [
      {
        category: 'architecture',
        label: 'SAP ERP Integration & Bad Debt Reduction',
        icon: FaServer,
        points: [
          'Built a Django-based Distributor Management System, reducing bad debts by 80% across regional distribution networks.',
          'Integrated custom logistics pipelines with in-house SAP ERP, eliminating manual data uploads and reconciliation lag.',
          'Deployed AWS applications and developed SQL-based reporting and automated migration tools.',
        ],
      },
    ],
    techStack: ['Django', 'SAP ERP', 'JavaScript/jQuery', 'PostgreSQL', 'AWS EC2', 'SQL Stored Procedures'],
  },
  {
    role: 'Software Engineer',
    company: 'Andela Kenya',
    location: 'Nairobi, Kenya',
    period: '09/2018 – 09/2019',
    duration: '1 yr 1 mo',
    type: 'Full-time',
    isCurrent: false,
    summary:
      'Engineered developer infrastructure, real-time calendar synchronization, and event-driven microservices within distributed pan-African teams.',
    achievements: [
      {
        category: 'architecture',
        label: 'Event-Driven Microservices & Resource Scheduling',
        icon: FaServer,
        points: [
          'Built full-stack internal tools using Python, GraphQL, and React.',
          'Built a booking system linked with Google Calendar APIs, increasing efficiency of meeting room booking by 50%.',
          'Implemented event-driven microservices for real-time schedule notifications and webhook processing.',
          'Developed a publishing platform using Django REST Framework and React for engineer knowledge sharing.',
        ],
      },
    ],
    techStack: ['Python', 'GraphQL', 'Django REST', 'React', 'Google Calendar API', 'Docker'],
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (selectedCompany === 'all') return true;
    if (selectedCompany === 'nmg') return exp.company === 'Nation Media Group';
    if (selectedCompany === 'dtone') return exp.company === 'DT One Group';
    if (selectedCompany === 'andela') return exp.company === 'Andela Kenya';
    return true;
  });

  return (
    <div className="section-wrapper py-5">
      <div className="container">
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Career Trajectory</span>
          <h1 className="section-title text-gradient">Leadership & Technical Experience</h1>
          <p className="section-lead">
            Over 8 years of technical leadership, designing fault-tolerant systems, data pipelines, and scaling engineering teams across East Africa.
          </p>
        </div>

        {/* Company Filter Tabs */}
        <div className="filter-tabs-wrapper mb-5" data-aos="fade-up">
          {[
            { id: 'all', label: 'All Engagements (8+ Years)' },
            { id: 'nmg', label: 'Nation Media Group (Tech Lead & Principal)' },
            { id: 'dtone', label: 'DT One Group (Senior SE)' },
            { id: 'andela', label: 'Andela Kenya (Software Engineer)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCompany(tab.id)}
              className={`filter-tab-btn ${selectedCompany === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="timeline-container" data-aos="fade-up">
          {filteredExperiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              {/* Timeline Node */}
              <div className={`timeline-node ${exp.isCurrent ? 'current' : ''}`} />

              <div className="timeline-card">
                {/* Header Row */}
                <div className="timeline-role-header">
                  <h3 className="timeline-role-title">{exp.role}</h3>
                  <span className="timeline-period-badge">
                    <FaCalendarAlt className="me-1 text-cyan" /> {exp.period}
                  </span>
                </div>

                {/* Company & Location */}
                <div className="timeline-company-row">
                  <span className="d-flex align-items-center gap-1 text-white">
                    <FaBuilding className="text-cyan" /> {exp.company}
                  </span>
                  <span>•</span>
                  <span className="d-flex align-items-center gap-1 text-secondary">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                  <span>•</span>
                  <span className="badge bg-dark border border-secondary text-secondary font-mono" style={{ fontSize: '0.72rem' }}>
                    {exp.type}
                  </span>
                </div>

                {/* Role Summary */}
                <p className="text-secondary small mb-4" style={{ lineHeight: '1.65', fontSize: '0.92rem' }}>
                  {exp.summary}
                </p>

                {/* Categorized Accomplishments */}
                <div className="mb-4">
                  {exp.achievements.map((ach, achIdx) => {
                    const Icon = ach.icon;
                    return (
                      <div key={achIdx} className="mb-3">
                        <h6 className="text-white small font-weight-bold d-flex align-items-center gap-2 mb-2 font-mono" style={{ fontSize: '0.85rem' }}>
                          <Icon className="text-cyan" /> {ach.label}
                        </h6>
                        <ul className="timeline-bullets">
                          {ach.points.map((pt, ptIdx) => (
                            <li key={ptIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 border-top border-secondary">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="text-muted small font-mono me-1">Stack:</span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
