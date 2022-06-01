import React, {useState, useEffect} from 'react'
import './newtest.css'
import {Navbar, Footer} from '../../../sections'
import {createTest} from '../../../actions/tests'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AdIcon } from '../../../components'
import * as years from '../../../constants/coursesandgrades.js'



const NewTest = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [subjects, setSubjects] = useState([])
    const [isEnough, setIsEnough] = useState(true)
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [toggleType, setToggleType ] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})
    const [isPDF, setIsPDF] = useState(true)
    const [isPreview, setIsPreview] = useState(false)
    const [questions, setQuestions] = useState(1)
    const [mcqOptions, setMcqOptions] = useState(["item"])
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const [grades, setGrades] = useState([])
    const [toggleSystem, setToggleSystem] = useState(false)
    const [productData, setProductData] = useState({
        title: '',
        subject: {arabic: "المادة", english: "Subject"},
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        system: {arabic: "النظام", english: "system"},
        questions: [],
    })
    const [testQuestion, setTestQuestion] = useState({
      type: {english: "Question Type", arabic: "نوع السؤال"},
      options: [],
      points: '',
      correctAnswer: ''
    })
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    useEffect(() => {
      if (system?.english === "Qatari System") {
          setGrades(years.yearsQatar)
      } else if (system?.english === "Egyptian System") {
          setGrades(years.yearsEgypt)
      }
      else if (system?.english === "American System") {
          setGrades(years.yearsAmerican)
      } else if (system?.english === "British System") {
          setGrades(years.yearsBritish)
      }
  }, [system])
  useEffect(() => {
      if (system.english === "Egyptian System") {
          if(isFirstTerm.english==="First Term") {
              if (grade.english==="First Grade") setSubjects(years.FirstGradeFirstTerm)
              if (grade.english==="Second Grade") setSubjects(years.SecondGradeFirstTerm)
              if (grade.english==="Third Grade") setSubjects(years.ThirdGradeFirstTerm)
              if (grade.english==="Fourth Grade") setSubjects(years.FourthGradeFirstTerm)
              if (grade.english==="Fifth Grade") setSubjects(years.FifthGradeFirstTerm)
              if (grade.english==="Sixth Grade") setSubjects(years.SixthGradeFirstTerm)
              if (grade.english==="Seventh Grade") setSubjects(years.SeventhGradeFirstTerm)
              if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeFirstTerm)
              if (grade.english==="Ninth Grade") setSubjects(years.NinthGradeFirstTerm)
              if (grade.english==="Tenth Grade") setSubjects(years.TenthGrade)
              if (grade.english==="Eleventh Grade") setSubjects(years.EleventhGrade)
              if (grade.english==="Twelfth Grade") setSubjects(years.TwelfthGrade)
              if (grade.english==="Tenth Grade (American Diploma)") setSubjects(years.TenthGradeAD)
              if (grade.english==="Eleventh Grade (American Diploma)") setSubjects(years.EleventhGradeAD)
              if (grade.english==="Twelfth Grade (American Diploma)") setSubjects(years.TwelfthGradeAD)
          } else if(isFirstTerm.english ==="Second Term") {
              if (grade.english==="First Grade") setSubjects(years.FirstGradeSecondTerm)
              if (grade.english==="Second Grade") setSubjects(years.SecondGradeSecondTerm)
              if (grade.english==="Third Grade") setSubjects(years.ThirdGradeSecondTerm)
              if (grade.english==="Fourth Grade") setSubjects(years.FourthGradeSecondTerm)
              if (grade.english==="Fifth Grade") setSubjects(years.FifthGradeSecondTerm)
              if (grade.english==="Sixth Grade") setSubjects(years.SixthGradeSecondTerm)
              if (grade.english==="Seventh Grade") setSubjects(years.SeventhGradeSecondTerm)
              if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeSecondTerm)
              if (grade?.english==="Ninth Grade") setSubjects(years.NinthGradeSecondTerm)
              if (grade?.english==="Tenth Grade") setSubjects(years.TenthGrade)
              if (grade?.english==="Eleventh Grade") setSubjects(years.EleventhGrade)
              if (grade?.english==="Twelfth Grade") setSubjects(years.TwelfthGrade)
              if (grade.english==="Tenth Grade (American Diploma)") setSubjects(years.TenthGradeAD)
              if (grade.english==="Eleventh Grade (American Diploma)") setSubjects(years.EleventhGradeAD)
              if (grade.english==="Twelfth Grade (American Diploma)") setSubjects(years.TwelfthGradeAD)
          }
      } else if (system?.english === "Qatari System") {
          if (grade.english==="First Grade") setSubjects(years.FirstLevel)
          if (grade.english==="Second Grade") setSubjects(years.FirstLevel)
          if (grade.english==="Third Grade") setSubjects(years.ThirdLevel)
          if (grade.english==="Fourth Grade") setSubjects(years.ThirdLevel)
          if (grade.english==="Fifth Grade") setSubjects(years.ThirdLevel)
          if (grade.english==="Sixth Grade") setSubjects(years.ThirdLevel)
          if (grade.english==="Seventh Grade") setSubjects(years.ThirdLevel)
          if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeFirstTerm)
          if (grade.english==="Ninth Grade") setSubjects(years.EighthGradeFirstTerm)
          if (grade.english==="Tenth Grade") setSubjects(years.TenthLevel)
          if (grade.english==="Eleventh Grade Arts and Humanities") setSubjects(years.EleventhLevelArts)
          if (grade.english==="Eleventh Grade Science") setSubjects(years.EleventhLevelSci)
          if (grade.english==="Eleventh Grade Technology") setSubjects(years.EleventhLevelTech)
          if (grade.english==="Twelfth Grade Arts and Humanities") setSubjects(years.TwelfthLevelArts)
          if (grade.english==="Twelfth Grade Science") setSubjects(years.TwelfthLevelSci)
          if (grade.english==="Twelfth Grade Technology") setSubjects(years.TwelfthLevelTech)
      } else if (system.english === "American System") {
          if(isFirstTerm.english==="First Term") {
              if (grade.english==="First Grade") setSubjects(years.FirstGradeFirstTerm)
              if (grade.english==="Second Grade") setSubjects(years.SecondGradeFirstTerm)
              if (grade.english==="Third Grade") setSubjects(years.ThirdGradeFirstTerm)
              if (grade.english==="Fourth Grade") setSubjects(years.FourthGradeFirstTerm)
              if (grade.english==="Fifth Grade") setSubjects(years.FifthGradeFirstTerm)
              if (grade.english==="Sixth Grade") setSubjects(years.SixthGradeFirstTerm)
              if (grade.english==="Seventh Grade") setSubjects(years.SeventhGradeFirstTerm)
              if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeFirstTerm)
              if (grade.english==="Ninth Grade") setSubjects(years.NinthGradeFirstTerm)
              if (grade.english==="SAT") setSubjects(years.TenthGradeAD)
              if (grade.english==="EST") setSubjects(years.TenthGradeAD)
              if (grade.english==="ACT") setSubjects(years.TenthGradeAD)
          } else if(isFirstTerm.english ==="Second Term") {
              if (grade.english==="First Grade") setSubjects(years.FirstGradeSecondTerm)
              if (grade.english==="Second Grade") setSubjects(years.SecondGradeSecondTerm)
              if (grade.english==="Third Grade") setSubjects(years.ThirdGradeSecondTerm)
              if (grade.english==="Fourth Grade") setSubjects(years.FourthGradeSecondTerm)
              if (grade.english==="Fifth Grade") setSubjects(years.FifthGradeSecondTerm)
              if (grade.english==="Sixth Grade") setSubjects(years.SixthGradeSecondTerm)
              if (grade.english==="Seventh Grade") setSubjects(years.SeventhGradeSecondTerm)
              if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeSecondTerm)
              if (grade?.english==="Ninth Grade") setSubjects(years.NinthGradeSecondTerm)
              if (grade.english==="SAT") setSubjects(years.TenthGradeAD)
              if (grade.english==="EST") setSubjects(years.TenthGradeAD)
              if (grade.english==="ACT") setSubjects(years.TenthGradeAD)
          }
      
    } else if (system.english === "British System") {
      if(isFirstTerm.english==="First Term") {
          if (grade.english==="First Grade") setSubjects(years.FirstGradeFirstTerm)
          if (grade.english==="Second Grade") setSubjects(years.SecondGradeFirstTerm)
          if (grade.english==="Third Grade") setSubjects(years.ThirdGradeFirstTerm)
          if (grade.english==="Fourth Grade") setSubjects(years.FourthGradeFirstTerm)
          if (grade.english==="Fifth Grade") setSubjects(years.FifthGradeFirstTerm)
          if (grade.english==="Sixth Grade") setSubjects(years.SixthGradeFirstTerm)
          if (grade.english==="Seventh Grade") setSubjects(years.SeventhGradeFirstTerm)
          if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeFirstTerm)
          if (grade.english==="Ninth Grade") setSubjects(years.NinthGradeFirstTerm)
          if (grade.english==="IGCSE") setSubjects(years.AS)
          if (grade.english==="AS") setSubjects(years.AS)
          if (grade.english==="OL") setSubjects(years.OL)
      } else if(isFirstTerm.english ==="Second Term") {
          if (grade.english==="First Grade") setSubjects(years.FirstGradeSecondTerm)
          if (grade.english==="Second Grade") setSubjects(years.SecondGradeSecondTerm)
          if (grade.english==="Third Grade") setSubjects(years.ThirdGradeSecondTerm)
          if (grade.english==="Fourth Grade") setSubjects(years.FourthGradeSecondTerm)
          if (grade.english==="Fifth Grade") setSubjects(years.FifthGradeSecondTerm)
          if (grade.english==="Sixth Grade") setSubjects(years.SixthGradeSecondTerm)
          if (grade.english==="Seventh Grade") setSubjects(years.SeventhGradeSecondTerm)
          if (grade.english==="Eighth Grade") setSubjects(years.EighthGradeSecondTerm)
          if (grade?.english==="Ninth Grade") setSubjects(years.NinthGradeSecondTerm)
          if (grade.english==="IGCSE") setSubjects(years.AS)
          if (grade.english==="AS") setSubjects(years.AS)
          if (grade.english==="OL") setSubjects(years.OL)
      }
  
}
  }, [isFirstTerm, grade, system])
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTest({...productData, user: user}))
        navigate('/tests')

    }


    if (!user) return null;




  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
            <div className="store-form-container">
                <div className="store-form-heading">
                    <h1>New Test</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                    <form onSubmit={handleSubmit}>
                        <div className="store-form-headings">
                            <input type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="Title" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.english}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setProductData({...productData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.english}</p>)
                        }
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {productData.grade.english}
                        </div>
                        {toggleGrade && 
                            grades.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                            {productData.term.english}
                        </div>
                        {toggleTerm && 
                            years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                            {productData?.subject?.english}
                        </div>
                        {toggleSubject && 
                            subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setProductData({...productData, subject: subject}); setToggleSubject(false)}}  key={i}>{subject?.english}</p>)
                        }
                        <div className="test-question-input-container">
                          <h4>Question {questions}</h4>
                          <div className="new-lesson-term" onClick={() => setToggleType(!toggleType)}>
                            {testQuestion?.type.english}
                          </div>
                          {toggleType && 
                            years.questionTypes.map((type, i) => <p className="new-lesson-option" onClick = {() => { setTestQuestion({...testQuestion, type: type}); setToggleType(false)}}  key={i}>{type?.english}</p>)
                          }
                          {testQuestion?.type?.english === "MCQ" && 
                            <>
                              <input required type="text" name="heading" placeholder="Question Heading" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input rquired type="text" name="heading" placeholder="Points" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              {mcqOptions.map((option, i) => <input type="text" name="option" placeholder="Option" onBlur={(e) => setTestQuestion({...testQuestion, options: [...testQuestion.options, e.target.value]})} />)}
                              <a onClick={() => setMcqOptions([...mcqOptions, "item"])}>Add new option</a>
                              <input rquired type="text" name="heading" placeholder="Correct Answer" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>Submit Question</a>
                            </>
                            
                          }

                        {testQuestion?.type?.english === "Pick the Odd One" && 
                            <>
                              <input required type="text" name="heading" placeholder="Points" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              {mcqOptions.map((option, i) => <input type="text" name="option" placeholder="Option" onBlur={(e) => setTestQuestion({...testQuestion, options: [...testQuestion.options, e.target.value]})} />)}
                              <a onClick={() => setMcqOptions([...mcqOptions, "item"])}>Add new option</a>
                              <input rquired type="text" name="heading" placeholder="Correct Answer" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>Submit Question</a>
                            </>
                          }
                          {testQuestion?.type?.english === "Explain" && 
                            <>
                              <input required type="text" name="heading" placeholder="Points" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input required type="text" name="heading" placeholder="Question" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input rquired type="text" name="heading" placeholder="Correct Answer" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>Submit Question</a>
                            </>
                          }
                          {testQuestion?.type?.english === "Essay" && 
                            <>
                              <input required type="text" name="heading" placeholder="Points" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input required type="text" name="heading" placeholder="Question" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input rquired type="text" name="heading" placeholder="Correct Answer" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>Submit Question</a>
                            </>
                          }
                          {testQuestion?.type?.english === "True or False" && 
                            <>
                              <input required type="text" name="heading" placeholder="Points" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input required type="text" name="heading" placeholder="Question" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input rquired type="text" name="heading" placeholder="Correct Answer" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>Submit Question</a>
                            </>
                          }
                          {testQuestion?.type?.english === "Fill In" && 
                            <>
                              <p>Write the question and replace the word/phrase to be filled in by ___</p>
                              <input required type="text" name="heading" placeholder="Points" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input required type="text" name="heading" placeholder="Question" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input rquired type="text" name="heading" placeholder="Correct Answer" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>Submit Question</a>
                            </>
                          }
                        </div>

                        {/* <a className="test-form-link" onClick={() => {setQuestions(questions+1); setTestQuestion({type: {},options: [], points: '',})}}>Add new question</a> */}
                        <a className="test-form-link" onClick={() => setIsPreview(!isPreview)}>Preview Test</a>
                        {isPreview && 
                          <div className="test-preview-container">
                            <h1>{productData?.title}</h1>
                            <h2>{productData?.grade?.english}</h2>
                            <h2>{productData?.term?.english}</h2>
                            <h2>{productData?.subject?.english}</h2>
                            {productData.questions.map((question, i) => 
                              <div key={i} className="test-preview-question">
                                <h1>Question {i+1}</h1>
                                <h2>{question?.type?.english}</h2>
                                {question?.type?.english !== "Pick the Odd One" ? <h2>{question?.title}</h2> : question?.options?.map((option) => <h3>{option}</h3>)}
                                {question?.type?.english === "MCQ" && 
                                <>
                                  {question?.options?.map((option) => <h3>{option}</h3>)}
                                </>
                                }
                                <h3>Answer: {question?.correctAnswer}</h3>
                              </div>
                            )}
                          </div>
                        }
                        <button type="submit" className="button-primary">Submit</button>
                    </form>
                </div>
            </div>
        <Footer />
      </>
  )
}

export default NewTest