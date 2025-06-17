import React from "react";
import '../components/homepage.css';


const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-left">
        <h1>ChildCare<br />Connect</h1>
        <button className="learn-btn">Learn More</button>
      </div>
      <div className="homepage-right">
        <img
          src="https://unsplash.com/photos/group-of-boys-wearing-blue-school-uniforms-photo-b5UILRPGV_g"
          alt="child care connect"
          className="homepage-img"
        />
      </div>
    </div>
  );
};

export default Homepage;
