import React, {useState, useEffect} from 'react'
import './newtest.css'
import {NavbarAr, FooterAr} from '../../../sections'
import {createTest} from '../../../actions/tests'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AdIconAr } from '../../../components'
import * as years from '../../../constants/coursesandgrades.js'



const NewTestAr = ({isEnglish, setIsEnglish}) => {
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
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
            <div className="store-form-container">
                <div className="store-form-heading" style={{flexDirection: "row-reverse"}}>
                    <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>اختبار جديد</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                    <form onSubmit={handleSubmit} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <div className="store-form-headings">
                            <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="العنوان" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.arabic}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setProductData({...productData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.arabic}</p>)
                        }
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {productData.grade.arabic}
                        </div>
                        {toggleGrade && 
                            grades.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                            {productData.term.arabic}
                        </div>
                        {toggleTerm && 
                            years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                            {productData?.subject?.arabic}
                        </div>
                        {toggleSubject && 
                            subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setProductData({...productData, subject: subject}); setToggleSubject(false)}}  key={i}>{subject?.arabic}</p>)
                        }
                        <div className="test-question-input-container" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                          <h4>:السؤال {questions}</h4>
                          <div className="new-lesson-term" onClick={() => setToggleType(!toggleType)}>
                            {testQuestion?.type.arabic}
                          </div>
                          {toggleType && 
                            years.questionTypes.map((type, i) => <p className="new-lesson-option" onClick = {() => { setTestQuestion({...testQuestion, type: type}); setToggleType(false)}}  key={i}>{type?.arabic}</p>)
                          }
                          {testQuestion?.type?.english === "MCQ" && 
                            <>
                              <input  style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}required type="text" name="heading" placeholder="رأس السؤال" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} rquired type="text" name="heading" placeholder="الدرجة" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              {mcqOptions.map((option, i) => <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" name="option" placeholder="اختيار" onBlur={(e) => setTestQuestion({...testQuestion, options: [...testQuestion.options, e.target.value]})} />)}
                              <a style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} onClick={() => setMcqOptions([...mcqOptions, "item"])}>إضافة اختيار</a>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} rquired type="text" name="heading" placeholder="الإجابة الصحيحة" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>تأكيد السؤال</a>
                            </>
                            
                          }

                        {testQuestion?.type?.english === "Pick the Odd One" && 
                            <>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="الدرجة" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              {mcqOptions.map((option, i) => <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" name="option" placeholder="اختيار" onBlur={(e) => setTestQuestion({...testQuestion, options: [...testQuestion.options, e.target.value]})} />)}
                              <a style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} onClick={() => setMcqOptions([...mcqOptions, "item"])}>إضافة اختيار</a>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} rquired type="text" name="heading" placeholder="الإجابة الصحيحة" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>تأكيد السؤال</a>
                            </>
                          }
                          {testQuestion?.type?.english === "Explain" && 
                            <>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="الدرجة" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="رأس السؤال" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} rquired type="text" name="heading" placeholder="الإجابة الصحيحة" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>تأكيد السؤال</a>
                            </>
                          }
                          {testQuestion?.type?.english === "Essay" && 
                            <>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="الدرجة" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="رأس السؤال" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} rquired type="text" name="heading" placeholder="الإجابة الصحيحة" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>تأكيد السؤال</a>
                            </>
                          }
                          {testQuestion?.type?.english === "True or False" && 
                            <>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="الدرجة" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="heading" placeholder="رأس السؤال" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} rquired type="text" name="heading" placeholder="الإجابة الصحيحة" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>تأكيد السؤال</a>
                            </>
                          }
                          {testQuestion?.type?.english === "Fill In" && 
                            <>
                              <p>اكتب السؤال وضع ___ مكان الجملة أو الكلمة المراد استكمالها</p>
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}  required type="text" name="heading" placeholder="الدرجة" onChange={(e) => setTestQuestion({...testQuestion, points: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}  required type="text" name="heading" placeholder="رأس السؤال" onChange={(e) => setTestQuestion({...testQuestion, title: e.target.value})} />
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}  rquired type="text" name="heading" placeholder="الاجابة الصحيحة" onChange={(e) => setTestQuestion({...testQuestion, correctAnswer: e.target.value})} />
                              <a  style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {setProductData({...productData, questions: [...productData.questions, testQuestion]}); setTestQuestion({type: {english: "Question Type", arabic: "نوع السؤال"},options: [], points: '',}); setQuestions(questions+1); setMcqOptions(["item"])}}>تأكيد السؤال</a>
                            </>
                          }
                        </div>

                        {/* <a className="test-form-link" onClick={() => {setQuestions(questions+1); setTestQuestion({type: {},options: [], points: '',})}}>Add new question</a> */}
                        <a style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} className="test-form-link" onClick={() => setIsPreview(!isPreview)}>عرض الاختبار</a>
                        {isPreview && 
                          <div className="test-preview-container" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}> 
                            <h1>{productData?.title}</h1>
                            <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{productData?.system?.arabic}</h2>
                            <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{productData?.grade?.arabic}</h2>
                            <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{productData?.term?.arabic}</h2>
                            <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{productData?.subject?.arabic}</h2>
                            {productData.questions.map((question, i) => 
                              <div key={i} className="test-preview-question">
                                <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>:السؤال {i+1}</h1>
                                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{question?.type?.arabic}</h2>
                                {question?.type?.english !== "Pick the Odd One" ? <h2>{question?.title}</h2> : question?.options?.map((option) => <h3>{option}</h3>)}
                                {question?.type?.english === "MCQ" && 
                                <>
                                  {question?.options?.map((option) => <h3>{option}</h3>)}
                                </>
                                }
                                <h3>الإجابة الصحيحة {question?.correctAnswer}</h3>
                              </div>
                            )}
                          </div>
                        }
                        <button type="submit" className="button-primary" style={{fontFamily: "var(--font-family-arabic)"}}>رفع الاختبار</button>
                    </form>
                </div>
            </div>
        <FooterAr />
      </>
  )
}

export default NewTestAr