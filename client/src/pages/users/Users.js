import React, {useEffect, useState} from 'react'
import {Navbar, Footer} from '../../sections'
import {useNavigate, useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' 
import {getUsers, getUsersBySearch} from '../../actions/users'
import {User} from '../../components'
import './users.css'
import * as years from '../../constants/coursesandgrades.js'


const Users = ({isEnglish, setIsEnglish}) => {
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="users-container">
            <div className="requests-heading">
                <h1>Users</h1>
                <div className="divider" />
                <div className="forum-search lesson-search">
                    <form onSubmit={searchLesson}>
                        <input type="text" placeholder="Search by Name" value={search} onChange={(e) => setSearch(e.target.value)}   />
                        <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.english}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setSystem(year); setToggleSystem(false)}} >{year.english}</p>)
                        }
                        <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                            {type?.english}
                        </div>
                        {toggleGrade && 
                            years.types.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => {setType(year); setToggleGrade(false)}} >{year.english}</p>)
                        }
                     
                        <button className="button-primary" type="submit">Search</button>
                    </form>
                </div>

            </div>
            <div className="users-container-all">
                {users.map((user) => <User key={user._id} user={user} />)}
            </div>
        </div>
        <Footer />
      </>
  )
}

export default Users