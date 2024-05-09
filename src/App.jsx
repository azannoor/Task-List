import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import Users from './components/Users';
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(checkLoggedIn());

  function checkLoggedIn() {
    
    const token = localStorage.getItem('jsonwebtoken');
    return !!token; 
  }

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('jsonwebtoken'); // Remove the token from localStorage on logout
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        {/* Wrap the protected routes with the loggedIn state */}
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} loggedIn={loggedIn} />} />
        <Route path="/users" element={<ProtectedRoute element={<Users />} loggedIn={loggedIn} />} />
        <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} loggedIn={loggedIn} />} />
        <Route path="/tasks" element={<ProtectedRoute element={<Tasks />} loggedIn={loggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
