import React from 'react'
import { useNavigate } from 'react-router-dom'
import './course.css'

const Course = ({course}) => {
  const navigate = useNavigate()
    const openCourse = (e) => {
        navigate(`/courses/${course._id}`);
      };
  return (
    <div className="product-container course-container" onClick={openCourse}>
      <div className="product-headings">
            <h1>{course.title}</h1>
            <div className="product-title-info">
              <h5>{course?.user?.name}</h5>
            </div>
        </div>
        <div className="product-meta-info">
          <h4>{course.lessons.length} Lessons</h4>
        </div>
        <div className="product-meta-info">
          <h4>{course?.system?.english}</h4>
          <h4>{course?.grade?.english}</h4>
          <h4>{course?.term?.english}</h4>
          <h4>{course?.subject?.english}</h4>
        </div>
        
        <div className="product-description">
          <p>{course.desc}</p>
          <h4>{course.price} points</h4>
        </div>
        {/* {!isBought && <p>{course.price} points</p>} */}
        {/* {!isBought && <button onClick={handleClick} className="button-primary">Buy</button>} */}
         
    </div>
  )
}

export default Course