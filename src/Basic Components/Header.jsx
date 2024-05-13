
import User from '../svg components/User'
import Notification from '../svg components/Notification'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import axios from "axios";

const Header = ({name}) => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const token = localStorage.getItem('jsonwebtoken');
        if (!token) {
          console.error("No token found in local storage");
          setIsLoading(false);
          return;
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        const response = await axios.get(`http://localhost:3000/api/users/${userId}`);
        const userData = response.data;
        setUserName(userData.name);
        console.log(userData)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setIsLoading(false);
      }
    };

    fetchUserName();
  }, []);
  return (
    
    <div className="flex h-16 bg-white">
    <p className="px-9 py-3 font-extrabold text-2xl text-black">
      {name}
    </p>
    
   <div className='flex items-center ml-[15%] fixed'>
   <Link to='/notifications'>
    <Notification></Notification>
    </Link>
   <img
              className="h-8 mt-3 ml-4"
              src="src\assets\images\UserIcon.png"
              alt="User Icon"
            />
            <div className="ml-3 mt-2">
              <h1 className="font-bold text-sm">{userName}</h1>
              <p className='text-sm'>Status 200</p>
            </div>
            <img
              className="pt-5 ml-3 items-center h-8 w-5"
              src="src\assets\images\GreaterThan.png"
              alt="Arrow Icon"
            />
   </div>
    
  </div>
  )
}

export default Header
