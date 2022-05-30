import React from 'react'
import { useNavigate } from 'react-router-dom'
import './test.css'

const TestAr = ({test}) => {
  const navigate = useNavigate()
    const openCourse = (e) => {
        navigate(`/tests/${test._id}`);
      };
  return (
    <div className="product-container course-container" onClick={openCourse}>
      <div className="product-headings">
            <h1>{test?.title}</h1>
            <div className="product-title-info">
              <h5>{test?.user?.name}</h5>
            </div>
        </div>
        <div className="product-meta-info" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
          <h4>{test?.questions?.length} :عدد الأسئلة</h4>
          <h5>{test?.users.length} :عدد الممتحنين</h5>
        </div>
        <div className="product-meta-info" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
          <h4>{test?.system?.arabic}</h4>
          <h4>{test?.grade?.arabic}</h4>
          <h4>{test?.term?.arabic}</h4>
          <h4>{test?.subject?.arabic}</h4>
        </div>
        
    </div>
  )
}

export default TestAr