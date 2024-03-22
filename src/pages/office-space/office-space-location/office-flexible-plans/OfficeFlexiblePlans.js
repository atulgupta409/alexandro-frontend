import React from 'react'
import "./OfficeFlexiblePlans.scss"
import RawOfficeImg from "../../../../images/raw-office-main.jpg";
import FurnishedOfficeImg from "../../../../images/furnished-office-main.jpg";
import ServicedOfficeImg from "../../../../images/serviced-office-main.jpg";

const OfficeFlexiblePlans = () => {

    const officeFlexiblePlan = [
        {
            image: RawOfficeImg,
            title: "Raw Office",
            price: "₹ 90-100/-*",
            sqft: "per/sqft"
        },
        {
            image: FurnishedOfficeImg,
            title: "Furnished Office",
            price: "₹ 110-120/-*",
            sqft: "per/sqft"
        },
        {
            image: ServicedOfficeImg,
            title: "Serviced / Managed Office",
            price: "₹ 150/-*",
            sqft: "per/sqft"
        }
    ]

  return (
    <section className='office_flexible_plans_sec'>
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <h3>Our Flexible Plans</h3>
                </div>
            </div>
            <div className="row">
                {officeFlexiblePlan.map((item) =>
                    <div class="col-md-4">
                        <div class="plan_item border text-center pb-4 mb-3">
                            <img src={item.image} class="img-fluid m-auto d-block" alt="hot desk" />
                            <h4>{item.title}</h4>
                            <p className='price'>{item.price}</p>
                            <p className='sqft'>{item.sqft}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default OfficeFlexiblePlans
