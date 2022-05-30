import axios from 'axios'

// const API = axios.create({baseURL: 'http://localhost:5000'})
const API = axios.create({baseURL: 'https://alalamahalkamla.herokuapp.com/'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})


export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&subject=${searchQuery.subject}`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, {value});

export const fetchProduct = (id) => API.get(`/products/${id}`);
export const fetchProductsBySearch = (searchQuery) => API.get(`/products/search?searchQuery=${searchQuery.search || 'none'}&grade=${searchQuery.searchGrade || 'none'}&term=${searchQuery.searchTerm || 'none'}&subject=${searchQuery.searchSubject || 'none'}`);
export const updateProduct = (id, updatedProduct) => API.patch(`/products/${id}`, updatedProduct);
export const fetchProducts = () => API.get('/products')
export const createProduct = (newProduct) => API.post('/products', newProduct)
export const deleteProduct = (id) => API.delete(`/products/${id}`)
export const commentProduct = (value, id) => API.post(`/products/${id}/commentProduct`, {value});

export const fetchLibraryItem = (id) => API.get(`/library/${id}`);
export const fetchLibraryBySearch = (searchQuery) => API.get(`/library/search?searchQuery=${searchQuery.search || 'none'}&grade=${searchQuery.searchGrade || 'none'}&term=${searchQuery.searchTerm || 'none'}&subject=${searchQuery.searchSubject || 'none'}`);
export const updateLibrary = (id, updatedLibrary) => API.patch(`/library/${id}`, updatedLibrary);
export const fetchLibrary = () => API.get('/library')
export const createLibrary = (newLibrary) => API.post('/library', newLibrary)
export const deleteLibrary = (id) => API.delete(`/library/${id}`)
export const commentLibrary = (value, id) => API.post(`/library/${id}/commentLibrary`, {value});


export const fetchCourse = (id) => API.get(`/courses/${id}`);
export const fetchCourseBySearch = (searchQuery) => API.get(`/courses/search?searchQuery=${searchQuery.search || 'none'}&grade=${searchQuery.searchGrade || 'none'}&term=${searchQuery.searchTerm || 'none'}&subject=${searchQuery.searchSubject || 'none'}`);
export const updateCourse = (id, updatedCourse) => API.patch(`/courses/${id}`, updatedCourse);
export const fetchCourses = () => API.get('/courses')
export const createCourse = (newCourse) => API.post('/courses', newCourse)
export const deleteCourse = (id) => API.delete(`/courses/${id}`)
export const commentCourse = (value, id) => API.post(`/courses/${id}/commentCourse`, {value});

export const updateAd = (id, updatedAd) => API.patch(`/ads/${id}`, updatedAd);
export const fetchAds = () => API.get('/ads')
export const createAd = (newAd) => API.post('/ads', newAd)
export const deleteAd = (id) => API.delete(`/ads/${id}`)


export const fetchTest = (id) => API.get(`/tests/${id}`);
export const fetchTestsBySearch = (searchQuery) => API.get(`/tests/search?searchQuery=${searchQuery.search || 'none'}&grade=${searchQuery.searchGrade || 'none'}&term=${searchQuery.searchTerm || 'none'}&subject=${searchQuery.searchSubject || 'none'}`);
export const updateTest = (id, updatedTest) => API.patch(`/tests/${id}`, updatedTest);
export const fetchTests = () => API.get('/tests')
export const createTest = (newTest) => API.post('/tests', newTest)
export const deleteTest = (id) => API.delete(`/tests/${id}`)


export const fetchLesson = (id) => API.get(`/lessons/${id}`);
export const fetchLessonsBySearch = (searchQuery) => API.get(`/lessons/search?searchQuery=${searchQuery.search || 'none'}&grade=${searchQuery.searchGrade || 'none'}&term=${searchQuery.searchTerm || 'none'}&subject=${searchQuery.searchSubject || 'none'}`);
export const updateLesson = (id, updatedLesson) => API.patch(`/lessons/${id}`, updatedLesson);
export const fetchLessons = () => API.get('/lessons')
export const createLesson = (newLesson) => API.post('/lessons', newLesson)
export const deleteLesson = (id) => API.delete(`/lessons/${id}`)

export const fetchRequest = (id) => API.get(`/requests/${id}`);
export const fetchRequests = () => API.get('/requests')
export const createRequest = (newRequest) => API.post('/requests', newRequest)
export const deleteRequest = (id) => API.delete(`/requests/${id}`)

export const fetchUser = (id) => API.get(`/users/${id}`);
export const fetchUsersBySearch = (searchQuery) => API.get(`/users/search?searchQuery=${searchQuery.search || 'none'}&system=${searchQuery.searchSystem || 'none'}&type=${searchQuery.searchType || 'none'}`);
export const fetchUsers = () => API.get('/users')
export const updateUser = (id, updatedUser) => API.patch(`/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/users/${id}`)


export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
export const googleSignUp = (formData) => API.post('/user/googlesignup', formData)
export const fbSignup = (formData) => API.post('/user/fbSignup', formData)