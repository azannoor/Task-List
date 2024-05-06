import React from 'react';
import { Link } from "react-router-dom";
import TaskList from "../svg components/TaskList";
import Dashboard from "../svg components/Dashboard";
import MenuUser from "../svg components/MenuUser";
import TaskIcon from "../svg components/TaskIcon";
import SettingsIcon from "../svg components/SettingsIcon";
import TitleIcon from "../svg components/TitleIcon";

const Menu = () => {
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
          <Dashboard />
          <Link to="/dashboard" className="ml-2">
            <button className="px-2 font-bold text-sm text-[#4BCBEB]">Dashboard</button>
          </Link>
        </div>
        <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
          <MenuUser />
          <Link to="/users" className="ml-2">
            <button className="px-2 font-medium text-sm text-[#64748B]">Users</button>
          </Link>
        </div>
        <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
          <TaskIcon />
          <Link to="/tasks" className="ml-2">
            <button className="px-2 font-medium text-sm text-[#64748B]">Tasks</button>
          </Link>
        </div>
        <div className="flex mt-3 ml-6 py-3 px-3 md:h-11 md:w-52">
          <SettingsIcon />
          <Link to="/settings" className="ml-2">
            <button className="px-2 font-medium text-sm text-[#64748B]">Settings</button>
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
