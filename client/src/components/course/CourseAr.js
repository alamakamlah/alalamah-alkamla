import React from 'react'
import { useNavigate } from 'react-router-dom'
import './course.css'

const CourseAr = ({course}) => {
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
          <h4 style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>{course.lessons.length} الدروس</h4>
        </div>
        <div className="product-meta-info" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
          <h4>{course?.system?.arabic}</h4>
          <h4>{course?.grade?.arabic}</h4>
          <h4>{course?.term?.arabic}</h4>
          <h4>{course?.subject?.arabic}</h4>
        </div>
        
        <div className="product-description">
          <p>{course.desc}</p>
          <h4 style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>السعر {course.price} نقطة</h4>
        </div>
        {/* {!isBought && <p>{course.price} points</p>} */}
        {/* {!isBought && <button onClick={handleClick} className="button-primary">Buy</button>} */}
         
    </div>
  )
}

export default CourseAr