import React, { useState } from "react";
import "./Card.css";

export default function Card({ logo, subHeading, description }) {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className="card-container">
      <div className="icon">
        <img src={logo} alt={subHeading} />
      </div>
      <h4 className="mb-8">{subHeading}</h4>
      <p className={`card-text mb-8 ${expanded ? "expanded" : ""}`}>
        {description}
      </p>
      <div className="mb-16">
        <p>
          <span className="see-more" onClick={toggleText}>
            {expanded ? "See less" : "See more"}
          </span>
        </p>
      </div>
    </div>
  );
}
