import React, {useEffect, useState} from 'react'
import './aditem.css'
import { deleteAd } from '../../actions/ads'
import { useDispatch } from 'react-redux'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import moment from 'moment'




const AdItemAr = ({ad}) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const [plan, setPlan] = useState('')
    const [isDelete, setIsDelete] = useState(false)
    let date = new Date()
    date.setDate(date.getDate() + 3)
    const isAuthorized = ad?.user?._id === user?._id || user?.email === "alalamahalkamla@gmail.com" || user?.email === "for4future@gmail.com"
    moment.locale('ar_SA')
    

    useEffect(() => {
        if (ad.plan.english === "Three Days") {
            setPlan("Three Days")
        } else if (ad.plan.english === "Week") {
            setPlan("Week")
        } else if (ad.plan.english === "Month") {
            setPlan("Month")
        }
        if (plan === "Three Days") {
            date.setDate(date.getDate() + 3)
            if (moment(Date(ad.createdAt)).isAfter(date)) {
                dispatch(deleteAd(ad._id))
            }
        } else if (plan === "Week") {
            date.setDate(date.getDate() + 7)
            if (moment(Date(ad.createdAt)).isAfter(date)) {
                dispatch(deleteAd(ad._id))
            }
        } else if (plan === "Month") {
            date.setDate(date.getDate() + 30)
            if (moment(Date(ad.createdAt)).isAfter(date)) {
                dispatch(deleteAd(ad._id))
            }
        }
      }, [])

      const handleDelete = () => {
        dispatch(deleteAd(ad._id))
      }


  return (
    <div className="ad-container" style={{fontFamily: "var(--font-familt-arabic)"}}>
        {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>هل أنت متأكد أنك تريد حذف هذا الاعلان؟</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>حذف الإعلان</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>الغاء</button>
              </div>
            </div>
          }

        <h2 style={{display: "flex", flexDirection: "row-reverse"}}>{ad.title}</h2>
        {isAuthorized && 
        <div className="ad-actions" style={{display: "flex", flexDirection: "row-reverse"}}>
            {plan === "Three Days" && <h3>Ad expires in {moment(ad.createdAt).add(3, 'days').fromNow()}</h3>}
            {plan === "Week" && <h3>Ad expires in {moment(ad.createdAt).add(7, 'days').fromNow()}</h3>}
            {plan === "Month" && <h3>Ad expires in {moment(ad.createdAt).add(30, 'days').fromNow()}</h3>}
            <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
        </div>
        }   
        <p style={{display: "flex", flexDirection: "row-reverse"}}>{ad.content}</p>
    </div>
  )
}

export default AdItemAr