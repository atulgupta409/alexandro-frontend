import React from 'react'
import { Link } from 'react-router-dom'
import "./OfficeSpaceBreadcrumb.scss"

const OfficeSpaceBreadcrumb = () => {
  return (
    <div className='breadcrumb_area'>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/">Office space</Link></li>
                <li className="breadcrumb-item"><Link href="/gurgaon/commercial-office-space-in-golf-course-road-gurgaon">Golf Course Road</Link></li>
            </ol>
        </nav>
    </div>
  )
}

export default OfficeSpaceBreadcrumb
