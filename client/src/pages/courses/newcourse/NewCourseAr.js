import React, {useState, useEffect} from 'react'
import './newcourse.css'
import {NavbarAr, FooterAr} from '../../../sections'
import {createRequest} from '../../../actions/requests'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom'
import{updateUser, getUser} from '../../../actions/users'
import * as years from '../../../constants/coursesandgrades.js'
import {AdIconAr} from '../../../components'



const NewCourseAr = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [isPDF, setIsPDF] = useState(true)
    const [plan, setPlan] = useState('')
    const [lessonOne, setLessonOne] = useState({video: '', file: ''})
    const [lessonTwo, setLessonTwo] = useState({video: '', file: ''})
    const [lessonThree, setLessonThree] = useState({video: '', file: ''})
    const [lessonFour, setLessonFour] = useState({video: '', file: ''})
    const [lessonFive, setLessonFive] = useState({video: '', file: ''})
    const [productData, setProductData] = useState({
        title: '',
        subject: {arabic: "المادة", english: "Subject"},
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        system: {arabic: "النظام", english: "system"},
        lessons: [],
        desc: '',
        price: 0
    })
    const dispatch = useDispatch()
    const [subjects, setSubjects] = useState([])
    const [isEnough, setIsEnough] = useState(true)
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const [grades, setGrades] = useState([])
    const [toggleSystem, setToggleSystem] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)
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

    const id = JSON.parse(localStorage.getItem('profile'))?.result?._id
    useEffect(() => {
      dispatch(getUser(id));
    }, []);
  const {user, users} = useSelector((state) => state.users)

    const handleSubmit = (e) => {
      e.preventDefault()
        if (Number(user.points) < 300) {
            setIsEnough(false)
        } else {
            dispatch(createRequest({user: user, type: {arabic: "دورة", english: "course"}, data: {...productData, user: user, lessons: [lessonOne,
              lessonTwo,
              lessonThree,
              lessonFour,
              lessonFive]}}))
              setIsConfirm(true)
            }
    }


    if (!user) return null;



  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <AdIconAr />
            <div className="store-form-container">
                <div className="store-form-heading" style={{flexDirection: "row-reverse"}}>
                    <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>دورة جديدة</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>إضافة دورة جديدة سيكلفك 300 نقطة. لديك حاليًا {user?.points} نقطة.</h2>
                {!isEnough && <h3 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>رصيدك الحالي لا يكفي، فضلًا اشحن رصيدك حتى تتمكن من إضافة دورة جديدة <a href="/profile/points">اشحن رصيدك</a></h3>}
                    <form onSubmit={handleSubmit} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <div className="store-form-headings">
                            <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="العنوان" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.arabic}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setProductData({...productData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.arabic}</p>)
                        }
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {productData.grade.arabic}
                        </div>
                        {toggleGrade && 
                            grades.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                            {productData.term.arabic}
                        </div>
                        {toggleTerm && 
                            years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                            {productData?.subject?.arabic}
                        </div>
                        {toggleSubject && 
                            subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setProductData({...productData, subject: subject}); setToggleSubject(false)}}  key={i}>{subject?.arabic}</p>)
                        }
                        <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="text" name="desc" onChange={(e) => setProductData({...productData, desc: e.target.value})} placeholder="الوصف" />
                        <div className="course-lesson-input-field">
                        <h5>الدرس الأول</h5>
                          <div className="store-form-type">
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="url" placeholder="رابط الفيديو (يوتيوب)" onChange={(e) => setLessonOne({...lessonOne, video: e.target.value})} />
                              <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setLessonOne({...lessonOne, file: base64})} /></div>
                          </div>
                        </div>
                        <div className="course-lesson-input-field">
                        <h5>الدرس الثاني</h5>
                          <div className="store-form-type">
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="url" placeholder="رابط الفيديو (يوتيوب)" onChange={(e) => setLessonTwo({...lessonTwo, video: e.target.value})} />
                              <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setLessonTwo({...lessonTwo, file: base64})} /></div>
                          </div>
                        </div>
                        <div className="course-lesson-input-field">
                        <h5>الدرس الثالث</h5>
                          <div className="store-form-type">
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="url" placeholder="رابط الفيديو (يوتيوب)" onChange={(e) => setLessonThree({...lessonThree, video: e.target.value})} />
                              <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setLessonThree({...lessonThree, file: base64})} /></div>
                          </div>
                        </div>
                        <div className="course-lesson-input-field">
                        <h5>الدرس الرابع</h5>
                          <div className="store-form-type">
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="url" placeholder="رابط الفيديو (يوتيوب)" onChange={(e) => setLessonFour({...lessonFour, video: e.target.value})} />
                              <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setLessonFour({...lessonFour, file: base64})} /></div>
                          </div>
                        </div>
                        <div className="course-lesson-input-field">
                        <h5>الدرس الخامس</h5>
                          <div className="store-form-type">
                              <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="url" placeholder="رابط الفيديو (يوتيوب)" onChange={(e) => setLessonFive({...lessonFive, video: e.target.value})} />
                              <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setLessonFive({...lessonFive, file: base64})} /></div>
                          </div>
                        </div>
     
                        
                        <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="number" name="price" placeholder="السعر" onChange={(e) => setProductData({...productData, price: e.target.value})} />
                        {isConfirm && 
                            <div className="is-delete-modal slit-in-vertical">
                            <h4>تم ارسال طلبك وهو حاليًا بانتظار الموافقة، برجاء الانتظار 3 أيام عمل حتى يتم رفع الدورة</h4>
                            <div style={{ fontFamily: "var(--font-family-arabic)"}} className="is-delete-modal-actions">
                                <button style={{ fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={() => {navigate('/courses')}}>موافقة</button>
                            </div>
                            </div>
                        }
                        <button style={{ fontFamily: "var(--font-family-arabic)"}} type="submit" className="button-primary">تأكيد</button>
                    </form>
                </div>
            </div>
        <FooterAr />
      </>
  )
}

export default NewCourseAr