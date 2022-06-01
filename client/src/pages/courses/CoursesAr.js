import React, {useEffect, useState} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import {FaTrash, FaRegThumbsUp, FaRegEdit} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getCourses, getCourseBySearch } from '../../actions/courses'
import {CourseAr, AdIconAr} from '../../components'
import './courses.css'
import * as years from '../../constants/coursesandgrades.js'




const CoursesAr = ({isEnglish, setIsEnglish}) => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [subject, setSubject] = useState({arabic: "المادة", english: "Subject"});
    const [subjects, setSubjects] = useState([])
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const [grades, setGrades] = useState([])
    const [toggleSystem, setToggleSystem] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})

    const navigate = useNavigate()
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
    useEffect(() => {
        dispatch(getCourses())
    }, [])
    const courses = useSelector((state) => state.courses.courses)
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const canAdd = user?.type?.english === "Teacher" || user?.type?.english === "Institution" || user?.type?.english === "Admin"
    const searchCourses = (e) => {
        e.preventDefault()
        if (search.trim() || subject?.english.trim() || system?.english.trim() || grade?.english.trim() || isFirstTerm?.english.trim()) {
            const searchSystem = system?.english
            const searchGrade = grade?.english
            const searchTerm = isFirstTerm?.english
            const searchSubject = subject?.english
          dispatch(getCourseBySearch({ search, searchSystem, searchGrade, searchTerm, searchSubject}));
          navigate(`/courses/search?searchQuery=${search || 'none'}&system=${searchSystem || 'none'}&grade=${searchGrade || 'none'}&term=${searchTerm || 'none'}&subject=${searchSubject || 'none'}`);
        } else {
          navigate('/');
        }
    }


    if (!courses) return null
  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish}  />
        <AdIconAr />
            <div className="store-container">
                <div className="store-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                    <h1 style={{fontFamily: "var(--font-family-arabic)"}}>الدورات</h1>
                    <div className="store-search lesson-search">
                        <form onSubmit={searchCourses} style={{textAlign: "end", fontFamily: "var(--font-family-arabic)"}}>
                            <input style={{textAlign: "end", fontFamily: "var(--font-family-arabic)"}} type="text" placeholder="البحث بالعنوان" />
                            <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.arabic}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setSystem(year); setToggleSystem(false)}} >{year.arabic}</p>)
                        }
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {grade?.arabic}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                            }
                            <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                {isFirstTerm?.arabic}
                            </div>
                            {toggleTerm && 
                                years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => {setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                            }
                            <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                                {subject?.arabic}
                            </div>
                            {toggleSubject && 
                                subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setSubject(subject); setToggleSubject(false)}}  key={i}>{subject?.arabic}</p>)
                            }
                        <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" type="submit">بحث</button>
                        </form>
                    </div>
                </div>
                {user && canAdd &&
                    <h4 style={{textAlign: "end", flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}} className="store-link" onClick={() => {navigate('./new')}}>إضافة دورة جديدة</h4>                    
                }
                <div className="divider" />
                <div className="products-container">
                    {courses.map((course) => (
                        <div>
                            <CourseAr
                                key={course.id}
                                course={course}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        <FooterAr />
      </>
  )
}

export default CoursesAr