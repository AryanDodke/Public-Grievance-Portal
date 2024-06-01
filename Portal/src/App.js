import React from 'react';
import './styles.css';
import './typed.js';
import Header from './components/Header';
//import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminLogin from './components/Admin-login';
import GrievancePage from './components/GrievancePage';
import GrievanceForm from './components/Grievance';
import News from './components/News';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminPanel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // Include Firestore if you're using it
import firebaseConfig from './config/firebaseconfig';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
require('firebase/auth')

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/service" element={<Service />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin_login" element={<AdminLogin />} />
            <Route path="/Grievance" element={<GrievanceForm />} />
            <Route path="/GrievancePage" element={<GrievancePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adminpanel" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
