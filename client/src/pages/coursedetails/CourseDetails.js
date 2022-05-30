import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getCourse, deleteCourse, updateCourse, commentCourse } from '../../actions/courses'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import{updateUser, getUser, getUsers} from '../../actions/users'
import {Navbar, Footer} from '../../sections'
import { CourseLesson } from '../../components'
import { AdIcon } from '../../components'
import './coursedetails.css'


const CourseDetails = ({isEnglish, setIsEnglish}) => {
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

  const isBought = userC?.result.email === "alalamahalkamla@gmail.com" || userC?.result?.email === "for4future@gmail.com" || course?.users.includes(userC?.result?._id) || userC?.result?._id === course?.user?._id

  const isAuthorized = userC?.result.email === "alalamahalkamla@gmail.com" || userC?.result?.email === "for4future@gmail.com" || course?.user?._id === userC?.result?._id

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
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIcon />
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
              <div className="edit-icon" onClick={() => {navigate('./edit')}}><FaRegEdit /></div>
            </div>
          }
        
            <div className="post-details-heading course-details-heading">
                <h1>{course?.title}</h1>
                <h2>{course.user.name}</h2>
            </div>
            <div className="post-details-creator course-details-grade">
                <h3>{course?.system.english}</h3>
                <h3>{course?.grade.english}</h3>
                <h3>{course?.term.english}</h3>
                <h3>{course?.subject.english}</h3>
            </div>
            <div className="post-details-content">
                <p>
                    {course.desc}
                </p>
                
            </div>
            <div className="course-useful-info">
              <h4>{course.users.length} {course.users.length === 1 ? "user has" : "users have"} bought this course</h4>
              <h4>The course has {course?.lessons.length} lessons</h4>
            </div>
            <div className="course-user-actions">
              {!isBought && <p>{course.price} points</p>}
              {!isBought && user && <button onClick={handleClick} className="button-primary course-details-button">Buy</button>}
            </div>

            { user && !isEnough && <h4>You don't have enough credit to buy this course. <br /> <a href="/profile/points">Charge your credit</a></h4>}

            {isBought && user &&
               <div className="course-lessons-containr">
                  {course?.lessons.map((lesson, i) => <CourseLesson index={i} key={lesson._id} lesson={lesson} />)}
                </div>
            }
           
           {user && !isAuthorized && isBought && userC &&
              <div className="post-details-reader-actions product-details-reader-actions">
                  <div className="post-details-comment-input">
                      <input type="text" placeholder="Add a review" value={comment} onChange={(e) => setComment(e.target.value)} />
                      <button className="button-primary" disabled={!comment.length} onClick={handleComment}>Add a Review</button>
                  </div>
                  {!hasRated && 
                    <div className="product-rating-input">
                      <h4>Rate this course out of 10</h4>
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
                      <button className="button-primary" onClick={handleRating}>Submit</button>

                    </div>
                  }
              </div>
  
            }

            <div className="product-ratings">
              <h4>Rating: {!course?.ratings.length ? "No one has rated this course yet" : `${avgRating.toFixed(1)} / 10 from ${course?.ratings?.length} ratings`}</h4>
            </div>

            <div className="comment-section product-comment-section">
              <h4>Reviews: </h4>
                {course?.reviews?.map((c, i) => (
                    <div key={i}>
                        <h6>{c.split(': ')[0]} :</h6>
                        <p>{c.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
     
      <Footer />
    </>
  )
}

export default CourseDetails