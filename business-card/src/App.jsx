// src/App.jsx

import React from "react";
import ProfileCard from "./Components/ProfileCard.jsx";
import "./App.css";

function App() {

  const profiles = [
    {
      id: 1,
      name: "Priyanshu Sahoo",
      title: "React Developer",
      company: "ABC Technologies",
      avatar: "https://i.pravatar.cc/150?img=12",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      openToWork: true,
      badgeText: "Open to work",
      theme: "light"
    },
    {
      id: 2,
      name: "Rahul Sharma",
      title: "Java Developer",
      company: "XYZ Solutions",
      avatar: "https://i.pravatar.cc/150?img=13",
      skills: ["Java", "Spring Boot", "MySQL"],
      openToWork: false,
      badgeText: "Open to work",
      theme: "dark"
    },
    {
      id: 3,
      name: "Aman Kumar",
      title: "Frontend Developer",
      company: "Tech Company",
      avatar: "https://i.pravatar.cc/150?img=14",
      skills: ["React", "JavaScript", "Bootstrap"],
      openToWork: true,
      badgeText: "Open to work",
      theme: "light"
    }
  ];

  return (
    <div className="app">
      <h1>Business Profile Cards</h1>

      <div className="card-container">

        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            title={profile.title}
            company={profile.company}
            avatar={profile.avatar}
            skills={profile.skills}
            openToWork={profile.openToWork}
            badgeText={profile.badgeText}
            theme={profile.theme}
          />
        ))}

      </div>
    </div>
  );
}

export default App;