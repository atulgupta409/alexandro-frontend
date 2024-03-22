import React from 'react'
import "./OfficeLocationAmenities.scss"
import LongLease from "../../../../images/icons/long-lease-icon.png";
import FixedRental from "../../../../images/icons/fixed-rental-icon.png";
import ApprovedSpace from "../../../../images/icons/building-icon.png";

const OfficeLocationAmenities = () => {

    const amenitiesList = [
        {
            icon: LongLease,
            title: "Long Lease",
            dis : "Convience of long lease terms upto 9 years."
        },
        {
            icon: FixedRental,
            title: "Fixed Rental",
            dis : "Escalation free rentals for first 3 years of operation."
        },
        {
            icon: ApprovedSpace,
            title: "Approved space",
            dis : "No legal issues, commercial approved spaces with 24/7 security & power backup."
        },
    ]

  return (
    <section className='office_location_amenities_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 class="desktop-hide">Amenities we offer</h2>
                </div>
            </div>
            <div className="row">
                {amenitiesList.map((item) =>
                    <div className="col-md-4">
                        <div className="amenity_item">
                            <img src={item.icon} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.dis}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>      
    </section>
  )
}

export default OfficeLocationAmenities
