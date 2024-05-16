import React from 'react'
import Tasks from '../components/Tasks'
import Menu from '../Basic Components/Menu'
function MainTasks() {
  return (
    <>
      <div className='flex '>
        <Menu></Menu>
        
        <Tasks></Tasks>
      </div>
    </>
  )
}

export default MainTasks
