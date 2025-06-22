import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/programmes.css"; 

import CelebrationImg from '../assests/CelebrationImg.jpg'; 



const Programmes = ({loggedin}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (loggedin) {
      navigate('/celebration');
    }else{
      navigate('/login');
    }
  };
return (
    <div className="programmes-container">
      <h1>Our Programmes</h1>

      <div className="programmes-content">
        <div className="celebration-image">
          <img src={CelebrationImg} alt="Celebrate with us" />
        </div>

        <div className="celebration-card" onClick={handleCardClick}>
          <h2>🎉 Celebrations With Us</h2>
          <p>Celebrate birthdays, anniversaries, or special days with our children. Click to plan your visit!</p>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
