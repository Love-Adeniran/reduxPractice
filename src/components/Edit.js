import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { setProfile } from '../slices/profileSlice'

const Edit = () => {
  let { Profile } = useSelector((state) => state)
  const [info, setInfo] = useState(Profile)

  const handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value
    setInfo({ ...info, [inputName]: value })
    dispatch(setProfile({ ...info, [inputName]: value }))
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const update = () => {
    dispatch(setProfile(info))
    navigate(`/user/profile/${info.firstname}`)
  }

  return (
    <>
      <div className="container shadow p-2">
        <h3>Edit</h3>
        <div className="">
          <input
            type="text"
            value={info.firstname}
            name="firstname"
            onChange={handleChange}
            className="form-control my-2" placeholder='firstname'
          />
          <input
            type="text"
            value={info.lastname}
            name="lastname"
            onChange={handleChange}
            className="form-control my-2" placeholder='lastname'
          />
          <input
            type="email"
            value={info.email}
            onChange={handleChange}
            name="email"
            className="form-control my-2" placeholder='email'
          />
          <button className="btn btn-outline-info" onClick={update}>
            Update
          </button>
        </div>
      </div>
    </>
  )
}

export default Edit
