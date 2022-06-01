import React, {useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {NavbarAr, FooterAr} from '../../sections'
import { getUser, deleteUser, updateUser } from '../../actions/users'
import {FaRegEdit} from 'react-icons/fa'
import * as years from '../../constants/coursesandgrades.js'
import './userdetails.css'

 
const UserDetailsAr = ({isEnglish, setIsEnglish}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [grade, setGrade] = useState({})
    const [type, setType] = useState({})
    const [system, setSystem] = useState({})
    const [grades, setGrades] = useState([])
    const [isFirstTerm, setIsFirstTerm] = useState({})
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleType, setToggleType ] = useState(false)
    const [toggleSystem, setToggleSystem] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getUser(id));
      }, [id]);
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
      const {user, users} = useSelector((state) => state.users)

      const handleClick = async (e) => {
        e.preventDefault();
        console.log(type)
        console.log(userData)
        if (system) {
            userData = {...userData, system: system}
        }
        if (grade) {
            userData = {...userData, grade: grade}
        }
        if (isFirstTerm) {
            userData = {...userData, term: isFirstTerm}
        }
        if (type) {
            userData = {...userData, type: type}
        }
        await dispatch(updateUser(id, { ...userData }));
        window.location.reload()
    }
        
    const handleDelete = () => {
        dispatch(deleteUser(id))
        navigate('/users')
    }

    let userData = user
    const setUserData = (data) => {
        userData = data
    }
    
    if (!user) return null;
    
  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="user-details-container">
                <div className="request-details-heading" style={{flexDirection: "row-reverse"}}>
                    <h1 style={{textAlign: "end"}}>{user.name}</h1>
                    <div className="divider" />
                </div>
                {isDelete && 
                    <div className="is-delete-modal slit-in-vertical">
                        <h4>هل أنت متأكد أنك تريد حذف هذا المستخدم؟</h4>
                        <div className="user-delete-button-container">
                            <button className="button-primary user-delete-button" onClick={handleDelete}>حذف المستخدم</button>
                            <button className="button-secondary user-delete-button" onClick={() => {setIsDelete(false)}}>الغاء</button>
                        </div>
                    </div>
                }
                <div className="user-details-all" style={{flexDirection: "row-reverse"}}>
                    <div style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}} className="user-details-field">
                        <h3>الاسم </h3>
                        {isEdit ? <input type="text" placeholder={user.name} onChange={(e) => {setUserData({...userData, name: e.target.value})}} /> : <h3>{user.name}</h3>}
                    </div>
                    <div style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}} className="user-details-field">
                        <h3>البريد الالكتروني</h3>
                        <h3>{user.email}</h3>
                    </div>
                    <div className="user-details-field user-details-field-type" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h3>النوع </h3>
                        {isEdit ?     
                        <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleType(!toggleType)}>
                                {type?.arabic}
                            </div>
                            {toggleType && 
                                years.typesAdmin.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setUserData({...userData, type: year}); setType(year); setToggleType(false)}} >{year.arabic}</p>)
                            }
                        </div>

                    : <h3>{user?.type?.arabic}</h3>}
                    </div>
                    <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h3>النظام </h3>
                        {isEdit ? 
                        <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                                {system?.arabic}
                            </div>
                            {toggleSystem && 
                                years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setUserData({...userData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.arabic}</p>)
                            }
                        </div>
                         : <h3>{user?.system?.arabic}</h3>}
                    </div>
                    {user?.type?.english === "Student" && 
                        <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                            <h3>الصف الدراسي </h3>
                            {isEdit ? 
                            <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {grade?.arabic}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                            }
                            </div>
                            
                            : <h3>{user?.grade?.arabic}</h3>}
                        </div>
                    }
                    {user?.type?.english === "Parent" && 
                        <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                            <h3>الصف الدراسي </h3>
                            {isEdit ? 
                            <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {grade?.arabic}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                            }
                            </div>
                            
                            : <h3>{user?.grade?.arabic}</h3>}
                        </div>
                    }
                    {user?.type?.english === "Student" && 
                        <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                            <h3>الفصل الدراسي </h3>
                            {isEdit ?  
                            <div className="admin-user-mult-container">
                                <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                    {isFirstTerm?.arabic}
                                </div>
                                {toggleTerm && 
                                    years.terms.map((term, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                                }
                            </div>
                            : <h3>{user?.term?.arabic}</h3>}
                        </div>
                    }
                     {user?.type?.english === "Parent" && 
                        <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                            <h3>الفصل الدراسي</h3>
                            {isEdit ?  
                            <div className="admin-user-mult-container">
                                <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                    {isFirstTerm?.arabic}
                                </div>
                                {toggleTerm && 
                                    years.terms.map((term, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                                }
                            </div>
                            : <h3>{user?.term?.arabic}</h3>}
                        </div>
                    }
                    <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h3>رقم الهاتف </h3>
                        {isEdit ? <input type="phone" placeholder={user?.phone} onChange={(e) => {setUserData({...userData, phone: e.target.value})}} /> : <h3>{user?.phone}</h3>}
                    </div>
                    <div className="user-details-field" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
                        <h3>النقاط </h3>
                        {isEdit ? <input type="text" placeholder={user?.points} onChange={(e) => {setUserData({...userData, points: e.target.value})}} /> : <h3>{user.points}</h3>}
                    </div>
                </div>
                <div style={{fontFamily: "var(--font-family-arabic)"}} className="profile-edit-button" onClick={() => {setIsEdit((prevIsEdit) => !prevIsEdit)}}>
                    <p>تعديل الحساب</p> <FaRegEdit />
                </div>
                <h5 style={{fontFamily: "var(--font-family-arabic)"}} className="delete-user" onClick={() => setIsDelete(true)}>حذف المستخدم</h5>
               
                {isEdit && <button style={{fontFamily: "var(--font-family-arabic)"}} className="user-edit-submit button-secondary" onClick={handleClick}>تأكيد</button>}
            </div>
        <FooterAr />
      </>
  )
}

export default UserDetailsAr