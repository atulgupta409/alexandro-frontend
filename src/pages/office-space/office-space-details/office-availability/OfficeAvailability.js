import React from 'react'
import "./OfficeAvailability.scss";
import RawOffice from "../../../../images/icons/RawOffice.png";
import FurnishedOffice from "../../../../images/icons/FurnishedOffice.png";
import ServicedOffice from "../../../../images/icons/ServicedOffice.png";
import BuiltToSuit from "../../../../images/icons/BuilttoSuit.png";

const OfficeAvailability = () => {

    const OfficeAvailabilityData = [
        {
            icon: RawOffice,
            title: "Raw Office",
            // Number: "500+"
        },
        {
            icon: FurnishedOffice,
            title: "Furnished Office",
            // Number: "150+"
        },
        {
            icon: ServicedOffice,
            title: "Serviced Office",
            // Number: "75+"
        },
        {
            icon: BuiltToSuit,
            title: "Built to Suit",
            // Number: "50+"
        }
    ]

  return (
    <div className='office_availability_sec'>
      <div className="row">
        <div className="col-md-12">
            <h3>Availability in Innov8, Orchid Centre</h3>
        </div>
      </div>

      <div className="row">
        {OfficeAvailabilityData.map((item, index) =>
            <div key={index} className="col-md-3">
                <div className="availability_item">
                    <img src={item.icon} className='img-fluid' alt={item.title} />
                    <h6>{item.title}</h6>
                    <p className="number">{item.Number}</p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default OfficeAvailability
