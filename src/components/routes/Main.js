import React from 'react'
import { Outlet } from 'react-router'


const Main = () => {
  return (
    <div className='container-fluid'>
      <Outlet /> 
    </div>
  )
}

export default Main
