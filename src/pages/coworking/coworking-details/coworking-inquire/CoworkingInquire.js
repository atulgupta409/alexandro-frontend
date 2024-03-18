import React from 'react'
import "./CoworkingInquire.scss"
import Innov8Logo from "../../../../images/space-img/Innov8_logo.png";
import TeamImg from "../../../../images/team-pic.png";

const CoworkingInquire = () => {
  return (
    <div className='inquery_box'>
      <div className="head">
        <div className="space_logo">
          <img src={Innov8Logo} className='img-fluid' alt="Innov8 Logo" />
        </div>
        <div className="price_box">
          <p className="price"><span>Starting at</span>₹ 9,000/-month</p>
          <p className="price_tagline">GST* have to be paid extra as per price.</p>
        </div>
      </div>
      <div className="contact_box text-center">
        <img src={TeamImg} className='img-fluid' alt="Team Img" />
        <p>Got questions or want to talk to someone ?</p>
        <p>Call us today and get answers and help.</p>
        <div className="phone_box"><i class="fa fa-phone" aria-hidden="true"></i> 9311328047</div>
        <button className='site_btn w-100'>Inquire Now</button>
      </div>
    </div>
  )
}

export default CoworkingInquire
