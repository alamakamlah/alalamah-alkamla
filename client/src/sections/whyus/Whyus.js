import React from 'react'
import Bg from '../../assets/background2.png'
import './whyus.css'

const Whyus = () => {
  return (
    <div className="whyus-container page__padding">
        <div className="whyus-heading">
            <img src={Bg} alt="why us" />
            <h1>Why Us?</h1>
        </div>
        <div className="whyus-content">
            <ul>
                <li>The largest education platform in the middle east</li>
                <li>You can join as either a teacher, a student, a parent or an institution</li>
                <li>Convenient purchasing system, you charge your points credit once then use these points to buy and sell items</li>
                <li>You can market for yourself as a teacher, offer and sell various items such as PDFs, videoes and online lessons and courses</li>
                <li>As a student, you can pick and choose your teacher, your product to buy and which classes to attend, all in one place</li>
                <li>We offer instution accounts, which can have multiple teachers and specialize and several subjects</li>
                <li>You can also sign up as a parent, to act as a mediator between your son and the teachers</li>
                <li>You can advertise for your product on our special <a>Advertisement Icon</a></li>
                <li>You can join the forum to create posts, and interact with other communiy members</li>
                <li><a>Learn More</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Whyus