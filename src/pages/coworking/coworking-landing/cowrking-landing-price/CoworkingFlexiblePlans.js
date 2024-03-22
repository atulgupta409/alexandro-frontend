import React from 'react'
import "./CoworkingFlexiblePlans.scss"
import hotDeskImg from "../../../../images/hot-desk-cosapce.jpg";
import dedicatedDeskImg from "../../../../images/dedicated-desk-cospace.jpg";
import privateCabinImg from "../../../../images/private-cabin-cospace.jpg";

const CoworkingFlexiblePlans = () => {

    const flexiblePlan = [
        {
            image: hotDeskImg,
            title: "Hot Desk",
            price: "₹ 8,000/-*",
            tag: "Individual",
            className: "blue_text",
            pricePoints: [
                "WiFi",
                "Limited Access of Meeting Rooms*",
                "Printer, Scanner, Fax",
                "Access to Cafeteria",
                "Suitable for Freelancers",
            ]
        },
        {
            image: dedicatedDeskImg,
            title: "Dedicated Desk",
            price: "₹ 9,000/-*",
            tag: "Team",
            className: "yellow_text",
            pricePoints: [
                "WiFi",
                "Printer, Scanner, Fax",
                "3 hours of free conference room",
                "Access to Our Meeting Rooms*",
                "Suitable for Small Teams",
            ]
        },
        {
            image: privateCabinImg,
            title: "Private Cabin",
            price: "₹ 10,000/-*",
            tag: "Enterprise",
            className: "pink_text",
            pricePoints: [
                "WiFi",
                "Printer, Scanner, Fax",
                "6 hours of free conference room",
                "Access to Our Meeting Rooms*",
                "Suitable for Large Teams",
            ]
        }
    ]

  return (
    <section className='coworking_flexible_plans'>
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
                            <div className={`plan_body ${item.className}`}>
                                <h5>{item.tag}</h5>
                                <ul>
                                    {item.pricePoints.map((point, index) =>
                                    <li key={index}>{point}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </section>
  )
}

export default CoworkingFlexiblePlans
