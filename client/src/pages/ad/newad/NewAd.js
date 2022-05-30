import React, {useState, useEffect} from 'react'
import './newad.css'
import {Navbar, Footer} from '../../../sections'
import {createRequest} from '../../../actions/requests'
import {createAd} from '../../../actions/ads'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import{updateUser, getUser} from '../../../actions/users'
import * as years from '../../../constants/coursesandgrades.js'



const NewAd = ({isEnglish, setIsEnglish}) => {
    const navigate = useNavigate()
    const [togglePlan, setTogglePlan ] = useState(false)
    const [plan, setPlan] = useState('')
    const [isConfirm, setIsConfirm] = useState(false)
    const [productData, setProductData] = useState({
        title: '',
        content: '',
        plan: {arabic: "المدة", english: "Duration", price: "25"}
    })
    const dispatch = useDispatch()
    const [isEnough, setIsEnough] = useState(true)

    const userC = JSON.parse(localStorage.getItem('profile'))?.result

    useEffect(() => {
      dispatch(getUser(userC?._id));
    }, []);
    const {user, users} = useSelector((state) => state.users)


    const handleSubmit = (e) => {
      e.preventDefault()
      if (userC?.email === "alalamahalkamla@gmail.com" || userC?.email === "for4future@gmail.com") {
        dispatch(createAd({...productData, user: userC}))
        navigate('/ad')
      }
        else if (Number(user.points) < Number(productData?.plan?.price)) {
            setIsEnough(false)
        } else {
            dispatch(createRequest({user: user, type: {arabic: "إعلان", english: "ad"}, data: {...productData, user: user}}))
            setIsConfirm(true)
        }
    }



    if (!user || userC?.email !== "alalamahalkamla@gmail.com" || userC?.email !== "for4future@gmail.com") return null;


  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="store-form-container">
                <div className="store-form-heading">
                    <h1>New Ad</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                <h2>Each new ad costs you {productData?.plan?.price} points to submit it. you currently have {user?.points} points.</h2>
                {!isEnough && <h3>You currenty don't have enough points. Please Charge your points to submit a new ad <a href="/profile/points">Charge Your Points</a></h3>}
                    <form onSubmit={handleSubmit}>
                        <div className="store-form-headings">
                            <input required type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="Title" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setTogglePlan(!togglePlan)}>
                            {productData?.plan?.english}
                        </div>
                        {togglePlan && 
                            years.adPlan.map((plan, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, plan: plan}); setTogglePlan(false)}} >{plan.english}</p>)
                        }

                        <input required type="text" name="Content" placeholder="Content" onChange={(e) => setProductData({...productData, content: e.target.value})} />
                        {isConfirm && 
                            <div className="is-delete-modal slit-in-vertical">
                            <h4>Your request is submitted and is currently being processed. please wait for 3 business days for the ad to be added</h4>
                            <div className="is-delete-modal-actions">
                                <button className="button-primary" onClick={() => {navigate('/ad')}}>Ok</button>
                            </div>
                            </div>
                        }
                        <button type="submit" className="button-primary">Submit</button>
                    </form>
                </div>
            </div>
        <Footer />
      </>
  )
}

export default NewAd