import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr} from '../../sections'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import './points.css'
import {getUser} from '../../actions/users'
import { createRequest } from '../../actions/requests'
import { AdIconAr } from '../../components';

const PointsAr = ({isEnglish, setIsEnglish}) => {
    const userId = JSON.parse(localStorage.getItem('profile'))?.result?._id
    const dispatch = useDispatch()
    const [isConfirm, setIsConfirm] = useState(false)
    const [requestData, setRequestData] = useState({
        amount: '',
        selectedFile: '',
        type: {arabic: "شحن", english: "charge"},
    })
    const [withdrawData, setWithdrawData] = useState({
        amount: '',
        phone: '',
        type: {arabic: "سحب", english: "withdraw"},
    })

    useEffect(() => {
        dispatch(getUser(userId))
      }, []);
      const {user, users} = useSelector((state) => state.users)


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createRequest({...requestData, user: user}))
        setIsConfirm(true)
    }

    const handleWithdraw = (e) => {
        e.preventDefault()
        dispatch(createRequest({...withdrawData, user: user})) 
        setIsConfirm(true)

    }

    if (!user) return null;

  return (
      <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
        <div className="points-container">
            <div className="points-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>نقاطي</h1>
                <div className="divider" />
            </div>
            <div className="current-credit" style={{display: "flex", alignItems: "flex-end", flexDirection: "column"}}>
                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>:رصيدك الحالي</h2>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", fontFamily: "var(--font-family-arabic)"}} className="current-credit-container">
                    <p>نقطة</p>
                    <p>&nbsp;</p>
                    <p>{user.points}</p>
                </div>
            </div>
            {isConfirm && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>تم إرسال طلبك وجاري مراجعته، فضلًا انتظر 3 أيام عمل حتى تتم المعاملة</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={() => {setIsConfirm(false)}}>موافقة</button>
              </div>
            </div>
          }
            <div className="credit-actions" style={{flexDirection: "row-reverse"}}>
                <div className="credit-charge">
                    <h3 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>اشحن رصيدك</h3>
                    <div className="divider" />
                    <form className="charge-form" onSubmit={handleSubmit} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} >
                        <label htmlFor='amount'>ادخل رصيد النقط الذي تود تلقيه</label>
                        <input className="credit-form-input" type="text" name="amount" onChange={(e) => {setRequestData({...requestData, amount:e.target.value})}} />
                        <p>ارفق ايصال أورانج كاش أو بايبال لتأكيد عملية الدفع</p>
                        <p>رقم أورانج كاش: 01277257050</p>
                        <p>elmarghanyhady@gmail.com إيميل بايبال </p>
                        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setRequestData({ ...requestData, selectedFile: base64 })} /></div>
                        <button className="button-primary" type="submit" style={{fontFamily: "var(--font-family-arabic)"}}>ارسال</button>
                    </form>
                </div>
                <div className="credit-withdraw">
                    <h3 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>اسحب رصيدك</h3>
                    <div className="divider" />
                    <form className="withdraw-form" onSubmit={handleWithdraw} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                        <label htmlFor='withdraw amount'>ادخل رصيد النقاط الذي تود تحويله</label>
                        <input className="credit-form-input" type="text" name="amount" onChange={(e) => {setWithdrawData({...withdrawData, amount: e.target.value})}} />
                        <label htmlFor='withdraw number'>ادخل رقم أورانج كاش أو حساب بايبال الذي تود تحويل النقدية إليه</label>
                        <input className="credit-form-input" type="text" name="withdraw number" onChange={(e) => {setWithdrawData({...withdrawData, phone: e.target.value})}} />
                        <button className="button-primary" type="submit" style={{fontFamily: "var(--font-family-arabic)"}}>ارسال</button>
                    </form>
                </div>
            </div>
            
            <h5 style={{display: "flex", flexDirection: "row-reverse", textAlign: "end", justifyContent: "flex-end", fontFamily: "var(--font-family-arabic)"}}>كل 10 نقاط تساوي 1 دولار أمريكي. يتم اعتماد أسعار تحويل الدولار في وقت تحويل الرصيد، رصيدك لا يمكن أن يقل عن 150 نقطة</h5>
            <h5 style={{display: "flex", flexDirection: "row-reverse", textAlign: "end", justifyContent: "flex-end", fontFamily: "var(--font-family-arabic)"}}></h5>
            <h5 style={{display: "flex", flexDirection: "row-reverse", justifyContent: "flex-end", alignItems: "flex-end", fontFamily: "var(--font-family-arabic)"}}>
                <p>إذا واجهتك أي مشاكل برجاء التواصل معنا على الإيميل</p>
                <p>&nbsp;</p>
                <p>alalamahalkamla@gmail.com</p>
            </h5>
        </div>
        <FooterAr />
      </>
  )
}

export default PointsAr