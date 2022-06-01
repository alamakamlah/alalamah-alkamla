import React, {useState, useEffect} from 'react'
import './newad.css'
import {NavbarAr, FooterAr} from '../../../sections'
import {createRequest} from '../../../actions/requests'
import {createAd, deleteAd} from '../../../actions/ads'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import{updateUser, getUser} from '../../../actions/users'
import * as years from '../../../constants/coursesandgrades.js'



const NewAdAr = ({isEnglish, setIsEnglish}) => {
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
      if (userC?.type?.english === "Admin" || userC?.email === "for4future@gmail.com") {
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



    if (!user || userC?.type?.english !== "Admin" || userC?.email !== "for4future@gmail.com") return null;


  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
            <div className="store-form-container">
                <div className="store-form-heading" style={{flexDirection: "row-reverse"}}>
                    <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>اعلان جديد</h1>
                </div>
                <div className="divider" />
                <div className="store-form">
                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>إضافة اعلان جديد سيكلفك {productData?.plan?.price} نقطة. لديك حاليًا {user?.points} نقطة.</h2>
                {!isEnough && <h3 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>رصيدك لا يكفي لإضافة اعلان جديد، حاول تقليل مدة الإعلان أو <a href="/profile/points">اشحن رصيدك</a></h3>}
                    <form onSubmit={handleSubmit} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <div className="store-form-headings">
                            <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="title" onChange={(e) => setProductData({...productData, title: e.target.value})} placeholder="العنوان" />
                        </div>
                        <div className="new-lesson-grade" onClick={() => setTogglePlan(!togglePlan)}>
                            {productData?.plan?.arabic}
                        </div>
                        {togglePlan && 
                            years.adPlan.map((plan, i) => <p className="new-lesson-option" key={i} onClick={() => { setProductData({...productData, plan: plan}); setTogglePlan(false)}} >{plan.arabic}</p>)
                        }

                        <input style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} required type="text" name="Content" placeholder="المحتوى" onChange={(e) => setProductData({...productData, content: e.target.value})} />
                        {isConfirm && 
                            <div className="is-delete-modal slit-in-vertical">
                            <h4>تم إرسال طلبك وتتم حاليًا مراجعته، برجاء الانتظار 3 أيام عمل حتى تتم اضافة الإعلان</h4>
                            <div className="is-delete-modal-actions">
                                <button className="button-primary" onClick={() => {navigate('/ad')}}>موافقة</button>
                            </div>
                            </div>
                        }
                        <button type="submit" className="button-primary" style={{fontFamily: "var(--font-family-arabic)"}}>تأكيد</button>
                    </form>
                </div>
            </div>
        <FooterAr />
      </>
  )
}

export default NewAdAr