import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ctaar.css'


const CTAAR = () => {

  const navigate = useNavigate

  return (
    <div className="cta-container-ar page__padding">
        <div className="cta-heading-ar">
            <h1>!إنضم الآن</h1>
            <div className="divider"></div>
        </div>
        <form>
            <input type="email" className="cta-input" placeholder="البريد الالكتروني" />
            <input type="text" className="cta-input" placeholder="الإسم الأول" />
            <input type="text" className="cta-input" placeholder="إسم العائلة" />
            <select>
                <option>النظام المصري</option>
                <option>النظام القطري</option>
            </select>
            <button onClick={() => navigate('/auth')}>إبدأ الآن</button>
        </form>
    </div>
  )
}

export default CTAAR