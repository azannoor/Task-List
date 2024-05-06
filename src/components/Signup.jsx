import { Link } from "react-router-dom";
import imageOne from '../assets/images/Signup.png'
import UserIcon from "../svg components/UserIcon";
import Email from "../svg components/Email";
import PassLock from "../svg components/PassLock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true on form submission
    if (password.length < 8) {
      setError("Your Password is not strong enough. Use at least 8 characters.");
      setLoading(false); // Set loading to false if validation fails
      return;
    }

    // Simple email syntax validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false); // Set loading to false if validation fails
      return;
    }

    axios.post('http://localhost:3000/api/users/register', { name, email, password })
      .then(result => {
        console.log(result)
        navigate('/login')
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false)); // Set loading to false after request completes
  };

  return (
    <div className="flex flex-wrap h-screen">
      <div className="h-screen w-full md:w-1/2 bg-[#4BCBEB]">
        <div className="mt-13 flex items-center justify-center">
          <img src={imageOne} className="mx-auto w-80 py-28" alt="Signup"></img>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mb-28">
        <div className="w-full max-w-xs">
          <h1 className="font-bold text-lg mb-6">Sign Up For An Account</h1>
          <form onSubmit={onSubmit}>
            <div className="relative">
              <div className="flex">
                <div className="mt-3 ml-2 absolute ">
                  <UserIcon></UserIcon>
                </div>
              </div>
            </div>
            <input
              className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md py-3 pl-10 pr-6 sm:text-sm focus:ring-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter Your Full Name"
              required
            />

            <div className="relative">
              <div className="flex">
                <div className="mt-3 ml-2 absolute ">
                  <Email></Email>
                </div>
              </div>
            </div>
            <input
              className="w-full mb-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md py-3 pl-10 pr-6 sm:text-sm focus:ring-1"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              required
            />

            <div className="relative">
              <div className="flex">
                <div className="mt-3 ml-2 absolute ">
                  <PassLock></PassLock>
                </div>
              </div>
            </div>
            <input
              className="w-full mb-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md py-3 pl-10 pr-6 sm:text-sm focus:ring-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              required
            />

            <div className="pb-2 text-red-500">
              {error && <span className="ml-3 text-[11px]">{error}</span>}
            </div>

            <div className="pb-10">
              <input className="mr-2 h-4 w-3" type="checkbox" />
              <label className="text-xs text-slate-500">
                {" "}
                By creating an account means you agree to the{" "}
                <span className="font-bold text-black">Terms</span> <br />
                <span className="ml-7">
                  <span className="font-bold text-black">Conditions</span> and
                  our <span className="font-bold text-black">Privacy Policy</span>
                </span>
              </label>
            </div>
            <button
              className="px-2  w-full bg-[#4BCBEB] rounded-lg text-white relative"
              type="submit"
              disabled={loading} // Disable button when loading is true
              style={{ minHeight: "45px" }} // Ensure button maintains its height
            >
              {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FontAwesomeIcon icon={faSpinner} className="fa-spin text-white" />
                </div>
              )}
              {!loading && "Sign Up"}
            </button>
            <br />
            <Link to="/login" className="block text-center mt-5">
              <p className="text-xs">
                Already have an account?{" "}
                <span className="font-bold text-[#4BCBEB]">Log In</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
