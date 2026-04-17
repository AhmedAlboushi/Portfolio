import { useState, useEffect } from "react";
import "../css/ProjectDetails.css";

function ProjectDetails({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) return null;

  const images = project.images?.length
    ? project.images
    : ["/images/default.png"];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-exit" onClick={onClose}>
        ×
      </button>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* GALLERY */}
        <div className="gallery">
          {/* MAIN IMAGE */}
          <div className="main-image">
            <img src={images[activeIndex]} alt={project.title} />
          </div>

          {/* THUMBNAILS SIDE */}
          <div className="thumbs">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className={i === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(i)}
                alt=""
              />
            ))}
          </div>
        </div>

        {/* TITLE */}
        <h2 className="modal-title">{project.title}</h2>

        {/* DESCRIPTION */}
        <p className="modal-description">{project.description}</p>
        <div className="features">
          {project.features &&
            Object.entries(project.features).map(([section, items]) => (
              <div key={section} className="feature-section">
                <h3>{section}</h3>

                <ul>
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        {/* TECH */}
        <div className="modal-tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
