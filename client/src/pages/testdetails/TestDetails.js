import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getTest, deleteTest, updateTest } from '../../actions/tests'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import {Navbar, Footer} from '../../sections'
import { AdIcon, Solution } from '../../components'
import './testdetails.css'


const TestDetails = ({isEnglish, setIsEnglish}) => {
  const dispatch = useDispatch();
  const userC = JSON.parse(localStorage.getItem('profile'));
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
      dispatch(getTest(id));
    }, []);
    

  const {test, tests} = useSelector((state) => state.tests)

  const hasTakenTest =  test?.users.includes(userC?.result?._id)
  const mySolution = test?.solutions.find((solution) => solution?.user?._id === userC?.result?._id)

  const answer = []

  const [isBought, setIsBought] = useState( userC?.result?.type?.english === "Admin" || userC?.result?.email === "for4future@gmail.com" || test?.users.includes(userC?.result?._id) || userC?.result?._id === test?.user?._id)

  const isAuthorized = userC?.result?.type?.english === "Admin" || userC?.result?.email === "for4future@gmail.com" || test?.user?._id === userC?.result?._id

  const handleDelete = () => {
    dispatch(deleteTest(test._id))
    navigate('/tests')
  }

 const handleSubmit = (e) => {
    dispatch(updateTest(test._id, { ...test, users: [...test?.users, userC?.result?._id], solutions: [...test?.solutions, {questions: answer, user: userC?.result}]  }))
    window.location.reload()
 }


  if (!test) return null;



  return (
    <>
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIcon />
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>Are you sure you want to delete this test?</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>Delete</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>Cancel</button>
              </div>
            </div>
          }
        <div className="post-details-container course-details-container">
          {isAuthorized && 
            <div className="post-details-creator-actions">
              <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
            </div>
          }
        
            <div className="post-details-heading course-details-heading">
                <h1>{test.title}</h1>
                <h2>{test?.user?.name}</h2>
            </div>
            <div className="post-details-creator course-details-grade">
                <h3>{test?.system?.english}</h3>
                <h3>{test?.grade?.english}</h3>
                <h3>{test?.term?.english}</h3>
                <h3>{test?.subject?.english}</h3>
            </div>
            <div className="course-useful-info test-useful-info">
              <h4>{test?.users.length} {test?.users.length === 1 ? "user has" : "users have"} taken this test</h4>
              <h4>The test has {test?.questions.length} questions</h4>
            </div>
            <div className="course-user-actions test-user-actions">
              {!hasTakenTest && userC && <button onClick={() => setIsBought(true)} className="button-primary course-details-button">Take this test</button>}
            </div>


            {isBought && userC  &&
               <div className="course-lessons-containr">
                  {test?.questions.map((question, i) => 
                  <div className="test-question-container">
                    <div className="question-heading-container">
                      <h2>Question {i+1}</h2>
                      <h3>{question?.type?.english}</h3>
                      <h3>{question?.points} {Number(question?.points) === 1 ? "point" : "points"} </h3>
                    </div>
                    {question?.type?.english !== "Pick the Odd One" && <h3>{question?.title}</h3>}
                    {question?.type?.english === "Explain" && <input type="text" placeholder='Answer' onBlur={(e) => {answer[i] = {answer: e.target.value, question: question?.title};  }}/>}
                    {question?.type?.english === "Fill In" && <input type="text" placeholder='Answer' onBlur={(e) => {answer[i] = {answer: e.target.value, question: question?.title};  }}/>}
                    {question?.type?.english === "True or False" && 
                    <div className="mcq-container">
                      <div className="test-mcq-answer-container">
                        <input onChange={(e) => {answer[i] = {answer: "True", question: question?.title}}} name="tof" id="true" type="radio" value="true" />
                        <label for="true">True</label>
                      </div>
                      <div className="test-mcq-answer-container">
                        <input onChange={(e) => {answer[i] = {answer: "False", question: question?.title} }} name="tof" id="false" type="radio" value="false" />
                        <label for="false">False</label>
                      </div>
                    </div>}
                    {question?.type?.english === "Essay" && <textarea onBlur={(e) => {answer[i] = {answer: e.target.value, question: question?.title};  }} className="essay-answer" type="text" placeholder='Answer'></textarea>}
                    {question?.type?.english === "Pick the Odd One" && 
                      <div className="mcq-container">
                      {question?.options?.map((option) => 
                      <div className="test-mcq-answer-container">
                        <input onChange={(e) => {answer[i] = {answer: option, question: question?.title}; }} name="ptoo" id={option} type="radio" value={option} />
                        <label for={option}>{option}</label>
                      </div>
                      )}
                    </div>
                  }
                    {question?.type?.english === "MCQ" && 
                      <div className="mcq-container">
                        {question?.options?.map((option) => 
                        <div className="test-mcq-answer-container">
                          <input onChange={(e) => {answer[i] = {answer: option, question: question?.title}; }} name="mcq" id={option} type="radio" value={option} />
                          <label for={option}>{option}</label>
                        </div>
                        )}
                      </div>
                    }
                  </div>)
                  }
                <button className="button-primary test-submit-answer-button" onClick={handleSubmit}>Submit Answer</button>
                </div>
                
            }

            {userC?.result?._id === test?.user?._id && 

              <div className="test-solutions-container">
                <h2 className="test-solutions-heading">Answers</h2>
                <div className="divider" />

                {test?.solutions.map((solution, i ) => !solution?.isSubmitted && <Solution test={test} key={i} solution={solution} />)}
              </div>

              
            }

            {hasTakenTest && userC?.result?._id !== test?.user?._d &&

            <div className="test-solutions-container">
              <h2>My Answer</h2>
              {mySolution?.questions?.map((question, i) => 
              <div className="solution-answer-container solution-container ">
                <h3>Question {i+1}: {question?.question}</h3>
                <h4>{question?.answer}</h4>
                {mySolution?.isSubmitted && <h2>{question?.grade}/{test?.questions[i]?.points}</h2>}
                {mySolution?.isSubmitted && <h2>Correct answer: {test?.questions[i]?.correctAnswer}</h2>}
              </div>)}
              {!mySolution?.isSubmitted && <h5 style={{color: "gray"}}>Your answer has not yet been reviewed</h5>}
            </div>
              
                
            }
           
        </div>
     
      <Footer />
    </>
  )
}

export default TestDetails