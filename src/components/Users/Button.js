import React from 'react'

const Button = ({seeQuestion,index}) => {
    // let i = index
    // const seeQuestions = (index) => {
    //     let indexedQuestion= JSON.parse(localStorage.setQ)
    //     // setEachQuestion(indexedQuestion)
    // }
  return (
    <>
        <button className="btn btn-outline-secondary" onClick={seeQuestion}>{index + 1}</button>
    </>
  )
}

export default Button