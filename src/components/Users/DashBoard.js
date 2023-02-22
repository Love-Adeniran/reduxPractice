import React from 'react'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router'
// import questions from '../../questions'

const DashBoard = () => {
    // const { index } = useParams()
    const state= useSelector((state)=>state.test)
    console.log(state)
    
  return (
    <>
      <div className=" col">
        <div className="col-5 row border p-0">
            <a href={`/user/taketest`} className='btn btn-outline-success text-decoration-none'>Take Test</a>
          {/* {questions.map((each, i, arr) => (
            <div className="col p-0">
              <div key={i}>
                {console.log(each)}
                <button className="btn btn-outline-secondary">{i + 1}</button>
              </div>

              
            </div>
          ))} */}
        </div>
      </div>
    </>
  )
}

export default DashBoard
