import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Users from './components/Users';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import PropTypes from 'prop-types';

// Import ProtectedRoute separately
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Function to handle user login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle user logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} loggedIn={loggedIn} />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} loggedIn={loggedIn} />} />
        <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} loggedIn={loggedIn} />} />
        <Route path="/tasks" element={<ProtectedRoute element={<Tasks />} loggedIn={loggedIn} />} />
      </Routes>
    </Router>
  );
}

// PropTypes for App component
App.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default App;
