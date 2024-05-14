import { Link } from "react-router-dom";
import Menu from "../Basic Components/Menu";
import Header from "../Basic Components/Header";
import { useState, useEffect } from "react";
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TablePagination from '@mui/material/TablePagination';
import { CircularProgress } from '@mui/material';
import Todo from "../Basic Components/Todo";

function Users() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null); // Track selected item id for Todo

  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/api/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching user data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value); 
  };

  const handleTodoClose = () => {
    setSelectedTaskId(null);
  };

  const handleTodoClick = (taskId) => {
    if (selectedTaskId === taskId) {
        setSelectedTaskId(null);
    } else {
        setSelectedTaskId(taskId);
    }
  };
  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/api/users/${userId}`);
      // If successful, update the user data by refetching it
      fetchUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
      setError("An error occurred while deleting the user. Please try again later.");
    }
  };
  

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="w-full md:w-64">
        <Menu></Menu>
      </div>

      <div className="w-auto px-4 md:px-0 flex-grow bg-[#F6F8FA]">
        <Header name="Users"></Header>
        <div className="mt-11 mx-4 md:mx-0 md:w-[calc(100%-64px)] md:mx-auto  h-auto md:h-[600px] bg-white rounded-xl border-[1.45px] border-[#4BCBEB] shadow-md">
          <h1 className="m-5 font-bold text-2xl">Online User</h1>
          <div className="hidden lg:flex ml-60 mb-5 space-x-[18%]">
            <h1 className="text-lg font-medium">UserName</h1>
            <h1 className="text-lg font-medium ">email</h1>
            <h1 className="px-3 text-lg font-medium">Phone Number</h1>
          </div>
          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[250px]">
                <CircularProgress />
              </div>
            </div>
          )}
          {error && (
            <div className="flex justify-center items-center min-h-screen text-red-600">
              {error}
            </div>
          )}
          <div className="lg:h-[450px] overflow-auto">
          {currentItems.map((item, index) => {
            return (
              <div key={index} className="mb-3 py-3 ">
                <div className="lg:flex lg:items-center lg:space-x-28 lg:ml-64">
                <div className="lg:w-32">
      <span className="text-[#0B3B95] border-b border-[#0B3B95] inline-block">{item.name}</span>
    </div>
                  <div className="lg:w-32">{item.email}</div>
                  <div className="lg:w-40">{item.phoneNumber}</div>
                  <div className="flex justify-end items-center">
                    <button onClick={() => handleTodoClick(item._id)}>
                      <svg
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
                    </button>
                    {selectedTaskId === item._id && (
                      <div className="absolute mr-7 mt-7">
                        <Todo onDelete={() => deleteUser(item._id)} onClose={handleTodoClose} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
          <div className="absolute md:ml-20 md:bottom-9 left-1/2 transform -translate-x-1/2">
            <Pagination count={Math.ceil(userData.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
