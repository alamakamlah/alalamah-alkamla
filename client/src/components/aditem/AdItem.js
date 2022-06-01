import React, {useEffect, useState} from 'react'
import './aditem.css'
import { deleteAd } from '../../actions/ads'
import { useDispatch } from 'react-redux'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import moment from 'moment'

const AdItem = ({ad}) => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const [plan, setPlan] = useState('')
    const [isDelete, setIsDelete] = useState(false)
    let date = new Date(ad.createdAt)
    let adDate = new Date(ad.createdAt)
    const isAuthorized = ad?.user?._id === user?._id || user?.type?.english === "Admin" || user?.email === "for4future@gmail.com"
    

    useEffect(() => {
        if (ad.plan.english === "Three Days") {
            setPlan("Three Days")
            const createdAt = moment(ad.createdAt).add(3, 'days').fromNow()
            if(createdAt.charAt(createdAt.length - 1) === "o") dispatch(deleteAd(ad._id))
        } else if (ad.plan.english === "Week") {
            setPlan("Week")
            const createdAt = moment(ad.createdAt).add(7, 'days').fromNow()
            if(createdAt.charAt(createdAt.length - 1) === "o") dispatch(deleteAd(ad._id))
        } else if (ad.plan.english === "Month") {
            setPlan("Month")
            const createdAt = moment(ad.createdAt).add(30, 'days').fromNow()
            if(createdAt.charAt(createdAt.length - 1) === "o") dispatch(deleteAd(ad._id))
        }
      }, [])

      const handleDelete = () => {
        dispatch(deleteAd(ad._id))
      }
    


  return (
    <div className="ad-container">
        {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>Are you sure you want to delete this ad?</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>Delete</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>Cancel</button>
              </div>
            </div>
          }

        <h2>{ad.title}</h2>
        {isAuthorized && 
        <div className="ad-actions">
            {plan === "Three Days" && <h3>Ad expires {moment(ad.createdAt).add(3, 'days').fromNow()}</h3>}
            {plan === "Week" && <h3>Ad expires {moment(ad.createdAt).add(7, 'days').fromNow()}</h3>}
            {plan === "Month" && <h3>Ad expires {moment(ad.createdAt).add(30, 'days').fromNow()}</h3>}
            <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
        </div>
        }   
        <p>{ad.content}</p>
    </div>
  )
}

export default AdItem