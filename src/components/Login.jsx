import { Link } from "react-router-dom";
import signIn from '../assets/images/SignIn.jpg';
import Email from "../svg components/Email";
import PassLock from "../svg components/PassLock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    axios.post('http://localhost:3000/api/users/login',{email,password})
      .then(result => {
        const token = result.data.token; // Assuming token is returned in the response
        localStorage.setItem('jsonwebtoken',token);
        console.log("User Role:", result.data.user.role);
        
        navigate('/dashboard');
        console.log(result);
      })
      .catch(err => {
        setLoading(false); 
        setError("Incorrect email or password."); 
        console.log(err);
      });
  };

  return (
    <div className="flex flex-wrap h-screen">
      <div className="h-screen w-full md:w-1/2 bg-[#4BCBEB]">
        <div className="mt-7 flex items-center justify-center">
          <img src={signIn} className="mx-auto w-80 py-28" alt="Sign In" />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mb-28">
        <div className="w-full max-w-xs">
          <h1 className="font-bold text-lg mb-3">Sign In To Your Account</h1>
          <p className="mb-6 text-slate-500 text-xs">Welcome back! Please enter your details</p>
          <form onSubmit={onSubmit}>
            <div className="relative">
              <div className="flex">
                <div className="mt-3 ml-3 absolute">
                  <Email />
                </div>
              </div>
            </div>
            <input
              className="px-11 py-3 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <br />
            <div className="relative">
              <div className="flex">
                <div className="mt-7 ml-3 absolute">
                  <PassLock />
                </div>
              </div>
            </div>
            <input
              className="mt-4 px-11 py-3 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <br />
            <div className="pb-2">
              {error && <span className="ml-3 text-red-500 text-xs">{error}</span>} {/* Display error message */}
            </div>
            <div className="pb-10 pt-4">
              <div className="flex items-center">
                <input className="mr-2 h-5 w-4" type="checkbox" />
                <label className="text-xs font-bold">Remember me?</label>
                <Link to="/ForgotPassword" className="ml-auto text-xs text-[#4BCBEB] font-bold">
                  Forgot password?
                </Link>
              </div>
            </div>
            <button
              className="px-2  w-full bg-[#4BCBEB] rounded-lg text-white relative"
              type="submit"
              style={{ minHeight: "45px" }} 
            >
              {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <FontAwesomeIcon icon={faSpinner} className="fa-spin text-white" />
                </div>
              )}
              {!loading && "Login"}
            </button>
            <br />
            <Link to="/" className="block text-center mt-5">
              <p className="text-xs">
                Don't have an account? <span className="font-bold text-[#4BCBEB]">Sign up</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
