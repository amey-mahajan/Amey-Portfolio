import SkillCard from "../components/SkillCard";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      description: "Languages I use to build logic and applications.",
      skills: [
        { name: "C", level: "Basic" },
        { name: "Python", level: "Basic" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" }
      ]
    },

    {
      title: "Frontend",
      icon: "🎨",
      description: "Technologies I use to create web interfaces.",
      skills: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "React.js", level: "Learning" }
      ]
    },

    {
      title: "Backend",
      icon: "⚙️",
      description: "Technologies I am learning for server-side development.",
      skills: [
        { name: "Java", level: "Intermediate" },
        { name: "JDBC", level: "Learning" },
        { name: "Servlet", level: "Learning" },
        { name: "JSP", level: "Learning" }
      ]
    },

    {
      title: "Databases",
      icon: "🗄️",
      description: "Databases I work with for storing application data.",
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "MongoDB", level: "Learning" }
      ]
    },

    {
      title: "Tools",
      icon: "🛠️",
      description: "Tools I use during development and project work.",
      skills: [
        { name: "Git", level: "Learning" }
      ]
    }
  ];

  return (
    <main className="skills-page">

      <section className="skills-section">

        {/* Heading */}
        <div className="section-heading">

          <p className="section-tag">
            ✦ MY SKILLS
          </p>

          <h1>
            Technologies I <span>Work With.</span>
          </h1>

          <p className="section-subtitle">
            A collection of programming languages, technologies,
            databases and tools I am learning and working with.
          </p>

        </div>


        {/* Skill Categories */}
        <div className="skills-grid">

          {skillCategories.map((category, index) => (

            <div
              className="skill-category"
              key={index}
            >

              <div className="category-header">

                <div className="category-icon">
                  {category.icon}
                </div>

                <div>
                  <h2>
                    {category.title}
                  </h2>

                  <p>
                    {category.description}
                  </p>
                </div>

              </div>


              <div className="skills-list">

                {category.skills.map((skill, skillIndex) => (

                  <SkillCard
                    key={skillIndex}
                    name={skill.name}
                    level={skill.level}
                  />

                ))}

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Message */}
        <div className="skills-footer">

          <span>🚀</span>

          <p>
            Currently expanding my skills through
            <strong> Full Stack Java training at QSpiders, Deccan, Pune.</strong>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Skills;