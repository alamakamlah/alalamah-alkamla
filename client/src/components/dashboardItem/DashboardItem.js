import React from 'react'
import './dashboarditem.css'

const DashboardItem = ({title, img}) => {
  return (
    <div className="dashboard-item-container">
        <div className="dashboard-image-container">
            <img src={img} />
        </div>
        <h3>{title}</h3>
    </div>
  )
}

export default DashboardItem