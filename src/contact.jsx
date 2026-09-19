import React, { useState, useEffect } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaComments,
  FaCheckCircle
} from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Contact = () => {
  const email = 'michaelbasweti@gmail.com';
  const [copied, setCopied] = useState(false);
  const [nairobiTime, setNairobiTime] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Consulting & Architecture',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);

      // Construct mailto link as fallback
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.topic} from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <div className="section-wrapper py-5">
      <div className="container">
        {/* Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-badge">Get In Touch</span>
          <h1 className="section-title text-gradient">Let’s Architect Something Impactful</h1>
          <p className="section-lead">
            Available for technical leadership roles, distributed systems consulting, and high-impact enterprise engineering initiatives.
          </p>
        </div>

        <div className="row g-4" data-aos="fade-up">
          {/* Left Column: Direct Info & Timezone */}
          <div className="col-lg-5 col-12">
            <div className="contact-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-white mb-3 font-weight-bold">Direct Channels</h4>
                <p className="text-secondary small mb-4" style={{ lineHeight: '1.65' }}>
                  Whether you’re scaling a backend engineering team, reviewing high-concurrency architectures, or exploring a new technical engagement, I’d love to connect.
                </p>

                {/* Email Item with 1-click Copy */}
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <span className="text-muted small d-block font-mono" style={{ fontSize: '0.72rem' }}>EMAIL ADDRESS</span>
                    <a
                      href={`mailto:${email}`}
                      className="text-white font-mono small text-truncate d-block text-decoration-none hover-cyan mb-1"
                    >
                      {email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="btn btn-sm py-1 px-2 d-inline-flex align-items-center gap-1 font-mono"
                      style={{
                        fontSize: '0.72rem',
                        background: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${copied ? '#10b981' : 'var(--border-subtle)'}`,
                        color: copied ? '#34d399' : '#cbd5e1',
                      }}
                    >
                      {copied ? <FaCheck size={11} /> : <FaCopy size={11} />}
                      {copied ? 'Copied to clipboard!' : 'Copy email'}
                    </button>
                  </div>
                </div>

                {/* Live Nairobi Time & Location */}
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper" style={{ background: 'rgba(6, 182, 212, 0.15)', borderColor: 'rgba(6, 182, 212, 0.3)', color: '#38bdf8' }}>
                    <FaClock size={20} />
                  </div>
                  <div>
                    <span className="text-muted small d-block font-mono" style={{ fontSize: '0.72rem' }}>LOCATION & TIMEZONE</span>
                    <div className="text-white font-weight-bold small d-flex align-items-center gap-1 mb-1">
                      <FaMapMarkerAlt className="text-danger" /> Nairobi, Kenya (EAT, UTC+3)
                    </div>
                    <div className="text-cyan font-mono small">
                      Live local time: <strong>{nairobiTime || 'Calculating...'}</strong>
                    </div>
                  </div>
                </div>

                {/* Social Networks */}
                <div className="contact-info-item">
                  <div className="contact-icon-wrapper" style={{ background: 'rgba(139, 92, 246, 0.15)', borderColor: 'rgba(139, 92, 246, 0.3)', color: '#a78bfa' }}>
                    <FaComments size={20} />
                  </div>
                  <div className="d-flex flex-column gap-1">
                    <span className="text-muted small d-block font-mono" style={{ fontSize: '0.72rem' }}>PROFESSIONAL NETWORKS</span>
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      <a
                        href="https://linkedin.com/in/engineer-michael-basweti"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1 font-mono"
                        style={{ fontSize: '0.75rem' }}
                      >
                        <FaLinkedin className="text-primary" /> LinkedIn <FiExternalLink size={10} />
                      </a>
                      <a
                        href="https://github.com/michael-basweti"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-light d-inline-flex align-items-center gap-1 font-mono"
                        style={{ fontSize: '0.75rem' }}
                      >
                        <FaGithub /> GitHub <FiExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Engagement Status */}
              <div className="mt-4 pt-3 border-top border-secondary">
                <div className="d-flex align-items-center gap-2 text-emerald small font-mono">
                  <span className="status-dot"></span>
                  <span>Currently available for select leadership & advisory roles</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="col-lg-7 col-12">
            <div className="contact-card">
              <h4 className="text-white mb-2 font-weight-bold">Send a Message</h4>
              <p className="text-secondary small mb-4">
                Fill out the form below to start a conversation or request a technical consultation.
              </p>

              {formSubmitted ? (
                <div className="p-4 rounded-3 text-center my-4" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                  <FaCheckCircle className="text-emerald mb-3" size={42} />
                  <h5 className="text-white font-weight-bold mb-2">Message Initiated!</h5>
                  <p className="text-secondary small mb-3">
                    Thank you for reaching out, <strong>{formData.name}</strong>. Your default email client has been prepared with your inquiry.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'Consulting & Architecture', message: '' });
                    }}
                    className="btn btn-sm btn-outline-light rounded-pill px-3"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6 col-12">
                      <label className="form-label-modern font-mono">YOUR NAME *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-control-modern"
                        placeholder="e.g. Jane Doe"
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="col-md-6 col-12">
                      <label className="form-label-modern font-mono">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-control-modern"
                        placeholder="e.g. jane@company.com"
                        value={formData.email}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label-modern font-mono">TOPIC / ENGAGEMENT TYPE</label>
                      <select
                        name="topic"
                        className="form-control-modern"
                        value={formData.topic}
                        onChange={handleFormChange}
                        style={{ cursor: 'pointer' }}
                      >
                        <option value="Senior Engineering Leadership">Senior Engineering Leadership / Full-Time Role</option>
                        <option value="Distributed Systems Consulting">Distributed Systems / Backend Consulting</option>
                        <option value="System Architecture Review">System Architecture & Scalability Review</option>
                        <option value="Enterprise ERP & API Integration">SAP ERP / Fintech Integration Advisory</option>
                        <option value="General Collaboration">General Collaboration & Mentorship</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label-modern font-mono">MESSAGE *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="form-control-modern"
                        placeholder="Describe your engineering project, timeline, or discussion topics..."
                        value={formData.message}
                        onChange={handleFormChange}
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-modern-primary py-3 px-4 w-100 justify-content-center"
                      >
                        {loading ? (
                          <span>Preparing inquiry...</span>
                        ) : (
                          <>
                            <FaPaperPlane /> Send Inquiry to Michael
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;