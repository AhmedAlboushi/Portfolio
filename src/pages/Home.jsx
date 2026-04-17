import "../css/Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <p className="subtitle">Backend Developer</p>

      <h1 className="home-title">
        Building scalable systems with <span>C#</span> & ASP.NET Core
      </h1>

      <p className="desc">
        I’m a backend-focused developer specializing in designing and building
        RESTful APIs, database-driven applications, and clean server-side
        architectures using .NET technologies.
      </p>

      <div className="buttons">
        <a href="#projects" className="btn">
          View Projects
        </a>
        <a href="#contact" className="btn secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
