import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data including the role from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/users'); // Example endpoint to fetch user data
        setUserData(response.data);
        console.log("User Data:", response.data); // Log user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message || 'Error fetching user data');
      }
    };
  
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ userData, error }}>
      {children}
    </UserContext.Provider>
  );
};
UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate children prop
  };
export { UserContext, UserProvider };
