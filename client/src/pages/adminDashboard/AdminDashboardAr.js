import React from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import { DashboardItem } from '../../components'
import './admindashboard.css'
import Logo from '../../assets/logo.png'
import User from '../../assets/usericon.png'
import {useNavigate} from 'react-router-dom'

const AdminDashboardAr = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="admin-dashboard-container">
            <div className="admin-dashboard-heading" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)", flexDirection: "row-reverse"}}>
                <h1 style={{fontFamily: "var(--font-family-arabic)"}}>لوحة تحكم الأدمن</h1>
                <div className="divider" />
            </div>
            <div className="dashboard-items" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)", flexDirection: "row-reverse"}}>
                <div className="dashboard-item" onClick={() => navigate('/users')}>
                    <DashboardItem title="المستخدمون" img={User} />
                </div>
                <div className="dashboard-item" onClick={() => navigate('/requests')}>
                    <DashboardItem title="الطلبات" img={Logo}  />
                </div>
            </div>
        </div>
        <FooterAr />
      </>
  )
}

export default AdminDashboardAr