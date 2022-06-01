import React, {useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Footer} from '../../sections'
import { getUser, deleteUser, updateUser } from '../../actions/users'
import {FaRegEdit} from 'react-icons/fa'
import * as years from '../../constants/coursesandgrades.js'
import './userdetails.css'
import { type } from '@testing-library/user-event/dist/type'

 
const UserDetails = ({isEnglish, setIsEnglish}) => {
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="user-details-container">
                <div className="request-details-heading">
                    <h1>{user.name}</h1>
                    <div className="divider" />
                </div>
                {isDelete && 
                    <div className="is-delete-modal slit-in-vertical">
                        <h4>Are you sure you want to delete this user?</h4>
                        <div className="user-delete-button-container">
                            <button className="button-primary user-delete-button" onClick={handleDelete}>Delete</button>
                            <button className="button-secondary user-delete-button" onClick={() => {setIsDelete(false)}}>Cancel</button>
                        </div>
                    </div>
                }
                <div className="user-details-all">
                    <div className="user-details-field">
                        <h3>Name: </h3>
                        {isEdit ? <input type="text" placeholder={user.name} onChange={(e) => {setUserData({...userData, name: e.target.value})}} /> : <h3>{user.name}</h3>}
                    </div>
                    <div className="user-details-field">
                        <h3>Email: </h3>
                        <h3>{user.email}</h3>
                    </div>
                    <div className="user-details-field user-details-field-type">
                        <h3>Type: </h3>
                        {isEdit ?     
                        <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleType(!toggleType)}>
                                {type?.english}
                            </div>
                            {toggleType && 
                                years.typesAdmin.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setUserData({...userData, type: year}); setType(year); setToggleType(false)}} >{year.english}</p>)
                            }
                        </div>

                    : <h3>{user?.type?.english}</h3>}
                    </div>
                    <div className="user-details-field">
                        <h3>System: </h3>
                        {isEdit ? 
                        <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                                {system?.english}
                            </div>
                            {toggleSystem && 
                                years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setUserData({...userData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.english}</p>)
                            }
                        </div>
                         : <h3>{user?.system?.english}</h3>}
                    </div>
                    {user?.type?.english === "Student" && 
                        <div className="user-details-field">
                            <h3>Grade: </h3>
                            {isEdit ? 
                            <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {grade?.english}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                            }
                            </div>
                            
                            : <h3>{user?.grade?.english}</h3>}
                        </div>
                    }
                    {user?.type?.english === "Parent" && 
                        <div className="user-details-field">
                            <h3>Grade: </h3>
                            {isEdit ? 
                            <div className="admin-user-mult-container">
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {grade?.english}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                            }
                            </div>
                            
                            : <h3>{user?.grade?.english}</h3>}
                        </div>
                    }
                    {user?.type?.english === "Student" && 
                        <div className="user-details-field">
                            <h3>Term: </h3>
                            {isEdit ?  
                            <div className="admin-user-mult-container">
                                <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                    {isFirstTerm?.english}
                                </div>
                                {toggleTerm && 
                                    years.terms.map((term, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                                }
                            </div>
                            : <h3>{user?.term?.english}</h3>}
                        </div>
                    }
                     {user?.type?.english === "Parent" && 
                        <div className="user-details-field">
                            <h3>Term: </h3>
                            {isEdit ?  
                            <div className="admin-user-mult-container">
                                <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                    {isFirstTerm?.english}
                                </div>
                                {toggleTerm && 
                                    years.terms.map((term, i) => <p className="auth-option" key={i} onClick={() => { setUserData({...userData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                                }
                            </div>
                            : <h3>{user?.term?.english}</h3>}
                        </div>
                    }
                    <div className="user-details-field">
                        <h3>Phone Number: </h3>
                        {isEdit ? <input type="phone" placeholder={user?.phone} onChange={(e) => {setUserData({...userData, phone: e.target.value})}} /> : <h3>{user?.phone}</h3>}
                    </div>
                    <div className="user-details-field">
                        <h3>Points: </h3>
                        {isEdit ? <input type="text" placeholder={user?.points} onChange={(e) => {setUserData({...userData, points: e.target.value})}} /> : <h3>{user.points}</h3>}
                    </div>
                </div>
                <div className="profile-edit-button" onClick={() => {setIsEdit((prevIsEdit) => !prevIsEdit)}}>
                    <p>Edit Profile</p> <FaRegEdit />
                </div>
                <h5 className="delete-user" onClick={() => setIsDelete(true)}>Delete User</h5>
               
                {isEdit && <button className="user-edit-submit button-secondary" onClick={handleClick}>Submit</button>}
            </div>
        <Footer />
      </>
  )
}

export default UserDetails