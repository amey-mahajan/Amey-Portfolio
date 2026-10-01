function SkillCard({ name, level }) {
  return (
    <div className="skill-card">

      <div className="skill-card-top">

        <h3>
          {name}
        </h3>

        <span className={`skill-level ${level.toLowerCase()}`}>
          {level}
        </span>

      </div>

      <div className="skill-progress">

        <div
          className={`skill-progress-fill ${level.toLowerCase()}`}
        ></div>

      </div>

    </div>
  );
}

export default SkillCard;