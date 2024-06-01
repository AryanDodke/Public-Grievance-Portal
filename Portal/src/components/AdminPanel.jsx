import React, { Component } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update } from "firebase/database";
import { Table, Button } from 'react-bootstrap';
import firebaseConfig from "../config/firebaseconfig";
import '../css/AdminDashboard.css'; // Import the CSS file

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db, 'grievance');

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    };
  }

  componentDidMount() {
    onValue(dbRef, (snapshot) => {
      const records = [];
      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        const keyName = childSnapshot.key;
        records.push({ key: keyName, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  handleUpdateStatus = (key, newStatus) => {
    // Update the status in the Firebase Realtime Database based on the key.
    update(ref(db, `grievance/${key}`), {
      status: newStatus,
    });

    // Update the tableData state to reflect the status change.
    this.setState((prevState) => ({
      tableData: prevState.tableData.map((row) =>
        row.key === key ? { ...row, data: { ...row.data, status: newStatus } } : row
      ),
    }));
  };

  // Function to open the image in a new window
  openImageInNewWindow = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  render() {
    return (
      <div className="admin-panel-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Email</th>
              <th>Category</th>
              <th>Description</th>
              <th>Image</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.data.username}</td>
                <td>{row.data.email}</td>
                <td>{row.data.category}</td>
                <td>{row.data.description}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => this.openImageInNewWindow(row.data.image)}
                  >
                    View Image
                  </Button>
                </td>
                <td>{row.data.status}</td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => this.handleUpdateStatus(row.key, "completed")}
                  >
                    Mark as Completed
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => this.handleUpdateStatus(row.key, "cancelled")}
                  >
                    Mark as Cancelled
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => this.handleUpdateStatus(row.key, "pending")}
                  >
                    Mark as Pending
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default AdminDashboard;
