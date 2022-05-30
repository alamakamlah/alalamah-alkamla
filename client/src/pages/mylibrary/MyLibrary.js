import React, {useState, useEffect} from 'react'
import {Navbar, Footer, Posts} from '../../sections'
import './mylibrary.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getLibrary} from '../../actions/library'
import{getProducts} from '../../actions/store'
import { LibraryItem, Product, AdIcon } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyLibrary = ({isEnglish, setIsEnglish}) => {
    const [subject, setSubject] = useState('');
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))?.result
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getLibrary())
        dispatch(getProducts())
      }, [])

    const libraryC = useSelector((state) => state?.library?.library)
    const products = useSelector((state) => state?.store?.products)

    let store = []
    let myStore = []
    let library = []
     
    store = products.filter((lesson => lesson?.users.includes(user?._id) ))
    myStore = products.filter((lesson => lesson?.user?._id === user?._id ))
    library = libraryC.filter((lesson => lesson?.users.includes(user?._id) ))


  return (
      <>
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
        <div className="forum-container">
            <div className="forum-heading">
                <h1>My Library</h1>
            </div>
            <div className="divider" />
            <div className="forum-heading">
                <h2>From the store</h2>
            </div>
            <div className="divider" />
            {user?.type?.english === "Teacher" && 
            <>
                <div className="forum-heading">
                  <h2>Products I posted</h2>
                </div>
                <div className="lessons-container">
                  {myStore?.map((lesson) => <Product key={lesson._id} product={lesson} />)}
                </div>
                <div className="forum-heading">
                  <h2>Products I bought</h2>
                </div>

            </>}
            {user?.type?.english === "Institution" && 
            <>
                <div className="forum-heading">
                  <h2>Products I posted</h2>
                </div>
                <div className="lessons-container">
                  {myStore?.map((lesson) => <Product key={lesson._id} product={lesson} />)}
                </div>
                <div className="forum-heading">
                  <h2>Products I bought</h2>
                </div>

            </>}
            <div className="lessons-container">
                {store?.map((storeItem) => <Product key={storeItem._id} product={storeItem} />)}
            </div>
            <div className="forum-heading">
                <h2>From the library</h2>
            </div>
            <div className="divider" />

            <div className="lessons-container">
                {library?.map((storeItem) => <LibraryItem key={storeItem._id} product={storeItem} />)}
            </div>

        </div>
        
        <Footer />
      </>
  )
}

export default MyLibrary