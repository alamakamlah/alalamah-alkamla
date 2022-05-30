import React from 'react'
import { useNavigate } from 'react-router-dom'
import './test.css'

const Test = ({test}) => {
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
        <div className="product-meta-info">
          <h4>{test?.questions?.length} Questions</h4>
          <h5>{test?.users.length} {test?.users.length === 1 ? "user has" : "users have"} taken this test</h5>
        </div>
        <div className="product-meta-info">
          <h4>{test?.system?.english}</h4>
          <h4>{test?.grade?.english}</h4>
          <h4>{test?.term?.english}</h4>
          <h4>{test?.subject?.english}</h4>
        </div>
        
    </div>
  )
}

export default Test