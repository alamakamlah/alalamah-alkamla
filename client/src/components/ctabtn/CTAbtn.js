import React from 'react'
import './ctabtn.css'
import { useNavigate } from 'react-router-dom'


const CTAbtn = () => {
  const navigate = useNavigate()



  return (
    <div className="ctabtn-container ">
        <button onClick={() => navigate('/auth')} className="button-primary shadow-drop-center">Get Started</button>
    </div>
  )
}

export default CTAbtn