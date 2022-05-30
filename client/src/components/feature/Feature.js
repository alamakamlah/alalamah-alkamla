import React from 'react'
import './feature.css'

const Feature = ({img, text, subtext, ar}) => {
  return (

    <div className="feature-wrapper">
      <div className="featuer-container rotate-in-center">
        {ar ? <h2 style={{fontFamily: "var(--font-family-arabic)"}}>{text}</h2> : <h2>{text}</h2>}  
        <img src={img} alt={text} />
      </div>
      <div className="featuer-subtext">
      {ar ? <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{subtext}</h3> : <h3>{subtext}</h3>}  

        
      </div>
    </div>
    
  )
}

export default Feature