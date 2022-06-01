import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getProduct, deleteProduct, updateProduct, commentProduct } from '../../actions/store'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import{updateUser, getUser, getUsers} from '../../actions/users'
import {NavbarAr, FooterAr} from '../../sections'
import { AdIconAr } from '../../components'
import './productdetails.css'


const ProductDetailsAr = ({isEnglish, setIsEnglish}) => {
  const dispatch = useDispatch();
  const userC = JSON.parse(localStorage.getItem('profile'));
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false)
  const navigate = useNavigate()
  const [isEnough, setIsEnough] = useState(true) 
  const [isReject, setIsReject] = useState(false)
  useEffect(() => {
    dispatch(getUser(userC?.result?._id));
    dispatch(getUsers())
  }, []);
  useEffect(() => {
      dispatch(getProduct(id));
    }, []);
    

  const {product, products} = useSelector((state) => state.store)
  const {user, users} = useSelector((state) => state.users)
  const owner = users?.find(({_id}) => _id === product?.user?._id)


  const isBought = product?.users.includes(userC?.result?._id) || userC?.result?._id === product?.user?._id || userC?.result?.type?.english === "Admin" || userC?.result?.email === "for4future@gmail.com"

  const isAuthorized = userC?.result?.type?.english === "Admin" || userC?.result?.email === "for4future@gmail.com" || product?.user?._id === userC?.result?._id
  const displayVideo = isBought && product?.type === "video"
  const displayDownload = isBought && product?.type === "file"
  const [comment, setComment] = useState('')
  const hasRatedArr =  product?.ratings.map((rating) => 
    userC?.result?._id === rating?.user
  )

  const hasRated = hasRatedArr?.includes(true)

  const [rating, setRating] = useState(0)
  let total = 0
  product?.ratings.map((rating) => (
    total = Number(total) + Number(rating?.rating)
  ))
  const avgRating = Number(total) / (Number(product?.ratings.length))

  const handleDelete = () => {
    dispatch(deleteProduct(product._id))
    navigate('/store')
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (Number(product?.price) > Number(user?.points)) {
        setIsEnough(false)
    }
    else {
        const newPoints = Number(user?.points) - Number(product?.price)
        const newOwnerPoints = Number(owner?.points) + Number(product?.price)
        dispatch(updateUser(user?._id, {...user, points: String(newPoints), library: [...user?.library, product._id]}))
        dispatch(updateUser(owner?._id, {...owner, points: String(newOwnerPoints)}))
        dispatch(updateProduct(product._id, { ...product, users: [...product?.users, user?._id] }))
        window.location.reload()
    }
}
const handleComment = async () => {
  const newComments = await dispatch(commentProduct(`${userC?.result?.name}: ${comment}`, product._id));

  setComment('');
  window.location.reload()
};

const handleRating = () => {
  dispatch(updateProduct(product._id, { ...product, avgRating: avgRating, ratings: [...product?.ratings, {user: user?._id, rating: rating}] }))
  window.location.reload()
}



  if (!product) return null;

  const videoId = product.url.slice(32)
  const videoLink = `https://www.youtube.com/embed/${videoId}`


  return (
    <>
      <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIconAr />
      <div className="product-details-container">
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>هل أنت متأكد أنك تريد حذف هذا المنتج؟</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>حذف المنتج</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>الغاء</button>
              </div>
            </div>
          }
        <div className="post-details-container course-details-container">
          {isAuthorized && 
            <div className="post-details-creator-actions">
              <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
              {/* <div className="edit-icon" onClick={() => {navigate('./edit')}}><FaRegEdit /></div> */}
            </div>
          }
        
            <div className="post-details-heading course-details-heading">
                <h1>{product?.title}</h1>
                <h2>{product?.user?.name}</h2>
            </div>
            <div className="post-details-creator course-details-grade" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{product?.system?.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{product?.grade?.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{product?.term?.arabic}</h3>
                <h3 style={{fontFamily: "var(--font-family-arabic)"}}>{product?.subject?.arabic}</h3>
            </div>
            <div className="post-details-content">
                <p>
                    {product?.desc}
                </p>
            </div>
            {displayVideo && user && userC &&
              <div className="product-video-link product-details-video-link">
                <iframe width="360"
                        height="210" 
                        src= {videoLink}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
              </div>
            }
            {displayDownload && user && userC &&
            <div className="product-download-button">
              <a href={product?.url} download>تحميل</a>
            </div>
              } 

            <div className="course-useful-info" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} >
            <div className="lesson-user-actions-points" style={{display: "flex", flexDirection: "row-reverse", justifyContent:"center"}}>
                <p style={{marginLeft: "5px"}}>{product?.users?.length} </p>
                <p style={{marginLeft: "5px"}}>مستخدم قام بشراء هذا المنتج </p>
              </div>
              <h4>{product?.type === "video" ? "فيديو" : "ملف"}</h4>
            </div>
            <div className="course-user-actions" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
              {!isBought &&             
              <div className="lesson-user-actions-points" style={{display: "flex", flexDirection: "row-reverse", justifyContent:"center"}}>
                <p style={{fontFamily: "var(--font-family-arabic)", marginLeft: "5px"}}>{product.price} </p>
                <p style={{fontFamily: "var(--font-family-arabic)", margin: "0"}}>{product.price > 10 ? "نقطة" : "نقاط"}</p>
              </div>
              }
              {!isBought && user && userC && <button style={{fontFamily: "var(--font-family-arabic)"}} onClick={handleClick} className="button-primary course-details-button">اشتري</button>}
            </div>

            { user && !isEnough && <h4>رصيدك لا يكفي لشراء هذا المنتج<br /> <a href="/profile/points">اشحن رصيدك</a></h4>}

            {user && !isAuthorized && isBought && userC &&
              <div className="post-details-reader-actions product-details-reader-actions" style={{flexDirection: "row-reverse"}}>
                  <div className="post-details-comment-input">
                      <input style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}} type="text" placeholder="أضف مراجعة" value={comment} onChange={(e) => setComment(e.target.value)} />
                      <button style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" disabled={!comment.length} onClick={handleComment}>أضف مراجعة</button>
                  </div>
                  {!hasRated && 
                    <div className="product-rating-input">
                      <h4 style={{fontFamily: "var(--font-family-arabic)"}}>قيم هذا المنتج من 10</h4>
                      <select onChange={(e) => setRating(e.target.value)}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                      </select>
                      <button  style={{fontFamily: "var(--font-family-arabic)"}} className="button-primary" onClick={handleRating}>تأكيد</button>

                    </div>
                  }
              </div>
  
            }
            <div className="product-ratings lesson-user-actions-points" style={{display: "flex", flexDirection: "row"}}>
              {!product?.ratings.length ? <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>لم يقم أي مستخدم بتقييم هذا المنتج بعد</p> : 
              <>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>{product?.ratings?.length < 11 ? "تقييمات" : "تقييم"}</p>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>{product?.ratings?.length}</p>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>من</p>
                <p style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>10 / {avgRating.toFixed(1)}</p>
              </>
              }
              <h4 style={{ fontFamily: "var(--font-family-arabic)", margin: "5px"}}>التقييم</h4>
            </div>

            <div className="comment-section product-comment-section" style={{flexDirection: "row-reverse"}}>
              <h4 style={{fontFamily: "var(--font-family-arabic)", textAlign: "end"}}>المراجعات </h4>
                {product?.reviews?.map((c, i) => (
                    <div key={i}>
                        <h6>{c.split(': ')[0]} :</h6>
                        <p>{c.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <FooterAr />
    </>
  )
}

export default ProductDetailsAr