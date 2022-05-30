import React from 'react'
import './cta.css'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
  const navigate = useNavigate()
  return (
    <div className="cta-container page__padding">
        <div className="cta-heading">
            <h1>Join Now!</h1>
            <div className="divider"></div>
        </div>
        <form>
            <input type="email" className="cta-input" placeholder="Email" />
            <input type="text" className="cta-input" placeholder="First Name" />
            <input type="text" className="cta-input" placeholder="Last Name" />
            <select>
                <option>Egyptian System</option>
                <option>Qatari System</option>
            </select>
            <button onClick={() => navigate('/auth')}>Get Started</button>
        </form>
    </div>
  )
}

export default CTA