import React, {useState, useEffect} from 'react'
import {NavbarAr, FooterAr, Posts} from '../../sections'
import './forum.css'
import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {createPost} from '../../actions/posts'
import{getPostsBySearch, getPosts} from '../../actions/posts'
import {AdIconAr} from '../../components'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const ForumAr = ({isEnglish, setIsEnglish}) => {
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        creator: ''
    })
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('profile'))
    const query = useQuery()
    const searchQuery = query.get('searchQuery');
    const location = useLocation()
    const [search, setSearch] = useState('')
    const [subject, setSubject] = useState('');
    const navigate = useNavigate()
    const [currentId, setCurrentId] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost({...postData, user: user?.result}))
    }

    const searchPost = (e) => {
        e.preventDefault()
        if (search.trim() || subject.trim()) {
          dispatch(getPostsBySearch({ search, subject}));
          navigate(`/forum/search?searchQuery=${search || 'none'}&subjects=${subject || 'none'}`);
        } else {
          navigate('/');
        }
      }

     
      const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };



  return (
    <>
        <NavbarAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="forum-container">
            <div className="forum-heading" style={{flexDirection: "row-reverse"}}>
                <h1 style={{ fontFamily: "var(--font-family-arabic)"}}>المنتدى</h1>
                <div className="forum-search">
                    <form>
                        <input type="text" placeholder="البحث بالعنوان" style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />
                        <button className="button-primary" style={{ fontFamily: "var(--font-family-arabic)"}}>بحث</button>
                    </form>
                </div>
            </div>
            <div className="divider" />

            <div className="forum-posts-container">
                {user && 
                <div className="form-create-post">
                    <h2 style={{textAlign: "end", fontFamily: "var(--font-family-arabic)"}}>منشور جديد</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="العنوان" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}}  />
                        <textarea placeholder="المحتوى" value={postData.content} onChange={(e) => setPostData({...postData, content: e.target.value})} style={{textAlign: "end",  fontFamily: "var(--font-family-arabic)"}} />
                        <button className="button-primary" type="submit" style={{ fontFamily: "var(--font-family-arabic)"}}>نشر</button>
                    </form>
                </div>
                }
                <Posts />
            </div>
            
            
        </div>
        <FooterAr />
    </>
  )
}

export default ForumAr