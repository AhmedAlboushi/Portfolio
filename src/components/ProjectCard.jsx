import "../css/ProjectCard.css";

function ProjectCard({ title, description, image, tech, status }) {
  return (
    <div className="project-card">
      <div className={`status ${status}`}>{status}</div>

      <div className="image">
        <img src={image || "/images/default.png"} alt={title} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tags">
        {tech.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <button className="btn">View Details</button>
    </div>
  );
}

export default ProjectCard;
