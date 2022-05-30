import React, {useEffect, useState} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import {useNavigate, useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import {getUsers, getUsersBySearch} from '../../actions/users'
import {UserAr} from '../../components'
import './users.css'
import * as years from '../../constants/coursesandgrades.js'


const UsersAr = ({isEnglish, setIsEnglish}) => {
    const location = useLocation()
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleSystem, setToggleSystem] = useState(false)
    const [type, setType] = useState({arabic: "النوع", english: "Type"});
    const [system, setSystem] = useState({arabic: "النظام", english: "System"});

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
      }, [])

      const searchLesson = (e) => {
        e.preventDefault()
        if (search.trim() || system?.english.trim() || type?.english.trim()) {
            const searchSystem = system?.english
            const searchType = type?.english
          dispatch(getUsersBySearch({ search, searchSystem, searchType}));
          navigate(`/users/search?searchQuery=${search || 'none'}&system=${searchSystem || 'none'}&type=${searchType || 'none'}`);
        } else {
          navigate('/');
        }
    }

      const users = useSelector((state) => state.users.users);


  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="users-container">
            <div className="requests-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{textAlign: "end", fontFamily: "var(--font-family-arabic)"}}>المستخدمون</h1>
                <div className="divider" />
                <div className="forum-search lesson-search" style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>
                    <form onSubmit={searchLesson}>
                        <input style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}} type="text" placeholder="البحث بالعنوان" value={search} onChange={(e) => setSearch(e.target.value)}   />
                        <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.arabic}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setSystem(year); setToggleSystem(false)}} >{year.arabic}</p>)
                        }
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {type?.arabic}
                        </div>
                        {toggleGrade && 
                            years.types.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setType(year); setToggleGrade(false)}} >{year.arabic}</p>)
                        }
                     
                        <button className="button-primary" type="submit" style={{fontFamily: "var(--font-family-arabic)"}}>بحث</button>
                    </form>
                </div>

            </div>
            <div className="users-container-all">
                {users.map((user) => <UserAr key={user._id} user={user} />)}
            </div>
        </div>
        <FooterAr />
      </>
  )
}

export default UsersAr