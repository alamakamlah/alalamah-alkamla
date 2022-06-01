import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import LogoTitle from '../../assets/logotitle.png'
import User from '../../assets/usericon.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode';
import * as years from '../../constants/coursesandgrades.js'



const LoginMenu = ({user, setUser, navigate, logout}) => (
        user ? 
            (<div className="aa-navbar__container-login slit-in-vertical">
                <div className="aa-navbar__container-login_item" onClick={() => user?.result?.type?.english === "Admin" ? navigate('/admin') : user.result.email === 'for4future@gmail.com' ? navigate('/admin') : navigate('/dashboard')}>Dashboard</div>
                {user?.result?.type?.english !== "Admin" && user?.result?.email !== "for4future@gmail.com" &&
                <div className="aa-navbar__container-login_item" onClick={() => navigate('/profile/points')}>My Points</div>
                }
                {user?.result?.type?.english !== "Admin" && user?.result?.email !== "for4future@gmail.com" && user?.result?.type?.english !== "Teacher" && user?.result?.type?.english !== "Institution" &&
                <div className="aa-navbar__container-login_item" onClick={() => navigate('/subjects')}>Subjects</div>
                }
                <button className="button-primary" onClick={logout} >Sign Out</button>
            </div>)
         : 
           ( <div className="aa-navbar__container-login slit-in-vertical">
                <button className="button-secondary" onClick={() => navigate('/auth')}>Sign In</button>
                <button className="button-primary" onClick={() => navigate('/auth')} >Sign Up</button>
            </div>)
        
)
    
        


const Navbar = ({isEnglish, setIsEnglish}) => {
   
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleSignMenu, setToggleSignMenu] = useState(false)
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const navigate = useNavigate() 
    const dispatch = useDispatch()

    
    const location = useLocation()
    useEffect(() => {
        const token = user?.token;
    
        if (token) {
          const decodedToken = decode(token);
    
          if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
    
        setUser(JSON.parse(localStorage.getItem('profile')));
      }, [location]);

    const logout = () => {
        dispatch({type: 'LOGOUT'})
        navigate('/')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [])
   
  return (
    <div className="aa-navbar__container">
        <div className="aa-navbar__container-logo" onClick={() => navigate('/')}>
            <img src={Logo} alt="logo" />
            <img src={LogoTitle} alt="logo title" />
        </div>
        <div className="aa-navbar__container-menu">
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/')}>
                Home
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/lessons')}>
                Lessons
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => {navigate('/store')}}>
                Store
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/library')}>
                Library
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/courses')}>
                Courses
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/forum')}>
                Forum
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/tests')}>
                Tests
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/whoarwe')}> 
                Who are we
            </div>
        </div>
        <div className="aa-navbar__container-language" onClick={() => setIsEnglish(!isEnglish)}>
            العربية
        </div>
       
        <div className="aa-navbar__container-user" onClick={() => setToggleSignMenu(!toggleSignMenu)}>
            <img src={User} />
        </div>
        {toggleSignMenu && <LoginMenu  user={user} setUser={setUser} navigate={navigate} logout={logout} />}
        <div className="mobile-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="mobile-menu-container slit-in-vertical">
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/')}>
                Home
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/lessons')}>
                Lessons
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/store')}>
                Store
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/library')}>
                Library
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/courses')}>
                Courses
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/forum')}>
                Forum
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/tests')}>
                Tests
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/whoarwe')}>
                Who are we
            </div>
          </div>
        )}
      </div>
            
    </div>
  )
}

export default Navbar