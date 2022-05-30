import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {NavbarAr, FooterAr} from '../../sections'
import { DashboardItem } from '../../components'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import Class from '../../assets/classPurple.png'
import Lib from '../../assets/libraryPurple.png'
import Points from '../../assets/pointsPurple.png'
import Test from '../../assets/testPurple.png'
import User from '../../assets/usericon.png'
import Fav from '../../assets/favPurple.png'
import './dashboard.css'


const DashboardAr = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('profile'))?.result

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="admin-dashboard-container">
                <div className="store-heading"  style={{flexDirection: "row-reverse"}}>
                        <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>لوحة التحكم</h1>
                    </div>
                <div className="divider" />
                <div className="dashboard-items-container" style={{flexDirection: "row-reverse"}}>
                    <div className="user-dashboard-item" onClick={() => navigate(`/profile`)}>
                        <DashboardItem title="حسابي" img={User} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/profile/points')}>
                        <DashboardItem title="نقاطي" img={Points} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/mylessons')}>
                        <DashboardItem title="دروسي" img={Class} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/mylibrary')}>
                        <DashboardItem title="مكتبتي" img={Lib} />
                    </div>
                    {/* <div className="user-dashboard-item" onClick={() => navigate('/myfavs')}>
                        <DashboardItem title="مفضلتي" img={Fav} />
                    </div> */}
                    <div className="user-dashboard-item" onClick={() => navigate('/mytests')}>
                        <DashboardItem title="اختباراتي" img={Test} />
                    </div>
                    <div className="user-dashboard-item" onClick={() => navigate('/mycourses')}>
                        <DashboardItem title="دوراتي" img={Class} />
                    </div>

                </div>
                <div className="user-dashboard-item">
                    <DashboardItem title="الرسالة الاسبوعية" />
                </div>
            </div>

        <FooterAr />
      </>
  )
}

export default DashboardAr