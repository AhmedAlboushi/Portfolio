import "../css/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        {/* INTRO */}
        <div className="about-intro">
          <h2 className="about-name">Ahmed Alboushi</h2>

          <p className="about-summary">
            21 • Based in Turkey • Computer Science Student (Graduating Soon)
          </p>
          <p className="about-languages">
            Languages: Arabic • English • Turkish
          </p>
          <p className="about-experience">2+ Years Experience</p>
        </div>

        {/* ABOUT */}
        <div className="about-block">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I started my programming journey with C++, where I built a strong
            foundation in core programming concepts before transitioning into C#
            and the .NET ecosystem.
          </p>

          <p className="about-text">
            I focus on backend development, building RESTful APIs and working
            with databases such as SQL Server and PostgreSQL. I have also
            developed desktop applications using Windows Forms.
          </p>

          <p className="about-text">
            Over the past two years, I have been continuously improving my
            skills by building real-world projects and learning best practices
            in software development.
          </p>
        </div>

        {/* TECH */}
        <div className="about-block">
          <h2 className="about-title">Tech Stack</h2>

          <div className="tech-grid">
            <span>C#</span>
            <span>ASP.NET Core</span>
            <span>SQL Server</span>
            <span>PostgreSQL</span>
            <span>WinForms</span>
            <span>C++</span>
          </div>
        </div>

        {/* GOALS */}
        <div className="about-block">
          <h2 className="about-title">Current Goals</h2>

          <ul className="goals-list">
            <li>Write cleaner, more maintainable backend code</li>
            <li>Build APIs more efficiently with solid architecture</li>
            <li>Learn new technologies and improve system design skills</li>
            <li>Explore integrating AI into real-world applications</li>
            <li>
              Improve my frontend fundamentals (HTML, CSS, JavaScript/React) to
              build full-stack applications
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
