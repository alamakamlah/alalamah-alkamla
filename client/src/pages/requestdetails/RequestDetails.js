import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getRequest, deleteRequest } from '../../actions/requests'
import { updateUser, getUser } from '../../actions/users'
import { createLesson } from '../../actions/lessons'
import { createProduct } from '../../actions/store'
import { createCourse } from '../../actions/courses'
import {createAd} from '../../actions/ads'
import {Navbar, Footer} from '../../sections'
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
    const [points, setPoints] = useState('')
    useEffect(() => {
        dispatch(getUser(request?.user?._id));
    }, []);
    
    const {user, users} = useSelector((state) => state.users)

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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish}  />
            <div className="request-details-container">
                <div className="request-details-heading">
                    <h1>Request</h1>
                    <div className="divider" />
                </div>
                
                <div className="request-details">
                <div className="request-user-details">
                    <h4>User: {request.user.name}</h4>
                    <h4>User Type: {request.user.type.english}</h4>
                    <h4>User Current Points: {user.points}</h4>
                </div>
                {request?.type?.english === "lesson" && 
                <div className="request-body-container">

                    <div className="request-meta-details">
                        <h4>Request Type: {request.type.english}</h4>
                        <h3>Title:</h3> <h2>{request.data.title}</h2>
                        <h3>Description:</h3> <h2>{request.data.desc}</h2>
                        <h3>Grade:</h3> <h2>{request.data.grade.english}</h2>
                        <h3>Term:</h3> <h2>{request.data.term.english}</h2>
                        <h3>Subject:</h3> <h2>{request.data.subject.english}</h2>
                        <h3>Meeting Link:</h3> <a href={request.data.url} target="_blank">{request.data.url}</a>
                        <h3>Date:</h3> <h2>{request.data.date}</h2>
                        <h3>Time:</h3> <h2>{request.data.time}</h2>
                        <h3>Price:</h3> <h2>{request.data.price}</h2>
                    </div>

                    <div className="request-actions">
                        <div className="request-approve">
                            <button className="button-primary" onClick={handleLesson}>Approve</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
                        </div>
                    </div>
                    

                </div>
                    
                
                }

                {request?.type?.english === "store" && 
                <div className="request-body-container">

                    <div className="request-meta-details">
                        <h4>Request Type: {request.type.english}</h4>
                        <h3>Title:</h3> <h2>{request.data.title}</h2>
                        <h3>Description:</h3> <h2>{request.data.desc}</h2>
                        <h3>Grade:</h3> <h2>{request.data.grade.english}</h2>
                        <h3>Term:</h3> <h2>{request.data.term.english}</h2>
                        <h3>Subject:</h3> <h2>{request.data.subject.english}</h2>
                        <h3>Type:</h3> <h2>{request.data.type}</h2>
                        {request.data.type === "file" && 
                        <>
                            <h3>File:</h3> <a href={request.data.url} download>Download</a>
                        </>
                        }
                        {request.data.type === "video" && 
                        <>
                            <h3>Video:</h3> <a href={request.data.url} target="_blank">View</a>
                        </>
                        }
                        <h3>Price:</h3> <h2>{request.data.price}</h2>
                    </div>

                    <div className="request-actions">
                        <div className="request-approve">
                            <button className="button-primary" onClick={handleProduct}>Approve</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
                        </div>
                    </div>
                    

                </div>          
                }

                {request?.type?.english === "course" && 
                <div className="request-body-container">

                    <div className="request-meta-details">
                        <h4>Request Type: {request.type.english}</h4>
                        <h3>Title:</h3> <h2>{request.data.title}</h2>
                        <h3>Description:</h3> <p>{request.data.desc}</p>
                        <h3>Grade:</h3> <h2>{request.data.grade.english}</h2>
                        <h3>Term:</h3> <h2>{request.data.term.english}</h2>
                        <h3>Subject:</h3> <h2>{request.data.subject.english}</h2>
                        {request.data.lessons.map((lesson, i) => <div className="request-course-lessons-container">
                            <h3>Lesson {i+1}</h3>
                            <a href={lesson.video} target="_blank">Video</a>
                            <a href={lesson.file} download>File</a>
                        </div>)}
                        <h3>Price:</h3> <h2>{request.data.price}</h2>
                    </div>

                    <div className="request-actions">
                        <div className="request-approve">
                            <button className="button-primary" onClick={handleCourse}>Approve</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
                        </div>
                    </div>


                    </div>  

                }

                {request?.type?.english === "charge" &&
                    <div className="request-body-container">

                        <div className="request-meta-details">
                            <h4>Request Type: {request.type.english}</h4>
                            <h4>Charge Amount: {request.amount} points</h4>
                            <div className="image-container">
                                <img src={request?.selectedFile} />
                            </div>
                        </div>
                    <div className="request-actions">
                        <div className="request-approve">
                            <label htmlFor='amount'>Charge user's credit</label>
                            <input name="amount" type="text" onChange={handleChange} />
                            <button className="button-primary" onClick={handleClick}>Submit</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
                        </div>
                    </div>
                    </div>  
                }

                {request?.type?.english === "withdraw" &&
                    <div className="request-body-container">

                        <div className="request-meta-details">
                            <h4>Request Type: {request.type.english}</h4>
                            <h4>Withdraw Amount: {request.amount} points</h4>
                            <h3>Phone Number:</h3> <h2>{request.phone}</h2>
                        </div>
                    <div className="request-actions">
                        <div className="request-approve">
                            <label htmlFor='amount'>Concert user's credit</label>
                            <input name="amount" type="text" onChange={handleWithdraw} />
                            <button className="button-primary" onClick={handleClick}>Submit</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
                        </div>
                    </div>
                    </div>  
                }

                {request?.type?.english === "ad" &&
                    <div className="request-body-container">

                        <div className="request-meta-details">
                            <h4>Request Type: {request.type.english}</h4>
                            <h3>Title:</h3> <h2>{request.data.title}</h2>
                            <h3>Plan:</h3> <h2>{request.data.plan.english}</h2>
                            <h3>Content:</h3> <p>{request.data.content}</p>
                        </div>
                        <div className="request-actions">
                        <div className="request-approve">
                            <button className="button-primary" onClick={handleAd}>Approve</button>
                        </div>  
                        <div className="request-reject">
                            <button className="button-secondary" onClick={() => setIsReject(true)}>Reject</button>
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
                        <h4>Are you sure you want to reject this request?</h4>
                        <div className="user-delete-button-container">
                            <button className="button-primary user-delete-button" onClick={handleReject}>Reject</button>
                            <button className="button-secondary user-delete-button" onClick={() => {setIsReject(false)}}>Cancel</button>
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
        <Footer />
      </>
  )
}

export default RequestDetails