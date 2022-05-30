import React, {useState, useEffect} from 'react'
import {Navbar, Footer, Posts} from '../../sections'
import './mylessons.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getLessonsBySearch, getLessons, createLesson} from '../../actions/lessons'
import { Lesson, AdIcon } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyLessons = ({isEnglish, setIsEnglish}) => {
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
        <div className="forum-container">
            <div className="forum-heading">
                <h1>My Lessons</h1>
            </div>
            <div className="divider" />
            {user?.type?.english === "Teacher" && 
            <>
                <div className="forum-heading">
                  <h2>Lessons I posted</h2>
                </div>
                <div className="lessons-container">
                  {myLessons?.map((lesson) => <Lesson key={lesson._id} lesson={lesson} />)}
                </div>
                <div className="forum-heading">
                  <h2>Lessons I bought</h2>
                </div>

            </>}
            {user?.type?.english === "Institution" && 
            <>
                <div className="forum-heading">
                  <h2>Lessons I posted</h2>
                </div>
                <div className="lessons-container">
                  {myLessons?.map((lesson) => <Lesson key={lesson._id} lesson={lesson} />)}
                </div>
                <div className="forum-heading">
                  <h2>Lessons I bought</h2>
                </div>

            </>}
            <div className="lessons-container">
                {lessons?.map((lesson) => <Lesson key={lesson._id} lesson={lesson} />)}
            </div>
        </div>
        
        <Footer />
      </>
  )
}

export default MyLessons