import React, {useEffect, useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Navbar, Footer} from '../../sections'
import { getUser, deleteUser, updateUser } from '../../actions/users'
import {FaRegEdit} from 'react-icons/fa'
import * as years from '../../constants/coursesandgrades.js'
import './userdetails.css'

 
const UserDetails = ({isEnglish, setIsEnglish}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [grade, setGrade] = useState({})
    const [system, setSystem] = useState({})
    const [grades, setGrades] = useState([])
    const [isFirstTerm, setIsFirstTerm] = useState({})
    const [toggleGrade, setToggleGrade ] = useState(false)
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
    }, [system])
      const {user, users} = useSelector((state) => state.users)

      const handleClick = (e) => {
          e.preventDefault();
          if (system) {
              userData = {...userData, system: system}
          }
          if (grade) {
            userData = {...userData, grade: grade}
        }
        if (isFirstTerm) {
            userData = {...userData, term: isFirstTerm}
        }
          dispatch(updateUser(id, { ...userData }));
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
                        <div className="admin-multiple-input-container">
                            <input type="radio" name="user_type" id="user-type-student" />
                            <label htmlFor="user-type-student" onClick={() => {setUserData({...userData, type: years.types[0]})}}>{years.types[0].english}</label>
                            <input type="radio" name="user_type" id="user-type-teacher" />
                            <label htmlFor="user-type-teacher" onClick={() => {setUserData({...userData, type: years.types[1]})}}>{years.types[1].english}</label>
                            <input type="radio" name="user_type" id="user-type-parent" />
                            <label htmlFor="user-type-parent" onClick={() => {setUserData({...userData, type: years.types[2]})}}>{years.types[2].english}</label>
                            <input type="radio" name="user_type" id="user-type-institution" />
                            <label htmlFor="user-type-institution" onClick={() => {setUserData({...userData, type: years.types[3]})}}>{years.types[3].english}</label>
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