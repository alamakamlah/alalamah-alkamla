import React from 'react'
import HeaderIcon from '../../assets/header.png'
import './headingar.css'

const Heading = () => {
  return (
    <div className="home-container page__padding">
        <div className="home-main-heading-ar">
          <div className="home-main-heading-pic">
            <img src={HeaderIcon} />
          </div>
          <div className="home-main-heading-text-ar">
            <h1>المنصة التعليمية</h1>
            <h1>الأكبر</h1>
            <h1>في الشرق الأوسط</h1>
          </div>
        </div>
      </div>
  )
}

export default Heading