import React from "react";

function Activities() {
  const activities = [
    "Smartindia Hackathon Participant",
    "Won 2nd prize in IT Quiz",
    "Coordinated Hackverse 2.0",
    "Head Space Vice President",
    "Public Speaking Competitions",
    "Hosted Nation Level Hackathon"
  ];

  return (
    <div className="card">
      <h2>🎯 Extra-Curricular Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;