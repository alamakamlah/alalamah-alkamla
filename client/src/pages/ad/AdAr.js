import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {NavbarAr, FooterAr} from '../../sections'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import {moment} from 'moment'
import { getAds } from '../../actions/ads'
import {AdItemAr} from '../../components'
import './ad.css'


const AdAr = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAds())
  }, [])

  const ads = useSelector((state) => state.ads.ads)
  const user = JSON.parse(localStorage.getItem('profile'))?.result

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="admin-dashboard-container">
                <div className="store-heading" style={{display: "flex", flexDirection: "row-reverse"}}>
                        <h1 style={{fontFamily: "var(--font-family-arabic)"}}>الاعلانات</h1>
                    </div>
                    {user && 
                    <h4 style={{fontFamily: "var(--font-family-arabic)", display: "flex", flexDirection: "row-reverse", width: "100%"}} className="store-link" onClick={() => {navigate('./new')}}>اضافة اعلان جديد</h4>                    
                }
                <div className="divider" />
                <div className="ads-container">
                  {ads.map((ad) => 
                    <AdItemAr ad={ad} key={ad._id} />
                  )}
                </div>
                
            </div>

        <FooterAr />
      </>
  )
}

export default AdAr