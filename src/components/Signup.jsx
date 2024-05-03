import { Link } from "react-router-dom";
import imageOne from '../assets/images/Signup.png'
import UserIcon from "../svg components/UserIcon";
import Email from "../svg components/Email";
import PassLock from "../svg components/PassLock";
import { useEffect, useState } from "react";
import { Alert } from "@material-tailwind/react";
import { useAppContext } from "../context/AppContext";
import axios from 'axios';
// const initialState = {
//   name:'',
//   email: '',
//   password:'',
  
  


function Signup() {

 const [name,setName] = useState()
 const [email,setEmail] = useState()
 const [password,setPassword] = useState()


  // const [values,setValues] = useState(initialState)

  // const {showAlert,registerUser} = useAppContext()
 
  
  const handleChange = (e)=>{
    // setValues({...values,[e.target.name]:e.target.value})
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/api/users/register',{name,email,password}).
    then(result=>console.log(result)).
    catch(err=>console.log(err))
    // const {name,email,password} = values
    // const currentUser = {name,email,password}
    // registerUser(currentUser)
    // console.log(e.target)

  }

  return (
    <div className="flex h-screen">
      <div className="h-screen w-1/2 bg-[#4BCBEB]">
        <div className="mt-13 flex items-center justify-center">
         

          <img src={imageOne} className="mx-auto w-80 py-28"></img>
        </div>
      </div>

      <div className="w-1/2 ">
        <h1 className="mt-20 ml-56 font-bold text-lg">
          Sign Up For An Account
        </h1>
        {/* {showAlert && <Alert></Alert>} */}
        <div className=" flex items-center justify-center ">
          <form onSubmit={onSubmit}>
            <div className="relative">
              <div className="flex">
                <div className="mt-7 ml-1 absolute">
                <UserIcon></UserIcon>

                </div>
              </div>
            </div>
            <input
              className="mt-5  px-8 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              name="name"
              placeholder="Enter Your Full Name"
              required
            ></input>
            <br />
            <div className="relative">
              <div className="flex">
                <div className="mt-2 ml-2 absolute">
                <Email></Email>

                </div>
              </div>
            </div>
            <input
              className=" mt-0 px-8 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              required
            ></input>
            <br />
            <div className="relative">
              <div className="flex">
                <div className="mt-2 ml-2 absolute">
                <PassLock></PassLock>

                </div>
              </div>
            </div>
            <input
              className="mt-0 px-8 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              required
            ></input>
            <br />
            <div className="pb-10  ">
              <div></div>
              <input className="mr-2 h-4 w-3" type="checkbox"></input>
              <label className="text-xs text-slate-500 ">
                {" "}
                By creating an account means you agree to the{" "}
                <span className="font-bold text-black">
                  Terms
                </span> <br></br>{" "}
                <span className="ml-7">
                  <span className="font-bold text-black">& Conditions</span> and
                  our{" "}
                  <span className="font-bold text-black">Privacy Policy</span>
                </span>
              </label>
              <br></br>
            </div>
            <button
              className="px-2 py-2 w-80 bg-[#4BCBEB] rounded-lg text-white"
              type="submit"
            >
              Signup
            </button>{" "}
            <br></br>
            <Link to="/login">
              <p className="mt-5 text-xs text-center ">
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
