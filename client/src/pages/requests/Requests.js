import React, {useState, useEffect} from 'react'
import {Navbar, Footer} from '../../sections'
import { getRequests } from '../../actions/requests'
import { useDispatch, useSelector } from 'react-redux'
import { Request } from '../../components'
import { useNavigate } from 'react-router-dom'

import './requests.css'


const Requests = ({isEnglish, setIsEnglish}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getRequests())
      }, [])

      const requestsCurrent = useSelector((state) => state.requests.requests);
      const [requests, setRequests] = useState(requestsCurrent)
    //   user?.type?.english === "Student" ? lessons = lessonsC.filter((lesson => lesson?.users.includes(user?._id) )): lessons = lessonsC.filter((lesson => lesson?.user?._id === user?._id ))

      const lessonRequests = requestsCurrent.filter((request => request?.type?.english === "lesson"))
      const courseRequests = requestsCurrent.filter((request => request?.type?.english === "course"))
      const storeRequests = requestsCurrent.filter((request => request?.type?.english === "store"))
      const adRequests = requestsCurrent.filter((request => request?.type?.english === "ad"))
      const pointsRequests = requestsCurrent.filter((request => request?.type?.english === "charge" || request?.type?.english === "withdraw"))


  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="requests-container">
            <div className="requests-heading">
                <h1>Requests</h1>
                <div className="divider" />
            </div>
            <div className="requests-multiple-input-container">
                        <a onClick={() => {setRequests(lessonRequests)}}>Lesson Requests</a>
                        <a onClick={() => {setRequests(courseRequests)}}>Course Requests</a>
                        <a onClick={() => {setRequests(storeRequests)}}>Store Requests</a>
                        <a onClick={() => {setRequests(pointsRequests)}}>Credit Requests</a>
                        <a onClick={() => {setRequests(adRequests)}}>Ad Requests</a>
                    </div>
            <div className="requests-container-all">
                {requests?.map((request) => <Request key={request._id} request={request} />)}
            </div>
        </div>
        <Footer />
      </>
  )
}

export default Requests