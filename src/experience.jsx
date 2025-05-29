// src/components/Experience.js

import React from "react";
import { FaFileDownload } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Nation Media Group",
      location: "Nairobi, Kenya",
      title: "Lead Software Engineer (Back Office Systems)",
      period: "03/2023 - Current",
      responsibilities: [
        "Meeting with stakeholders and discussing new digital technologies and improvements",
        "Working and leading software development within the East African Region where the company operates",
        "Bringing together Developers in NMG's three East African Offices – Nairobi, Kampala, and Dar es Salaam to brainstorm solutions and collaborate on technologies",
        "Rolled out a payments system for the finance department in Kenya, Uganda, and Tanzania",
        "Finished rolling out NMG courier system in the East African Region while brokering contracts with companies like Airtel, D Light, and The Aga Khan Foundation",
        "Participated in the company's overall policy-making as part of the Innovative War Game team in NMG",
        "Scrum master in my team, maintaining the Jira board and organizing the scrum ceremonies",
        "Leading in-house implementations using Microsoft's Graph API",
        "Using Express and Django REST Framework (DRF)",
        "Payments integration with Zoho",
        "Guiding data engineers within the organization on best engineering practices and upskilling their SQL skills",
        "Redesigning current systems to scale with the growing customer base",
        "Assisting the Cyber Security team to diagnose attacks",
        "Performing DevOps tasks for the Data Team on AWS and GitHub",
        "Introduced Jira Confluence in the company for better documentation",
        "Overseeing the department's day-to-day running on behalf of the Head of Department",
      ],
    },
    {
      company: "DTOne Group",
      location: "Nairobi, Kenya",
      title: "Senior Software Engineer",
      period: "05/2022 - 02/2023",
      responsibilities: [
        "Worked as a backend engineer offering lending solutions to various telco companies across Africa and Asia",
        "Developed lending data, airtime, and voice via SMS for MTN South Africa",
        "Built SMS Scheduling for Blue Label – Mozambique",
        "Configured USSD for MTN Guinea Conakry",
        "Implemented Airtime lending to Airtel Uganda",
        "Contributed to the development of CCI (Customer Care Interface) used by agents to solve telco subscribers' payment problems (built with Clojure and React)",
        "Spearheaded Agile methodology during its early days of inception at the company",
        "Utilized Clojure and Java as main backend languages",
      ],
    },
    {
      company: "Nation Media Group",
      location: "Nairobi, Kenya",
      title: "Software Engineer",
      period: "03/2020 - 04/2022",
      responsibilities: [
        "Distributed DMS to Nation Media distributors countrywide",
        "Worked on Nation Courier automation system as the principal engineer, using Python, JavaScript, React, React Native, and REST APIs",
        "Developed REST APIs with PostgreSQL database and built web and mobile interfaces",
        "Oversaw system design, training of users, and system documentation",
        "Maintained and added new features to DMS, performing software maintenance",
        "Provided recommendations on hardware and software for optimal performance",
        "Set up stakeholder meetings for progress updates",
      ],
    },
    {
      company: "Nation Media Group",
      location: "Nairobi, Kenya",
      title: "Software Engineer Consultant",
      period: "09/2019 - 02/2020",
      responsibilities: [
        "Developed Distributor Management System using Django and JavaScript/jQuery",
        "Integrated with in-house SAP system",
        "Performed software demos for clients, highlighting DMS strengths",
        "Generated reports and hosted the system on AWS",
        "Performed testing, implemented Git version control, and wrote SQL scripts for data migration",
        "Maintained and rolled out the system to different distributors",
        "Trained users, engaged with stakeholders, and developed reports for analysis",
      ],
    },
    {
      company: "Andela Kenya",
      location: "Nairobi, Kenya",
      title: "Software Engineer",
      period: "09/2018 - 09/2019",
      responsibilities: [
        "Built Converge – a resource booking software with Google Calendar integration (Python, GraphQL, React)",
        "Developed a push notification microservice for Google Calendar changes",
        "Worked on Authors Haven – a Medium-like application for Andelans to share informative articles (Django Rest Framework, React)",
      ],
    },
  ];

  return (
    <div data-aos="zoom-in" className="container p-3">
      <h2 className="text-center display-3">💼 Work Experience</h2>
      <div className="d-flex justify-content-end">
        <a
          href="/BM_CV.pdf"
          download
          className="btn btn-outline-light mt-3 d-inline-flex align-items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload className="me-2" /> Download My CV
        </a>
      </div>

      <hr className="border border-3 opacity-75" />
      {experiences.map((exp, index) => (
        <div className="card mb-4 bg-dark text-white" key={index}>
          <div
            className="card-header bg-dark text-white"
            style={{ borderColor: "#6A56FF" }}
          >
            <h5 style={{ color: "#6A56FF", marginBottom: "0" }}>
              {exp.title} @ {exp.company}
            </h5>
            <small>
              {exp.location} | {exp.period}
            </small>
          </div>
          <div className="card-body">
            <ul className="mb-0">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
