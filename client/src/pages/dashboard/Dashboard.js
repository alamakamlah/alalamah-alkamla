import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Navbar, Footer} from '../../sections'
import { DashboardItem, AdIcon } from '../../components'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import Class from '../../assets/classPurple.png'
import Lib from '../../assets/libraryPurple.png'
import Points from '../../assets/pointsPurple.png'
import Test from '../../assets/testPurple.png'
import User from '../../assets/usericon.png'
import Fav from '../../assets/favPurple.png'
import './dashboard.css'



const Dashboard = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'))?.result

  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
            <div className="admin-dashboard-container">
                <div className="store-heading">
                        <h1>Dashboard</h1>
                    </div>
                <div className="divider" />
                <div className="dashboard-items-container">
                    <div className="user-dashboard-item" onClick={() => navigate(`/profile`)}>
                        <DashboardItem title="My Account" img={User} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/profile/points')}>
                        <DashboardItem title="My Points" img={Points} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/mylessons')}>
                        <DashboardItem title="My Lessons" img={Class} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/mylibrary')}>
                        <DashboardItem title="My Library" img={Lib} />
                    </div>
                    {/* <div className="user-dashboard-item" onClick={() => navigate('/myfavs')}>
                        <DashboardItem title="My Favorites" img={Fav} />
                    </div> */}
                    <div className="user-dashboard-item" onClick={() => navigate('/mytests')}>
                        <DashboardItem title="My Tests" img={Test} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/mycourses')}>
                        <DashboardItem title="My Courses" img={Class} />
                    </div>

                </div>
                <div className="user-dashboard-item">
                    <DashboardItem title="Weekly Message" />
                </div>
            </div>

        <Footer />
      </>
  )
}

export default Dashboard