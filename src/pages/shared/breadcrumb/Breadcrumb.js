import React from 'react'
import { Link } from 'react-router-dom'
import "./Breadcrumb.scss"

const Breadcrumb = () => {
  return (
    <div className='breadcrumb_area'>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Coworking space</li>
                <li className="breadcrumb-item"><Link href="coworking-space-on-golf-course-road">Golf Course Road</Link></li>
            </ol>
        </nav>
    </div>
  )
}

export default Breadcrumb
