import React from 'react'
import './courselesson.css'

const CourseLesson = ({lesson, index}) => {
    const videoId = lesson.video.slice(32)
    const videoLink = `https://www.youtube.com/embed/${videoId}`
  
  return (
    <div className="course-lesson-container">
        <h2>Lesson {index + 1}</h2>
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
            <a href={lesson.file} download>Download Attached File</a>
          
        </div>
        <hr />
    </div>
  )
}

export default CourseLesson