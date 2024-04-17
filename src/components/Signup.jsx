import { useState } from "react"
import Login from "./Login"

import { Link } from "react-router-dom"
function Signup(){

    const [signup, setSignup] = useState(true)

    const handleSignup = ()=>{
        setSignup((prev)=>{
            !prev
        })
    }

    return(
        <div className="flex h-screen">
            <div className="h-screen w-1/2 bg-[#4BCBEB]">
                <h1>Task List Manager</h1>
            </div>
         
 <div className="w-1/2">
        <h1 className="mt-20 ml-56 font-bold text-lg">SIGN UP FOR THE ACCOUNT</h1>
        <div className=" flex items-center justify-center ">
        <form >
         
          <input className="mt-5  px-2 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  type="text" placeholder="Enter your Full Name" required></input><br/>

        
          <input className=" mt-0 px-3 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type="text" placeholder="Email" required></input><br/>

         
          <input className="mt-0 px-3 py-2 w-80 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type="password" placeholder="Password" required></input><br/>
<div className="pb-10  ">
<input className="mr-3" type="checkbox"></input>
        <label className="text-xs text-slate-500 " for="Terms"> By creating an account means you agree to the <span className="font-bold text-black">Terms</span> <br></br> <span className="ml-7"><span className="font-bold text-black">& Conditions</span> and our  <span className="font-bold text-black">Privacy Policy</span></span></label><br></br>
</div>
         

          <button className="px-2 py-2 w-80 bg-[#4BCBEB] rounded-lg text-white" type="submit">Signup</button> <br></br>
          

          <Link to="/login">
              <p className="mt-5 text-xs text-center ">Already have an account? <span className="font-bold text-[#4BCBEB]">Log In</span></p>
          </Link>
          

      </form>
        </div>
        
      
    </div>
    </div>
       
    )

    
}

export default Signup