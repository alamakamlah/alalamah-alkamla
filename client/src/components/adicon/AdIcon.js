import React from 'react'
import './adicon.css'
import { useNavigate } from 'react-router-dom'

const AdIcon = () => {
    const navigate = useNavigate()
  return (
    <div className="adicon-container heartbeat" onClick={() => navigate('/ad')}>
        <h1>Ads</h1>
    </div>
  )
}

export default AdIcon