import React, {useState, useEffect} from 'react'
import './lesson.css'
import{updateLesson, deleteLesson} from '../../actions/lessons'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import {FaTrash} from 'react-icons/fa'


const LessonAr = ({lesson}) => {
    const userC = JSON.parse(localStorage.getItem('profile'))?.result
    const dispatch = useDispatch()
    
    const [isBought, setIsBought] = useState(lesson?.users.includes(userC?._id) || userC?.email === "for4future@gmail.com" || userC?.email === "alalamahalkamla@gmail.com" || userC?._id === lesson?.user?._id)
    const [isEnough, setIsEnough] = useState(true) 
    const [isDelete, setIsDelete] = useState(false)
    useEffect(() => {
        dispatch(getUser(userC?._id));
        dispatch(getUsers())
      }, []);
      const {user, users} = useSelector((state) => state.users)
      const owner = users?.find(({_id}) => _id === lesson?.user?._id)
      const isAuthorized = userC?.email === "alalamahalkamla@gmail.com" || lesson?.user?._id === userC?._id || userC?.email === "for4future@gmail.com"

    const handleClick = (e) => {
        e.preventDefault();
        if (Number(lesson?.price) > Number(user?.points)) {
            setIsEnough(false)
        }
        else {
            const newPoints = Number(user?.points) - Number(lesson?.price)
            const newOwnerPoints = Number(owner?.points) + Number(lesson?.price)
            dispatch(updateUser(user?._id, {...user, points: String(newPoints), library: [...user?.library, lesson._id]}))
            dispatch(updateUser(owner?._id, {...owner, points: String(newOwnerPoints)}))
            dispatch(updateLesson(lesson._id, { ...lesson, users: [...lesson?.users, user?._id] }))
            window.location.reload()
        }
    }
    const handleDelete = () => {
        dispatch(deleteLesson(lesson._id))
      }


    // if (!user) return null;


  return (
    <div className="lesson-container">
         {isAuthorized && 
            <div className="post-details-creator-actions">
              <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
            </div>
          }
          {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>هل أنت متأكد من أنك تريد حذف هذا الدرس؟</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>حذف</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>إلغاء</button>
              </div>
            </div>
          }
        <div className="lesson-headings">
          <div className="lesson-title" >
            <h1>{lesson.title}</h1>
            <div className="lesson-time">
              <h3>{lesson.date}</h3>
              <h3>{lesson.time}</h3>
            </div>
          </div>
          <h2>{lesson?.user?.name}</h2>
        </div>
        <div className="lesson-details" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
          <h3>{lesson.system.arabic}</h3>
          <h3>{lesson.grade.arabic}</h3>
          <h3>{lesson.term.arabic}</h3>
          <h3>{lesson.subject.arabic}</h3>
        </div>
        <div className="lesson-desc">
          <p>{lesson.desc}</p>
        </div>
        {!isBought ? 
        <div className="lesson-user-actions" style={{flexDirection: "row-reverse", fontFamily: "var(--font-family-arabic)"}}>
          <div className="lesson-user-actions-points" style={{display: "flex", flexDirection: "row-reverse", justifyContent:"center"}}>
          <p style={{margin: "0"}}>{lesson.price} </p>
          <p style={{margin: "0"}}>{lesson.price > 10 ? "نقطة" : "نقاط"}</p>
          </div>
          {user && userC &&
          <button onClick={handleClick} className="button-primary" style={{fontFamily: "var(--font-family-arabic)"}}>اشتري</button>}
        </div> : user && <h4 className="lesson-link">{lesson.url}</h4>}
        {!isEnough && <h4 style={{fontFamily: "var(--font-family-arabic)", display: "flex", flexDirection: "column", alignItems: "center"}}>ليس لديك رصيد كافي لشراء هذا الدرس.   <a href="/profile/points">اشحن رصيدك</a></h4>}
    </div>
  )
}



export default LessonAr