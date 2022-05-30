import React from 'react'
import './ctabtn.css'
import { useNavigate } from 'react-router-dom'


const CTAbtnAr = () => {
  const navigate = useNavigate()


  return (
    <div className="ctabtn-container ">
        <button onClick={() => navigate('/auth')} className="button-primary shadow-drop-center" style={{fontFamily: "var(--font-family-arabic)"}}>إبدأ الآن</button>
    </div>
  )
}

export default CTAbtnAr