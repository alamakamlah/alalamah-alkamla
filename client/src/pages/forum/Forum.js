import React, {useState, useEffect} from 'react'
import {Navbar, Footer, Posts} from '../../sections'
import './forum.css'
import {useDispatch} from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import {createPost} from '../../actions/posts'
import{getPostsBySearch, getPosts} from '../../actions/posts'
import {AdIcon} from '../../components'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const Forum = ({isEnglish, setIsEnglish}) => {
    const [postData, setPostData] = useState({
        title: '',
        subject: '',
        content: '',
        creator: ''
    })
    useEffect(() => {
        dispatch(getPosts())
      }, [])
     

    const user = JSON.parse(localStorage.getItem('profile'))
    const query = useQuery()
    const searchQuery = query.get('searchQuery');
    const location = useLocation()
    const [search, setSearch] = useState('')
    const [subject, setSubject] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
        <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <AdIcon />
        <div className="forum-container">
            <div className="forum-heading">
                <h1>Forum</h1>
                <div className="forum-search">
                    <form onSubmit={searchPost}>
                        <input type="text" placeholder="Search by Title" value={search} onChange={(e) => setSearch(e.target.value)}   />
                        <button className="button-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
            <div className="divider" />

            <div className="forum-posts-container">
              {user && 
                <div className="form-create-post">
                    <h2>Create Post</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                        <textarea placeholder="Content" value={postData.content} onChange={(e) => setPostData({...postData, content: e.target.value})} />
                        <button className="button-primary" type="submit">Submit</button>
                    </form>
                </div>
              }
                <Posts setCurrentId={setCurrentId}  />
            </div>
            
            
        </div>
        <Footer />
    </>
  )
}

export default Forum