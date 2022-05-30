import React, {useState, useEffect} from 'react'
import { getTest, deleteTest, updateTest } from '../../actions/tests'
import { useDispatch } from 'react-redux'
import './solution.css'

const SolutionAr = ({test, solution, key}) => {

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
    <div className="solution-container" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
        <h2>{solution?.user?.name} الطالب</h2>
        <div className="divider" />
        {solution?.questions?.map((question, i) => 
        <div className="solution-answer-container">
            <h3>السؤال {i+1}</h3>
            <h3> {question?.question}</h3>
            <h4>{question?.answer}</h4>
            <h5>{test?.questions[i]?.points} الدرجة</h5>
            <h5>الإجابة الصحيحة</h5>
            <h5> {test?.questions[i]?.correctAnswer}</h5>
            <input style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" placeholder='الدرجة' onBlur={(e) => {solution.questions[i] = {...solution.questions[i], grade: e.target.value}; }} />
        </div>)}
        <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleSubmit}>تأكيد</button>
    </div>
  )
}

export default SolutionAr