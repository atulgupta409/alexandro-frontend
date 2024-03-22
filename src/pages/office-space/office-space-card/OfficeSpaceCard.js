import React from 'react'
import "./OfficeSpaceCard.scss"
import { Link } from 'react-router-dom'
import GlobalFoyerImg from "../../../images/global-foyer-main.jpg";

const OfficeSpaceCard = () => {

    const coworkingCardDate = {
        image: GlobalFoyerImg,
        title: "Global Foyer",
        address: "Golf Course Road",
        price: "₹ 110/-* psf"
    }

  return (
    <>
    <Link to="/gurgaon/office-space-in-global-foyer-sector-43-gurgaon">
      <div className="coworking_card">
        <img src={coworkingCardDate.image} className="img-fluid m-auto d-block" alt="coworking space in golf course road gurgaon" />
        <div className="price-tag">
            {coworkingCardDate.price}
        </div>
        <h5>{coworkingCardDate.title}</h5>
        <p>{coworkingCardDate.address}</p>
      </div>
    </Link>
    </>
  )
}

export default OfficeSpaceCard
