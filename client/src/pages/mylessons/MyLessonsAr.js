import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr, Posts} from '../../sections'
import './mylessons.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getLessonsBySearch, getLessons, createLesson} from '../../actions/lessons'
import { LessonAr, AdIconAr } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyLessonsAr = ({isEnglish, setIsEnglish}) => {
    const [search, setSearch] = useState('')
    const [subject, setSubject] = useState('');
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getLessons())
      }, [])

    const lessonsC = useSelector((state) => state.lessons.lessons)

    let lessons = []
    let myLessons = []
     
    lessons = lessonsC.filter((lesson => lesson?.users.includes(user?._id) ))
    myLessons = lessonsC.filter((lesson => lesson?.user?._id === user?._id ))
  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
        <div className="forum-container">
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
              <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دروسي</h1>
            </div>
            <div className="divider" />
            {user?.type?.english === "Teacher" && 
            <>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دروس قمت برفعها</h2>
                </div>
                <div className="lessons-container">
                  {myLessons?.map((lesson) => <LessonAr key={lesson._id} lesson={lesson} />)}
                </div>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دروس قمت بشرائها</h2>
                </div>

            </>}
            {user?.type?.english === "Institution" && 
            <>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دروس قمت برفعها</h2>
                </div>
                <div className="lessons-container">
                  {myLessons?.map((lesson) => <LessonAr key={lesson._id} lesson={lesson} />)}
                </div>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دروس قمت بشرائها</h2>
                </div>
            </>}
            <div className="lessons-container">
                {lessons?.map((lesson) => <LessonAr key={lesson._id} lesson={lesson} />)}
            </div>
        </div>
        
        <FooterAr />
      </>
  )
}

export default MyLessonsAr











