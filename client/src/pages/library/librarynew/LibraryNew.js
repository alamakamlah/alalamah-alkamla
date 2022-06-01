import React, {useState, useEffect} from 'react'
import './librarynew.css'
import {Navbar, Footer} from '../../../sections'
import {createLibrary} from '../../../actions/library'
import { useDispatch, useSelector } from 'react-redux'
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom'
import * as years from '../../../constants/coursesandgrades.js'



const LibraryNew = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
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
    const [isPDF, setIsPDF] = useState(true)
    const [productData, setProductData] = useState({
        title: '',
        subject: {arabic: "المادة", english: "Subject"},
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        system: {arabic: "النظام", english: "system"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        url: '',
        desc: '',
        price: ''
    })
    const dispatch = useDispatch()
    const profile = JSON.parse(localStorage.getItem('profile'))?.result

    useEffect(() => {
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
    }, [isFirstTerm, grade, system])

    const handleSubmit = (e) => {
        e.preventDefault()
        let type=""
        if (isPDF) {
            type = "file"
        } else {
            type="video"
        }
        
        dispatch(createLibrary({...productData, type: type}))
        navigate('/library')
        

    }


    if (profile?.type?.english !== "Admin" || profile?.email !== "for4future@gmail.com") return null



  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="store-form-container">
                <div className="store-form-heading">
                    <h1>New Library Item</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
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
                        <button type="submit" className="button-primary">Submit</button>
                    </form>
                </div>
            </div>
        <Footer />
      </>
  )
}

export default LibraryNew

// import React, {useState, useEffect} from 'react'
// import './librarynew.css'
// import {Navbar, Footer} from '../../../sections'
// import {createLibrary} from '../../../actions/library'
// import { useDispatch, useSelector } from 'react-redux'
// import FileBase from 'react-file-base64';
// import { useNavigate } from 'react-router-dom'
// import{updateUser, getUser} from '../../../actions/users'


// const LibraryNew = () => {
//     const navigate = useNavigate()
//     const [isPDF, setIsPDF] = useState(true)
//     const [productData, setProductData] = useState({
//         title: '',
//         subject: '',
//         url: '',
//         creator: '',
//         desc: '',
//         price: 0
//     })
//     const dispatch = useDispatch()
//     const user = JSON.parse(localStorage.getItem('profile'))?.result
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         let type=""
//         if (isPDF) {
//             type = "file"
//         } else {
//             type="video"
//         }
//         dispatch(createLibrary({...productData, type: type}))
//         navigate('/library')
//     }


//     if (!user) return null;



//   return (
//       <>
//         <Navbar />
//             <div className="store-form-container">
//                 <div className="store-form-heading">
//                     <h1>New Library Item</h1>
//                 </div>
//                 <div className="divider" />
//                 <div className="store-form">
//                     <form onSubmit={handleSubmit}>
//                         <div className="store-form-headings">
//                             <input type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="Title" />
//                             <input type="text" name="subject" placeholder="Subject" onChange={(e) => setProductData({...productData, subject: e.target.value})} />
//                         </div>
//                         <input type="text" name="desc" onChange={(e) => setProductData({...productData, desc: e.target.value})} placeholder="Description" />
//                         <div className="store-form-type">
//                             <a onClick={() => setIsPDF(true)} className="aa-navbar__container-login_item">File</a>
//                             <a onClick={() => setIsPDF(false)} className="aa-navbar__container-login_item">Video</a>
//                             {!isPDF ? <input type="url" placeholder="Youtube video link" onChange={(e) => setProductData({...productData, url: e.target.value})} /> : <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, url: base64 })} /></div>}
//                         </div>
//                         <input type="text" name="price" placeholder="Price" onChange={(e) => setProductData({...productData, price: e.target.value})} />
//                         <button type="submit" className="button-primary">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         <Footer />
//       </>
//   )
// }

// export default LibraryNew