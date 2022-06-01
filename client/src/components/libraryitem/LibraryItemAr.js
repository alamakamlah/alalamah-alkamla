import React, {useState, useEffect} from 'react'
import{updateLibrary, deleteLibrary} from '../../actions/library'
import{updateUser, getUser, getUsers} from '../../actions/users'
import { useDispatch, useSelector } from 'react-redux'
import {FaTrash} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'


import './libraryitem.css'

const LibraryItemAr = ({product}) => {
  const userC = JSON.parse(localStorage.getItem('profile'))?.result
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isBought, setIsBought] = useState(product?.users.includes(userC?._id) || userC?.email === "for4future@gmail.com" || userC?.type?.english === "Admin")
  const displayVideo = isBought && product.type === "video"
  const displayDownload = isBought && product.type === "file"
  const [isEnough, setIsEnough] = useState(true) 
  const [isDelete, setIsDelete] = useState(false)
  const isAuthorized = userC?.type?.english === "Admin" || userC?.email === "for4future@gmail.com"
  useEffect(() => {
    dispatch(getUser(userC?._id));
    dispatch(getUsers())
  }, []);
  const {user, users} = useSelector((state) => state.users)
  const owner = users?.find(({_id}) => _id === product?.user?._id)
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
        dispatch(updateLibrary(product._id, { ...product, users: [...product?.users, user?._id] }))
        window.location.reload()
    }
}
const handleDelete = () => {
    dispatch(deleteLibrary(product._id))
  }

  const openProduct = (e) => {
    navigate(`/library/${product._id}`);
  };


// if (!user) return null;
// if (!users) return null;



  const videoId = product.url.slice(32)
  const videoLink = `https://www.youtube.com/embed/${videoId}`
  return (
    <div className="product-container" onClick={openProduct}>
          {isDelete && 
            <div className="is-delete-modal slit-in-vertical">
              <h4>هل أنت متأكد أنك تريد حذف هذا المنتج؟</h4>
              <div className="is-delete-modal-actions">
                <button className="button-primary" onClick={handleDelete}>حذف</button>
                <button className="button-secondary" onClick={() => {setIsDelete(false)}}>الغاء</button>
              </div>
            </div>
          }
        <div className="product-headings">
            <h1>{product.title}</h1>
            <div className="product-title-info">
              <h5>{product?.user?.name}</h5>
            </div>
        </div>
          {isAuthorized && 
            <div className="post-details-creator-actions">
              <div className="delete-icon" onClick={() => setIsDelete(true)}><FaTrash /></div>
            </div>
        }
        <div className="product-meta-info" style={{flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}>
          <h4>{product?.system?.arabic}</h4>
          <h4>{product?.grade?.arabic}</h4>
          <h4>{product?.term?.arabic}</h4>
          <h4>{product?.subject?.arabic}</h4>
        </div>

        <div className="product-description">
          <p>{product.desc}</p>
          <h4>{product.type === "video" ? "فيديو" : "ملف"}</h4>
        </div>
        


        <div className="product-user-actions">
          {!isBought && 
            <div className="lesson-user-actions-points" style={{display: "flex", flexDirection: "row-reverse", justifyContent:"center"}}>
              <p style={{marginLeft: "5px"}}>{product.price} </p>
              <p style={{margin: "0"}}>{product.price > 10 ? "نقطة" : "نقاط"}</p>
            </div>
        
          }
          {!isBought && user && userC && <button style={{fontFamily: "var(--font-family-arabic)"}} onClick={handleClick} className="button-primary">اشتري</button>}
        </div>
        {displayVideo && user && userC &&
          <div className="product-video-link">
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
          <a href={product.url} download>تحميل</a>
        } 
        <h4 style={{display: "flex", flexDirection: "row-reverse", textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}><p style={{marginLeft: "10px"}}>{product?.users.length}</p> <p>{product?.users.length === 1 ? "مستخدم" : "مستخدم"} قام بشراء هذا المنتج</p></h4>
        { user && !isEnough && <h4>You don't have enough credit to buy this item. <br /> <a href="/profile/points">Charge your credit</a></h4>}

    </div>
  )
}

export default LibraryItemAr