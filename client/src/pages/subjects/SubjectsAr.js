import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {NavbarAr, FooterAr} from '../../sections'
import { DashboardItem, AdIconAr } from '../../components'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import { getLibraryBySearch } from '../../actions/library'
import { getProductsBySearch } from '../../actions/store'
import { getLessonsBySearch } from '../../actions/lessons'
import { getTestsBySearch } from '../../actions/tests'
import {getCourseBySearch} from '../../actions/courses'
import {LessonAr, CourseAr, ProductAr, LibraryItemAr, TestAr} from '../../components'
import Logo from '../../assets/logo.png'
import './subjects.css'
import * as years from '../../constants/coursesandgrades.js'



const SubjectsAr = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [subjects, setSubjects] = useState([])
    const [grades, setGrades] = useState([])
    const [subject, setSubject] = useState({arabic: "المادة", english: "Subject"})
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const dispatch = useDispatch()
    const id = JSON.parse(localStorage.getItem('profile'))?.result?._id
    useEffect(() => {
        dispatch(getUser(id));
    })
    const {user, users} = useSelector((state) => state.users)
    const [grade, setGrade] = useState(user?.grade)

    const [isFirstTerm, setIsFirstTerm] = useState(user?.term)

    const isComplete = !user?.system || !user?.grade || !user?.term



    useEffect(() => {
        if (!isComplete) {

        
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
          }
    }, [])
    useEffect(() => {
        if (!isComplete) {
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
        }
        
      }, [])


      const search = (e) => {
        e.preventDefault()
        if (subject?.english.trim() || grade?.english.trim() || isFirstTerm?.english.trim()) {
            const searchGrade = grade?.english
            const searchTerm = isFirstTerm?.english
            const searchSubject = subject?.english
          dispatch(getLibraryBySearch({ searchGrade, searchTerm, searchSubject}));
          dispatch(getProductsBySearch({ searchGrade, searchTerm, searchSubject}));
          dispatch(getLessonsBySearch({ searchGrade, searchTerm, searchSubject}));
          dispatch(getTestsBySearch({ searchGrade, searchTerm, searchSubject}));
          dispatch(getCourseBySearch({ searchGrade, searchTerm, searchSubject}));
        } else {
          navigate('/');
        }
    }

    const library = useSelector((state) => state.library.library)
    const store = useSelector((state) => state.store.products)
    const lessons = useSelector((state) => state.lessons.lessons)
    const tests = useSelector((state) => state.tests.tests)
    const courses = useSelector((state) => state.courses.courses)

    if (!user) return null;

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
            <div className="admin-dashboard-container">
                <div className="store-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h1 style={{fontFamily: "var(--font-family-arabic)"}}>المواد</h1>
                    </div>
                <div className="divider" />
                {!isComplete ? 
                <>
                    <div className="dashboard-items-container">
                    {subjects?.map((subject) => 
                    <div className="user-dashboard-item" onClick={(e) => {setSubject(subject); search(e)}}>
                        <DashboardItem img={Logo} title={subject?.arabic} />
                    </div>
                    )}
                    </div>

                    <div className="subjects-content-container" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>

                    <h1>{subject?.arabic}</h1>
                    <div className="forum-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>المكتبة</h2>
                    </div>
                    <div className="divider" />

                    <div className="lessons-container">
                        {library?.map((storeItem) => <LibraryItemAr key={storeItem._id} product={storeItem} />)}
                    </div>
                    <div className="forum-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>المتجر</h2>
                    </div>
                    <div className="divider" />

                    <div className="lessons-container">
                        {store?.map((storeItem) => <ProductAr key={storeItem._id} product={storeItem} />)}
                    </div>
                    <div className="forum-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>الدروس</h2>
                    </div>
                    <div className="divider" />

                    <div className="lessons-container">
                        {lessons?.map((storeItem) => <LessonAr key={storeItem._id} lesson={storeItem} />)}
                    </div>
                    <div className="forum-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>الدورات</h2>
                    </div>
                    <div className="divider" />

                    <div className="lessons-container">
                        {courses?.map((storeItem) => <CourseAr key={storeItem._id} course={storeItem} />)}
                    </div>
                    <div className="forum-heading" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>الاختبارات</h2>
                    </div>
                    <div className="divider" />

                    <div className="lessons-container">
                        {tests?.map((storeItem) => <TestAr key={storeItem._id} test={storeItem} />)}
                    </div>



                    </div>
                </> :  <p className="complete-your-profile">برجاء اكمال حسابك حتى تتمكن من رؤية موادك</p> }


            </div>

        <FooterAr />
      </>
  )
}

export default SubjectsAr