
import User from '../svg components/User'
import Notification from '../svg components/Notification'
import { Link } from "react-router-dom";
const Header = ({name}) => {
  return (
    
    <div className="flex h-16 bg-white">
    <p className="px-9 py-3 font-extrabold text-2xl text-black">
      {name}
    </p>
    <Link to='/notifications'>
    <Notification></Notification>
    </Link>
   
    <User></User>
  </div>
  )
}

export default Header
