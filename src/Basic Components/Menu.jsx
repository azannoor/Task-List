
import { Link } from "react-router-dom";
import TaskList from "../svg components/TaskList";
import Dashboard from "../svg components/Dashboard";
import MenuUser from "../svg components/MenuUser";
import TaskIcon from "../svg components/TaskIcon";
import SettingsIcon from "../svg components/SettingsIcon";
import TitleIcon from "../svg components/TitleIcon";

const Menu = () => {
  return (
    <div className="h-screen w-64 fixed">
      <div className="mt-5 flex items-center justify-center">
        <TaskList></TaskList>
        <h1 className=" px-3 font-bold text-l text-[#4BCBEB]">
          Task List Manager
        </h1>
      </div>
      <TitleIcon></TitleIcon>
      <p className="mt-6 ml-7 font-bold text-sm text-black">MENU</p>

      <div className="mt-7 ml-6 py-3 px-3 h-11 w-52 bg-white rounded-xl flex border-2 border-[#F1F5F9] drop-shadow-md">
       <Dashboard></Dashboard>
        <Link to="/dashboard">
          <button className=" px-2 font-bold text-sm text-[#4BCBEB]">
            Dashboard
          </button>
        </Link>
      </div>
      <div className="flex mt-3 ml-6 py-3 px-3 h-11 w-52">
        <MenuUser></MenuUser>
        <Link to="/users">
          <button className=" px-2 font-medium text-sm text-[#64748B]">
            Users
          </button>
        </Link>
      </div>
      <div className="flex mt-3 ml-6 py-3 px-3 h-11 w-52">
        <TaskIcon></TaskIcon>

        <Link to="/tasks">
          <button className=" px-2 font-medium text-sm text-[#64748B]">
            Tasks
          </button>
        </Link>
      </div>
      <div className="flex mt-3 ml-6 py-3 px-3 h-11 w-52">
        
      <SettingsIcon></SettingsIcon>
        <Link to="/tasks">
          <button className=" px-2 font-medium text-sm text-[#64748B]">
            Settings
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
