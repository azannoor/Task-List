import React from 'react'
import { useEffect } from 'react'

function Hello() {
    const fetchData = async ()=>{
        try{
          const response = await fetch('http://localhost:3000/')
          const data = await response.json()
          console.log(data)
        } catch(error){
          console.log(error)
        }
      }
      useEffect(()=>{
        fetchData()
      },[])
      
  return (
    <div>
        <h1>Dashboard</h1>
    </div>
    
  )
}

export default Hello
