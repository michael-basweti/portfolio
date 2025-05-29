import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_4e7531f",      // Replace with your EmailJS service ID
        "template_35yn6wy",     // Replace with your EmailJS template ID
        formData,
        "zfNaY9ujSiDw6HrCL"       // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="container py-5 text-light">
      <div className="text-center mb-5">
        <h2 className="display-4">📬 Contact Me</h2>
        <p className="lead">Let's connect and collaborate! Reach out for projects, collaborations, or just to say hi.</p>
        <hr className="border border-3 opacity-75" />
      </div>

      <div className="row">
        <div className="col-md-5 mb-4">
          <div className="bg-dark p-4 rounded-4 shadow-lg">
            <h4 className="mb-4 text-theme" style={{ color: "#6A56FF" }}>Contact Details</h4>
            <p><FaEnvelope className="me-2" /> michaelbasweti@gmail.com.com</p>
            <p><FaPhoneAlt className="me-2" /> +254 701 981 241</p>
            <p><FaMapMarkerAlt className="me-2" /> Nairobi, Kenya</p>
            <div className="mt-4">
              <a href="https://www.linkedin.com/in/michael-basweti" className="btn btn-outline-light me-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
              <a href="https://github.com/michael-basweti" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">
                <FaGithub className="me-2" /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-7">
          <div className="bg-dark p-4 rounded-4 shadow-lg">
            <h4 className="mb-4 text-theme" style={{ color: "#6A56FF" }}>Send Me a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control bg-dark text-light"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control bg-dark text-light"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control bg-dark text-light"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: "#6A56FF", border: "none" }}>
                Send Message
              </button>
            </form>
            {status && <p className="mt-3 text-info">{status}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
