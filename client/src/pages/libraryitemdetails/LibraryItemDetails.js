import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { getLibraryItem, deleteLibrary, updateLibrary } from '../../actions/library'
import {FaTrash, FaRegEdit} from 'react-icons/fa'
import{updateUser, getUser, getUsers} from '../../actions/users'
import {Navbar, Footer} from '../../sections'
import { AdIcon } from '../../components'
import './libraryitemdetails.css'


const LibraryItemDetails = ({isEnglish, setIsEnglish}) => {
  const dispatch = useDispatch();
  const userC = JSON.parse(localStorage.getItem('profile'));
  const { id } = useParams();
  const [isDelete, setIsDelete] = useState(false)
  const navigate = useNavigate()
  const [isEnough, setIsEnough] = useState(true) 
  useEffect(() => {
    dispatch(getUser(userC?.result?._id));
    dispatch(getUsers())
  }, []);
  useEffect(() => {
      dispatch(getLibraryItem(id));
    }, []);
    

  const {libraryItem, library} = useSelector((state) => state.library)
  const {user, users} = useSelector((state) => state.users)
  const owner = users?.find(({_id}) => _id === libraryItem?.user?._id)


  const isBought = libraryItem?.users.includes(userC?.result?._id) || userC?.result?._id === libraryItem?.user?._id || userC?.result?.email === "alalamahalkamla@gmail.com" || userC?.result?.email === "for4future@gmail.com"

  const isAuthorized = userC?.result?.email === "alalamahalkamla@gmail.com" || userC?.result?.email === "for4future@gmail.com"
  const displayVideo = isBought && libraryItem?.type === "video"
  const displayDownload = isBought && libraryItem?.type === "file"
  const [comment, setComment] = useState('')
  const hasRatedArr =  libraryItem?.ratings.map((rating) => 
    userC?.result?._id === rating?.user
  )

  const hasRated = hasRatedArr?.includes(true)

  const [rating, setRating] = useState(0)
  let total = 0
  libraryItem?.ratings.map((rating) => (
    total = Number(total) + Number(rating?.rating)
  ))
  const avgRating = Number(total) / (Number(libraryItem?.ratings.length))

  const handleDelete = () => {
    dispatch(deleteLibrary(libraryItem._id))
    navigate('/store')
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (Number(libraryItem?.price) > Number(user?.points)) {
        setIsEnough(false)
    }
    else {
        const newPoints = Number(user?.points) - Number(libraryItem?.price)
        const newOwnerPoints = Number(owner?.points) + Number(libraryItem?.price)
        dispatch(updateUser(user?._id, {...user, points: String(newPoints), library: [...user?.library, libraryItem._id]}))
        dispatch(updateUser(owner?._id, {...owner, points: String(newOwnerPoints)}))
        dispatch(updateLibrary(libraryItem._id, { ...libraryItem, users: [...libraryItem?.users, user?._id] }))
        window.location.reload()
    }
}
const handleComment = async () => {
  // const newComments = await dispatch(commentProduct(`${userC?.result?.name}: ${comment}`, product._id));

  setComment('');
  window.location.reload()
};

const handleRating = () => {
  dispatch(updateLibrary(libraryItem._id, { ...libraryItem, avgRating: avgRating, ratings: [...libraryItem?.ratings, {user: user?._id, rating: rating}] }))
  window.location.reload()
}



  if (!libraryItem) return null;

  const videoId = libraryItem.url.slice(32)
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
                <h1>{libraryItem?.title}</h1>
            </div>
            <div className="post-details-creator course-details-grade">
                <h3>{libraryItem?.system?.english}</h3>
                <h3>{libraryItem?.grade?.english}</h3>
                <h3>{libraryItem?.term?.english}</h3>
                <h3>{libraryItem?.subject?.english}</h3>
            </div>
            <div className="post-details-content">
                <p>
                    {libraryItem?.desc}
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
              <a href={libraryItem?.url} download>Download</a>
            </div>
              } 

            <div className="course-useful-info">
              <h4>{libraryItem?.users?.length} {libraryItem?.users?.length === 1 ? "user has" : "users have"} bought this product</h4>
              <h4>{libraryItem?.type}</h4>
            </div>
            <div className="course-user-actions">
              {!isBought && <p>{libraryItem?.price} points</p>}
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
              <h4>Rating: {!libraryItem?.ratings.length ? "No one has rated this product yet" : `${avgRating.toFixed(1)} / 10 from ${libraryItem?.ratings?.length} ratings`}</h4>
            </div>

            <div className="comment-section product-comment-section">
              <h4>Reviews: </h4>
                {libraryItem?.reviews?.map((c, i) => (
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

export default LibraryItemDetails