import React from 'react'
import Dashboard from './Dashboard'
import Menu from '../Basic Components/Menu'
function MainDash() {
  return (
    <>
      <div className='flex '>
        <Menu></Menu>
        
        <Dashboard></Dashboard>
      </div>
    </>
  )
}

export default MainDash
