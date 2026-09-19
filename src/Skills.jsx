import React, { useState } from 'react';
import {
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiGraphql,
  SiClojure,
  SiApachekafka,
  SiJira,
  SiConfluence,
  SiSap,
  SiDocker,
  SiRedis,
  SiTypescript,
  SiSpringboot,
  SiFastapi
} from 'react-icons/si';
import { FaAws, FaJava, FaServer, FaUsersCog, FaProjectDiagram, FaBrain, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';
import { FiDatabase, FiLayers, FiCpu, FiSearch, FiCode, FiCheckCircle } from 'react-icons/fi';

const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Capabilities', icon: FiLayers },
  { id: 'backend', label: 'Backend & Microservices', icon: FiCpu },
  { id: 'data_ai', label: 'Data Engineering & AI', icon: FaBrain },
  { id: 'cloud', label: 'Cloud & DevOps', icon: FiDatabase },
  { id: 'integrations', label: 'Integrations & Payments', icon: FaMoneyBillWave },
  { id: 'leadership', label: 'Leadership & Delivery', icon: FaUsersCog },
];

const SKILLS_DATA = [
  // Backend & Microservices
  { name: 'Python', category: 'backend', icon: SiPython, level: 'Expert', desc: 'Core language for microservices, ETL pipelines & backend APIs', highlight: true },
  { name: 'Django / DRF', category: 'backend', icon: SiDjango, level: 'Expert', desc: 'Back-office platforms, Courier, DMS & REST APIs', highlight: true },
  { name: 'FastAPI & Flask', category: 'backend', icon: SiFastapi, level: 'Expert', desc: 'High-speed asynchronous endpoints & microservices', highlight: true },
  { name: 'Clojure', category: 'backend', icon: SiClojure, level: 'Advanced', desc: 'High-throughput telecom lending engines @ DT One Group', highlight: true },
  { name: 'Java & Spring Boot', category: 'backend', icon: SiSpringboot, level: 'Advanced', desc: 'Enterprise microservices & financial backend services', highlight: false },
  { name: 'Node.js & Express.js', category: 'backend', icon: SiNodedotjs, level: 'Advanced', desc: 'Real-time middleware & event-driven APIs', highlight: true },
  { name: 'TypeScript & JavaScript', category: 'backend', icon: SiTypescript, level: 'Expert', desc: 'Type-safe services, full-stack applications & API contracts', highlight: true },
  { name: 'GraphQL', category: 'backend', icon: SiGraphql, level: 'Proficient', desc: 'Schema federation, real-time push subscriptions @ Andela', highlight: false },
  { name: 'Apache Kafka', category: 'backend', icon: SiApachekafka, level: 'Advanced', desc: 'Event streaming, queue partitioning & distributed message brokers', highlight: true },

  // Data Engineering & AI
  { name: 'Prefect & ETL Pipelines', category: 'data_ai', icon: FaServer, level: 'Expert', desc: 'Automated data workflows & reliable workflow orchestration', highlight: true },
  { name: 'ClickHouse', category: 'data_ai', icon: FiDatabase, level: 'Advanced', desc: 'High-performance analytical columnar data warehousing', highlight: true },
  { name: 'LangChain & LangGraph', category: 'data_ai', icon: FaBrain, level: 'Advanced', desc: 'Multi-agent LLM workflows & intelligent document processing', highlight: true },
  { name: 'Medallion Architecture', category: 'data_ai', icon: FiLayers, level: 'Advanced', desc: 'Bronze, Silver & Gold data warehouse design patterns', highlight: true },
  { name: 'Data Warehousing', category: 'data_ai', icon: FiDatabase, level: 'Expert', desc: 'Schema modeling, reporting marts & automated analytics', highlight: false },

  // Cloud & Databases
  { name: 'AWS Cloud Services', category: 'cloud', icon: FaAws, level: 'Advanced', desc: 'EC2, S3, RDS, Lambda, VPC, CloudWatch & DevOps automation', highlight: true },
  { name: 'Docker & Containers', category: 'cloud', icon: SiDocker, level: 'Advanced', desc: 'Containerization, reproducible microservices & CI/CD', highlight: true },
  { name: 'PostgreSQL', category: 'cloud', icon: SiPostgresql, level: 'Expert', desc: 'ACID transactions, relational indexing & query optimization', highlight: true },
  { name: 'MySQL & NoSQL', category: 'cloud', icon: SiMysql, level: 'Advanced', desc: 'High-volume transaction schemas and document stores', highlight: false },
  { name: 'Redis', category: 'cloud', icon: SiRedis, level: 'Advanced', desc: 'In-memory caching, rate-limiting & session clusters', highlight: true },
  { name: 'Git & GitHub Actions', category: 'cloud', icon: SiGithub, level: 'Expert', desc: 'Automated CI/CD pipelines, branch policies & releases', highlight: false },

  // Integrations & Payments
  { name: 'M-Pesa API & Payments', category: 'integrations', icon: FaMoneyBillWave, level: 'Expert', desc: 'Mobile money disbursements, C2B/B2C callbacks & reconciliation', highlight: true },
  { name: 'SAP ERP Integration', category: 'integrations', icon: SiSap, level: 'Expert', desc: 'Direct ERP sync for nationwide newspaper distribution & inventory', highlight: true },
  { name: 'Zoho Payments Integration', category: 'integrations', icon: FiCheckCircle, level: 'Expert', desc: 'Multi-country finance claims automation (KE, UG, TZ)', highlight: true },
  { name: 'Microsoft Graph API', category: 'integrations', icon: FaProjectDiagram, level: 'Expert', desc: 'Enterprise workflow automation & Office 365 services', highlight: true },
  { name: 'Telco USSD & SMS Gateways', category: 'integrations', icon: FaServer, level: 'Expert', desc: 'Airtime lending & scheduled SMS (MTN, Airtel, Blue Label)', highlight: true },
  { name: 'Cybersecurity & RBAC', category: 'integrations', icon: FaShieldAlt, level: 'Advanced', desc: 'Audit compliance, encrypted vaults & role-based access control', highlight: false },

  // Leadership & Delivery
  { name: 'Agile & Scrum Master', category: 'leadership', icon: FaUsersCog, level: 'Expert', desc: 'Led sprint rituals, improving team velocity by 30%', highlight: true },
  { name: 'Cross-Border Team Lead', category: 'leadership', icon: FaUsersCog, level: 'Lead', desc: 'Unifying engineering hubs in Nairobi, Kampala & Dar es Salaam', highlight: true },
  { name: 'Jira & Confluence Standardization', category: 'leadership', icon: SiJira, level: 'Expert', desc: 'Increased technical documentation efficiency by 30%', highlight: true },
  { name: 'System Design & Mentorship', category: 'leadership', icon: FiLayers, level: 'Lead', desc: 'Mentoring software and data engineers in SQL & clean architecture', highlight: true },
];

