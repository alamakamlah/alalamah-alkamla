import React, {useState, useEffect} from 'react'
import {Navbar, Footer} from '../../sections'
import './mycourses.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getCourses} from '../../actions/courses'
import { Course, AdIcon } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyCourses = ({isEnglish, setIsEnglish}) => {
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
        <div className="forum-container">
            <div className="forum-heading">
                <h1>My Courses</h1>
            </div>
            <div className="divider" />
            {user?.type?.english === "Teacher" && 
            <>
                <div className="forum-heading">
                  <h2>Courses I posted</h2>
                </div>
                <div className="lessons-container">
                  {myCourses?.map((lesson) => <Course key={lesson._id} course={lesson} />)}
                </div>
                <div className="forum-heading">
                  <h2>Courses I bought</h2>
                </div>

            </>}
            {user?.type?.english === "Institution" && 
            <>
                <div className="forum-heading">
                  <h2>Courses I posted</h2>
                </div>
                <div className="lessons-container">
                  {myCourses?.map((lesson) => <Course key={lesson._id} course={lesson} />)}
                </div>
                <div className="forum-heading">
                  <h2>Courses I bought</h2>
                </div>

            </>}
            <div className="lessons-container">
                {courses?.map((course) => <Course key={course._id} course={course} />)}
            </div>
        </div>
        
        <Footer />
      </>
  )
}

export default MyCourses