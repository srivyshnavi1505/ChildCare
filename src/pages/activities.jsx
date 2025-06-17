import React from "react";
import "../components/activities.css";

import education from "../assests/education.jpg";
import girlchild from "../assests/girlchild.jpg";
import health from "../assests/health.jpg";
import nutrition from "../assests/nutrition.jpg";

const activities = [
  {
    image: education,
    title: "Education and Learning",
    description: "We provide a range of educational activities designed to stimulate children's minds."
  },
  {
    image: health,
    title: "Health Awareness",
    description: "Health check-ups and wellness programs for children and communities."
  },
  {
    image: nutrition,
    title: "Nutrition Support",
    description: "Providing nutritious meals and raising awareness about healthy eating."
  },
  {
    image: girlchild,
    title: "Girl Child Empowerment",
    description: "Programs dedicated to empowering girls through education and support."
  }
];

const Activities = () => {
  return (
    <div className="activities">
  <h1>Our Activities</h1>
  <div className="activities-grid">
    {activities.map((act, index) => (
      <div key={index} className="activity-card">
        <img src={act.image} alt={act.title} className="activity-image" />
        <h2>{act.title}</h2>
        <p>{act.description}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Activities;
