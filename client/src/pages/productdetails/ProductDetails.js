import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getProduct, deleteProduct, updateProduct, commentProduct } from '../../actions/store'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import{updateUser, getUser, getUsers} from '../../actions/users'
import {Navbar, Footer} from '../../sections'
import { AdIcon } from '../../components'
import './productdetails.css'


const ProductDetails = ({isEnglish, setIsEnglish}) => {
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
      <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <AdIcon />
      <div className="product-details-container">
      {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>Are you sure you want to delete this product?</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>Delete</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>Cancel</button>
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
            <div className="post-details-creator course-details-grade">
                <h3>{product?.system?.english}</h3>
                <h3>{product?.grade?.english}</h3>
                <h3>{product?.term?.english}</h3>
                <h3>{product?.subject?.english}</h3>
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
              <a href={product?.url} download>Download</a>
            </div>
              } 

            <div className="course-useful-info">
              <h4>{product?.users?.length} {product?.users?.length === 1 ? "user has" : "users have"} bought this product</h4>
              <h4>{product?.type}</h4>
            </div>
            <div className="course-user-actions">
              {!isBought && <p>{product?.price} points</p>}
              {!isBought && user && userC && <button onClick={handleClick} className="button-primary course-details-button">Buy</button>}
            </div>

            { user && !isEnough && <h4>You don't have enough credit to buy this product. <br /> <a href="/profile/points">Charge your credit</a></h4>}

            {user && !isAuthorized && isBought && userC &&
              <div className="post-details-reader-actions product-details-reader-actions">
                  <div className="post-details-comment-input">
                      <input type="text" placeholder="Add a review" value={comment} onChange={(e) => setComment(e.target.value)} />
                      <button className="button-primary" disabled={!comment.length} onClick={handleComment}>Add a Review</button>
                  </div>
                  {!hasRated && 
                    <div className="product-rating-input">
                      <h4>Rate this product out of 10</h4>
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
                      <button className="button-primary" onClick={handleRating}>Submit</button>

                    </div>
                  }
              </div>
  
            }
            <div className="product-ratings">
              <h4>Rating: {!product?.ratings.length ? "No one has rated this product yet" : `${avgRating.toFixed(1)} / 10 from ${product?.ratings?.length} ratings`}</h4>
            </div>

            <div className="comment-section product-comment-section">
              <h4>Reviews: </h4>
                {product?.reviews?.map((c, i) => (
                    <div key={i}>
                        <h6>{c.split(': ')[0]} :</h6>
                        <p>{c.split(':')[1]}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails