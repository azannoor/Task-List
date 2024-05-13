import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import TaskList from "../svg components/TaskList";
import Dashboard from "../svg components/Dashboard";
import MenuUser from "../svg components/MenuUser";
import TaskIcon from "../svg components/TaskIcon";
import SettingsIcon from "../svg components/SettingsIcon";
import TitleIcon from "../svg components/TitleIcon";

const Menu = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [userRole, setUserRole] = useState(null); // State to store user role

  // Function to handle setting active link
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('jsonwebtoken'); // Remove JWT token from local storage
    navigate('/login'); // Redirect to login page
  };

  useEffect(() => {
    // Function to retrieve user role from token in local storage
    const getUserRoleFromToken = () => {
      try {
        const token = localStorage.getItem('jsonwebtoken');
        console.log("Token from localStorage:", token); // Log token
        if (token) {
          const tokenPayload = token.split('.')[1]; // Extracting payload part
          const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode and parse payload
          console.log("Decoded Token Payload:", decodedPayload); // Log decoded payload
          setUserRole(decodedPayload.role); // Set user role
          console.log("Decoded Token Role:", decodedPayload.role); // Log user role
        }
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    };

    getUserRoleFromToken(); // Call the function when component mounts
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className="md:min-h-screen flex flex-col md:flex-row bg-white shadow h-full ">
      <div className="md:w-64 bg-white shadow md:flex-shrink-0"> {/* Added md:flex-shrink-0 */}
        <div className="mt-5 flex items-center justify-center">
          <TaskList />
          <h1 className="px-3 font-bold text-lg text-[#4BCBEB]">
            Task List Manager
          </h1>
        </div>
        <TitleIcon />
        <p className="mt-6 ml-7 font-bold text-sm text-black">MENU</p>

        <div className="mt-7 ml-6 py-3 px-3 md:h-11 md:w-52 bg-white rounded-xl flex  ">
          <Dashboard color={activeLink === '/dashboard' ? '#4BCBEB' : '#64748B'} />
          <Link to="/dashboard" className={`ml-2 ${activeLink === '/dashboard' ? 'text-[#4BCBEB]' : 'text-[#64748B]'}`} onClick={() => handleSetActiveLink('/dashboard')}>
            <button className="px-2 font-bold text-sm">Dashboard</button>
          </Link>
        </div>
        {userRole === 'admin' && (
          <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
            <MenuUser color={activeLink === '/users' ? '#4BCBEB' : '#64748B'} />
            <Link to="/users" className={`ml-2 ${activeLink === '/users' ? 'text-[#4BCBEB]' : 'text-[#64748B]'}`} onClick={() => handleSetActiveLink('/users')}>
              <button className="px-2 font-medium text-sm">Users</button>
            </Link>
          </div>
        )}
        
        <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
          <TaskIcon color={activeLink === '/tasks' ? '#4BCBEB' : '#64748B'} />
          <Link to="/tasks" className={`ml-2 ${activeLink === '/tasks' ? 'text-[#4BCBEB]' : 'text-[#64748B]'}`} onClick={() => handleSetActiveLink('/tasks')}>
            <button className="px-2 font-medium text-sm">Tasks</button>
          </Link>
        </div>
        <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
          <SettingsIcon color={activeLink === '/settings' ? '#4BCBEB' : '#64748B'} />
          <Link to="/settings" className={`ml-2 ${activeLink === '/settings' ? 'text-[#4BCBEB]' : 'text-[#64748B]'}`} onClick={() => handleSetActiveLink('/settings')}>
            <button className="px-2 font-medium text-sm">Settings</button>
          </Link>
        </div>
        
        {/* Logout button */}
        <div className="flex mt-3  ml-6 py-3 px-3 md:h-19 md:w-52 ">
          <button className="px-2 h-9 w-full bg-[#4BCBEB] rounded-lg text-white relative" onClick={() => {handleLogout(); handleSetActiveLink('/logout');}}>
            Logout
          </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Menu;
