import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import TaskList from "../svg components/TaskList";
import Dashboard from "../svg components/Dashboard";
import MenuUser from "../svg components/MenuUser";
import TaskIcon from "../svg components/TaskIcon";
import SettingsIcon from "../svg components/SettingsIcon";
import TitleIcon from "../svg components/TitleIcon";
import { getRole } from '../utils/GetRole';

const Menu = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  const role = getRole();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white shadow">
      <div className="md:w-64 bg-white shadow">
        <div className="mt-5 flex items-center justify-center">
          <TaskList />
          <h1 className="px-3 font-bold text-lg text-[#4BCBEB]">
            Task List Manager
          </h1>
        </div>
        <TitleIcon />
        <p className="mt-6 ml-7 font-bold text-sm text-black">MENU</p>

        <div className="mt-7 ml-6 py-3 px-3 md:h-11 md:w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9]">
          <Dashboard color={activeLink === '/dashboard' ? '#4BCBEB' : '#64748B'} />
          <Link to="/dashboard" className={`ml-2 ${activeLink === '/dashboard' ? 'text-[#4BCBEB]' : 'text-[#64748B]'}`} onClick={() => handleSetActiveLink('/dashboard')}>
            <button className="px-2 font-bold text-sm">Dashboard</button>
          </Link>
        </div>
        {
          role === "Admin" && <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
          <MenuUser color={activeLink === '/users' ? '#4BCBEB' : '#64748B'} />
          <Link to="/users" className={`ml-2 ${activeLink === '/users' ? 'text-[#4BCBEB]' : 'text-[#64748B]'}`} onClick={() => handleSetActiveLink('/users')}>
            <button className="px-2 font-medium text-sm">Users</button>
          </Link>
        </div>
        }
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
      </div>
      <div className="md:flex-1">
        {/* Your main content here */}
      </div>
    </div>
  );
};

export default Menu;
