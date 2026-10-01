function Home() {
  return (
    <main className="home">

      {/* Background decorative glow */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>
      <div className="hero-glow hero-glow-three"></div>

      <section className="hero">

        {/* Small introduction */}
        <p className="hero-intro">
          ✦ WELCOME TO MY PORTFOLIO
        </p>

        {/* Main heading */}
        <h1>
          Hi, I'm <span>Amey Mahajan</span>
        </h1>

        {/* Role */}
        <h2>
          BCA Student <b>•</b> Full-Stack Developer
        </h2>

        {/* Description */}
        <p className="hero-description">
          I build modern web applications and enjoy turning
          ideas into useful digital experiences.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="/projects" className="hero-btn primary-btn">
            View My Projects
            <span>→</span>
          </a>

          <a href="/contact" className="hero-btn secondary-btn">
            Contact Me
          </a>

        </div>

        {/* Technology badges */}
        <div className="tech-stack">

          <div className="tech-badge">
            <span>☕</span>
            Java
          </div>

          <div className="tech-badge">
            <span>⚛</span>
            React
          </div>

          <div className="tech-badge">
            <span>◉</span>
            MySQL
          </div>

          <div className="tech-badge">
            <span>JS</span>
            JavaScript
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>

      </section>

    </main>
  );
}

export default Home;