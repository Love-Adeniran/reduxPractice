import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import questions from '../../questions'
import EachTaketest from '../EachTaketest'
import Button from './Button'

const TakeTest = () => {
    const state = useSelector((state)=>state.test)
    console.log(state)
  const [question, setQuestion] = useState([])
// const [userAnswer, setUserAnswer] = useState([])

  useEffect(() => {
    // console.log({id})
    let filteredQuestions = questions.filter((item, i) => i < 20)
    setQuestion(filteredQuestions)
    localStorage.setQ = JSON.stringify(filteredQuestions)
  }, [])
  const { paramIndex } = useParams()
    
  let index
  const seeQuestions = (i) => {
    index = i
    // setEachQuestion(question[index])
    console.log(index)
    // setindexValue(index)
}


// const next = () => {
//       dispatch(setTest())
    //   if(){

    //   }

//     console.log(IndexValue)
//     if (IndexValue >= 0 && IndexValue <= question.length) {
//       // index = index+ '1'
//       setindexValue(IndexValue + 1)
//       setEachQuestion(question[IndexValue])
//       console.log(question[IndexValue])
//       console.log(IndexValue)
//     } else {
//       redirect('/user/dashboard')
//     }
//   }

//   const previous = () => {
//     setindexValue(IndexValue - 1)
//     console.log(IndexValue)
//     if (IndexValue >= 0 && IndexValue <= question.length) {
//       // index = index+ '1'
//       setindexValue(IndexValue - 1)
//     }
//     setEachQuestion(question[IndexValue])
//     console.log(question[IndexValue])
//     console.log(IndexValue)
//   }
  return (
    <>
      <div className="row p-0">
        <div className="col-4 p-0">
          {/* buttons */}
          <div>
            <div className="">
              <div className=" border ">
                {question.map((each, i) => (
                  <span key={i} className="p-0">
                    <Button index={i} seeQuestion={() => seeQuestions(i)} />
                    <Link to= {`/${state.questionIndex}`} />
                    {/* <a href={`/user/taketest/${i}`}>{i+1}</a> */}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
       <div className='col'>
                    <EachTaketest/>
       </div>
      </div>
    </>
  )
}

export default TakeTest
