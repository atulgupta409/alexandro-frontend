import React from 'react'
import "./FlexiblePlans.scss"
import hotDeskImg from "../../../../images/hot-desk-cosapce.jpg";
import dedicatedDeskImg from "../../../../images/dedicated-desk-cospace.jpg";
import privateCabinImg from "../../../../images/private-cabin-cospace.jpg";

const FlexiblePlans = () => {

    const flexiblePlan = [
        {
            image: hotDeskImg,
            title: "Hot Desk",
            price: "₹ 8,000/-*"
        },
        {
            image: dedicatedDeskImg,
            title: "Dedicated Desk",
            price: "₹ 9,000/-*"
        },
        {
            image: privateCabinImg,
            title: "Private Cabin",
            price: "₹ 10,000/-*"
        }
    ]

  return (
    <section className='flexible_plans_sec'>
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <h3>Our Flexible Plans</h3>
                </div>
            </div>
            <div className="row">
                {flexiblePlan.map((item) =>
                    <div class="col-md-4">
                        <div class="plan_item border text-center pb-4 mb-3">
                            <img src={item.image} class="img-fluid m-auto d-block" alt="hot desk" />
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default FlexiblePlans
