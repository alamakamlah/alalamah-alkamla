import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr, Posts} from '../../sections'
import './mylibrary.css'
import {useDispatch, useSelector} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import{getLibrary} from '../../actions/library'
import{getProducts} from '../../actions/store'
import { LibraryItemAr, ProductAr, AdIconAr } from '../../components'
import * as years from '../../constants/coursesandgrades.js'


const MyLibraryAr = ({isEnglish, setIsEnglish}) => {
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
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIconAr />
        <div className="forum-container">
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>مكتبتي</h1>
            </div>
            <div className="divider" />
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>من المتجر</h2>
            </div>
            <div className="divider" />
            {user?.type?.english === "Teacher" && 
            <>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>منتجات قمت برفعها</h2 >
                </div>
                <div className="lessons-container">
                  {myStore?.map((lesson) => <ProductAr key={lesson._id} product={lesson} />)}
                </div>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>منتجات قمت بشرائها</h2>
                </div>

            </>}
            {user?.type?.english === "Institution" && 
            <>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>منتجات قمت برفعها</h2 >
                </div>
                <div className="lessons-container">
                  {myStore?.map((lesson) => <ProductAr key={lesson._id} product={lesson} />)}
                </div>
                <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                  <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>منتجات قمت بشرائها</h2>
                </div>

            </>}
            
            <div className="lessons-container">
                {store?.map((storeItem) => <ProductAr key={storeItem._id} product={storeItem} />)}
            </div>
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                <h2 style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>من المكتبة</h2>
            </div>
            <div className="divider" />

            <div className="lessons-container">
                {library?.map((storeItem) => <LibraryItemAr key={storeItem._id} product={storeItem} />)}
            </div>

        </div>
        
        <FooterAr />
      </>
  )
}

export default MyLibraryAr


