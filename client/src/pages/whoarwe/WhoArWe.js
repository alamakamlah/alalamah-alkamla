import React, {useEffect, useState} from 'react'
import {Navbar, Footer} from '../../sections'
import {useNavigate} from 'react-router-dom'
import {AdIcon} from '../../components'
import './whoarwe.css'


const WhoArWe = ({isEnglish, setIsEnglish}) => {

  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
            <div className="store-container">
                <div className="store-heading">
                    <h1>Who Are We</h1>
                </div>
                <div className="divider" />
                <div className="whoarewe-container">
                    <h2>Alalamah Alkamla (The Full Mark) is one of the largest educational platforms in the middle ease, currently operating in Egypt and Qatar</h2>
                    <h2>We have many features that help you whether you're a student, parent teacher or educational institution to aid you along your educational journey</h2>
                    <div className="toc">
                        <h2>Table of Contents</h2>
                        <a href="#tou">Types of Users</a>
                        <a href="#lesson">Lessons</a>
                        <a href="#store">Store</a>
                        <a href="#lib">Library</a>
                        <a href="#cou">Courses</a>
                        <a href="#for">Forum</a>
                        <a href="#tests">Tests</a>
                        <a href="#howp">How does posting an item work</a>
                        <a href="#howb">How does buying an item work</a>
                        <a href="#points">Points</a>
                        <a href="#ads">Ads</a>
                    </div>

                    <h1 id="tou">Types of Users</h1>
                    <h3>&#8226; Student</h3>
                    <p>&#8226; As a student, you will have access to buy lessons, items from the store, items from the library, courses and take tests</p>
                    <p>&#8226; You will have access to The Subjects page, which will have all the subjects for your current studying year, along with all the items from the aforementioned sections specific to your year and selected subject</p>
                    <p>&#8226; Every item you buy or test you take, you can find in your Dashboard</p>
                    <h3>&#8226; Parent</h3>
                    <p>&#8226; As a parent, you will have access to buy lessons, items from the store, items from the library, courses and take tests</p>
                    <p>&#8226; You will have access to The Subjects page, which will have all the subjects for your current studying year, along with all the items from the aforementioned sections specific to your year and selected subject</p>
                    <p>&#8226; Every item you buy or test you take, you can find in your Dashboard</p>
                    <h3>&#8226; Teacher</h3>
                    <p>&#8226; As a teacher, you will have access to post lessons, items to the store, courses. and also post and mark tests</p>
                    <p>&#8226; You will also have access to buy lessons, items from the store, items from the library, courses and take tests</p>
                    <p>&#8226; Every item you post or buy, you can find in your Dashboard</p>
                    <h3>&#8226; Institution</h3>
                    <p>&#8226; As an institution, you will have access to post lessons, items to the store, courses. and also post and mark tests</p>
                    <p>&#8226; You will also have access to buy lessons, items from the store, items from the library, courses and take tests</p>
                    <p>&#8226; Every item you post or buy, you can find in your Dashboard</p>
                    <h1 id="lesson">Lessons</h1>
                    <h3>So what exactly are lessons?</h3>
                    <p>&#8226; Lessons are items that you post as a teacher or an institution, or buy, that have a link meeting (on zoom or otherwise) and a specified date and time. The lesson will take place on that date and time </p>
                    <p>&#8226; The lesson poster provides the meeting link, the lesson price, and it costs him 20 points to post each lesson</p>
                    <p>&#8226; When a user buys a lesson, the lesson price is deducted from his credit and the lesson poster recieves credit equal to that amount</p>
                    <h1 id="store">Store</h1>
                    <h3>So what exactly is the store?</h3>
                    <p>&#8226; The Store is a page containing extra items that you post as a teacher or an institution, or buy</p>
                    <p>&#8226; Those extra items can be Youtube videos, or files of any kind (PDF, PowerPoint etc..)</p>
                    <p>&#8226; The product poster provides the video link or file, the product price, and it costs him 10 points to post each product</p>
                    <p>&#8226; When a user buys a product, the product price is deducted from his credit and the product poster recieves credit equal to that amount</p>
                    <p>&#8226; Users who bought that item can add reviews to it and add ratings</p>
                    <h1 id="lib">Library</h1>
                    <h3>So what exactly is the library?</h3>
                    <p>&#8226; The Library is a page containing extra items provided by us at Alalamah Alkamla that any user can buy</p>
                    <p>&#8226; Those items can be Youtube videos, or files of any kind (PDF, PowerPoint etc..)</p>
                    <p>&#8226; When a user buys a product, the product price is deducted from his credit</p>
                    <p>&#8226; Users who bought that item can add reviews to it and add ratings</p>
                    <h1 id="cou">Courses</h1>
                    <h3>So what exactly are courses?</h3>
                    <p>&#8226; Courses are special products that you post as a teacher or an institution, or buy</p>
                    <p>&#8226; each course can have 5 lessons maximum. Each Lesson contains a youtube video link, a file or both</p>
                    <p>&#8226; The course poster provides the video links or files, the course price, and it costs him 300 points to post each course</p>
                    <p>&#8226; When a user buys a course, the course price is deducted from his credit and the course poster recieves credit equal to that amount</p>
                    <p>&#8226; Users who bought that course can add reviews to it and add ratings</p>
                    <h1 id="for">Forum</h1>
                    <h3>So what exactly is the forum?</h3>
                    <p>&#8226; The forum is a special page where users can communicate with each other by creating posts and adding comments</p>
                    <p>&#8226; Interactions on the forum are completely free for all users</p>
                    <h1 id="tests">Tests</h1>
                    <h3>So what exactly are tests?</h3>
                    <p>&#8226; Tests are special products that you post as a teacher or an institution, or take</p>
                    <p>&#8226; each test can have any number of questions. Questions can be MCQ, True or False, Pick the odd one, Explain. Fill In or generic (Essay)</p>
                    <p>&#8226; The course poster provides the questions and answers</p>
                    <p>&#8226; Each test is free to post for posters and free to take for takers</p>
                    <h1 id="howp">How does posting an item work?</h1>
                    <p>When you post an item, it will not be uploaded on the website right away, not will your credit be reduced. it will be first reviewed by us at Alalamah Alkamla, and if accepted, it will then be uploaded and your credit will be deducted the required points</p>
                    <h1 id="howb">How does buying an item work?</h1>
                    <p>When you buy an item, The item price will be transferred immediately, and the item will be added to your collection immediately</p>
                    <h1 id="points">Points</h1>
                    <p>&#8226; User points are the currency of this platform. You use them to post or buy products. Each 10 points are worth 1 USD</p>
                    <p>&#8226; As a sign up gift, once you create an account on our platform you will be immediately gifted 15$ worth of points to use on the platform</p>
                    <p>&#8226; Since those 15$ are only usable on the platform, When you request withdrawal you must have 150 points remaining in your account, your credit cannot fall below that when requesting a withdrawal </p>
                    <h3>How do I charge or withdraw credit</h3>
                    <h3>&#8226; Charge</h3>
                    <p>&#8226; To charge credit, navigate to My Points page, you will see a Charge Now field where you'll see the information to transfer the money to convert it to points, whether it be by PayPal or Orange Cash</p>
                    <p>&#8226; Once you submit the required amount and the Proof of payment document (A picture of the transaction confirmation message), a request will be submitted and once reviewed, your credit will be charged by the appropriate amount</p>
                    <h3>&#8226; Withdraw</h3>
                    <p>&#8226; To withdraw credit, navigate to My Points page, you will see a Request Widthdrawal field where you will be able to insert you payment address information (Orange Cash or PayPal)</p>
                    <p>&#8226; Once you submit the request, The request will be reviewd by us and if approved, the transfer will be completed and the money will be transferred to your inserted payment address</p>
                    <h1 id="ads">Ads</h1>
                    <h3>You might have noticed the pulsating Ad Icon on the website, so what exactly is that?</h3>
                    <p>&#8226; The Ad Icon is an ever present icon on the platform where users as well as us can post ads</p>
                    <p>&#8226; You can request to post an ad no matter what your account type is</p>
                    <p>&#8226; Ads will be present for either 3 days, a week or a month on the platform. Upon your choice.</p>
                    <p>&#8226; If you choose 3 days, it will cost 25 points.</p>
                    <p>&#8226; If you choose a week, it will cost 50 points.</p>
                    <p>&#8226; If you choose a month, it will cost 150 points.</p>
                    <h3>If you have any other questions or enquiries, please contact us on the email alalamahalkamla@gmail.com, or on any of our social media platforms</h3>
                </div>
            </div>
            
        <Footer />
      </>
  )
}

export default WhoArWe