import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr, Posts} from '../../sections'
import './mytests.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getTests} from '../../actions/tests'
import { TestAr, AdIconAr } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyTestsAr = ({isEnglish, setIsEnglish}) => {
    const [subject, setSubject] = useState('');
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getTests())
      }, [])

    const testsC = useSelector((state) => state?.tests?.tests)

    let tests = []
     
    if (user?.type?.english === "Student" || user?.type?.english === "Parent") {
      tests = testsC.filter((lesson => lesson?.users.includes(user?._id) ))
    } else {
      tests = testsC.filter((lesson => lesson?.user?._id === user?._id ))
    }

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
        <div className="forum-container">
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>اختباراتي</h1>
            </div>
            <div className="divider" />

            <div className="lessons-container">
                {tests?.map((storeItem) => <TestAr key={storeItem._id} test={storeItem} />)}
            </div>
        </div>
        
        <FooterAr />
      </>
  )
}

export default MyTestsAr