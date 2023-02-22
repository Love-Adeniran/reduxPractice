import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const HandlingInput = () => {
  const [info, setInfo] = useState({
    firstname: 'Love',
    lastname: 'Oluwaseyi',
    school: 'SQI',
  })
  // let details = []
  const [myArray, setmyArray] = useState([])
  const navigate= useNavigate()
  // const [firstname,setFirstname] = useState('Love')
  // const [lastname,setLastname] = useState('Oluwaseyi')
  // const [school,setSchool] = useState('SQI')

  // const changeFname= (e)=>{
  //     setFirstname(e.target.value)
  // }
  // const changeLname= (e)=>{
  //     setLastname(e.target.value)
  // }
  // const changeSchool= (e)=>{
  //     setSchool(e.target.value)
  // }
  const handleChange = (e) => {
    const inputName = e.target.name
    const value = e.target.value
    setInfo({ ...info, [inputName]: value })
  }

  const getInfo = () => {
    // console.log(info);
    const newArray = [...myArray, info]
    setmyArray(newArray)
    console.log(newArray)
    navigate('/user/dashboard')
  }

  return (
    <div>
      <br />
      <div className="p-2 container">
        <h3 className='text-center'>Login Here</h3>
        <input
          className="form-control my-2"
          value={info.firstname}
          onChange={handleChange}
          placeholder="Firstname"
          name="firstname"
        />
        <input
          className="form-control my-2"
          value={info.lastname}
          onChange={handleChange}
          placeholder="Lastname"
          name="lastname"
        />
        <input
          className="form-control my-2"
          value={info.school}
          onChange={handleChange}
          placeholder="School"
          name="school"
        />
      <button className='btn btn-outline-info' onClick={getInfo}>Get Info</button>
      {myArray.map((item, index) => (
        <div key={index}>{item.firstname}</div>
      ))}
      </div>
      {/* {firstname} {lastname} {school} */}
    </div>
  )
}
export default HandlingInput
