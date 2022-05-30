import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {Navbar, Footer} from '../../sections'
import { DashboardItem } from '../../components'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import {moment} from 'moment'
import { getAds } from '../../actions/ads'
import {AdItem} from '../../components'
import './ad.css'


const Ad = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAds())
  }, [])

  const ads = useSelector((state) => state.ads.ads)
  const user = JSON.parse(localStorage.getItem('profile'))?.result

  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="admin-dashboard-container">
                <div className="store-heading">
                        <h1>Ads</h1>
                    </div>
                    {user && 
                    <h4 className="store-link" onClick={() => {navigate('./new')}}>Add new ad</h4>                    
                }
                <div className="divider" />
                <div className="ads-container">
                  {ads.map((ad) => 
                    <AdItem ad={ad} key={ad._id} />
                  )}
                </div>
                
            </div>

        <Footer />
      </>
  )
}

export default Ad