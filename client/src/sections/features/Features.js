import React from 'react'
import './features.css'
import {Feature} from '../../components'
import Cart from '../../assets/cartWhite.png'
import Class from '../../assets/classroomWhite.png'
import Lib from '../../assets/libraryWhite.png'
import Points from '../../assets/pointsWhite.png'
import Test from '../../assets/testWhite.png'
import Forum from '../../assets/forumWhite.png'

const Features = () => {
  return (
    <div className="features-main-container section__padding section__margin">
        <div className="features-main-heading">
            <h1>Our Services</h1>
            <div className="divider"></div>
            <h2>Join now to enjoy all of those features and more</h2>
        </div>
        <div className="features-container">
            <Feature img={Lib} text="Library" subtext="to buy material for all of your subjects" />
            <Feature img={Class} text="Classroom" subtext="100% online to attend and teach various subjects" />
            <Feature img={Cart} text="Store" subtext="To buy and sell extra material" />
            <Feature img={Test} text="Online Tests" subtext="Fully integrated to assess students' level" />
            <Feature img={Points} text="Point System" subtext="Charge your points credit to buy and sell items" />
            <Feature img={Forum} text="Forum" subtext="To discuss with other community members" />
           
        </div>
    </div>
  )
}

export default Features