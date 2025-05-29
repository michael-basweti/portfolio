// src/components/Skills.js
import React from "react";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiReact } from "react-icons/si";
// import { SiAmazonaws } from 'react-icons/si';
import { SiAngular } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGit } from "react-icons/si";
// import { SiJava } from 'react-icons/si';
import { SiPhp } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiClojure } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiConfluence } from "react-icons/si";
import { SiSap } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const skills = [
  { name: "Angular", icon: SiAngular },
  { name: "API Design", icon: FiSettings },
  { name: "API Development", icon: FiSettings },
  { name: "AWS", icon: FaAws },
  { name: "Clojure", icon: SiClojure },
  { name: "DevOps", icon: FiSettings },
  { name: "Django", icon: SiDjango },
  { name: "Express JS", icon: SiNodedotjs },
  { name: "Flask", icon: SiFlask },
  { name: "Git", icon: SiGit },
  { name: "Github", icon: SiGithub },
  { name: "Graphql", icon: SiGraphql },
  { name: "Java", icon: FaJava },
  { name: "Javascript", icon: SiJavascript },
  { name: "Jquery", icon: FiSettings },
  { name: "Laravel", icon: SiLaravel },
  { name: "Microservices", icon: FiSettings },
  { name: "Mysql", icon: SiMysql },
  { name: "Nosql", icon: SiMongodb },
  { name: "PHP", icon: SiPhp },
  { name: "Postgresql", icon: SiPostgresql },
  { name: "Push Notifications", icon: FiSettings },
  { name: "Python", icon: SiPython },
  { name: "React", icon: FaReact },
  { name: "React Native", icon: SiReact },
  { name: "Rest", icon: FiSettings },
  { name: "Rest API", icon: FiSettings },
  { name: "SAP", icon: SiSap },
  { name: "SAP System", icon: SiSap },
  { name: "SQL", icon: FiSettings },
  { name: "Kafka", icon: SiApachekafka },
];

const other_skills = [
  { name: "Problem Solving", icon: FiSettings },
  { name: "Team Leadership", icon: FiSettings },
  { name: "Communication", icon: FiSettings },
  { name: "Collaboration", icon: FiSettings },
  { name: "Adaptability", icon: FiSettings },
  { name: "Time Management", icon: FiSettings },
  { name: "Critical Thinking", icon: FiSettings },
  { name: "Scrum", icon: FiSettings },
  { name: "Scrum Master", icon: FiSettings },
  { name: "Agile", icon: FiSettings },
  { name: "Agile Methodology", icon: FiSettings },
  { name: "Jira", icon: SiJira },
  { name: "Confluence", icon: SiConfluence },
];

const Skills = () => {
  return (
    <div className="container bg-dark my-5 p-3">
      <h2 className="text-center display-4 mb-4">Development Skills</h2>
      <hr className="border border-6 opacity-75" />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <skill.icon size={28} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center display-4 mb-4 mt-4">Other Skills</h2>
      <hr className="border border-6 opacity-75" />
      <div className="skills-grid">
        {other_skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <skill.icon size={28} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
