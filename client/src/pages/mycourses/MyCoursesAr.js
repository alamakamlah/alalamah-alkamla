import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import './mycourses.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getCourses} from '../../actions/courses'
import { CourseAr, AdIconAr } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyCoursesAr = ({isEnglish, setIsEnglish}) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getCourses())
      }, [])

    const coursesC = useSelector((state) => state.courses.courses)

    let courses = []
    let myCourses = []
     
    courses = coursesC.filter((lesson => lesson?.users.includes(user?._id) )) 
    myCourses = coursesC.filter((lesson => lesson?.user?._id === user?._id ))

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
        <div className="forum-container">
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دوراتي</h1>
            </div>
            <div className="divider" />
            {user?.type?.english === "Teacher" && 
            <>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دورات قمت برفعها</h2>
                </div>
                <div className="lessons-container">
                  {myCourses?.map((lesson) => <CourseAr key={lesson._id} course={lesson} />)}
                </div>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دورات قمت بشرائها</h2>
                </div>

            </>}
            {user?.type?.english === "Institution" && 
            <>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دورات قمت برفعها</h2>
                </div>
                <div className="lessons-container">
                  {myCourses?.map((lesson) => <CourseAr key={lesson._id} course={lesson} />)}
                </div>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دورات قمت بشرائها</h2>
                </div>

            </>}
            <div className="lessons-container">
                {courses?.map((course) => <CourseAr key={course._id} course={course} />)}
            </div>
        </div>
        
        <FooterAr />
      </>
  )
}

export default MyCoursesAr



// import React, {useState, useEffect} from 'react'
// import {NavbarAr, FooterAr} from '../../sections'
// import './mycourses.css'
// import {useDispatch, useSelector} from 'react-redux'
// import {useLocation, useNavigate} from 'react-router-dom'
// import{getCourses} from '../../actions/courses'
// import { CourseAr, AdIconAr } from '../../components'
// import * as years from '../../constants/coursesandgrades.js'


// const MyCoursesAr = ({isEnglish, setIsEnglish}) => {
//     const dispatch = useDispatch()
//     const user = JSON.parse(localStorage.getItem('profile'))?.result
//     const navigate = useNavigate()
//     useEffect(() => {
//         dispatch(getCourses())
//       }, [])

//     const coursesC = useSelector((state) => state.courses.courses)

//     let courses = []
     
//     user?.type?.english === "Student" ? courses = coursesC.filter((lesson => lesson?.users.includes(user?._id) )): courses = coursesC.filter((lesson => lesson?.user?._id === user?._id ))
//   return (
//       <>
//         <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
//         <AdIconAr />
//         <div className="forum-container">
//             <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
//                 <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دوراتي</h1>
//             </div>
//             <div className="divider" />
//             <div className="lessons-container" style={{flexDirection: "row-reverse"}}>
//                 {courses?.map((course) => <CourseAr key={course._id} course={course} />)}
//             </div>
//         </div>
        
//         <FooterAr />
//       </>
//   )
// }

// export default MyCoursesAr