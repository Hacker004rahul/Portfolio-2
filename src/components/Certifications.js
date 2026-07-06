import React from "react";

function Certifications() {
  const certifications = [
    "AWS Cloud Practitioner",
    "Google Data Analytics",
    "Python for Everybody",
    "React Developer Certification",
    "MongoDB Certified Developer"
  ];

  return (
    <div className="card">
      <h2>🏆 Certifications</h2>

      <ul>
        {certifications.map((certificate, index) => (
          <li key={index}>{certificate}</li>
        ))}
      </ul>
    </div>
  );
}

export default Certifications;