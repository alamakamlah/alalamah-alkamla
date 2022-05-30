import React, {useState, useEffect} from 'react'
import './auth.css'
import { FaFacebookF, FaGoogle} from 'react-icons/fa'
import {GoogleLogin} from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signin, signup, googleSignup, fbSignup} from '../../actions/auth'
import * as years from '../../constants/coursesandgrades.js'

const Auth = () => {
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
        password: '',
        confirmPassword: '',
        grade: {arabic: "الصف الدراسي", english: "Grade"},
        term: {arabic: "الفصل الدراسي", english: "Term"},
        system: {arabic: "النظام", english: "system"},
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
            dispatch(fbSignup({...formData, email: response.email, name: response.name}, navigate))
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }
    

   

  return (
    <div className="auth-container">
        <div className="auth-form">
        {isSignUp ? (<h1>Sign Up</h1>) : (<h1>Sign In</h1>)}
        <div className="divider" />
            {isSignUp ? (
                <form onSubmit={handleSubmit}>
                    <div className="form-name-container">
                        <input required type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
                        <input required type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />  
                    </div>
                    <div className="multiple-input-container">
                        <input type="radio" name="user_type" id="user-type-student" />
                        <label htmlFor="user-type-student" onClick={() => {setFormData({...formData, type: years.types[0]})}}>{years.types[0].english}</label>
                        <input type="radio" name="user_type" id="user-type-teacher" />
                        <label htmlFor="user-type-teacher" onClick={() => {setFormData({...formData, type: years.types[1]})}}>{years.types[1].english}</label>
                        <input type="radio" name="user_type" id="user-type-parent" />
                        <label htmlFor="user-type-parent" onClick={() => {setFormData({...formData, type: years.types[2]})}}>{years.types[2].english}</label>
                        <input type="radio" name="user_type" id="user-type-institution" />
                        <label htmlFor="user-type-institution" onClick={() => {setFormData({...formData, type: years.types[3]})}}>{years.types[3].english}</label>
                    </div>
                    <div className="new-lesson-grade" onClick={() => setToggleSystem(!toggleSystem)}>
                            {system?.english}
                        </div>
                        {toggleSystem && 
                            years.Systems.map((year, i) => <p className="new-lesson-option" key={i} onClick={() => { setFormData({...formData, system: year}); setSystem(year); setToggleSystem(false)}} >{year.english}</p>)
                        }
                    {formData.type.english === "Student"  && (
                        <>
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {formData.grade.english}
                            </div>
                            {toggleGrade && 
                                grades.map((year, i) => <p className="auth-option" key={i} onClick={() => { setFormData({...formData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                            }
                        </>
                    )}
                    {formData.type.english === "Student"  && (
                        <>
                            <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                {formData.term.english}
                            </div>
                            {toggleTerm && 
                                years.terms.map((term, i) => <p className="auth-option" key={i} onClick={() => { setFormData({...formData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                            }
                        </>
                    )}
                    {formData.type.english === "Parent"  && (
                        <>
                            <div className="new-lesson-grade" onClick={() => setToggleGrade(!toggleGrade)}>
                                {formData.grade.english}
                            </div>
                            {toggleGrade && 
                                years.yearsEgypt.map((year, i) => <p className="auth-option" key={i} onClick={() => { setFormData({...formData, grade: year}); setGrade(year); setToggleGrade(false)}} >{year.english}</p>)
                            }
                        </>
                    )}
                    {formData.type.english === "Parent"  && (
                        <>
                            <div className="new-lesson-term" onClick={() => setToggleTerm(!toggleTerm)}>
                                {formData.term.english}
                            </div>
                            {toggleTerm && 
                                years.terms.map((term, i) => <p className="auth-option" key={i} onClick={() => { setFormData({...formData, term: term}); setIsFirstTerm(term); setToggleTerm(false)}} >{term.english}</p>)
                            }
                        </>
                    )}
                   
                    <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
                    <input required type="phone" placeholder="Phone Number" name="phone" onChange={handleChange} />
                    <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <input required type="password" placeholder="Confirm Password" name="confirmPassword" onChange={handleChange} />
                    <input type="submit" />
                    <p>Already have an account? <a onClick={() => setIsSignUp(false)}>Sign In</a></p>
                </form>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input required type="email" placeholder="Email" name="email" onChange={handleChange} />
                    <input required type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <input type= "submit" />
                    <p>New user? <a onClick={() => setIsSignUp(true)}>Sign Up</a></p>
                </form>
            )}
            <div className="divider" />
            <div className="other-signin-options">
                <GoogleLogin 
                    clientId="204260199713-j5qi79sqb1dssft3vsuksr0sarbiq020.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button 
                            className="google-signin" 
                            onClick={renderProps.onClick} 
                            disabled={renderProps.disabled}  > <FaGoogle /> Sign In with Google</button>
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
                      className="fabebook-login"
                      onClick={renderProps.onClick}
                    >  
                          <FaFacebookF />  Sign up with Facebook
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

export default Auth
