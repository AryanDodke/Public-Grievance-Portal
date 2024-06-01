// import React, { useState } from 'react';
// import './login.css';
// import { Link } from 'react-router-dom';
// import firebaseConfig from '../config/firebaseconfig';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, update } from 'firebase/database';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);
//   const auth = getAuth(app);
//   const navigate = useNavigate();
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         const dt = new Date();
//         update(ref(database, 'users/' + user.uid), {
//           last_login: dt,
//         });
//         navigate('/grievance');
//       })
//       .catch((error) => {
//         setError(error.message);
//       });
//   };

//   return (
//     <div className="login-container">
//       <h2 className="login-title">Login</h2>

//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-600 font-semibold">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="form-input"
//           placeholder="Enter your email"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="password" className="block text-gray-600 font-semibold">
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-input"
//           placeholder="Enter your password"
//           required
//         />
//       </div>
//       <button type="submit" className="login-button" onClick={handleLogin}>
//         Log In
//       </button>
//       {error && <div className="text-red-500">{error}</div>}
//       <p>
//         If you are an admin,{' '}
//         <Link to="/admin_login" className="AdminLogin">
//           Admin Login here
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import '../css/login.css';
import { Link, useNavigate } from 'react-router-dom';
import firebaseConfig from '../config/firebaseconfig';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, update } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
          last_login: dt,
        });

        // Redirect to the '/grievance' page on successful login
        navigate('/Grievance');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-600 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="button" className="login-button" onClick={handleLogin}>
        Log In
      </button>
      {error && <div className="text-red-500">{error}</div>}
      <p>
        If you are an admin,{' '}
        <Link to="/admin_login" className="AdminLogin">
          Admin Login here
        </Link>
      </p>
    </div>
  );
}

export default Login;
