import React from 'react'
import User from '../svg components/User'
import Notification from '../svg components/Notification'
const Header = ({name}) => {
  return (
    
    <div className="flex h-16 bg-white">
    <p className="px-16 py-3 font-extrabold text-2xl text-black">
      {name}
    </p>
    <Notification></Notification>
    <User></User>
  </div>
  )
}

export default Header
