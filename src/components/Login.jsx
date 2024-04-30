import { Link } from "react-router-dom";
import signIn from '../assets/images/SignIn.jpg'
import UserIcon from "../svg components/UserIcon";
import Email from "../svg components/Email";
import PassLock from "../svg components/PassLock";
function Login() {
  return (
    <div className="flex h-screen">
      <div className="h-screen w-1/2 bg-[#4BCBEB]">
        <div className="mt-7 flex items-center justify-center">
         <img src={signIn} className="mx-auto w-80 py-28"></img>
        </div>
      </div>

      <div className="w-1/2 ">
        <h1 className="mt-20 ml-56 font-bold text-lg">
          Sign In To Your Account
        </h1>
        <p className="mt-3 mb-6 ml-56 text-slate-500 text-xs">
          Welcome back! Please enter your details
        </p>
        <div className=" flex items-center justify-center ">
          <form>
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
              placeholder="Password"
              required
            ></input>
            <br />
            <div className="pb-10  ">
              <div className="flex">
                <input className="mr-2 h-5 w-4" type="checkbox"></input>
                <label className="mt-1 text-xs text-black font-bold ">
                  Remember me?
                </label>
                <br></br>
                <Link to="/ForgotPassword">
                  <p className="mt-1 ml-28 text-xs text-center ">
                    <span className="font-bold text-[#4BCBEB]">
                      Forgot password?
                    </span>
                  </p>
                </Link>
              </div>
            </div>
            <Link to="/Dashboard">
              <button
                className="px-2 py-2 w-80 bg-[#4BCBEB] rounded-lg text-white"
                type="submit"
              >
                Login
              </button>
            </Link>{" "}
            <br></br>
            <Link to="/">
              <p className="mt-5 text-xs text-center ">
                Dont have an account?{" "}
                <span className="font-bold text-[#4BCBEB]">Sign up</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
