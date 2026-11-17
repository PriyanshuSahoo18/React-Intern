
import React from "react";

function ProfileCard({
  name,
  title,
  company,
  avatar,
  skills,
  openToWork,
  theme,
  badgeText
}) {
  return (
    <div className={`profile-card ${theme}`}>
      <div className="card-header">
        <img src={avatar} alt={name} className="avatar" />

        {openToWork && (
          <span className="badge">{badgeText}</span>
        )}
      </div>

      <div className="card-content">
        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p className="company">{company}</p>

        <div className="skills">
          {skills.map((skill, index) => (
            <span className="skill" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;