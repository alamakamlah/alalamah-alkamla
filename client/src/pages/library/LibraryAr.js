import React, {useEffect, useState} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import {FaTrash, FaRegThumbsUp, FaRegEdit} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { getLibrary, getLibraryBySearch } from '../../actions/library'
import {LibraryItemAr, AdIconAr} from '../../components'
import './library.css'
import * as years from '../../constants/coursesandgrades.js'



const LibraryAr = ({isEnglish, setIsEnglish}) => {
    const [search, setSearch] = useState('')
    const [subject, setSubject] = useState({arabic: "المادة", english: "Subject"});
    const [subjects, setSubjects] = useState([])
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const [grades, setGrades] = useState([])
    const [toggleSystem, setToggleSystem] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})
    const dispatch = useDispatch()
    useEffect(() => {
        if (system?.english === "Qatari System") {
            setGrades(years.yearsQatar)
        } else if (system?.english === "Egyptian System") {
            setGrades(years.yearsEgypt)
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
        }
        
      }, [isFirstTerm, grade, system])

    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getLibrary())
    }, [])

    const searchProduct = (e) => {
        e.preventDefault()
        if (search.trim() || subject?.english.trim() || system?.english.trim() || grade?.english.trim() || isFirstTerm?.english.trim()) {
            const searchSystem = system?.english
            const searchGrade = grade?.english
            const searchTerm = isFirstTerm?.english
            const searchSubject = subject?.english
          dispatch(getLibraryBySearch({ search, searchSystem, searchGrade, searchTerm, searchSubject}));
          navigate(`/library/search?searchQuery=${search || 'none'}&system=${searchSystem || 'none'}&grade=${searchGrade || 'none'}&term=${searchTerm || 'none'}&subject=${searchSubject || 'none'}`);
        } else {
          navigate('/');
        }
    }

    const library = useSelector((state) => state.library.library)
    const user = JSON.parse(localStorage.getItem('profile'))?.result



  return (
      <>
        <NavbarAr  isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
            <div className="store-container">
                <div className="store-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                    <h1 style={{fontFamily: "var(--font-family-arabic)"}}>المكتبة</h1>
                    <div className="store-search lesson-search" style={{textAlign: "end", fontFamily: "var(--font-family-arabic)"}}>
                        <form onSubmit={searchProduct}>
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

                            <button style={{fontFamily: "var(--font-family-arabic)"}} type="submit" className="button-primary">بحث</button>
                        </form>
                    </div>
                </div>
                {user?.email === "alalamahalkamla@gmail.com" && 
                    <h4 style={{textAlign: "end", flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}  className="store-link" onClick={() => {navigate('./new')}}>اضافة منتج جديد</h4>                    
                }
                <div className="divider" />
                <div className="products-container" style={{flexDirection: "row-reverse"}}>
                    {library.map((item) => (
                        <div>
                            <LibraryItemAr
                                key={item.id}
                                product={item}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        <FooterAr />
      </>
  )
}

export default LibraryAr