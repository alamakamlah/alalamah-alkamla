import React, {useState, useEffect} from 'react'
import {Navbar, Footer} from '../../sections'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import './points.css'
import {getUser} from '../../actions/users'
import { createRequest } from '../../actions/requests'
import { AdIcon } from '../../components';

const Points = ({isEnglish, setIsEnglish}) => {
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
        <div className="points-container">
            <div className="points-heading">
                <h1>My Points</h1>
                <div className="divider" />
            </div>
            <div className="current-credit">
                <h2>You currently have: </h2>
                <div className="current-credit-container">
                    <p>{user.points} points</p>
                </div>
            </div>
            {isConfirm && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>Your request is submitted and is currently being processed. please wait for 3 business days for the transaction to complete</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={() => {setIsConfirm(false)}}>Ok</button>
              </div>
            </div>
          }
            <div className="credit-actions">
                <div className="credit-charge">
                    <h3>Charge now</h3>
                    <div className="divider" />
                    <form className="charge-form" onSubmit={handleSubmit}>
                        <label htmlFor='amount'>Enter the amount of points you would like to recieve</label>
                        <input className="credit-form-input" type="text" name="amount" onChange={(e) => {setRequestData({...requestData, amount:e.target.value})}} />
                        <p>Upload document to confirm orange cash or PayPal payment to recieve the requested amount of points</p>
                        <p>Orange Cash number : 01277257050</p>
                        <p>PayPal email: elmarghanyhady@gmail.com</p>
                        <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setRequestData({ ...requestData, selectedFile: base64 })} /></div>
                        <button className="button-primary" type="submit">Submit</button>
                    </form>
                </div>
                <div className="credit-withdraw">
                    <h3>Request Withdrawal</h3>
                    <div className="divider" />
                    <form className="withdraw-form" onSubmit={handleWithdraw}>
                        <label htmlFor='withdraw amount'>Enter the amount of points you would like to recieve</label>
                        <input className="credit-form-input" type="text" name="amount" onChange={(e) => {setWithdrawData({...withdrawData, amount: e.target.value})}} />
                        <label htmlFor='withdraw number'>Enter the Orange Cash number or PayPal account you would like to recieve the points on</label>
                        <input className="credit-form-input" type="text" name="withdraw number" onChange={(e) => {setWithdrawData({...withdrawData, phone: e.target.value})}} />
                        <button className="button-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
            
            <h5>Each 10 points are worth 1 US dollar, please note the dollar exchange rate are applied at the time of the transaction being completed</h5>
            <h5>Your account credit can't be less than 150 points at any given time</h5>
            <h5>If you encounter any issues, please contact us on the email alalamahalkamla@gmail.com</h5>
        </div>
        <Footer />
      </>
  )
}

export default Points