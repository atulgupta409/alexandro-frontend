import React from 'react'
import "./BannerSec.scss"
import CoworkingService from "../../../images/coworking-service.jpg";
import ColivingService from "../../../images/coliving-service.jpg";
import { Link } from 'react-router-dom';

const BannerSec = () => {

    const bannerServices = [
        {
            img:CoworkingService,
            title: "Coworking Space",
            content: "Unleashing productivity in a vibrant community. Where work meets inspiration, and collaboration fuels success.",
            url: "/",
            btnText: "Explore »",
            btnClass: "site_btn"
        },
        {
            img:ColivingService,
            title: "Coliving/PG",
            content: "Explore our fully furnished coliving spaces for a stress-free lifestyle. Secure your move-in ready space today to begin your new journey.",
            url: "/",
            btnText: "Explore »",
            btnClass: "site_btn second_btn"
        }
    ]

  return (
    <section className='main_banner'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="main_content">
                        <h1>Alexandro, space search made simple</h1>
                        <p>Modern Co-working offices & Coliving Space all at one place.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                {bannerServices.map((item) =>
                    <div className="col-md-6">
                        <div className="card service_item">
                            <div className="card-img">
                                <img src={item.img} className="card-img-top" alt={item.title} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.content}</p>
                                <Link to={item.url} className={item.btnClass}>{item.btnText}</Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default BannerSec
