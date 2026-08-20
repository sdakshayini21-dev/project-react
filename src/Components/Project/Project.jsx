import { useState } from "react";
import "./Project.css";

function Projects() {

  const projects = [
    {
      id: 1,
      name: "Weather Project",
      image: "/weather2.webp",
      category: "web",
      description:
        "A weather forecast website showing temperature, rain chances, wind and hourly updates so users can plan their day.",
      tech: ["React", "API"]
    },

    {
      id: 2,
      name: "Modern AI growing Systems",
      image: "/flower.jpg",
      category: "web",
      description:
        "Modern AI growing systems are transforming the way plants are cultivated, offering precision and automation that traditional methods could not achieve.",tech:["React", "API"]
    },

    {
      id: 3,
      name: "AI and IoT are transforming agriculture",
      image: "/agriculture.webp",
      category: "web",
      description:
        "AI and IoT are revolutionizing agriculture by enabling precision farming, real-time monitoring, predictive analytics, and smarter supply chain management, improving productivity, sustainability, and profitability.", tech:["React", "API"]
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="projects-section"
    >

      <h2>My Projects</h2>

      <div className="filter-buttons">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>

      </div>

      <div className="project-grid">

        {filteredProjects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">

              <h3>
                {project.name}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">

                {project.tech.map((tech) => (

                  <span
                    className="tag"
                    key={tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;
