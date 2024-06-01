import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // Include Firestore if you're using it
import firebaseConfig from '../config/firebaseconfig';

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, set, update, ref } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getStorage, uploadBytes, getDownloadURL } from 'firebase/storage';
import { disablePersistentCacheIndexAutoCreation, documentId } from 'firebase/firestore';
import "firebase/compat/storage";

import '../css/GrievancePage.css';
import { onValue } from 'firebase/database';
require('firebase/auth')



function GrievancePage() {
  const [category, setCategory] = useState(''); // Initialize with empty string
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('')
  const [location, setLocation] = useState('');
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const fileInputRef = useRef(null);

  const [Curuser, setCuruser] = useState(null);


  const grievanceData = {
    category,
    description,
    location,
  };
  console.log(grievanceData);


  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Hey");
    const img = fileInputRef.current.files[0];
    console.log(img);
    const user = auth.currentUser;
    console.log(user.last_login);
    const Imgurl = null;

   
   

    if (user) {
      if (img) {
        const imgRef = firebase.storage().ref('images/' + user.uid + '/' + img.name);

        uploadBytes(imgRef, img)
          .then((value) => {
            getDownloadURL(value.ref).then(url => {
              setImgUrl(url)
            })
            console.log(getDownloadURL(imgRef));
            console.log(imgUrl)
            console.log("Upload Done");
            // The file has been successfully uploaded, and you can get its reference
            // const downloadURL = getDownloadURL(snapshot.ref);

            // Store the downloadURL in the Realtime Database or perform any other actions

            const setData = { grievance: grievanceData, image: imgUrl };
            const dbRef = ref(database, 'users/' + user.uid);
            update(dbRef, setData);
            


        
            const Refcopy = ref(database, 'grievance/' + user.uid);
            onValue(dbRef, (snapshot) => {
              const userData = snapshot.val();
              if(userData && userData.username) {
               const  username= userData.username;
                const Datacopy = { username:username, email: user.email, category: category, description: description, location: location, image: imgUrl , status:"Pending"};
                set(Refcopy, Datacopy);
              }
            })
           

          })
          .catch((error) => {
            console.error('Error :', error);
          });
      } else {
        alert("NHK");
      }
    }
    console.log("Hoo to gaya");
  };

  return (
    <div className="grievance-container">
      <h2 className="form-title">Grievance Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="category">Select or Add a Category:</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select or Add a Category
            </option>
            <option value="billing">Billing Issues</option>
            <option value="service">Service Problems</option>
            <option value="product">Street Light</option>
            <option value="product">Water Supply</option>
            <option value="product">Product Complaints</option>

            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <label for="image" class="block text-gray-600 font-semibold">Image</label>
          <input type="file" id="image" name="image" class="form-textarea p-3 mt-1 mb-4 block w-full" placeholder="Image"

            ref={fileInputRef}
            required />
        </div>



        <button type="button" className="submit-button" onClick={handleFormSubmit}>
          Submit Grievance
        </button>
       
        <button type="button" className="logout-button" >
        <a href="/Login">Log Out</a>
        </button>
        
      </form>
    </div>
  );
}

export default GrievancePage;
