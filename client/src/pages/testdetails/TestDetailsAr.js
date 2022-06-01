import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getTest, deleteTest, updateTest } from '../../actions/tests'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import {NavbarAr, FooterAr} from '../../sections'
import { AdIconAr, SolutionAr } from '../../components'
import './testdetails.css'


const TestDetailsAr = ({isEnglish, setIsEnglish}) => {
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
      <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIconAr />
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>هل أنت متأكد أنك تريد حذف هذا الاختبار؟</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>حذف الاختبار</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>الغاء</button>
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
            <div className="post-details-creator course-details-grade" style={{flexDirection: "row-reverse"}}>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{test?.system?.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{test?.grade?.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{test?.term?.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{test?.subject?.arabic}</h3>
            </div>
            <div className="course-useful-info test-useful-info" style={{flexDirection: "row-reverse"}}>
              <h4 style={{fontFamily: "var(--font-family-arabic)"}}>{test?.users.length} :عدد الممتحنين</h4>
              <h4 style={{fontFamily: "var(--font-family-arabic)"}}> {test?.questions.length} :عدد الأسئلة</h4>
            </div>
            <div className="course-user-actions test-user-actions">
              {!hasTakenTest && userC && <button style={{fontFamily: "var(--font-family-arabic)"}} onClick={() => setIsBought(true)} className="button-primary course-details-button">بدء الاختبار</button>}
            </div>


            {isBought && userC  &&
               <div className="course-lessons-containr" >
                  {test?.questions.map((question, i) => 
                  <div className="test-question-container" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                    <div className="question-heading-container" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                      <h2>السؤال {i+1}</h2>
                      <h3>{question?.type?.arabic}</h3>
                      <h3>{question?.points} الدرجة </h3>
                    </div>
                    {question?.type?.english !== "Pick the Odd One" && <h3>{question?.title}</h3>}
                    {question?.type?.english === "Explain" && <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" placeholder='الإجابة' onBlur={(e) => {answer[i] = {answer: e.target.value, question: question?.title};  }}/>}
                    {question?.type?.english === "Fill In" && <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" placeholder='الإجابة' onBlur={(e) => {answer[i] = {answer: e.target.value, question: question?.title};  }}/>}
                    {question?.type?.english === "True or False" && 
                    <div className="mcq-container" style={{alignItems: "flex-end",  fontFamily: "var(--font-family-arabic)"}}>
                      <div className="test-mcq-answer-container" >
                        <input onChange={(e) => {answer[i] = {answer: "True", question: question?.title}}} name="tof" id="true" type="radio" value="true" />
                        <label for="true">صواب</label>
                      </div>
                      <div className="test-mcq-answer-container" >
                        <input onChange={(e) => {answer[i] = {answer: "False", question: question?.title} }} name="tof" id="false" type="radio" value="false" />
                        <label for="false">خطأ</label>
                      </div>
                    </div>}
                    {question?.type?.english === "Essay" && <textarea style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} onBlur={(e) => {answer[i] = {answer: e.target.value, question: question?.title}; }} className="essay-answer" type="text" placeholder='الإجابة'></textarea>}
                    {question?.type?.english === "Pick the Odd One" && 
                      <div className="mcq-container" style={{alignItems: "flex-end",  fontFamily: "var(--font-family-arabic)"}}>
                      {question?.options?.map((option) => 
                      <div className="test-mcq-answer-container">
                        <input onChange={(e) => {answer[i] = {answer: option, question: question?.title}; }} name="ptoo" id={option} type="radio" value={option} />
                        <label for={option}>{option}</label>
                      </div>
                      )}
                    </div>
                  }
                    {question?.type?.english === "MCQ" && 
                      <div className="mcq-container" style={{alignItems: "flex-end",  fontFamily: "var(--font-family-arabic)"}}>
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
                <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary test-submit-answer-button" onClick={handleSubmit}>تأكيد الإجابة</button>
                </div>
                
            }

            {userC?.result?._id === test?.user?._id && 

              <div className="test-solutions-container" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                <h2 className="test-solutions-heading">الإجابات</h2>
                <div className="divider" />

                {test?.solutions.map((solution, i ) => !solution?.isSubmitted && <SolutionAr test={test} key={i} solution={solution} />)}
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
     
      <FooterAr />
    </>
  )
}

export default TestDetailsAr