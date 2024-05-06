import { useEffect, useState } from "react";

import imageOne from "../assets/images/one.png";

import Menu from "../Basic Components/Menu";
import axios from 'axios'
import Modal from "../Basic Components/Modal";
import Notification from '../svg components/Notification'
import User from '../svg components/User'
import AddTask from "../svg components/AddTask";

function Tasks() {
  const [submittedData, setSubmittedData] = useState([]);
  let [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500'];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  function handleClick() {
    setShowImage(!showImage);
  }

  function display() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  function fetchTasks() {
    axios.get('http://localhost:3000/api/tasks')
      .then(response => {
        const tasks = response.data;
        setSubmittedData(tasks);
        setFilteredTasks(tasks);// Assuming the response data is an array of tasks
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }

  function handleModalSubmit(data) {
    data.preventDefault()
    axios.post('http://localhost:3000/api/tasks/addTasks', data)
      .then(response => {
        setSubmittedData([...submittedData, data]); // Update frontend state with the new task
        console.log(response)
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); 
    const filteredTasks = submittedData.filter(task =>
      task.title.toLowerCase().includes(query)
    );
    setFilteredTasks(filteredTasks);
    
  };

  return (
    <div className="flex h-screen">
      <div className="h-screen w-64 ">
        <Menu></Menu>
      </div>

      <div className="pl-[1px] w-10/12 overflow-auto bg-[#F6F8FA]">
        <div className="flex h-16 bg-white">
          <p className="px-16 py-3 font-extrabold text-2xl text-black">Task</p>
          <Notification></Notification>
          <User></User>
          
        </div>
        <div className="ml-11 mt-7 w-[600px] h-[620px] ">
          <div className=" w-[924px] h-[160px]">
            <div className="flex gap-28">
              <div>
                <h1 className="font-bold">start date:</h1>
                <input
                  className="px-3 w-[150%] h-10 mt-4 rounded-lg"
                  type="date"
                  placeholder="15-Apr-2024"
                  required
                ></input>
              </div>

              <div>
                <h1 className="font-bold">end date:</h1>
                <input
                  className="px-3 w-[150%] h-10 mt-4 rounded-lg"
                  type="date"
                  placeholder="15-Apr-2024"
                  required
                ></input>
              </div>
              <button className="ml-80 h-9 " onClick={display}>
                <AddTask></AddTask>
              </button>
            </div>
            <h1 className="mt-5 font-bold">Enter Title:</h1>
            <input
              className="px-3  w-[30%] h-10 mt-4 rounded-l-lg "
              type="search"
              placeholder="search"
              value={searchQuery}
                onChange={handleSearchChange}
              required
            ></input>
            <button className="h-10 w-20 bg-[#4BCBEB4D] rounded-r-lg">
              Search
            </button>
          </div>
          <div className="mt-11  grid grid-cols-3 gap-x-80 gap-y-20 ">
            
              {/* {Tasks.map((item,index)=>{

              })} */}
              {filteredTasks.map((item, index) => {

                return <div key={index} className="block w-[300px] h-[400px] border shadow-sm border-[#4BCBEB4D] rounded-xl "><div className={`h-[24px] ${getRandomColor()} font-bold  rounded-t-xl`}></div>
                <div className="ml-7 mt-5">
                  <div className="flex">
                  <p className=" font-bold">Title:</p>
                    
                    <svg
                      className="ml-44"
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
                  <p className="">{item.title}</p>
                  <p className="mt-3 font-bold">Description:</p>
                  <p>{item.description}</p>
  
                  <p className="mt-3 font-bold">Attachement:</p>
                  <div className="mt-2 mr-9">
                    <img
                      src={imageOne}
                      alt="Description of the image"
                      className="h-24 w-60"
                    />
                  </div>
                  <div className='flex gap-x-14'>
                    <p className="font-bold">Start Date:</p>
                    
                    <p className="font-bold">End Date:</p>
                  </div>
                  <div className='flex gap-x-14'>
                    <p className="text-md">{formatDate(item.startDate)}</p>
                    
                    <p className="text-md">{formatDate(item.endDate)}</p>
                  </div>

                </div></div>
              })}
              
            </div>
          </div>
        </div>
        <div>{showModal && <Modal onSubmit={handleModalSubmit} />}</div>
      </div>
    
  );
}
export default Tasks;
