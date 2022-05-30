import React from 'react'
import { useNavigate } from 'react-router-dom';
import './request.css'

const RequestAr = ({request}) => {
    const navigate = useNavigate()
    const openRequest = (e) => {
        navigate(`/requests/${request._id}`);
      };
  return (
    <div className="request-container" onClick={openRequest} style={{flexDirection: "row-reverse"}}>
        <p>{request.user.name}</p>
        <p>{request.type?.arabic}</p>
        <p>{request?.amount}</p>
    </div>
  )
}

export default RequestAr