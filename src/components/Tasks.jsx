import { useEffect, useState } from "react";
import imageOne from "../assets/images/one.png";
import Menu from "../Basic Components/Menu";
import axios from "axios";
import Modal from "../Basic Components/Modal";
import Notification from "../svg components/Notification";
import User from "../svg components/User";
import AddTask from "../svg components/AddTask";

function Tasks() {
  const [submittedData, setSubmittedData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

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

  function handleClick() {
    setShowImage(!showImage);
  }

  function display() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    axios
      .get("http://localhost:3000/api/tasks")
      .then((response) => {
        const tasks = response.data;
        setSubmittedData(tasks);
        setFilteredTasks(tasks);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }

  function handleModalSubmit(data) {
    data.preventDefault();
    axios
      .post("http://localhost:3000/api/tasks/addTasks", data)
      .then((response) => {
        setSubmittedData([...submittedData, data]);
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
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
      <div className="md:w-64">
        <Menu />
      </div>

      <div className="w-full md:w-10/12 overflow-auto bg-[#F6F8FA]">
        <div className="flex h-16 bg-white items-center justify-between px-4 md:px-16">
          <p className="font-extrabold text-2xl text-black">Task</p>
          <div className="flex items-center space-x-4">
            <Notification />
            <User />
          </div>
        </div>
        <div className="px-4 md:px-16 mt-7">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-60 mb-4 md:mb-0">
              <h1 className="font-bold">Start Date:</h1>
              <input
                className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
              />
            </div>

            <div className="w-full md:w-60">
              <h1 className="font-bold">End Date:</h1>
              <input
                className="px-3 w-full md:w-4/5 h-10 mt-2 rounded-lg"
                type="date"
                placeholder="15-Apr-2024"
                required
              />
            </div>
            <button className="h-10 ml-auto" onClick={display}>
              <AddTask />
            </button>
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
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-11 px-4 md:px-16">
          {filteredTasks.map((item, index) => (
            <div key={index} className="bg-white  rounded-xl  shadow-md ">
              <div className={`h-6 mb-4 ${getRandomColor()} rounded-t-xl`} />

              <div className="flex">
                <p className="text-sm font-bold px-3">Title:</p>

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
