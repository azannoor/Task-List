import { Link } from "react-router-dom";
import forgot from "../assets/images/ForgotPassword.jpg";
import Email from "../svg components/Email";

function ForgotPassword() {
  return (
    <div className="flex flex-wrap h-screen">
      <div className="h-screen w-full md:w-1/2 bg-[#4BCBEB]">
        <div className="mt-7 flex items-center justify-center">
          <img src={forgot} className="mx-auto w-80 py-28" alt="Forgot Password"></img>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center mb-44">
        <div className="w-full max-w-xs">
          <h1 className="font-bold text-lg mt-20 mb-3 ml-8">Reset your password</h1>
          <p className="mt-3 mb-6 ml-8 mr-4 text-slate-500 text-xs">
            Enter the email address associated with your account and we will send
            you a link to reset your password.
          </p>
          <form className="ml-8 mr-4">
            <div className="relative">
              <div className="flex">
                <div className="mt-2 ml-2 absolute">
                  <Email />
                </div>
              </div>
            </div>
            <input
              className="mt-0 px-8 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              type="text"
              placeholder="Email"
              required
            />
            <br />

            <Link to="/resetPassword">
              <button className="mt-3 px-2 py-2 w-full bg-[#4BCBEB] rounded-lg font-bold text-white">
                Continue
              </button>
            </Link>
            <br />

            <Link to="/login">
              <p className="mt-5 text-xs text-center">
                <span className="font-bold text-[#4BCBEB]">Back to Sign In</span>
              </p>
            </Link>

            <Link to="/">
              <p className="mt-20 text-xs text-center">
                Don't have an account? <span className="font-bold text-[#4BCBEB]">Sign Up</span>
              </p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
