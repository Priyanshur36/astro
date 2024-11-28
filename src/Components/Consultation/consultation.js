import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Consultation = () => {
  return (
    <div>
      <h1>Consultation Page</h1>
      <nav>
        {/* Links to nested routes */}
        <Link to="marriage">Marriage Consultation</Link> |{' '}
        <Link to="health">Health Consultation</Link> |{' '}
        <Link to="career">Career Consultation</Link>
      </nav>
      <hr />
      {/* Nested routes will be rendered here */}
      <Outlet /> {/* This renders the nested route content */}
    </div>
  );
};

export default Consultation;
