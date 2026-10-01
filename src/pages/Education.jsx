function Education() {
  return (
    <main className="education-page">

      <section className="education-section">

        {/* Heading */}
        <div className="section-heading">
          <p className="section-tag">✦ MY JOURNEY</p>

          <h1>
            My <span>Education.</span>
          </h1>

          <p className="section-subtitle">
            My academic journey and the skills I am building along the way.
          </p>
        </div>


        {/* Education Timeline */}
        <div className="education-timeline">

          {/* BCA */}
          <div className="education-item">

            <div className="timeline-dot">
              🎓
            </div>

            <div className="education-card">

              <div className="education-year">
                2024 — Present
              </div>

              <h2>
                Bachelor of Computer Applications
              </h2>

              <h3>
                Progressive Education Society's Modern College of Arts,
                Science & Commerce, Ganeshkhind, Pune
              </h3>

              <p>
                Currently pursuing my BCA degree with a focus on
                programming, web development, databases and software
                development.
              </p>

              <div className="education-tags">
                <span>Programming</span>
                <span>Web Development</span>
                <span>Database</span>
              </div>

            </div>

          </div>


          {/* 12th */}
          <div className="education-item">

            <div className="timeline-dot">
              📚
            </div>

            <div className="education-card">

              <div className="education-year">
                Higher Secondary Education
              </div>

              <h2>
                12th Standard
              </h2>

              <h3>
                Gadgebaba Uccha Madhyamik Vidyalaya,
                Dahigaon (Gawande), Ta. & Dist. Akola
              </h3>

              <p>
                Completed my higher secondary education and developed
                an interest in computers, technology and programming.
              </p>

              <div className="education-tags">
                <span>Higher Secondary</span>
                <span>Computer</span>
                <span>Mathematics</span>
              </div>

            </div>

          </div>


          {/* School */}
          <div className="education-item">

            <div className="timeline-dot">
              🏫
            </div>

            <div className="education-card">

              <div className="education-year">
                Secondary Education
              </div>

              <h2>
                School Education
              </h2>

              <h3>
                Holy Cross Convent High School, Akola
              </h3>

              <p>
                Completed my school education at Holy Cross Convent
                High School, Akola, where I built the foundation of
                my academic journey.
              </p>

              <div className="education-tags">
                <span>School Education</span>
                <span>Learning</span>
                <span>Problem Solving</span>
              </div>

            </div>

          </div>


          {/* QSpiders */}
          <div className="education-item">

            <div className="timeline-dot">
              💻
            </div>

            <div className="education-card">

              <div className="education-year">
                Currently Learning
              </div>

              <h2>
                Full Stack Java Programming
              </h2>

              <h3>
                QSpiders, Deccan, Pune
              </h3>

              <p>
                Currently learning Full Stack Java Programming at
                QSpiders, Deccan, Pune, with practical training in
                Java, JDBC, Servlets, JSP, SQL and web development.
              </p>

              <div className="education-tags">
                <span>Core Java</span>
                <span>JDBC</span>
                <span>Servlet</span>
                <span>JSP</span>
                <span>SQL</span>
              </div>

            </div>

          </div>

        </div>


        {/* Learning Statement */}
        <div className="learning-box">

          <div className="learning-icon">
            🚀
          </div>

          <div>
            <h2>
              Always learning. Always building.
            </h2>

            <p>
              Along with my BCA degree, I am developing practical
              full-stack development skills through hands-on training
              and projects.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Education;