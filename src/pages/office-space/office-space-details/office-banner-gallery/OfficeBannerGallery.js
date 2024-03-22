import React from 'react'
import "./OfficeBannerGallery.scss";
import MainImg from "../../../../images/space-img/global-foyer-ofc1.jpg";
import SecondImg from "../../../../images/space-img/global-foyer-ofc2.jpg";
import ThirdImg from "../../../../images/space-img/global-foyer-ofc3.jpg";
import ForthImg from "../../../../images/space-img/global-foyer-ofc4.jpg";
import FifthImg from "../../../../images/space-img/global-foyer-ofc5.jpg";

const OfficeBannerGallery = () => {
  return (
    <section className="officespace_image_gallery">
      <div className="container-fluid">
        <div className="row no-gutters ">
          <div className="col-md-6 col-12">
            <div className="banner_image_item main_img">
                <img
                className="img-fluid"
                src={MainImg}
                alt="Innov8 Golf Course Road"
                />
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="banner_image_item bottom_space">
                <img
                className="img-fluid"
                src={SecondImg}
                alt="Innov8 Golf Course Road"
                />
            </div>

            <div className="banner_image_item">
                <img
                className="img-fluid"
                src={ThirdImg}
                alt="Innov8 Golf Course Road"
                />
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="banner_image_item bottom_space">
                <img
                className="img-fluid"
                src={ForthImg}
                alt="Innov8 Golf Course Road"
                />
            </div>

            <div className="banner_image_item">
                <img
                className="img-fluid"
                src={FifthImg}
                alt="Innov8 Golf Course Road"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeBannerGallery
