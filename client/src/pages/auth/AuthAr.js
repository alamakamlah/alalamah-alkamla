import React, {useState, useEffect} from 'react'
import './auth.css'
import { FaFacebookF, FaGoogle} from 'react-icons/fa'
import {GoogleLogin} from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signin, signup, googleSignup, fbSignup} from '../../actions/auth'
import * as years from '../../constants/coursesandgrades.js'

const AuthAr = () => {
    const [isSignUp, setIsSignUp] = useState(true)
    const [grade, setGrade] = useState({})
    const [isFirstTerm, setIsFirstTerm] = useState({})
    const [toggleGrade, setToggleGrade ] = useState(false)
    const [toggleTerm, setToggleTerm ] = useState(false)
    const [toggleSystem, setToggleSystem] = useState(false)
    const [system, setSystem] = useState({arabic: "النظام", english: "System"})
    const [grades, setGrades] = useState([])
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        type: {},
        system: {arabic: "النظام", english: "system"},
        password: '',
        confirmPassword: '',
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        points: 0,
        library: [],

    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({...formData, grade: grade, term: isFirstTerm, system: system})
        if(isSignUp) {
            dispatch(signup(formData, navigate))
        } else {
            dispatch(signin(formData, navigate))

        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleGrade = (e) => {
        setGrade(years.yearsEgypt[Number(e.target.value)])
        setFormData({...formData, grade: grade})
    }

    const handleTerm = (e) => {
        setIsFirstTerm(years.terms[Number(e.target.value)])
        setFormData({...formData, term: isFirstTerm})
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId 
        setFormData({...formData, email: result.email, firstName: result.givenName, lastName: result.familyName})
        try {
            dispatch(googleSignup({...formData, email: result.email, firstName: result.givenName, lastName: result.familyName}, navigate))
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Again Later")
    }

    const responseFacebook = (response) => {
        try {
            if (response) {
                dispatch(fbSignup({...formData, email: response.email, name: response.name}, navigate))
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }
    

   

  return (
    <div className="auth-container">
        <div className="auth-form">
        {isSignUp ? (<h1 style={{fontFamily: "var(--font-family-arabic)"}}>التسجيل</h1>) : (<h1 style={{fontFamily: "var(--font-family-arabic)"}}>تسجيل الدخول</h1>)}
        <div className="divider" />
            {isSignUp ? (
                <form onSubmit={handleSubmit}  style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                    <div className="form-name-container" style={{display: "flex", flexDirection: "row-reverse", }}>
                        <input required type="text" placeholder="الاسم الأول" name="firstName" onChange={handleChange} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />
                        <input required type="text" placeholder="اسم العائلة" name="lastName" onChange={handleChange} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />  
                    </div>
                    <div className="multiple-input-container" style={{display: "flex", flexDirection: "row-reverse", }} >
                        <input type="radio" name="user_type" id="user-type-student" />
                        <label style={{fontFamily: "var(--font-family-arabic)"}} htmlFor="user-type-student" onClick={() => {setFormData({...formData, type: years.types[0]})}}>{years.types[0].arabic}</label>
                        <input type="radio" name="user_type" id="user-type-teacher" />
                        <label style={{fontFamily: "var(--font-family-arabic)"}} htmlFor="user-type-teacher" onClick={() => {setFormData({...formData, type: years.types[1]})}}>{years.types[1].arabic}</label>
                        <input type="radio" name="user_type" id="user-type-parent" />
                        <label style={{fontFamily: "var(--font-family-arabic)"}} htmlFor="user-type-parent" onClick={() => {setFormData({...formData, type: years.types[2]})}}>{years.types[2].arabic}</label>
                        <input type="radio" name="user_type" id="user-type-institution" />
                        <label style={{fontFamily: "var(--font-family-arabic)"}} htmlFor="user-type-institution" onClick={() => {setFormData({...formData, type: years.types[3]})}}>{years.types[3].arabic}</label>
                    </div>
                    <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.arabic}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setFormData({...formData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.arabic}</p>)
                        }

                    {formData.type.english === "Student"  && (
                        <>
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {formData.grade.arabic}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p style={{fontFamily: "var(--font-family-arabic)"}} className="auth-option" key={i} onClick={() => { setFormData({...formData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                            }
                        </>
                    )}
                    {formData.type.english === "Student"  && (
                        <>
                            <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                {formData.term.arabic}
                            </div>
                            {toggleTerm && 
                                years.terms.map((term, i) => <p style={{fontFamily: "var(--font-family-arabic)"}} className="auth-option" key={i} onClick={() => { setFormData({...formData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                            }
                        </>
                    )}
                    {formData.type.english === "Parent"  && (
                        <>
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {formData.grade.arabic}
                            </div>
                            {toggleGrade && 
                                years.yearsEgypt.map((year, i) => <p style={{fontFamily: "var(--font-family-arabic)"}} className="auth-option" key={i} onClick={() => { setFormData({...formData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.arabic}</p>)
                            }
                        </>
                    )}
                    {formData.type.english === "Parent"  && (
                        <>
                            <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                {formData.term.arabic}
                            </div>
                            {toggleTerm && 
                                years.terms.map((term, i) => <p style={{fontFamily: "var(--font-family-arabic)"}} className="auth-option" key={i} onClick={() => { setFormData({...formData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.arabic}</p>)
                            }
                        </>
                    )}
                   
                    <input required style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="email" placeholder="البريد الالكتروني" name="email" onChange={handleChange} />
                    <input required style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="phone" placeholder="رقم الهاتف" name="phone" onChange={handleChange} />
                    <input required style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="password" placeholder="كلمة السر" name="password" onChange={handleChange} />
                    <input required style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="password" placeholder="تأكيد كلمة السر" name="confirmPassword" onChange={handleChange} />
                    <button style={{fontFamily: "var(--font-family-arabic)"}} className="auth-submit-button" type="submit">تأكيد</button>
                    <p style={{fontFamily: "var(--font-family-arabic)"}}>لديك حساب؟ <a onClick={() => setIsSignUp(false)}>تسجيل الدخول</a></p>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input required style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="email" placeholder="البريد الالكتروني" name="email" onChange={handleChange} />
                    <input required style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} type="password" placeholder="كلمة السر" name="password" onChange={handleChange} />
                    <button style={{fontFamily: "var(--font-family-arabic)"}} className="auth-submit-button" type="submit">تأكيد</button>
                    <p style={{fontFamily: "var(--font-family-arabic)"}}>مستخدم جديد؟ <a onClick={() => setIsSignUp(true)}>التسجيل</a></p>
                </form>
            )}
            <div className="divider" />
            <div className="other-signin-options">
                <GoogleLogin 
                
                    clientId="204260199713-j5qi79sqb1dssft3vsuksr0sarbiq020.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button 
                          style={{display:"flex", justifyContent: "space-evenly", alignItems: "center", fontFamily: "var(--font-family-arabic)"}}
                            className="google-signin" 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}  > <FaGoogle /> تسجيل الدخول باستخدام جوجل</button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <FacebookLogin
                className="facebook-login"
                appId="683810156028577"
                autoLoad={false}
                fields="name,email"
                render={(renderProps) => (
                    <button
                      style={{display:"flex", justifyContent: "space-evenly", alignItems: "center", fontFamily: "var(--font-family-arabic)"}}
                      className="fabebook-login"
                      onClick={renderProps.onClick}
                    >  
                          <FaFacebookF />  تسجيل الدخول باستخدام فيسبوك
                    </button>
                )}        
                scope="public_profile,email"
                callback={responseFacebook}
                icon="fa-facebook" />
            </div>
        </div>
    </div>
  )
}

export default AuthAr
