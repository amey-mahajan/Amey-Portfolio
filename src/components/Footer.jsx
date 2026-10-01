function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>
            AMEY
          </h2>

          <p>
            BCA Student • Full-Stack Developer
          </p>

          <span>
            Building, learning and growing one project at a time.
          </span>

        </div>


        {/* Quick Links */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/education">
            Education
          </a>

          <a href="/skills">
            Skills
          </a>

          <a href="/projects">
            Projects
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>


        {/* Contact */}

        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            📧 Mahajanamey26@gmail.com
          </p>

          <p>
            📱 7498543674
          </p>

          <p>
            📍 Pune, Maharashtra
          </p>

        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 Amey Prabhakar Mahajan. All rights reserved.
        </p>

        <span>
          Built with React ⚛️
        </span>

      </div>

    </footer>
  );
}

export default Footer;