import { Link } from "react-router-dom";
import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
import { useState, useEffect } from "react";
import axios from 'axios';

function Users() {
  const [userData, setUserData] = useState([]);
  const [userNames, setUserNames] = useState([]);

  // Function to fetch user data from the backend
  const fetchUserData = async () => {
    try {
      const tasksResponse = await axios.get("http://localhost:3000/api/tasks");
      const userResponse = await axios.get("http://localhost:3000/api/users");
      setUserData(tasksResponse.data);
      setUserNames(userResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // useEffect hook to fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const calculateDaysLeft = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end - start;
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  };

  return (
    <div className="flex h-screen">
      <div className="h-screen w-64">
        <Menu></Menu>
      </div>

      <div className="pl-[2px] w-10/12 bg-[#F6F8FA]">
        <Header name="Users"></Header>
        <div className="mt-11 ml-11 w-[1150px] h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          <div className="ml-5 mb-5 flex space-x-32">
            <h1 className="text-lg font-medium">Customer Name</h1>
            <h1 className="text-lg font-medium">Project Name</h1>
            <h1 className="text-lg font-medium">Start Date</h1>
            <h1 className="px-5 text-lg font-medium">End Date</h1>
            <h1 className="text-lg font-medium">OverDue day</h1>
          </div>
          <div className="overflow-y-auto h-[450px]">
            {/* Here we added a fixed height and overflow-y-auto class */}
            {userData.map((item, index) => {
              return (
                <div key={index} className="mb-3 py-3 flex border-b space-x-28">
                  <div className="w-32">{item.name}</div>
                  <div className="px-11 w-32">{item.title}</div>
                  <div className="px-5 w-30">{formatDate(item.startDate)}</div>
                  <div className="px-3 w-30">{formatDate(item.endDate)}</div>
                  <div className="w-32 gap-x-3 flex justify-end items-center gap-14">
                    {calculateDaysLeft(item.startDate, item.endDate)}
                    <svg
                      className="ml-5"
                      width="28"
                      height="28"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                        fill="#4BCBEB"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
