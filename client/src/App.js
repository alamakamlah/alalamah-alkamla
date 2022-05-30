import './App.css';
import { BrowserRouter, Routes, Route,  Navigate, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import {getProducts} from './actions/store'
import {Home,
   HomeAr,
    Ad,
     AdAr,
      Auth,
       AuthAr,
        Forum, 
        ForumAr, 
        UserDetailsAr,
        PostDetails, 
        UserProfile,
        LibraryAr,
        UserProfileAr,
        LibraryNewAr,
        Store,
        AdminDashboardAr,
        RequestsAr,
        RequestDetailsAr,
        ProdcutDetails,
        PostDetailsAr,
        ProdcutDetailsAr,
        LibraryItemDetails,
        LibraryItemDetailsAr,
        StoreAr,
        Tests,
        TestsAr,
        NewTest,
        NewTestAr,
        StoreFormAr,
        StoreForm, 
        EditPost, 
        Points, 
        AdminDashboard, 
        Requests, 
        PointsAr,
        RequestDetails,
        TestDetails,
        TestDetailsAr,
        WhoArWe,
        WhoArWeAr,
        Subjects,
        SubjectsAr,
        Users, 
        NewAd,
        NewAdAr,
        UserDetails, 
        Lessons,
        LessonsAr, 
        NewLesson,
        NewLessonAr,
         Library,
         MyFavs,
          MyFavsAr,
          MyLibrary,
          MyLibraryAr,
          MyTests,
          MyTestsAr,
          MyCourses,
          MyCoursesAr,
          CoursesAr,
          NewCourseAr,
          CourseDetailsAr,
         LibraryNew, Courses, NewCourse, CourseDetails, Dashboard, DashboardAr, MyLessons,
         MyLessonsAr} from './pages'
import {useState, useEffect} from 'react'
import ProductDetails from './pages/productdetails/ProductDetails';
import UsersAr from './pages/users/UsersAr';


function App() {
  const [isEnglish, setIsEnglish] = useState(true)
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'))
  const isAdmin = user?.result?.email === "for4future@gmail.com" || user?.result?.email === "alalamahalkamla@gmail.com"

  return (
    <div className="app-container">

      <BrowserRouter>
        <Routes>

            {isAdmin && 
              <Route path="/" element = {isEnglish ? <AdminDashboard isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <AdminDashboardAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            }
            {!user && 
              <Route path="/" element = {isEnglish ? <Home isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <HomeAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            }
            {user && 
              <Route path="/" element = {isEnglish ? <Dashboard isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <DashboardAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            }
            <Route path="/ad" element = { isEnglish ? <Ad isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <AdAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/ad/new" element = { isEnglish ? <NewAd isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <NewAdAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/auth" element = { isEnglish ? <Auth isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <AuthAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/whoarwe" element = { isEnglish ? <WhoArWe isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <WhoArWeAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/forum/search"  element= { isEnglish ? <Forum isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <ForumAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/lessons/search"  element= { isEnglish ? <Lessons isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <LessonsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/store/search"  element= { isEnglish ? <Store isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <StoreAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/forum" element = { isEnglish ? <Forum isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <ForumAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/tests" element = { isEnglish ? <Tests isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <TestsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/tests/new" element = { isEnglish ? <NewTest isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <NewTestAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/store" element = { isEnglish ? <Store isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <StoreAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/store/new" element = { isEnglish ? <StoreForm isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <StoreFormAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/lessons/new" element = { isEnglish ? <NewLesson isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <NewLessonAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/profile" element = { isEnglish ? <UserProfile isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <UserProfileAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/profile/points" element = { isEnglish ? <Points isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <PointsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/forum/:id" element = { isEnglish ? <PostDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <PostDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/store/:id" element = { isEnglish ? <ProductDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <ProdcutDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/library/:id" element = { isEnglish ? <LibraryItemDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <LibraryItemDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/forum/:id/edit" element = { isEnglish ? <EditPost isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <EditPost isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/admin" element = { isEnglish ? <AdminDashboard isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <AdminDashboardAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/mylessons" element = { isEnglish ? <MyLessons isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <MyLessonsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/myfavs" element = { isEnglish ? <MyFavs isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <MyFavsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/mytests" element = { isEnglish ? <MyTests isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <MyTestsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/mylibrary" element = { isEnglish ? <MyLibrary isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <MyLibraryAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/mycourses" element = { isEnglish ? <MyCourses isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <MyCoursesAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/requests" element = { isEnglish ? <Requests isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <RequestsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/users" element = { isEnglish ? <Users isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <UsersAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/users/search" element = { isEnglish ? <Users isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <UsersAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/subjects" element = { isEnglish ? <Subjects isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <SubjectsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/users/:id" element = { isEnglish ? <UserDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <UserDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/requests/:id" element = { isEnglish ? <RequestDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <RequestDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/lessons" element = { isEnglish ? <Lessons isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <LessonsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/library" element = { isEnglish ? <Library isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <LibraryAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/library/search" element = { isEnglish ? <Library isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <LibraryAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/courses" element = { isEnglish ? <Courses isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <CoursesAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/courses/search" element = { isEnglish ? <Courses isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <CoursesAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/dashboard" element = { isEnglish ? <Dashboard isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <DashboardAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/courses/new" element = { isEnglish ? <NewCourse isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <NewCourseAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/courses/:id" element = { isEnglish ? <CourseDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <CourseDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/tests/:id" element = { isEnglish ? <TestDetails isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <TestDetailsAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            <Route path="/library/new" element = { isEnglish ? <LibraryNew isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> : <LibraryNewAr isEnglish={isEnglish} setIsEnglish={setIsEnglish} />} />
            {/* <Route path="/user" exact element = {<User />} />
            <Route path="/forum" exact element = {<Forum />} />
            <Route path="/library" exact element = {<Library />} />
            <Route path="/user/lessons" exact element = {<Lessons />} />
            <Route path="/user/account" exact element = {<Account />} />
            <Route path="/user/mylibrary" exact element = {<Mylibrary />} />
            <Route path="/user/mytests" exact element = {<Mytests />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
