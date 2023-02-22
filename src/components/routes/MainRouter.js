import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import HandlingInput from '../handlingInput'
import { MyComponent } from '../../Home'
import NavBar from '../NavBar'
import Profile from '../Users/Profile'
import DashBoard from '../Users/DashBoard'
// import Main from './Main'
import TakeTest from '../Users/TakeTest'
import UserGaurd from '../../guard/userGaurd'
import Edit from '../Edit'
import FormikYup from '../FormikYup'
import EachTaketest from '../EachTaketest'

const MainRouter = () => {
    
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MyComponent />} />
          <Route path="/login" element={<HandlingInput />} />
          <Route path="/form" element={<FormikYup />} />
          {/* <Route path="/user" element={<Main />} children={[ */}
          <Route path="/user" element={<UserGaurd />} children={[
              <Route path="dashboard" element={<DashBoard />} />,
              <Route path="taketest" element={<TakeTest />} />,
              <Route path="taketest/:paramIndex" element={<EachTaketest/>} />,
              <Route path="profile/:username" element={<Profile />} />,
              <Route path="edit" element={<Edit />} />,
            ]}
          />
          <Route path="*" element={<div> Looks like you are lost......{' '}
                <Link to={'/user/dashboard'}>Go back to dashboard</Link>
              </div>
            }/>
        </Routes>
      </Router>
    </>
  )
}

export default MainRouter
