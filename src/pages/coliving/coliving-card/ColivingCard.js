import React from "react";
import "./ColivingCard.scss";
import { Link } from "react-router-dom";

const ColivingCard = () => {
  return (
    <Link to="">
    <div class="coliving_card">
      <div class="card_img">
        <img
            src="https://alexandro.in/image/bangalore/Settl-Springfield/1.jpg"
            alt="Coliving in Bangalore"
            class="img-fluid m-auto d-block"
        />
      </div>
      <div class="card_content">
        <div className="card_head">
            <Link to="" class="text-dark">
                <h4>Settl Springfield</h4>
            </Link>
            <p class="address">
            <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
            Koramangala, Bengaluru
            </p>
            <p class="wishlist">
                <i class="far fa-heart" aria-hidden="true"></i>
            </p>
        </div>
        <div className="card_body">
            <p class="amenities">High-Speed Wifi, Comfortable Work Desks, Well-ventilated rooms</p>
            <p class="guarantee_text"><i class="fas fa-rupee-sign" aria-hidden="true"></i> Best Price Guarantee</p>
        </div>
        <div className="card_foot">
            <p class="price">
                ₹ 14,000/<span>month</span>
            </p>
            <p className="explore_btn">
                <Link to="" class="site_btn card_btn">
                    Explore <i class="fas fa-arrow-right" aria-hidden="true"></i>
                </Link>
            </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ColivingCard;
