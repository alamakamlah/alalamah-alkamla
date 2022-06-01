
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getCourse, deleteCourse, updateCourse, commentCourse } from '../../actions/courses'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import{updateUser, getUser, getUsers} from '../../actions/users'
import {NavbarAr, FooterAr} from '../../sections'
import { CourseLessonAr } from '../../components'
import { AdIconAr } from '../../components'
import './coursedetails.css'


const CourseDetailsAr = ({isEnglish, setIsEnglish}) => {
  const dispatch = useDispatch();
  const userC = JSON.parse(localStorage.getItem('profile'));
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false)
  const navigate = useNavigate()
  const [isEnough, setIsEnough] = useState(true) 
  const [isReject, setIsReject] = useState(false)
  useEffect(() => {
    dispatch(getUser(userC?.result?._id));
    dispatch(getUsers())
  }, []);
  useEffect(() => {
      dispatch(getCourse(id));
    }, []);
    

  const {course, courses} = useSelector((state) => state.courses)
  const {user, users} = useSelector((state) => state.users)
  const owner = users?.find(({_id}) => _id === course?.user?._id)
  const [comment, setComment] = useState('')
  const hasRatedArr =  course?.ratings.map((rating) => 
    userC?.result?._id === rating?.user
  )
  const hasRated = hasRatedArr?.includes(true)
  const [rating, setRating] = useState(0)
  let total = 0
  course?.ratings.map((rating) => (
    total = Number(total) + Number(rating?.rating)
  ))
  const avgRating = Number(total) / (Number(course?.ratings.length))

  const isBought = userC?.result?.type?.english === "Admin" || userC?.result?.email === "for4future@gmail.com" || course?.users.includes(userC?.result?._id) || userC?.result?._id === course?.user?._id

  const isAuthorized = userC?.result?.type?.english === "Admin" || userC?.result?.email === "for4future@gmail.com" || course?.user?._id === userC?.result?._id

  const handleDelete = () => {
    dispatch(deleteCourse(course._id))
    navigate('/courses')
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (Number(course?.price) > Number(user?.points)) {
        setIsEnough(false)
    }
    else {
        const newPoints = Number(user?.points) - Number(course?.price)
        const newOwnerPoints = Number(owner?.points) + Number(course?.price)
        dispatch(updateUser(user?._id, {...user, points: String(newPoints), library: [...user?.library, course._id]}))
        dispatch(updateUser(owner?._id, {...owner, points: String(newOwnerPoints)}))
        dispatch(updateCourse(course._id, { ...course, users: [...course?.users, user?._id] }))
        window.location.reload()
    }
}

const handleComment = async () => {
  const newComments = await dispatch(commentCourse(`${userC?.result?.name}: ${comment}`, course._id));

  setComment('');
  window.location.reload()
};

const handleRating = () => {
  dispatch(updateCourse(course._id, { ...course, avgRating: avgRating, ratings: [...course?.ratings, {user: user?._id, rating: rating}] }))
  window.location.reload()
}




  if (!course) return null;



  return (
    <>
      <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIconAr />
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>Are you sure you want to delete this course?</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>Delete</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>Cancel</button>
              </div>
            </div>
          }
        <div className="post-details-container course-details-container">
          {isAuthorized && 
            <div className="post-details-creator-actions">
              <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
              {/* <div className="edit-icon" onClick={() => {navigate('./edit')}}><FaRegEdit /></div> */}
            </div>
          }
        
            <div className="post-details-heading course-details-heading">
                <h1>{course?.title}</h1>
                <h2>{course.user.name}</h2>
            </div>
            <div className="post-details-creator course-details-grade" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{course?.system.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{course?.grade.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{course?.term.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{course?.subject.arabic}</h3>
            </div>
            <div className="post-details-content">
                <p>
                    {course.desc}
                </p>
                
            </div>
            <div className="course-useful-info" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
              <div className="lesson-user-actions-points" style={{display: "flex", flexDirection: "row-reverse", justifyContent:"center"}}>
                <p style={{marginLeft: "5px"}}>{course?.users?.length} </p>
                <p style={{marginLeft: "5px"}}>مستخدم قام بشراء هذه الدورة </p>
              </div>

              <h4> {course?.lessons.length} :عدد الدروس</h4>
            </div>
            <div className="course-user-actions" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
              {!isBought &&             
              <div className="lesson-user-actions-points" style={{display: "flex", flexDirection: "row-reverse", justifyContent:"center"}}>
                <p style={{fontFamily: "var(--font-family-arabic)", marginLeft: "5px"}}>{course.price} </p>
                <p style={{fontFamily: "var(--font-family-arabic)", margin: "0"}}>{course.price > 10 ? "نقطة" : "نقاط"}</p>
              </div>
              }
              {!isBought && user && userC && <button style={{fontFamily: "var(--font-family-arabic)"}} onClick={handleClick} className="button-primary course-details-button">اشتري</button>}
            </div>

            { user && !isEnough && <h4>رصيدك لا يكفي لشراء هذه الدورة<br /> <a href="/profile/points">اشحن رصيدك</a></h4>}

            {isBought && user &&
               <div className="course-lessons-containr">
                  {course?.lessons.map((lesson, i) => <CourseLessonAr index={i} key={lesson._id} lesson={lesson} />)}
                </div>
            }
           
           {user && !isAuthorized && isBought && userC &&
              <div className="post-details-reader-actions product-details-reader-actions" style={{flexDirection: "row-reverse"}}>
                  <div className="post-details-comment-input">
                      <input style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}} type="text" placeholder="أضف مراجعة" value={comment} onChange={(e) => setComment(e.target.value)} />
                      <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" disabled={!comment.length} onClick={handleComment}>أضف مراجعة</button>
                  </div>
                  {!hasRated && 
                    <div className="product-rating-input">
                      <h4 style={{fontFamily: "var(--font-family-arabic)"}}>قيم هذا المنتج من 10</h4>
                      <select onChange={(e) => setRating(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                      <button  style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleRating}>تأكيد</button>

                    </div>
                  }
              </div>
  
            }

            <div className="product-ratings lesson-user-actions-points" style={{display: "flex", flexDirection: "row"}}>
              {!course?.ratings.length ? <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>لم يقم أي مستخدم بتقييم هذه الدورة بعد</p> : 
              <>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>{course?.ratings?.length < 11 ? "تقييمات" : "تقييم"}</p>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>{course?.ratings?.length}</p>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>من</p>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>10 / {avgRating.toFixed(1)}</p>
              </>
              }
              <h4 style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>التقييم</h4>
            </div>

            <div className="comment-section product-comment-section" style={{flexDirection: "row-reverse"}}>
              <h4 style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>المراجعات </h4>
                {course?.reviews?.map((c, i) => (
                    <div key={i}>
                        <h6>{c.split(': ')[0]} :</h6>
                        <p>{c.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
     
      <FooterAr />
    </>
  )
}

export default CourseDetailsAr













