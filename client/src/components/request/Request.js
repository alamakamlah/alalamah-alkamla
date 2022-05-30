import React from 'react'
import { useNavigate } from 'react-router-dom';
import './request.css'

const Request = ({request}) => {
    const navigate = useNavigate()
    const openRequest = (e) => {
        navigate(`/requests/${request._id}`);
      };
  return (
    <div className="request-container" onClick={openRequest}>
        <p>{request.user.name}</p>
        <p>{request.type?.english}</p>
        <p>{request?.amount}</p>
    </div>
  )
}

export default Request