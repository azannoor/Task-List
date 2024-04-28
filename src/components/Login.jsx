import { Link } from "react-router-dom";
function Login() {
    
  return(
    <div className="flex h-screen">
      <div className="h-screen w-1/2 bg-[#4BCBEB]">
        <div className="mt-7 flex items-center justify-center">
          <svg
            className=" "
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.4118 0.195312H18.2718C7.3518 0.195312 0.841797 6.70531 0.841797 17.6253V42.7653C0.841797 53.6853 7.3518 60.1953 18.2718 60.1953H43.4118C54.3318 60.1953 60.8418 53.6853 60.8418 42.7653V17.6253C60.8418 6.70531 54.3318 0.195312 43.4118 0.195312ZM24.7518 38.8953L18.0018 45.6453C17.5518 46.0953 16.9818 46.3053 16.4118 46.3053C15.8418 46.3053 15.2418 46.0953 14.8218 45.6453L12.5718 43.3953C11.6718 42.5253 11.6718 41.0853 12.5718 40.2153C13.4418 39.3453 14.8518 39.3453 15.7518 40.2153L16.4118 40.8753L21.5718 35.7153C22.4418 34.8453 23.8518 34.8453 24.7518 35.7153C25.6218 36.5853 25.6218 38.0253 24.7518 38.8953ZM24.7518 17.8953L18.0018 24.6453C17.5518 25.0953 16.9818 25.3053 16.4118 25.3053C15.8418 25.3053 15.2418 25.0953 14.8218 24.6453L12.5718 22.3953C11.6718 21.5253 11.6718 20.0853 12.5718 19.2153C13.4418 18.3453 14.8518 18.3453 15.7518 19.2153L16.4118 19.8753L21.5718 14.7153C22.4418 13.8453 23.8518 13.8453 24.7518 14.7153C25.6218 15.5853 25.6218 17.0253 24.7518 17.8953ZM47.5218 44.0553H31.7718C30.5418 44.0553 29.5218 43.0353 29.5218 41.8053C29.5218 40.5753 30.5418 39.5553 31.7718 39.5553H47.5218C48.1185 39.5553 48.6908 39.7924 49.1128 40.2143C49.5347 40.6363 49.7718 41.2086 49.7718 41.8053C49.7718 42.4021 49.5347 42.9743 49.1128 43.3963C48.6908 43.8183 48.1185 44.0553 47.5218 44.0553ZM47.5218 23.0553H31.7718C30.5418 23.0553 29.5218 22.0353 29.5218 20.8053C29.5218 19.5753 30.5418 18.5553 31.7718 18.5553H47.5218C48.1185 18.5553 48.6908 18.7924 49.1128 19.2143C49.5347 19.6363 49.7718 20.2086 49.7718 20.8053C49.7718 21.4021 49.5347 21.9743 49.1128 22.3963C48.6908 22.8183 48.1185 23.0553 47.5218 23.0553Z"
              fill="white"
            />
          </svg>

          <h1 className=" px-3 font-bold text-3xl text-white">
            Task List Manager
          </h1>
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
            <input
              className=" mt-0 px-3 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              type="text"
              placeholder="Email"
              required
            ></input>
            <br />
            <input
              className="mt-0 px-3 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
            <button
              className="px-2 py-2 w-80 bg-[#4BCBEB] rounded-lg text-white"
              type="submit"
            >
              Login
            </button>{" "}
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
