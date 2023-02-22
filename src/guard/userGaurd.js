import React from 'react'
import { Navigate } from 'react-router'
// import HandlingInput from '../components/handlingInput'
import Main from '../components/routes/Main'
// import MainRouter from '../components/routes/MainRouter'

const UserGaurd = () => {
    const isLoggedIn = true

    if (isLoggedIn){
       return <Main/> 
    }else{
        return <Navigate to= '/login' />
    }
//   return (
//     <>
//     </>
//   )
}

export default UserGaurd