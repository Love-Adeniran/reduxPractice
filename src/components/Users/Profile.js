import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

const Profile = () => {
  const {username} = useParams()
  let state = useSelector(state=>state.Profile)
  console.log(state)
  return (
    <>
      <div>Profile Page for all users {username} </div>
      <div>
        <img src="" alt="" />
        <div>
            <h3>Firstname: {state.firstname}</h3>
            <h3>Lastname: {state.lastname}</h3>
            <h3>Email: {state.email}</h3>
        </div>
        
      </div>
    </>
  )
}

export default Profile
