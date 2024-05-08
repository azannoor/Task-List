import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element, loggedIn, ...rest }) => {
  return loggedIn ? element : <Navigate to="/login" />;
};

// PropTypes for ProtectedRoute
ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
