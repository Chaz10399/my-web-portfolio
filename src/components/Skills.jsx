import "./Styles/Skills.css";
export default function Skills() {
  const skills = [
    { skill: "JavaScript", percent: 85 },
    { skill: "HTML", percent: 90 },
    { skill: "CSS", percent: 90 },
    { skill: "React", percent: 85 },
    { skill: "MySQL", percent: 75 },
    { skill: "Java", percent: 70 },
    { skill: "PHP", percent: 65 },
    { skill: "Python", percent: 60 },
  ];
  return (
    <section className="col" id="skills">
      <div className="skills-title mb-24">
        <h2>Skills</h2>
      </div>
      <div className="skill-set">
        {skills.map((item, index) => (
          <h4 key={index}>
            <div>{item.skill}</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.percent}%` }}
              ></div>
              <span>{item.percent}%</span>
            </div>
          </h4>
        ))}
      </div>
    </section>
  );
}
