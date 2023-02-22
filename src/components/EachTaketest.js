import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import questions from '../questions'
import { setTest } from '../slices/questionSlice'

const EachTaketest = () => {
  const state = useSelector((state) => state.test)
  const [question, setQuestion] = useState([])
  const [userAnswer, setUserAnswer] = useState([])
  const [eachQuestion, setEachQuestion] = useState({})


  useEffect(() => {
      // console.log({id})
      let filteredQuestions = questions.filter((item, i) => i < 20)
      setQuestion(filteredQuestions)
      localStorage.setQ = JSON.stringify(filteredQuestions)
    }, [])
    
    const handleChange = (e) => {
      const inputName = e.target.name
      const value = e.target.value
      setUserAnswer({ ...userAnswer, [inputName]: value })
    }
  const dispatch = useDispatch
  const next = () => {
    dispatch(setTest())
  }
  return (
    <>
      {/* view each question */}
      <div className="col border p-0 m-2">
        <div>
          <h3>Question</h3>
            {question.map((item,i)=>(
                <div>
                    <div className="card ">
                        <div className="card-item ">
                        <div className="card-title">
                            {eachQuestion.question}
                            <div className="card-body">
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="Radios"
                                id="Radios1"
                                value="userAnswer.A"
                                onChange={handleChange}
                                />
                                <label
                                className="form-check-label"
                                htmlFor="exampleRadios1"
                                onClick={() => console.log('hiiiiiki')}
                                >
                                A. {eachQuestion.A}
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="Radios"
                                id="Radios2"
                                value="userAnswer.B"
                                onChange={handleChange}
                                />
                                <label
                                className="form-check-label"
                                htmlFor="exampleRadios2"
                                >
                                B. {eachQuestion.B}
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="Radios"
                                id="Radios2"
                                value="userAnswer.C"
                                onChange={handleChange}
                                />
                                <label
                                className="form-check-label"
                                htmlFor="exampleRadios2"
                                >
                                C. {eachQuestion.C}
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="Radios"
                                id="Radios2"
                                value="userAnswer.D"
                                onChange={handleChange}
                                />
                                <label
                                className="form-check-label"
                                htmlFor="exampleRadios2"
                                >
                                D. {eachQuestion.D}
                                </label>
                            </div>
                            </div>
                            <div className="m-2">
                            <button className="btn btn-outline-warning" onClick={next}>
                                Next
                            </button>
                            <button className="btn btn-outline-success">Previous</button>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default EachTaketest
