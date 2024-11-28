import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    // Navigate to the /consultation route when the button is clicked
    navigate('/consultation');
  };

  return (
    <div>
      <h1>Welcome to Lunar Astro!</h1>
      <p>Experience true astrology</p>
      {/* Button to navigate to the Consultation route */}
      <button onClick={handleConsultationClick}>Go to Consultation</button>
      <button onClick={handleConsultationClick}>Go to SHOP</button>
    </div>
  );
};

export default Home;
