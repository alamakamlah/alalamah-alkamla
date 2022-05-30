import React, {useState, useEffect} from 'react'
import { getTest, deleteTest, updateTest } from '../../actions/tests'
import { useDispatch } from 'react-redux'
import './solution.css'

const Solution = ({test, solution, key}) => {

    const dispatch = useDispatch()
    const answer = solution?.questions
    const check = (item) => {
        return item?.user?._id === solution?.user?._id
    }

    const handleSubmit = (e) => {
        const solutions = test?.solutions
        const submittedSolution = {...solution, isSubmitted: "yes"}
        solutions[solutions.indexOf(solution)] = submittedSolution
         dispatch(updateTest(test._id, { ...test, solutions: solutions  }))
      }
    
  return (
    <div className="solution-container">
        <h2>Student: {solution?.user?.name}</h2>
        <div className="divider" />
        {solution?.questions?.map((question, i) => 
        <div className="solution-answer-container">
            <h3>Question {i+1} : {question?.question}</h3>
            <h4>{question?.answer}</h4>
            <h5>{test?.questions[i]?.points} points</h5>
            <h5>Correct answer: {test?.questions[i]?.correctAnswer}</h5>
            <input type="text" placeholder='grade' onBlur={(e) => {solution.questions[i] = {...solution.questions[i], grade: e.target.value} }} />
        </div>)}
        <button className="button-primary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Solution