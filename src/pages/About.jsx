function About() {
  return (
    <main className="about-page">

      <section className="about-section">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-tag">✦ ABOUT ME</p>

          <h1>
            A little <span>about me.</span>
          </h1>

          <p className="section-subtitle">
            Get to know the person behind the code.
          </p>
        </div>


        {/* About Content */}
        <div className="about-container">

          {/* Left Side */}
          <div className="about-card about-intro-card">

            <div className="profile-circle">
              AM
            </div>

            <h2>
              Hi, I'm <span>Amey Mahajan</span>
            </h2>

            <p className="about-role">
              BCA Student • Full-Stack Developer
            </p>

            <p>
              I'm a BCA student who enjoys learning how modern
              applications are designed and developed. I like
              experimenting with technologies and turning ideas
              into functional projects.
            </p>

            <p>
              My current focus is on strengthening my skills in
              Java, React, JavaScript, JDBC, Servlets, JSP and
              MySQL while building practical projects.
            </p>

          </div>


          {/* Right Side */}
          <div className="about-details">

            <div className="info-card">
              <div className="info-icon">🎓</div>

              <div>
                <h3>Education</h3>

                <p>
                  Bachelor of Computer Applications (BCA)
                </p>

                <small>
                  Computer Science & Applications
                </small>
              </div>
            </div>


            <div className="info-card">
              <div className="info-icon">💻</div>

              <div>
                <h3>Currently Learning</h3>

                <p>
                  Full-Stack Java Development
                </p>

                <small>
                  Java • JDBC • Servlet • JSP • React
                </small>
              </div>
            </div>


            <div className="info-card">
              <div className="info-icon">🚀</div>

              <div>
                <h3>What I Like</h3>

                <p>
                  Building useful & creative applications
                </p>

                <small>
                  Learn → Build → Improve
                </small>
              </div>
            </div>


            <div className="info-card">
              <div className="info-icon">🎯</div>

              <div>
                <h3>My Goal</h3>

                <p>
                  Become a skilled full-stack developer
                </p>

                <small>
                  One project at a time.
                </small>
              </div>
            </div>

          </div>

        </div>


        {/* Bottom Stats */}
        <div className="about-stats">

          <div className="stat">
            <strong>01+</strong>
            <span>Years Learning</span>
          </div>

          <div className="stat">
            <strong>05+</strong>
            <span>Technologies</span>
          </div>

          <div className="stat">
            <strong>10+</strong>
            <span>Projects & Assignments</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>Things To Learn</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;