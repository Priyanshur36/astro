import React, { useState } from 'react';

function CareerConsultation() {
  // State to track the current stage
  const [currentStage, setCurrentStage] = useState(1);

  // Function to render the content for the current stage
  const renderStageContent = () => {
    switch (currentStage) {
      case 1:
        return (
          <div>
            <h2>Astrology Services</h2>
            <div>
              <h3>Child Birth Consultation (Without Birth Time Rectification)</h3>
              <p>
                <strong>Fee:</strong> 170 Rs. / Minute <br />
                <strong>Duration:</strong> 30 minutes
              </p>
              <p>
                At Lunar Astro, we think astrology provides deep insights into your child's birth. Our team examines the birth charts of both parents to reveal essential astrological aspects.
              </p>
            </div>
            <div>
              <h3>Child Birth Consultation (With Birth Time Rectification)</h3>
              <p>
                <strong>Fee:</strong> 180 Rs. / Minute <br />
                <strong>Duration:</strong> 45 minutes
              </p>
              <p>
                At Lunar Astro, we offer detailed analysis with birth time rectification to uncover important astrological aspects and life predictions for your child.
              </p>
            </div>
          </div>
        );
      case 2:
        return <h2>Select Astrologer</h2>;
      case 3:
        return <h2>Day and Time</h2>;
      case 4:
        return <h2>Basic Details</h2>;
      case 5:
        return <h2>Billing</h2>;
      default:
        return <h2>Welcome to Career Consultation!</h2>;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div
        style={{
          width: '20%',
          backgroundColor: '#f0f0f0',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        }}
      >
        <h3>Stages</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li
            style={{
              margin: '15px 0',
              cursor: 'pointer',
              color: currentStage === 1 ? 'blue' : 'black',
              fontWeight: currentStage === 1 ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentStage(1)}
          >
            Astrology Services
          </li>
          <li
            style={{
              margin: '15px 0',
              cursor: 'pointer',
              color: currentStage === 2 ? 'blue' : 'black',
              fontWeight: currentStage === 2 ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentStage(2)}
          >
            Select Astrologer
          </li>
          <li
            style={{
              margin: '15px 0',
              cursor: 'pointer',
              color: currentStage === 3 ? 'blue' : 'black',
              fontWeight: currentStage === 3 ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentStage(3)}
          >
            Day and Time
          </li>
          <li
            style={{
              margin: '15px 0',
              cursor: 'pointer',
              color: currentStage === 4 ? 'blue' : 'black',
              fontWeight: currentStage === 4 ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentStage(4)}
          >
            Basic Details
          </li>
          <li
            style={{
              margin: '15px 0',
              cursor: 'pointer',
              color: currentStage === 5 ? 'blue' : 'black',
              fontWeight: currentStage === 5 ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentStage(5)}
          >
            Billing
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Career Consultation</h1>
        {renderStageContent()}
      </div>
    </div>
  );
}

export default CareerConsultation;
