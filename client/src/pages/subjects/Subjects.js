import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Navbar, Footer} from '../../sections'
import { DashboardItem, AdIcon } from '../../components'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import { getLibraryBySearch } from '../../actions/library'
import { getProductsBySearch } from '../../actions/store'
import { getLessonsBySearch } from '../../actions/lessons'
import { getTestsBySearch } from '../../actions/tests'
import {getCourseBySearch} from '../../actions/courses'
import {Lesson, Course, Product, LibraryItem, Test} from '../../components'
import Logo from '../../assets/logo.png'
import './subjects.css'
import * as years from '../../constants/coursesandgrades.js'



const Subjects = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [subjects, setSubjects] = useState([])
    // const [isComplete, setIsComplete] = useState(true)
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

        
        if (user?.system?.english === "Qatari System") {
            setGrades(years.yearsQatar)
        } else if (system?.english === "Egyptian System") {
            setGrades(years.yearsEgypt)
        }
    }
    }, [])
    useEffect(() => {
        if (!isComplete) {
            if (user?.system?.english === "Egyptian System") {
                if(user?.term?.english==="First Term") {
                    if (user?.grade.english==="First Grade") setSubjects(years.FirstGradeFirstTerm)
                    if (user?.grade.english==="Second Grade") setSubjects(years.SecondGradeFirstTerm)
                    if (user?.grade.english==="Third Grade") setSubjects(years.ThirdGradeFirstTerm)
                    if (user?.grade.english==="Fourth Grade") setSubjects(years.FourthGradeFirstTerm)
                    if (user?.grade.english==="Fifth Grade") setSubjects(years.FifthGradeFirstTerm)
                    if (user?.grade.english==="Sixth Grade") setSubjects(years.SixthGradeFirstTerm)
                    if (user?.grade.english==="Seventh Grade") setSubjects(years.SeventhGradeFirstTerm)
                    if (user?.grade.english==="Eighth Grade") setSubjects(years.EighthGradeFirstTerm)
                    if (user?.grade.english==="Ninth Grade") setSubjects(years.NinthGradeFirstTerm)
                    if (user?.grade.english==="Tenth Grade") setSubjects(years.TenthGrade)
                    if (user?.grade.english==="Eleventh Grade") setSubjects(years.EleventhGrade)
                    if (user?.grade.english==="Twelfth Grade") setSubjects(years.TwelfthGrade)
                    if (user?.grade.english==="Tenth Grade (American Diploma)") setSubjects(years.TenthGradeAD)
                    if (user?.grade.english==="Eleventh Grade (American Diploma)") setSubjects(years.EleventhGradeAD)
                    if (user?.grade.english==="Twelfth Grade (American Diploma)") setSubjects(years.TwelfthGradeAD)
                } else if(user?.term.english ==="Second Term") {
                    if (user?.grade.english==="First Grade") setSubjects(years.FirstGradeSecondTerm)
                    if (user?.grade.english==="Second Grade") setSubjects(years.SecondGradeSecondTerm)
                    if (user?.grade.english==="Third Grade") setSubjects(years.ThirdGradeSecondTerm)
                    if (user?.grade.english==="Fourth Grade") setSubjects(years.FourthGradeSecondTerm)
                    if (user?.grade.english==="Fifth Grade") setSubjects(years.FifthGradeSecondTerm)
                    if (user?.grade.english==="Sixth Grade") setSubjects(years.SixthGradeSecondTerm)
                    if (user?.grade.english==="Seventh Grade") setSubjects(years.SeventhGradeSecondTerm)
                    if (user?.grade.english==="Eighth Grade") setSubjects(years.EighthGradeSecondTerm)
                    if (user?.grade?.english==="Ninth Grade") setSubjects(years.NinthGradeSecondTerm)
                    if (user?.grade?.english==="Tenth Grade") setSubjects(years.TenthGrade)
                    if (user?.grade?.english==="Eleventh Grade") setSubjects(years.EleventhGrade)
                    if (user?.grade?.english==="Twelfth Grade") setSubjects(years.TwelfthGrade)
                    if (user?.grade.english==="Tenth Grade (American Diploma)") setSubjects(years.TenthGradeAD)
                    if (user?.grade.english==="Eleventh Grade (American Diploma)") setSubjects(years.EleventhGradeAD)
                    if (user?.grade.english==="Twelfth Grade (American Diploma)") setSubjects(years.TwelfthGradeAD)
                }
            } else if (user?.system?.english === "Qatari System") {
                if (user?.grade.english==="First Grade") setSubjects(years.FirstLevel)
                if (user?.grade.english==="Second Grade") setSubjects(years.FirstLevel)
                if (user?.grade.english==="Third Grade") setSubjects(years.ThirdLevel)
                if (user?.grade.english==="Fourth Grade") setSubjects(years.ThirdLevel)
                if (user?.grade.english==="Fifth Grade") setSubjects(years.ThirdLevel)
                if (user?.grade.english==="Sixth Grade") setSubjects(years.ThirdLevel)
                if (user?.grade.english==="Seventh Grade") setSubjects(years.ThirdLevel)
                if (user?.grade.english==="Eighth Grade") setSubjects(years.EighthGradeFirstTerm)
                if (user?.grade.english==="Ninth Grade") setSubjects(years.EighthGradeFirstTerm)
                if (user?.grade.english==="Tenth Grade") setSubjects(years.TenthLevel)
                if (user?.grade.english==="Eleventh Grade Arts and Humanities") setSubjects(years.EleventhLevelArts)
                if (user?.grade.english==="Eleventh Grade Science") setSubjects(years.EleventhLevelSci)
                if (user?.grade.english==="Eleventh Grade Technology") setSubjects(years.EleventhLevelTech)
                if (user?.grade.english==="Twelfth Grade Arts and Humanities") setSubjects(years.TwelfthLevelArts)
                if (user?.grade.english==="Twelfth Grade Science") setSubjects(years.TwelfthLevelSci)
                if (user?.grade.english==="Twelfth Grade Technology") setSubjects(years.TwelfthLevelTech)
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
            <div className="admin-dashboard-container">
                <div className="store-heading">
                        <h1>Subjects</h1>
                    </div>
                <div className="divider" />
                {!isComplete ? 
                <>
                    <div className="dashboard-items-container">
                        {subjects?.map((subject) => 
                        <div className="user-dashboard-item" onClick={(e) => {setSubject(subject); search(e)}}>
                            <DashboardItem img={Logo} title={subject?.english} />
                        </div>
                        )}
                    </div>

                    <div className="subjects-content-container">

                        <h1>{subject?.english}</h1>
                        <div className="forum-heading">
                            <h2>Library</h2>
                        </div>
                        <div className="divider" />

                        <div className="lessons-container">
                            {library?.map((storeItem) => <LibraryItem key={storeItem._id} product={storeItem} />)}
                        </div>
                        <div className="forum-heading">
                            <h2>Store</h2>
                        </div>
                        <div className="divider" />

                        <div className="lessons-container">
                            {store?.map((storeItem) => <Product key={storeItem._id} product={storeItem} />)}
                        </div>
                        <div className="forum-heading">
                            <h2>Lessons</h2>
                        </div>
                        <div className="divider" />

                        <div className="lessons-container">
                            {lessons?.map((storeItem) => <Lesson key={storeItem._id} lesson={storeItem} />)}
                        </div>
                        <div className="forum-heading">
                            <h2>Courses</h2>
                        </div>
                        <div className="divider" />

                        <div className="lessons-container">
                            {courses?.map((storeItem) => <Course key={storeItem._id} course={storeItem} />)}
                        </div>
                        <div className="forum-heading">
                            <h2>Tests</h2>
                        </div>
                        <div className="divider" />

                        <div className="lessons-container">
                            {tests?.map((storeItem) => <Test key={storeItem._id} test={storeItem} />)}
                        </div>



                    </div>
                </> : <p className="complete-your-profile">Please complete your profile so you can view your subjects</p> }


            </div>

        <Footer />
      </>
  )
}

export default Subjects