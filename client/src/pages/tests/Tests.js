import React, {useEffect, useState} from 'react'
import {Navbar, Footer} from '../../sections'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getTests, getTestsBySearch } from '../../actions/tests'
import {Test, AdIcon} from '../../components'
import './tests.css'
import * as years from '../../constants/coursesandgrades.js'


const Tests = ({isEnglish, setIsEnglish}) => {
    const [search, setSearch] = useState('')
    const [subject, setSubject] = useState({arabic: "المادة", english: "Subject"});
    const [subjects, setSubjects] = useState([])
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const [grades, setGrades] = useState([])
    const [toggleSystem, setToggleSystem] = useState(false)
    const dispatch = useDispatch()
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
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getTests())
    }, [])
    const searchProduct = (e) => {
        e.preventDefault()
        if (search.trim() || subject?.english.trim() || system?.english.trim() || grade?.english.trim() || isFirstTerm?.english.trim()) {
            const searchSystem = system?.english
            const searchGrade = grade?.english
            const searchTerm = isFirstTerm?.english
            const searchSubject = subject?.english
          dispatch(getTestsBySearch({ search, searchSystem, searchGrade, searchTerm, searchSubject}));
          navigate(`/tests/search?searchQuery=${search || 'none'}&system=${searchSystem || 'none'}&grade=${searchGrade || 'none'}&term=${searchTerm || 'none'}&subject=${searchSubject || 'none'}`);
        } else {
          navigate('/');
        }
    }

    const tests = useSelector((state) => state.tests.tests)
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const canAdd = user?.type?.english === "Teacher" || user?.type?.english === "Institution" || user?.type?.english === "Admin"




  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
            <div className="store-container">
                <div className="store-heading">
                    <h1>Tests</h1>
                    <div className="store-search lesson-search">
                        <form onSubmit={searchProduct}>
                            <input type="text" placeholder="Search by Title" />
                            <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.english}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setSystem(year); setToggleSystem(false)}} >{year.english}</p>)
                        }
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {grade?.english}
                        </div>
                        {toggleGrade && 
                            grades.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                            {isFirstTerm?.english}
                        </div>
                        {toggleTerm && 
                            years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => {setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                            {subject?.english}
                        </div>
                        {toggleSubject && 
                            subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setSubject(subject); setToggleSubject(false)}}  key={i}>{subject?.english}</p>)
                        }
                            <button className="button-primary">Search</button>
                        </form>
                    </div>
                </div>
                {user && canAdd &&
                    <h4 className="store-link" onClick={() => {navigate('./new')}}>Add new test</h4>                    
                }
                <div className="divider" />
                <div className="products-container">
                    {tests.map((test) => (
                        <div>
                            <Test
                                key={test.id}
                                test={test}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        <Footer />
      </>
  )
}

export default Tests