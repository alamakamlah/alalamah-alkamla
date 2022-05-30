import React from 'react'
import HeaderIcon from '../../assets/header.png'
import './heading.css'

const Heading = () => {
  return (
    <div className="home-container page__padding">
        <div className="home-main-heading">
          <div className="home-main-heading-pic">
            <img src={HeaderIcon} />
          </div>
          <div className="home-main-heading-text">
            <h1>The largest</h1>
            <h1>Education platform</h1>
            <h1>In the Middle East</h1>
          </div>
        </div>
      </div>
  )
}

export default Heading