import React from 'react';
import '../css/dashboard.css';

function Dashboard() {
  return (
    <div>
      <div className="navbar">
        <a href="#">Back</a>
      </div>

      <div className="container">
        <h5>Consumer ID</h5>
        <hr />
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Reg No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">Aryan Dodke</a>
                </td>
                <td>123</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="container">
        <h5>All Complaints</h5>
        <hr />
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Complaint</th>
                <th>Date of Complaint</th>
                <th>Status</th>
                <th>Reg No.</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="#">Complaint 1</a>
                </td>
                <td>2023-09-21</td>
                <td>In Progress</td>
                <td>123</td>
                <td>
                  <a href="#">Delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
