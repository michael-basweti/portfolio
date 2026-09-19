import React, { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaPlay, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const DEFAULT_HISTORY = [
  {
    type: 'system',
    text: '⚡ Michael Alex Basweti - Systems & Data Architecture Shell v3.0.0 [Nairobi, Kenya]'
  },
  {
    type: 'system',
    text: 'Type "help" or click one of the quick command chips below to explore system specs.'
  }
];

const COMMANDS_MAP = {
  help: {
    title: 'Available commands:',
    items: [
      'whoami      - Tech Lead bio, education & verified achievements',
      'stack       - Production technology stack, data pipelines & AI',
      'impact      - Quantified business metrics ($1M+, 80% bad debt reduction, +30% lending)',
      'experience  - Career progression from Andela to Nation Media Group',
      'projects    - Flagship systems (Nation Courier, Claims, DMS + SAP, Telco)',
      'education   - Degree & university credentials',
      'contact     - Direct contact channels and availability',
      'clear       - Clear the terminal console',
      'sudo hire   - Initialize hiring protocol'
    ]
  },
  whoami: {
    title: 'Michael Alex Basweti — Technical Lead & Systems Architect',
    items: [
      '📍 Location: Nairobi, Kenya (mbasweti.netlify.app)',
      '💼 Current: Technical Lead (Back Office Systems) @ Nation Media Group',
      '🎓 Education: B.Sc. in Computer Science, Laikipia University (2017)',
      '🎯 Focus: High-scale backend architectures, ETL data pipelines, AI/LLMs & multi-country fintech',
      '🏆 8+ years leading engineering teams delivering payments, logistics & enterprise ERP platforms'
    ]
  },
  education: {
    title: 'Education & Languages:',
    items: [
      '🎓 Bachelor of Science in Computer Science - Laikipia University (12/2017 | Kenya)',
      '🗣️ Languages: English (Proficient), Swahili (Native)'
    ]
  },
  stack: {
    title: 'Production Tech Radar & Core Capabilities:',
    items: [
      '• Languages: Python, JavaScript, TypeScript, Java, Clojure',
      '• Frameworks: Django / DRF, FastAPI, Flask, React.js, React Native, Express.js, Spring Boot',
      '• Data Engineering & AI: Prefect, ClickHouse, ETL Pipelines, Data Warehousing, LangChain, LangGraph',
      '• Databases & Cloud: PostgreSQL, MySQL, NoSQL, AWS (EC2, S3, RDS, Lambda), Docker, Git, GitHub',
      '• Integrations: M-Pesa API, REST APIs, Microsoft Graph API, SAP ERP, Zoho Payments, USSD/SMS',
      '• Architecture: System Architecture, Microservices, Medallion Architecture, Agile/Scrum, Cybersecurity'
    ]
  },
  impact: {
    title: 'Verified Career Impact & Key Achievements:',
    items: [
      '💰 Secured $1M+ in commercial partnerships (Airtel, D-Light, Aga Khan Foundation) for Courier & Finance',
      '📉 Reduced bad debts by 80% by building Django-based Distributor Management System synced with SAP ERP',
      '📈 Increased telecom lending rates by up to 30% across Africa and Asia at DT One Group',
      '⚡ Rolled out digital payments across Kenya, Uganda & Tanzania, boosting transaction speed by 15%',
      '🚀 Built booking system with Google Calendar at Andela, increasing room booking efficiency by 50%',
      '👥 Boosted Agile team velocity by 30% and Confluence documentation efficiency by 30%'
    ]
  },
  experience: {
    title: 'Career Progression:',
    items: [
      '• 2023 - Present: Technical Lead (Back Office Systems) @ Nation Media Group',
      '• 2022 - 2023: Senior Software Engineer @ DT One Group',
      '• 2020 - 2022: Software Engineer @ Nation Media Group',
      '• 2019 - 2020: Software Engineer Consultant @ Nation Media Group',
      '• 2018 - 2019: Software Engineer @ Andela Kenya'
    ]
  },
  projects: {
    title: 'Featured Production Architectures:',
    items: [
      '1. Nation Courier Automation System (Logistics dispatch & nearest-agent routing, $1M+ contracts)',
      '2. Cross-Border Claims & Payment Engine (Multi-country finance reconciliation with Zoho)',
      '3. Enterprise Distributor Management System (Direct SAP ERP integration, 80% bad debt cut)',
      '4. DT One Telecom Lending Microservices (MTN SA, Airtel Uganda, Blue Label Mozambique)'
    ]
  },
  contact: {
    title: 'Contact Channels:',
    items: [
      '📧 Email: michaelbasweti@gmail.com',
      '🔗 LinkedIn: linkedin.com/in/engineer-michael-basweti',
      '🌐 Portfolio: mbasweti.netlify.app',
      '🐙 GitHub: github.com/michael-basweti',
      '🟢 Status: Available for Technical Leadership, Distributed Systems Consulting & System Architecture Review.'
    ]
  }
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState(DEFAULT_HISTORY);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory(DEFAULT_HISTORY);
      setInputVal('');
      return;
    }

    if (cleanCmd === 'about') {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cleanCmd },
        { type: 'success', text: 'Navigating to About & Philosophy page...' }
      ]);
      setInputVal('');
      setTimeout(() => {
        navigate('/about');
      }, 600);
      return;
    }

    if (cleanCmd === 'sudo hire' || cleanCmd === 'hire') {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cleanCmd },
        {
          type: 'success',
          text: '🎉 STATUS 200: Hiring protocol initiated! Navigating to Contact hub...'
        }
      ]);
      setInputVal('');
      setTimeout(() => {
        navigate('/contact');
      }, 1000);
      return;
    }

    if (cleanCmd === 'projects' || cleanCmd === 'work') {
      const data = COMMANDS_MAP.projects;
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cleanCmd },
        { type: 'title', text: data.title },
        ...data.items.map((item) => ({ type: 'response', text: item })),
        { type: 'cyan', text: 'Tip: Check the "Work & Systems" tab for interactive screenshots!' }
      ]);
      setInputVal('');
      return;
    }

    if (COMMANDS_MAP[cleanCmd]) {
      const data = COMMANDS_MAP[cleanCmd];
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cleanCmd },
        { type: 'title', text: data.title },
        ...data.items.map((item) => ({ type: 'response', text: item }))
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: 'user', text: cleanCmd },
        {
          type: 'error',
          text: `Command not found: "${cleanCmd}". Type "help" for a list of valid commands.`
        }
      ]);
    }

    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="terminal-window" data-aos="fade-up">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
        </div>
        <div className="terminal-title">
          <FaTerminal className="me-1 text-cyan" /> basweti@nairobi-node-01: ~ (zsh)
        </div>
        <button
          onClick={() => setHistory(DEFAULT_HISTORY)}
          className="btn btn-sm text-secondary p-0"
          title="Clear console"
          style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        >
          <FaTrashAlt size={12} />
        </button>
      </div>

      <div className="terminal-body">
        {history.map((entry, index) => {
          if (entry.type === 'user') {
            return (
              <div key={index} className="terminal-line">
                <span className="terminal-prompt">basweti@systems:~$</span>{' '}
                <span className="terminal-cmd">{entry.text}</span>
              </div>
            );
          }
          if (entry.type === 'title') {
            return (
              <div key={index} className="terminal-highlight font-weight-bold mb-1">
                {entry.text}
              </div>
            );
          }
          if (entry.type === 'success') {
            return (
              <div key={index} className="terminal-success mb-1">
                {entry.text}
              </div>
            );
          }
          if (entry.type === 'cyan') {
            return (
              <div key={index} className="terminal-cyan mb-1 font-italic">
                {entry.text}
              </div>
            );
          }
          if (entry.type === 'error') {
            return (
              <div key={index} className="text-danger mb-1">
                {entry.text}
              </div>
            );
          }
          return (
            <div key={index} className="terminal-response">
              {entry.text}
            </div>
          );
        })}
        <div ref={terminalEndRef} />

        <form onSubmit={handleSubmit} className="terminal-form">
          <span className="terminal-prompt">basweti@systems:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help' or command..."
            autoFocus={false}
          />
          <button type="submit" style={{ display: 'none' }}>
            <FaPlay />
          </button>
        </form>
      </div>

      <div className="terminal-chips">
        <span className="text-muted small me-2">Quick run:</span>
        {['whoami', 'impact', 'stack', 'experience', 'projects', 'education', 'contact', 'sudo hire'].map(
          (cmd) => (
            <button
              key={cmd}
              type="button"
              className="terminal-chip"
              onClick={() => handleCommand(cmd)}
            >
              ${cmd}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
