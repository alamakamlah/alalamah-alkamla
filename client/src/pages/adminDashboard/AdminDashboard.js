import React from 'react'
import {Navbar, Footer} from '../../sections'
import { DashboardItem } from '../../components'
import './admindashboard.css'
import Logo from '../../assets/logo.png'
import User from '../../assets/usericon.png'
import {useNavigate} from 'react-router-dom'

const AdminDashboard = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="admin-dashboard-container">
            <div className="admin-dashboard-heading">
                <h1>Admin Dashboard</h1>
                <div className="divider" />
            </div>
            <div className="dashboard-items">
                <div className="dashboard-item" onClick={() => navigate('/users')}>
                    <DashboardItem title="Users" img={User} />
                </div>
                <div className="dashboard-item" onClick={() => navigate('/requests')}>
                    <DashboardItem title="Requests" img={Logo}  />
                </div>
            </div>
        </div>
        <Footer />
      </>
  )
}

export default AdminDashboard