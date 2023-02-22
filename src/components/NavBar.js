import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
const state = useSelector((state)=>state.Profile)
  console.log(state)
  return (
    <div>
      <div className='container-fluid bg-dark p-2'>
        <Link to={'/'} className='pe-2 text-decoration-none'>Home</Link>
        <Link to={'/login'} className='ps-2 text-decoration-none'>Login</Link>
        <Link to={'/user/edit'} className='ps-2 text-decoration-none'>Edit Profile</Link>
        <Link to={`/user/profile/${state.firstname}`} className='ps-2 text-decoration-none'>Profile</Link>
        <span className='text-secondary ms-5'>{state.firstname}</span>

        {/* <Link to={'/profile'} className='ps-2 text-decoration-none'>Profile</Link> */}
      </div>
    </div>
  )
}

export default NavBar
