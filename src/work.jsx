import React, { useState } from "react";
import Modal from "react-modal";
import { FaFileDownload, FaImages } from "react-icons/fa";
import { ImPrevious2 } from "react-icons/im";
import { ImNext2 } from "react-icons/im";
import CASE1 from "./assets/case1.jpg";
import CASE2 from "./assets/case2.jpg";
import CASE3 from "./assets/case3.jpg";
import CASE4 from "./assets/case4.jpg";
import CASE5 from "./assets/case5.jpg";
import CLAIM1 from "./assets/claim1.jpg";
import CLAIM2 from "./assets/claim2.jpg";
import CLAIM3 from "./assets/claim3.jpg";
import CLAIM4 from "./assets/claim4.jpg";
import CLAIM5 from "./assets/claim5.jpg";
import CLAIM6 from "./assets/claim6.jpg";
import CLAIM7 from "./assets/claim7.jpg";
import DMS1 from "./assets/dms1.jpg";
import DMS2 from "./assets/dms2.jpg";
import DMS3 from "./assets/dms3.jpg";
import DMS4 from "./assets/dms4.jpg";
import NATION_COURIER_DASH from "./assets/nation_courier_dash.jpg";
import NATION_COURIER_HOME_PAGE from "./assets/nation_courier_home_page.jpg";
import NEAREST_AGENT from "./assets/nearest_agent.jpg";

// Set the app element for accessibility
Modal.setAppElement("#root");

const WorkPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "NATION COURIER SYSTEM",
      description:
        "Built and deployed the courier system used across East Africa, partnering with major organizations like Airtel, D Light, and The Aga Khan Foundation.",
      image: NATION_COURIER_DASH,
      images: [NATION_COURIER_DASH, NATION_COURIER_HOME_PAGE, NEAREST_AGENT],
    },
    {
      title: "NMG CLAIMS SYSTEM",
      description:
        "Rolled out a robust payment system across Kenya, Uganda, and Tanzania for the finance department at Nation Media Group.",
      image: CLAIM4,
      images: [CLAIM4, CLAIM5, CLAIM6, CLAIM7, CLAIM1, CLAIM2, CLAIM3],
    },
    {
      title: "NMG LEGAL SYSTEM",
      description:
        "Developed a comprehensive legal case management system for Nation Media Group, streamlining legal processes and documentation.",
      image: CASE2,
      images: [CASE2, CASE3, CASE4, CASE5, CASE1],
    },
    {
      title: "NMG DISTRIBUTOR MANAGEMENT SYSTEM",
      description:
        "Developed and rolled out DMS to Nation Media Group newspaper distributors countrywide, enhancing operational efficiency and communication.",
      image: DMS2,
      images: [DMS2, DMS3, DMS4, DMS1],
    },
  ];

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
      zIndex: 1050,
    },
    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      maxWidth: "90vw",
      width: "100%",
      maxHeight: "90vh",
      overflow: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000", // Optional: match your dark theme
      border: "none",
      padding: 0,
    },
  };

  return (
    <div data-aos="zoom-in" className="container text-light py-5">
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="display-3 text-light mb-1">🛠️ My Work</h2>
          <div className="d-flex justify-content-end">
        <a
          href="/BM_CV.pdf"
          download
          className="btn btn-outline-light mt-3 d-inline-flex align-items-center m-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload className="me-2" /> Download My CV
        </a>

        <a
          href="/BM_CV_SHORTER_VERSION.pdf"
          download
          className="btn btn-outline-light mt-3 d-inline-flex align-items-center m-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload className="me-2" /> Download My CV(SHORTER VERSION)
        </a>
      </div>
          <hr className="border border-3 opacity-75" />
          <p className="lead">
            A glimpse into the systems I've built and the impact I've made
            across industries.
          </p>
        </div>

        <div>
          <h3 className="text-light mb-3">
            <FaImages className="me-2" />
            Projects Gallery
          </h3>
          <div className="row">
            {projects.map((project, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card bg-dark text-light h-100">
                  <div
                    className="card-header bg-dark text-white border-3"
                    style={{ borderColor: "#ffffff" }}
                  >
                    <h4 className="card-title color-theme">{project.title}</h4>
                  </div>
                  <img
                    src={project.image}
                    className="card-img-top mt-3"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <p className="card-text">{project.description}</p>
                    <button
                      className="btn btn-outline-light mt-2"
                      onClick={() => setSelectedProject(project)}
                    >
                      View More Screenshots
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* React Modal */}
        <Modal
          isOpen={!!selectedProject}
          onRequestClose={() => setSelectedProject(null)}
          className="modal-dialog modal-lg modal-dialog-centered"
          style={customStyles}
        >
          <div className="modal-content p-3 bg-dark text-light">
            <div className="modal-header">
              <h5 className="modal-title mb-1">
                {selectedProject?.title} - Screenshots
              </h5>
              <button
                className="btn-close btn-close-white"
                onClick={() => setSelectedProject(null)}
              ></button>
            </div>
            <hr className="border mt-0 border-3 opacity-75" />
            <div className="modal-body">
              {selectedProject && selectedProject.images.length > 0 && (
                <div id="carouselScreenshots" className="carousel slide">
                  <div className="carousel-inner">
                    {selectedProject.images.map((img, idx) => (
                      <div
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                        key={idx}
                      >
                        <img
                          src={img}
                          className="img-fluid rounded mx-auto d-block"
                          alt={`Screenshot ${idx + 1}`}
                          style={{ maxHeight: "60vh", objectFit: "contain" }}
                        />
                      </div>
                    ))}
                  </div>
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselScreenshots"
                        data-bs-slide="prev"
                      >
                        <span className="custom-carousel-icon">
                          <ImPrevious2 size={30} />
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </button>

                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselScreenshots"
                        data-bs-slide="next"
                      >
                        <span className="custom-carousel-icon">
                          <ImNext2 size={30} />
                        </span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
            <div className="modal-footer mt-3">
              <button
                className="btn btn-outline-light"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default WorkPage;
