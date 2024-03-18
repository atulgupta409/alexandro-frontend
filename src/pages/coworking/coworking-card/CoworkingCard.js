import React from 'react'
import "./CoworkingCard.scss"
import { Link } from 'react-router-dom'
import innovMagnumTower from "../../../images/innov-magnum-tower.jpg";

const CoworkingCard = () => {

    const coworkingCardDate = {
        image: innovMagnumTower,
        title: "Innov8, Orchid Center",
        address: "3rd Floor, Orchid Centre, IILM Institute, Sector 53, Gurugram, Haryana 122022",
        price: "₹ 8,500/month"
    }

  return (
    <Link to="/coworking-space/innov8-orchid-centre-golf-course-road">
      <div className="coworking_card">
        <img src={coworkingCardDate.image} className="img-fluid m-auto d-block" alt="coworking space in golf course road gurgaon" />
        <div className="price-tag">
            {coworkingCardDate.price}
        </div>
        <h5>{coworkingCardDate.title}</h5>
        <p>{coworkingCardDate.address}</p>
      </div>
    </Link>
  )
}

export default CoworkingCard
