import React, {useState, useEffect} from 'react'
import './newlesson.css'
import {NavbarAr, FooterAr} from '../../../sections'
import { AdIcon } from '../../../components'
import {createRequest} from '../../../actions/requests'
import{ getUser } from '../../../actions/users'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as years from '../../../constants/coursesandgrades.js'



const NewLessonAr = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [lessonData, setLessonData] = useState({
        title: '',
        subject: {arabic: "المادة", english: "Subject"},
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        url: '',
        desc: '',
        price: '',
        date: '',
        time: ''
    })
    const [subjects, setSubjects] = useState([])
    const [isEnough, setIsEnough] = useState(true)
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})
    const dispatch = useDispatch()
        
    useEffect(() => {
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
        } else {
        }
    

      }, [isFirstTerm, grade])


    const id = JSON.parse(localStorage.getItem('profile'))?.result?._id
    useEffect(() => {
        dispatch(getUser(id));
      }, []);
    const {user, users} = useSelector((state) => state.users)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(user.points) < 20) {
            setIsEnough(false)
        } else {
            dispatch(createRequest({user: user, type: {arabic: "درس", english: "lesson"}, data: {...lessonData, user: user}}))
            navigate('/lessons')
        }
    }

    if (!user) return null;


  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="store-form-container">
                <div className="store-form-heading">
                    <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>درس جديد</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>إضافة درس جديد سيكلفك 20 نقطة، لديك حاليًا {user?.points} نقطة.</h2>
                    {!isEnough && <h3 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>ليس لديك حاليًا رصيد كافي. فضلًا اشحن رصيدك لتتمكن من رفع درس جديد <a href="/profile/points" style={{color: "gray"}}>اشحن رصيدك</a></h3>}
                    <form onSubmit={handleSubmit} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <div className="store-form-headings">
                            <input type="text" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} name="title" onChange={(e) => setLessonData({...lessonData, title: e.target.value})} placeholder="العنوان" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {lessonData.grade.arabic}
                        </div>
                        {toggleGrade && 
                            years.yearsEgypt.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setLessonData({...lessonData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                            {lessonData.term.arabic}
                        </div>
                        {toggleTerm && 
                            years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => { setLessonData({...lessonData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                            {lessonData?.subject?.arabic}
                        </div>
                        {toggleSubject && 
                            subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setLessonData({...lessonData, subject: subject}); setToggleSubject(false)}}  key={i}>{subject?.arabic}</p>)
                        }
                        <input type="text" name="desc" onChange={(e) => setLessonData({...lessonData, desc: e.target.value})} placeholder="الوصف" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />
                        <input type="text" name="url" onChange={(e) => setLessonData({...lessonData, url: e.target.value})} placeholder="رابط الميتنج (زووم)" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />
                        <input type="date" placeholder="Date" onChange={(e) => setLessonData({...lessonData, date: e.target.value})} />
                        <input type="time" name="time" placeholder="Price" onChange={(e) => setLessonData({...lessonData, time: e.target.value})} />
                        <input type="number" name="price" placeholder="السعر" onChange={(e) => setLessonData({...lessonData, price: e.target.value})} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />
                        <button type="submit" className="button-primary" style={{ fontFamily: "var(--font-family-arabic)"}}>تأكيد</button>
                    </form>
                </div>
            </div>
            <AdIcon />
        <FooterAr />
      </>
  )
}

export default NewLessonAr

// import React, {useState, useEffect} from 'react'
// import './newlesson.css'
// import {NavbarAr, FooterAr} from '../../../sections'
// import {createLesson} from '../../../actions/lessons'
// import{updateUser, getUser} from '../../../actions/users'

// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// const NewLessonAr = ({isEnglish, setIsEnglish}) => {
//     const navigate = useNavigate()
//     const [lessonData, setLessonData] = useState({
//         title: '',
//         subject: {},
//         url: '',
//         desc: '',
//         price: '',
//         date: '',
//         time: ''
//     })
//     const dispatch = useDispatch()
//     const id = JSON.parse(localStorage.getItem('profile'))?.result?._id
//     useEffect(() => {
//         dispatch(getUser(id));
//       }, []);
//     const {user, users} = useSelector((state) => state.users)
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const newPoints = Number(user?.points) - 20
//         dispatch(createLesson({...lessonData, user: user}))
//         dispatch(updateUser(id, {...user, points: String(newPoints)}))
//         navigate('/lessons')
//     }


//     if (!user) return null;


//   return (
//       <>
//         <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
//             <div className="store-form-container">
//                 <div className="store-form-heading" style={{flexDirection: "row-reverse"}}>
//                     <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>درس جديد</h1>
//                 </div>
//                 <div className="divider" />
//                 <div className="store-form">
//                     <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>إضافة درس جديد سيكلفك 20 نقطة، لديك حاليًا {user?.points} نقطة.</h2>
//                     <form onSubmit={handleSubmit} style={{justifyContent: "flex-start"}}>
//                         <div className="store-form-headings">
//                             <input type="text" name="title" onChange={(e) => setLessonData({...lessonData, title: e.target.value})} placeholder="العنوان" />
//                             <input type="text" name="subject" placeholder="المادة" onChange={(e) => setLessonData({...lessonData, subject: e.target.value})} />
//                         </div>
//                         <input type="text" name="desc" onChange={(e) => setLessonData({...lessonData, desc: e.target.value})} placeholder="الوصف" />
//                         <input type="text" name="url" onChange={(e) => setLessonData({...lessonData, url: e.target.value})} placeholder="رابط الإجتماع (زووم)" />
//                         <input type="date" placeholder="التاريخ" onChange={(e) => setLessonData({...lessonData, date: e.target.value})} />
//                         <input type="time" name="time" placeholder="الوقت" onChange={(e) => setLessonData({...lessonData, time: e.target.value})} />
//                         <input type="text" name="price" placeholder="السعر" onChange={(e) => setLessonData({...lessonData, price: e.target.value})} />
//                         <button type="submit" className="button-primary">تأكيد</button>
//                     </form>
//                 </div>
//             </div>
//         <FooterAr />
//       </>
//   )
// }

// export default NewLessonAr