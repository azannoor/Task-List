import { Link } from "react-router-dom";
import reset from '../assets/images/ResetPassword.jpg'
import PassLock from "../svg components/PassLock";

function ResetPassword() {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="h-screen w-full md:w-1/2 bg-[#4BCBEB]">
        <div className="mt-7 flex items-center justify-center">
          <img src={reset} className="mx-auto w-80 py-28" alt="Reset Password"></img>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mb-48">
        <div className="w-full max-w-xs">
          <h1 className="mt-20 ml-8 font-bold text-lg">Reset your password</h1>
          <p className="mt-3 mb-6 ml-8 mr-4 text-slate-500 text-xs">
            To set a new password, please enter your new password below. Make sure
            its secure, containing a combination of letters, numbers, and special
            characters.
          </p>
          <div className="flex items-center justify-center">
            <form className="ml-8 mr-4">
              <div className="relative">
                <div className="flex">
                  <div className="mt-2 ml-2 absolute">
                    <PassLock />
                  </div>
                </div>
              </div>
              <input
                className="mt-0 px-8 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                type="password"
                placeholder="Password"
                required
              />
              <br />
              <div className="relative">
                <div className="flex">
                  <div className="mt-2 ml-2 absolute">
                    <PassLock />
                  </div>
                </div>
              </div>
              <input
                className="mt-0 px-8 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                type="password"
                placeholder="Confirm Password"
                required
              />
              <br />

              <Link to="/login">
                <button
                  className="mt-3 px-2 py-2 w-full bg-[#4BCBEB] rounded-lg font-bold text-white"
                  type="submit"
                >
                  Update
                </button>{" "}
                <br />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
