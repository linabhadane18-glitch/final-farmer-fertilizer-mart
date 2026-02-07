import React from "react";
import "./AboutUs.css"; // Import the CSS file

const teamMembers = [
  {
    name: "Yashika Chaudhari", // change to actual name
    role: "Work done by member 1", // describe the contribution
    
  },
  {
    name: "Nandini Khairnar",
    role: "Work done by member 2",
    
  },
  {
    name: "Lina Bhadane",
    role: "Work done by member 3",

  },
  {
    name: "Janhvi Patil",
    role: "Work done by member 4",
   
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          We are a dedicated team of students from{" "}
          <span className="highlight">Government Polytechnic Jalgoan</span>,  
          working together to create meaningful projects and grow our skills.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.photo}
              alt={member.name}
              className="team-photo"
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;