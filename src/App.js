import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Consultation from './Components/Consultation/consultation';
import Marriage from './Components/Consultation/marriage';
import Health from './Components/Consultation/health';
import Career from './Components/Consultation/career';
import Home from './home'
function App() {
  return (
    <Router>
      <Routes>
        {/* Parent route */}
        <Route path="/consultation" element={<Consultation />}>
          {/* Nested routes */}
          <Route path="marriage" element={<Marriage />} />
          <Route path="health" element={<Health />} />
          <Route path="career" element={<Career />} />
        </Route>
        {/* Other routes */}
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
