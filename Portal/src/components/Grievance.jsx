import React from 'react';
import { Link } from 'react-router-dom';
import '../css/GrievanceForm.css';
import News from './News';

function GrievanceForm() {
  return (
    <div className="grievance-page">
      <div className="background-image">
        <div className="center-content">
          <h2 className="text-2xl font-semibold text-center mb-6">Grievance Portal</h2>
          <Link to="/GrievancePage">
            <button className="query-button">Having a query?</button>
          </Link>
        </div>
      </div>

      <div className="news-section">
        <News />
      </div>
    </div>
  );
}

export default GrievanceForm;
