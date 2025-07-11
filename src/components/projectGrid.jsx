import {Github, ExternalLink, Tag} from "lucide-react";
import AnimatedSection from "../utils/animatedSection";
import "./projectGrid.css";
import img1 from "../assets/projects/artboard1.jpg";
import img2 from "../assets/projects/artboard2.jpg";
import img3 from "../assets/projects/artboard3.jpg";
import img4 from "../assets/projects/artboard4.jpg";

const projects = [
  {
    title: "Book Keeper",
    image: img1,
    description:
      "Inventory management system for small businesses with local data storage.",
    tech: ["ReactJS", "TailwindCSS"],
    github: "https://github.com/manishborah151/BookKeeper",
    lable1: "Github",
    demo: "https://manishborah151.github.io/BookKeeper/",
  },
  {
    title: "Ravi Pratap Singh Studio",
    badge: (
      <span
        style={{
          borderRadius: "2rem",
          backgroundColor: "var(--info)",
          padding: "0 6px",
        }}
      >
        <Tag size={10} style={{paddingRight: "4px"}} />
        Client
      </span>
    ),
    image: img2,
    description:
      "Ravi Pratap Singh Studio is a fashion and lifestyle brand landing and shop page",
    tech: ["ReactJS", "MangoDB", "ExpressJS", "NodeJs", "Material UI"],
    github: "https://github.com/manishborah151/",
    demo: "https://www.ravipratapsingh.co.in/",
  },
  {
    title: "WeatherApp",
    image: img3,
    description:
      "Weather forecasting app using OpenWeatherMap API and real-time chart display.",
    tech: ["React", "Material UI", "Chart.js"],
    github: "https://github.com/manishborah151/",
    lable1: "Github",
    demo: "https://github.com/manishborah151/",
  },
  {
    title: "WeatherApp",
    image: img4,
    description:
      "Weather forecasting app using OpenWeatherMap API and real-time chart display.",
    tech: ["React", "Material UI", "Chart.js"],
    github: "https://github.com/manishborah151/",
    lable1: "Github",
    demo: "https://github.com/manishborah151/",
  },
];

export default function ProjectSection() {
  return (
    <div className={"projects-grid"}>
      {projects.map((project, index) => (
        <AnimatedSection>
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <div className="head-text">
                <h3>{project.title}</h3>
                <span>{project.badge}</span>
              </div>
              <p>{project.description}</p>
              <div className="project-btns">
                <ul className="tech-stack">
                  {project.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={15} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
