import { useEffect, useState } from "react";
import imageOne from "../assets/images/one.png";
import Menu from "../Basic Components/Menu";
import axios from "axios";
import Modal from "../Basic Components/Modal";
import Notification from "../svg components/Notification";
import User from "../svg components/User";
import AddTask from "../svg components/AddTask";
import { getRole } from "../utils/GetRole";
import CircularProgress from "@mui/material/CircularProgress";
import Todo from "../Basic Components/Todo";
import { jwtDecode } from 'jwt-decode' 
import Header from "../Basic Components/Header";

function Tasks() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const [showTodo, setShowTodo] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [userRole, setUserRole] = useState(null);
  
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    fetchTasks();
    getUserRoleFromToken(); // Call function to retrieve user role
  }, []);

  // Function to retrieve user role from token in local storage
  const getUserRoleFromToken = () => {
    try {
      const token = localStorage.getItem('jsonwebtoken');
      if (token) {
        const tokenPayload = token.split('.')[1];
        const decodedPayload = JSON.parse(atob(tokenPayload));
        setUserRole(decodedPayload.role);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };
  const getUserIdFromToken = () => {
    try {
      const token = localStorage.getItem('jsonwebtoken');
      console.log("Token:", token);
      if (token) {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken);
        const userId = decodedToken.userId;
        console.log("User ID:", userId); // Add this line to check the extracted user ID
        return userId;
      }
      return null;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
  
  

  function fetchTasks() {
    setIsLoading(true);
    const token = localStorage.getItem('jsonwebtoken');
    if (!token) {
      console.error("No token found in local storage");
      setIsLoading(false);
      return;
    }
    
    let url = "http://localhost:3000/api/tasks";
    
    axios
      .get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        const tasks = response.data;
        setSubmittedData(tasks);
        setFilteredTasks(tasks);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  
  function handleModalSubmit(data) {
    const token = localStorage.getItem('jsonwebtoken');
    if (!token) {
      console.error("No token found in local storage");
      return;
    }
  
    axios
      .post("http://localhost:3000/api/tasks/addTasks", data, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        setSubmittedData([...submittedData, data]);
        setFilteredTasks([...filteredTasks, data]);
        setShowModal(false);
        console.log(response)
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }
  

  const handleDeleteTask = (taskId) => {
    axios
        .delete(`http://localhost:3000/api/tasks/${taskId}`)
        .then((response) => {
            const updatedTasks = filteredTasks.filter((task) => task._id !== taskId);
            setFilteredTasks(updatedTasks);
            if (selectedTaskId === taskId) {
              setSelectedTaskId(null);
            }
        })
        .catch((error) => {
            console.error("Error deleting task:", error);
        });
  };

  const handleTodoDelete = () => {
    if (selectedTaskId) {
        handleDeleteTask(selectedTaskId);
    }
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredTasks = submittedData.filter((task) =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(filteredTasks);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-64 w-full ">
        <Menu />
      </div>

      <div className="w-full md:w-10/12  bg-[#F6F8FA]">
      <Header name="Tasks"/>
        
        <div className="px-4 md:px-16 mt-7">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex">
            <div className="w-full md:w-60 mb-4 md:mb-0">
              <h1 className="font-bold">Start Date:</h1>
              <input
                className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
              />
            </div>
            
            <div className="w-full md:w-60 items-center justify-between mb-4 md:mb-0">
              <h1 className="font-bold">End Date:</h1>
              <input
                className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
              />
            </div>
            </div>
            
            {userRole !== "admin" && ( // Render Add Task button only if user role is not admin
              <button
                className="h-10 ml-auto"
                onClick={() => setShowModal(true)}
              >
                <AddTask />
              </button>
            )}
          </div>
          <h1 className="mt-5 font-bold">Enter Title:</h1>
          <div className="flex">
            <input
              className="px-3 w-full md:w-[31%] h-10 mt-2 rounded-l-lg"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
            <button className="h-10 w-20 bg-[#4BCBEB] text-white rounded-r-lg m mt-2">
              Search
            </button>
          </div>
          {isLoading && (
            <div className="flex justify-center items-center min-h-screen">
              <div className="absolute top-[450px]">
                <CircularProgress />
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-11 px-4 md:px-16">
          {filteredTasks.map((item, index) => (
            <div key={index} className="bg-white  rounded-xl  shadow-md ">
              <div className={`h-6 mb-4 ${getRandomColor()} rounded-t-xl`} />

              <div className="flex">
                <p className="text-sm font-bold px-3">Title:</p>
                <button onClick={() => handleTodoClick(item._id)}>
                  <svg
                    className="ml-60"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.75 12C9.75 13.2405 10.7595 14.25 12 14.25C13.2405 14.25 14.25 13.2405 14.25 12C14.25 10.7595 13.2405 9.75 12 9.75C10.7595 9.75 9.75 10.7595 9.75 12ZM9.75 19.5C9.75 20.7405 10.7595 21.75 12 21.75C13.2405 21.75 14.25 20.7405 14.25 19.5C14.25 18.2595 13.2405 17.25 12 17.25C10.7595 17.25 9.75 18.2595 9.75 19.5ZM9.75 4.5C9.75 5.7405 10.7595 6.75 12 6.75C13.2405 6.75 14.25 5.7405 14.25 4.5C14.25 3.2595 13.2405 2.25 12 2.25C10.7595 2.25 9.75 3.2595 9.75 4.5Z"
                      fill="#4BCBEB"
                    />
                  </svg>
                  {selectedTaskId === item._id && (
                    <Todo onDelete={handleTodoDelete} onClose={handleTodoClose} />
                  )}
                </button>
              </div>
              <p className="px-3">{item.title}</p>
              <div className="text-sm font-bold mt-2 px-3">Description:</div>
              <div className="px-3">{item.description}</div>
              <div className="text-sm font-bold mt-2 px-3">Attachment:</div>
              <img
                src={imageOne}
                alt="Attachment"
                className="mt-1 w-full h-24 object-cover rounded-lg"
              />
              <div className="flex justify-between mt-2">
                <div className="text-sm font-bold px-3">Start Date:</div>
                <div className="text-sm font-bold mr-3">End Date:</div>
              </div>
              <div className="flex justify-between mt-1">
                <div className="text-sm px-3">{formatDate(item.startDate)}</div>
                <div className="text-sm mr-3 mb-3">
                  {formatDate(item.endDate)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal onSubmit={handleModalSubmit} />}
    </div>
  );
}

export default Tasks;
