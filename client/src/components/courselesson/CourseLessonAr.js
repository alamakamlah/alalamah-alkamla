import React from 'react'
import './courselesson.css'

const CourseLessonAr = ({lesson, index}) => {
    const videoId = lesson.video.slice(32)
    const videoLink = `https://www.youtube.com/embed/${videoId}`
  
  return (
    <div className="course-lesson-container">
        <h2 style={{fontFamily: "var(--font-family-arabic)"}}>الدرس {index + 1}</h2>
        <div className="course-lesson-info">
            <div className="product-video-link">
                <iframe width="560"
                        height="315" 
                        src= {videoLink}
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                </iframe>
            </div>
            <a style={{fontFamily: "var(--font-family-arabic)"}} href={lesson.file} download>تحميل الملف المرفق</a>
          
        </div>
        <hr />
    </div>
  )
}

export default CourseLessonAr