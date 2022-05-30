import React, {useState, useEffect} from 'react'
import './storeform.css'
import {Navbar, Footer} from '../../../sections'
import {createRequest} from '../../../actions/requests'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom'
import{getUser} from '../../../actions/users'
import { AdIcon } from '../../../components'
import * as years from '../../../constants/coursesandgrades.js'



const StoreForm = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [subjects, setSubjects] = useState([])
    const [isEnough, setIsEnough] = useState(true)
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSubject, setToggleSubject ] = useState(false)
    const [grade, setGrade] = useState({arabic: "الصف الدراسي", english: "Grade"})
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});
    const [grades, setGrades] = useState([])
    const [toggleSystem, setToggleSystem] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)
    const [isFirstTerm, setIsFirstTerm] = useState({arabic: "الفصل الدراسي", english: "Term"})
    const [isPDF, setIsPDF] = useState(true)
    const [productData, setProductData] = useState({
        title: '',
        subject: {arabic: "المادة", english: "Subject"},
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        system: {arabic: "النظام", english: "system"},
        url: '',
        desc: '',
        price: ''
    })
    const dispatch = useDispatch()
    const id = JSON.parse(localStorage.getItem('profile'))?.result?._id
    useEffect(() => {
        dispatch(getUser(id));
    })
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

    const {user, users} = useSelector((state) => state.users)
    const handleSubmit = (e) => {
        e.preventDefault()
        let type=""
        if (isPDF) {
            type = "file"
        } else {
            type="video"
        }
        if (Number(user.points) < 10) {
            setIsEnough(false)
        } else {
            dispatch(createRequest({user: user, type: {arabic: "المتجر", english: "store"}, data: {...productData, type: type, user: user}}))
            setIsConfirm(true)
        }

    }


    if (!user) return null;



  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
            <div className="store-form-container">
                <div className="store-form-heading">
                    <h1>New Product</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                <h2>Each new product costs you 10 points to submit it. you currently have {user?.points} points.</h2>
                {!isEnough && <h3>You currenty don't have enough points. Please Charge your points to submit a new lesson <a href="/profile/points">Charge Your Points</a></h3>}
                    <form onSubmit={handleSubmit}>
                        <div className="store-form-headings">
                            <input type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="Title" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.english}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setProductData({...productData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.english}</p>)
                        }
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {productData.grade.english}
                        </div>
                        {toggleGrade && 
                            grades.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                            {productData.term.english}
                        </div>
                        {toggleTerm && 
                            years.terms.map((term, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                        }
                        <div className="new-lesson-term" onClick={() => setToggleSubject(!toggleSubject)}>
                            {productData?.subject?.english}
                        </div>
                        {toggleSubject && 
                            subjects?.map((subject, i) => <p className="new-lesson-option" onClick = {() => { setProductData({...productData, subject: subject}); setToggleSubject(false)}}  key={i}>{subject?.english}</p>)
                        }

                        <input type="text" name="desc" onChange={(e) => setProductData({...productData, desc: e.target.value})} placeholder="Description" />
                        <div className="store-form-type">
                            <a onClick={() => setIsPDF(true)} className="aa-navbar__container-login_item">File</a>
                            <a onClick={() => setIsPDF(false)} className="aa-navbar__container-login_item">Video</a>
                            {!isPDF ? <input type="url" placeholder="Youtube video link" onChange={(e) => setProductData({...productData, url: e.target.value})} /> : <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, url: base64 })} /></div>}
                        </div>
                        <input type="number" name="price" placeholder="Price" onChange={(e) => setProductData({...productData, price: e.target.value})} />
                        {isConfirm && 
                            <div className="is-delete-modal slit-in-vertical">
                            <h4>Your request is submitted and is currently being processed. please wait for 3 business days for the product to be added</h4>
                            <div className="is-delete-modal-actions">
                                <button className="button-primary" onClick={() => {navigate('/lessons')}}>Ok</button>
                            </div>
                            </div>
                        }
                        <button type="submit" className="button-primary">Submit</button>
                    </form>
                </div>
            </div>
        <Footer />
      </>
  )
}

export default StoreForm