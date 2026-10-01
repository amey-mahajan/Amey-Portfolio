function ProjectCard({
  title,
  description,
  technologies,
  type,
  link
}) {
  return (
    <article className="project-card">

      <div className="project-top">

        <span className="project-type">
          {type}
        </span>

        <span className="project-arrow">
          ↗
        </span>

      </div>


      <h2>
        {title}
      </h2>


      <p>
        {description}
      </p>


      <div className="project-technologies">

        {technologies.map((technology, index) => (
          <span key={index}>
            {technology}
          </span>
        ))}

      </div>


      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          View Project
          <span>→</span>
        </a>
      )}

    </article>
  );
}

export default ProjectCard;