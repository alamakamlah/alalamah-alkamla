import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getRequest, deleteRequest } from '../../actions/requests'
import { updateUser, getUser } from '../../actions/users'
import { createLesson } from '../../actions/lessons'
import { createProduct } from '../../actions/store'
import { createCourse } from '../../actions/courses'
import {createAd} from '../../actions/ads'
import {NavbarAr, FooterAr} from '../../sections'
import './requestdetails.css'



const RequestDetails = ({isEnglish, setIsEnglish}) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate()
    const [isReject, setIsReject] = useState(false)
    useEffect(() => {
        dispatch(getRequest(id));
      }, []);

    const {request, requests} = useSelector((state) => state.requests)
    
    useEffect(() => {
        dispatch(getUser(request?.user?._id));
    }, []);
    
    const {user, users} = useSelector((state) => state.users)
    const [points, setPoints] = useState('')

    const handleChange = (e) => {        
        setPoints(e.target.value)
    }

    const handleClick = () => {
        const currentPoints = Number(user.points)
        const updatedPoints = Number(points) + currentPoints
         dispatch(updateUser(request.user._id, { ...user, points: String(updatedPoints) }))
         dispatch(deleteRequest(id))
         navigate('/requests')

    }  

    const handleAd = (e) => {
        e.preventDefault()
        const newPoints = Number(user?.points) - Number(request?.data?.plan?.price)
        dispatch(createAd(request.data))
        dispatch(updateUser(request.user._id, {...user, points: String(newPoints)}))
        dispatch(deleteRequest(id))
        navigate('/requests')
    }


    const handleLesson = (e) => {
        e.preventDefault()
        const newPoints = Number(user?.points) - 20
        dispatch(createLesson(request.data))
        dispatch(updateUser(request.user._id, {...user, points: String(newPoints)}))
        dispatch(deleteRequest(id))
        navigate('/requests')
    }

    const handleProduct = (e) => {
        e.preventDefault()
        const newPoints = Number(user?.points) - 20
        dispatch(createProduct(request.data))
        dispatch(updateUser(request.user._id, {...user, points: String(newPoints)}))
        dispatch(deleteRequest(id))
        navigate('/requests')
    }

     const handleCourse = (e) => {
        e.preventDefault()
        const newPoints = Number(user?.points) - 300
        dispatch(createCourse(request.data))
        dispatch(updateUser(request.user._id, {...user, points: String(newPoints)}))
        dispatch(deleteRequest(id))
        navigate('/requests')
    }

    const handleWithdraw = () => {
        const currentPoints = Number(user.points)
        const updatedPoints = currentPoints - Number(points)
        dispatch(updateUser(request.user._id, { ...user, points: String(updatedPoints) }))
        dispatch(deleteRequest(id))
        navigate('/requests')
    }

    const handleReject = () => {
        dispatch(deleteRequest(id))
        navigate('/requests')
    }


    if (!request) return null
    if (!user) return null
    
  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="request-details-container" style={{flexDirection: "row-reverse"}}>
                <div className="request-details-heading">
                    <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>??????????</h1>
                    <div className="divider" />
                </div>
                
                <div className="request-details" style={{flexDirection: "row-reverse"}}>
                <div className="request-user-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                    <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{request?.user?.name} :???????????????? </h4>
                    <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ????????????????:  {request.user.type.arabic}</h4>
                    <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>???????? ???????????????? ????????????: {user.points}</h4>
                </div>
                {request?.type?.english === "lesson" && 
                <div className="request-body-container" >

                    <div className="request-meta-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ??????????: {request?.type?.arabic}</h4>
                        <h3>??????????????</h3> <h2>{request?.data?.title}</h2>
                        <h3>??????????</h3> <h2>{request?.data?.desc}</h2>
                        <h3>????????</h3> <h2>{request?.data?.grade?.arabic}</h2>
                        <h3>?????????? ??????????????</h3> <h2>{request.data.term.arabic}</h2>
                        <h3>????????????</h3> <h2>{request.data.subject.arabic}</h2>
                        <h3>???????? ??????????????</h3> <a href={request.data.url} target="_blank">{request.data.url}</a>
                        <h3>??????????????</h3> <h2>{request.data.date}</h2>
                        <h3>??????????</h3> <h2>{request.data.time}</h2>
                        <h3>??????????</h3> <h2>{request.data.price}</h2>
                    </div>

                    <div className="request-actions">
                        <div className="request-approve">
                            <button className="button-primary" onClick={handleLesson} style={{fontFamily: "var(--font-family-arabic)"}}>????????????</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)} style={{fontFamily: "var(--font-family-arabic)"}}>??????</button>
                        </div>
                    </div>
                    

                </div>
                    
                
                }

                {request?.type?.english === "store" && 
                <div className="request-body-container" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>

                    <div className="request-meta-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ??????????:  {request.type.arabic}</h4>
                        <h3>??????????????</h3> <h2>{request.data.title}</h2>
                        <h3>??????????</h3> <h2>{request.data.desc}</h2>
                        <h3>????????</h3> <h2>{request?.data?.grade?.arabic}</h2>
                        <h3>?????????? ??????????????</h3> <h2>{request.data.term.arabic}</h2>
                        <h3>????????????</h3> <h2>{request.data.subject.arabic}</h2>
                        <h3>??????????</h3> <h2>{request.data.type}</h2>
                        {request.data.type === "file" && 
                        <>
                            <h3>??????????</h3> <a href={request.data.url} download>??????????</a>
                        </>
                        }
                        {request.data.type === "video" && 
                        <>
                            <h3>??????????????</h3> <a href={request.data.url} target="_blank">????????????</a>
                        </>
                        }
                        <h3>??????????</h3> <h2>{request.data.price}</h2>
                    </div>

                    <div className="request-actions">
                        <div className="request-approve">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleProduct}>????????????</button>
                        </div>  
                        <div className="request-reject">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-secondary" onClick={() => setIsReject(true)}>??????</button>
                        </div>
                    </div>
                    

                </div>          
                }

                {request?.type?.english === "course" && 
                <div className="request-body-container">

                    <div className="request-meta-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ??????????:  {request.type.arabic}</h4>
                        <h3>??????????????</h3> <h2>{request.data.title}</h2>
                        <h3>??????????</h3> <p>{request.data.desc}</p>
                        <h3>????????</h3> <h2>{request?.data?.grade?.arabic}</h2>
                        <h3>?????????? ??????????????</h3> <h2>{request.data.term.arabic}</h2>
                        <h3>????????????</h3> <h2>{request.data.subject.arabic}</h2>
                        {request.data.lessons.map((lesson, i) => <div className="request-course-lessons-container">
                            <h3>?????????? {i+1}</h3>
                            <a href={lesson.video} target="_blank">??????????????</a>
                            <a href={lesson.file} download>??????????</a>
                        </div>)}
                        <h3>??????????</h3> <h2>{request.data.price}</h2>
                    </div>

                    <div className="request-actions">
                        <div className="request-approve">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleCourse}>????????????</button>
                        </div>  
                        <div className="request-reject">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-secondary" onClick={() => setIsReject(true)}>??????</button>
                        </div>
                    </div>


                    </div>  

                }

                {request?.type?.english === "charge" &&
                    <div className="request-body-container" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>

                        <div className="request-meta-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                            <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ?????????? {request.type.arabic}</h4>
                            <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>???????????? ?????????????? {request.amount} ????????</h4>
                            <div className="image-container">
                                <img src={request?.selectedFile} />
                            </div>
                        </div>
                    <div className="request-actions">
                        <div className="request-approve">
                            <label htmlFor='amount' style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>???????? ???????? ????????????????</label>
                            <input name="amount" type="text" onChange={handleChange} />
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleClick}>??????</button>
                        </div>  
                        <div className="request-reject">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-secondary" onClick={() => setIsReject(true)}>??????</button>
                        </div>
                    </div>
                    </div>  
                }

                {request?.type?.english === "withdraw" &&
                    <div className="request-body-container" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>

                        <div className="request-meta-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                            <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ?????????? {request.type.arabic}</h4>
                            <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>???????????? ???????????? ?????????? {request.amount} ????????</h4>
                            <h3>?????? ????????????</h3> <h2>{request.phone}</h2>
                        </div>
                    <div className="request-actions">
                        <div className="request-approve">
                            <label style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} htmlFor='amount'>?????? ???????? ????????????????</label>
                            <input name="amount" type="text" onChange={handleWithdraw} />
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleClick}>??????????</button>
                        </div>  
                        <div className="request-reject">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-secondary" onClick={() => setIsReject(true)}>??????</button>
                        </div>
                    </div>
                    </div>  
                }

                {request?.type?.english === "ad" &&
                    <div className="request-body-container">

                        <div className="request-meta-details" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                            <h4 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>?????? ??????????:  {request.type.arabic}</h4>
                            <h3>??????????????</h3> <h2>{request.data.title}</h2>
                            <h3>??????????</h3> <h2>{request.data.plan.arabic}</h2>
                            <h3>??????????????</h3> <p>{request.data.content}</p>
                        </div>
                        <div className="request-actions">
                        <div className="request-approve">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleAd}>????????????</button>
                        </div>  
                        <div className="request-reject">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-secondary" onClick={() => setIsReject(true)}>??????</button>
                        </div>
                        </div>

                    </div>  
                }
                    
                    {/* <div className="request-meta-details">
                        <h4>Request Type: {request.type}</h4>
                        <div className="image-container">
                            <img src={request?.selectedFile} />
                        </div>
                    </div> */}
                </div>
                {isReject &&                     
                    <div className="is-delete-modal slit-in-vertical">
                        <h4 style={{fontFamily: "var(--font-family-arabic)"}}>???? ?????? ?????????? ?????? ???????? ?????? ?????? ????????????</h4>
                        <div className="user-delete-button-container">
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary user-delete-button" onClick={handleReject}>?????? ??????????</button>
                            <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-secondary user-delete-button" onClick={() => {setIsReject(false)}}>??????????</button>
                        </div>

                    </div>
                }
                {/* <div className="request-actions">
                        {request.type === 'charge' ? (
                        <div className="request-approve">
                            <label htmlFor='amount'>Charge user's credit</label>
                            <input name="amount" type="text" onChange={handleChange} />
                            <button className="button-primary" onClick={handleClick}>submit</button>
                        </div>  
                        ) : (
                            <div className="request-approve">
                                <label htmlFor='amount'>Convert user's credit</label>
                                <input name="amount" type="text" onChange={handleChange} />
                                <button className="button-primary" onClick={handleWithdraw}>submit</button>
                            </div>  
                            )}
                        
                    <div className="request-reject">
                        <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
                    </div>
                </div> */}
            </div>
        <FooterAr />
      </>
  )
}

export default RequestDetails