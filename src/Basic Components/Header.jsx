import { Link } from "react-router-dom";
import Menu from "../Basic Components/Menu";
import { useState, useEffect } from "react";
import axios from 'axios';
import Notification from "../svg components/Notification";
import { jwtDecode } from 'jwt-decode';
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
    <div className="hidden md:flex flex-col md:flex-row h-16 bg-white">
      <p className="px-9 py-3 font-extrabold text-2xl text-black">
        {name}
      </p>
      
      <div className='flex items-center ml-auto md:ml-0 mr-4 md:mr-8'>
        <Link to='/notifications'>
          <Notification />
        </Link>
        <div className="flex items-center ml-4">
          <img
            className="h-8"
            src="src\assets\images\UserIcon.png"
            alt="User Icon"
          />
          <div className="ml-3">
            <h1 className="font-bold text-sm">{userName}</h1>
            <p className='text-sm'>Status 200</p>
          </div>
          <img
            className="ml-3 h-8 w-5 hidden md:inline-block"
            src="src\assets\images\GreaterThan.png"
            alt="Arrow Icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
