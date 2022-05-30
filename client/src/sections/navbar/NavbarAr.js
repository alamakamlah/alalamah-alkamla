import Logo from '../../assets/logo.png'
import React, {useState, useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import decode from 'jwt-decode';
import LogoTitle from '../../assets/logotitle.png'
import User from '../../assets/usericon.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const LoginMenu = ({user, navigate, logout}) => (
        user ? 
            (<div className="aa-navbar__container-login slit-in-vertical" style={{left: "0%"}}>
                <div className="aa-navbar__container-login_item" onClick={() => user.result.email === 'alalamahalkamla@gmail.com' ? navigate('/admin') : user.result.email === 'for4future@gmail.com' ? navigate('/admin') : navigate('/dashboard')}>لوحة التحكم</div>
                {user?.result?.email !== "alalamahalkamla@gmail.com" && user?.result?.email !== "for4future@gmail.com" && 
                    <div className="aa-navbar__container-login_item" onClick={() => navigate('/profile/points')}>نقاطي</div>
                }
                {user?.result?.email !== "alalamahalkamla@gmail.com" && user?.result?.email !== "for4future@gmail.com" &&  user?.result?.type?.english !== "Teacher" && user?.result?.type?.english !== "Institution" &&
                    <div className="aa-navbar__container-login_item" onClick={() => navigate('/subjects')}>المناهج</div>
                }
                <button className="button-primary" onClick={logout}>تسجيل الخروج</button>
            </div>)
         : 
           ( <div className="aa-navbar__container-login slit-in-vertical" style={{left: "0%"}}>
                <button className="button-secondary" onClick={() => navigate('/auth')}>تسجيل الدخول</button>
                <button className="button-primary" onClick={() => navigate('/auth')}>التسجيل</button>
            </div>)
        
)
    
        


const NavbarAr = ({isEnglish, setIsEnglish}) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleSignMenu, setToggleSignMenu] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
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
    <div className="aa-navbar__container" style={{flexDirection: "row-reverse"}}>
        <div className="aa-navbar__container-logo" onClick={() => navigate('/')}>
            <img src={Logo} />
            <img src={LogoTitle} />
        </div>
        <div className="aa-navbar__container-menu" style={{flexDirection: "row-reverse"}}>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/')}>
                الرئيسية
            </div>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/lessons')}>
               الدروس
            </div>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/store')}>
                المتجر
            </div>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/library')}>
                المكتبة
            </div>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/courses')}>
                الدورات
            </div>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/forum')}>
                المنتدى
            </div>
            <div className="aa-navbar__container-menu__item"style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/tests')}>
                الاختبارات
            </div>
            <div className="aa-navbar__container-menu__item" style={{margin: "0 12px", fontSize: "1.2rem"}} onClick={() => navigate('/whoarwe')}>
                من نحن
            </div>
        </div>
        <div className="aa-navbar__container-language" onClick={() => setIsEnglish(!isEnglish)}>
            English
        </div>
       
        <div className="aa-navbar__container-user" onClick={() => setToggleSignMenu(!toggleSignMenu)}>
            <img src={User} />
        </div>
        {toggleSignMenu && <LoginMenu user={user} navigate={navigate} logout={logout} />}
        <div className="mobile-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="mobile-menu-container slit-in-vertical " style={{left: "0%"}}>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/')}>
                الرئيسية
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/lessons')}>
                الدروس
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/store')}>
                المتجر
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/library')}>
                المكتبة
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/courses')}>
                الدورات
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/forum')}>
                المنتدى
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/tests')}>
                الاختبارات
            </div>
            <div className="aa-navbar__container-menu__item" onClick={() => navigate('/whoarwe')}>
                من نحن
            </div>
          </div>
        )}
      </div>
            
    </div>
  )
}

export default NavbarAr