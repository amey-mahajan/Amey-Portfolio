import ProjectCard from "../components/ProjectCard";

function Projects() {

  const projects = [
    {
      title: "AI-Powered Crop Health & Pest Monitoring",

      type: "AI & Agriculture Project",

      description:
        "An AI-powered agricultural monitoring system designed to analyze crop health, soil conditions and pest risks using multispectral and hyperspectral imaging along with sensor data.",

      technologies: [
        "AI",
        "Machine Learning",
        "Python",
        "Image Processing",
        "IoT",
        "Sensor Data"
      ],

      link: ""
    },


    {
      title: "Repair Shop Management System",

      type: "Java Web Application",

      description:
        "A management system designed to manage customer repair requests, device information, reported problems, technicians, estimated costs and repair status.",

      technologies: [
        "Java",
        "JDBC",
        "Servlet",
        "JSP",
        "MySQL"
      ],

      link: ""
    },


    {
      title: "ARK Fit Arena",

      type: "Gym Website",

      description:
        "A modern fitness and gym website designed to showcase gym facilities, workout programs, membership information, trainers and fitness services through an attractive and responsive interface.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design"
      ],

      link: ""
    }
  ];


  return (
    <main className="projects-page">

      <section className="projects-section">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-tag">
            ✦ MY WORK
          </p>

          <h1>
            Featured <span>Projects.</span>
          </h1>

          <p className="section-subtitle">
            A collection of projects I have built and explored
            across web development, Java and artificial intelligence.
          </p>

        </div>


        {/* Project Grid */}

        <div className="projects-grid">

          {projects.map((project, index) => (

            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              type={project.type}
              link={project.link}
            />

          ))}

        </div>


        {/* Bottom message */}

        <div className="projects-footer">

          <span>🚀</span>

          <p>
            Building projects, learning new technologies and
            turning ideas into useful digital experiences.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Projects;