const Skills = ({ title = "Technical Capabilities & Architecture Stack", showHeader = true }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="section-wrapper" id="skills-section">
      <div className="container">
        {showHeader && (
          <div className="section-header" data-aos="fade-up">
            <span className="section-badge">Production Tooling & Tech Stack</span>
            <h2 className="section-title text-gradient">{title}</h2>
            <p className="section-lead">
              Battle-tested across 8+ years of production deployments in distributed fintech, telco, and enterprise data platforms.
            </p>
          </div>
        )}

        {/* Filter Tabs & Search Bar */}
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 mb-4" data-aos="fade-up">
          {/* Category Tabs */}
          <div className="filter-tabs-wrapper mb-0">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`filter-tab-btn d-inline-flex align-items-center gap-2 ${
                    activeCategory === cat.id ? 'active' : ''
                  }`}
                >
                  <Icon size={14} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="position-relative" style={{ minWidth: '260px' }}>
            <FiSearch
              className="position-absolute top-50 translate-middle-y text-secondary ms-3"
              size={16}
            />
            <input
              type="text"
              className="form-control-modern mb-0 ps-5 py-2"
              placeholder="Search skill (e.g. Prefect, M-Pesa, Kafka)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ fontSize: '0.85rem' }}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row g-3" data-aos="fade-up">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div
                    className="pillar-card p-3"
                    style={{
                      borderLeft: skill.highlight ? '3px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    <div className="d-flex align-items-start gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{
                          width: '44px',
                          height: '44px',
                          background: 'rgba(99, 102, 241, 0.12)',
                          border: '1px solid rgba(99, 102, 241, 0.25)',
                          color: '#38bdf8',
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                          <h6 className="text-white mb-0 font-weight-bold" style={{ fontSize: '0.98rem' }}>
                            {skill.name}
                          </h6>
                          <span
                            className="badge font-mono"
                            style={{
                              fontSize: '0.68rem',
                              background: skill.level === 'Lead' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(16, 185, 129, 0.12)',
                              color: skill.level === 'Lead' ? '#f59e0b' : '#34d399',
                              border: `1px solid ${skill.level === 'Lead' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-secondary small mb-0" style={{ fontSize: '0.82rem', lineHeight: '1.45' }}>
                          {skill.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center py-5 text-secondary">
              <p>No technologies matched "{searchQuery}". Try searching for Python, Prefect, M-Pesa, AWS, or ClickHouse.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
