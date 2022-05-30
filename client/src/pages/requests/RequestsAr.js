import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import { getRequests } from '../../actions/requests'
import { useDispatch, useSelector } from 'react-redux'
import { RequestAr } from '../../components'
import { useNavigate } from 'react-router-dom'

import './requests.css'


const RequestsAr = ({isEnglish, setIsEnglish}) => {
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
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="requests-container">
            <div className="requests-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>الطلبات</h1>
                <div className="divider" />
            </div>
            <div className="requests-multiple-input-container" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)", flexDirection: "row-reverse"}}>
                        <a onClick={() => {setRequests(lessonRequests)}}>طلبات الدروس</a>
                        <a onClick={() => {setRequests(courseRequests)}}>طلبات الدورات</a>
                        <a onClick={() => {setRequests(storeRequests)}}>طلبات المتجر</a>
                        <a onClick={() => {setRequests(pointsRequests)}}>طلبات الرصيد</a>
                        <a onClick={() => {setRequests(adRequests)}}>طلبات الإعلانات</a>
                    </div>
            <div className="requests-container-all">
                {requests?.map((request) => <RequestAr key={request._id} request={request} />)}
            </div>
        </div>
        <FooterAr />
      </>
  )
}

export default RequestsAr