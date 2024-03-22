import React from 'react'
import "./OfficePricePlan.scss"

const OfficePricePlan = () => {

    const pricePlan = [
        {
            icon: <i class="fa fa-address-book" aria-hidden="true"></i>,
            title: "Raw Office",
            price: "₹ 100/-*",
            duration: "per / Sq.Ft.",
            // content: "Limited Access of Meeting Rooms*"
        },
        {
            icon: <i class="fa fa-address-card" aria-hidden="true"></i>,
            title: "Furnished Office",
            price: "₹ 120/-*",
            duration: "per / Sq.Ft.",
            // content: "3 hours of free conference room"
        },
        {
            icon: <i class="fa fa-briefcase" aria-hidden="true"></i>,
            title: "Serviced Office",
            price: "₹ 170/-*",
            duration: "per / Sq.Ft.",
            // content: "6 hours of free conference room"
        },
        {
            icon: <i class="fa fa-users" aria-hidden="true"></i>,
            title: "Buit to Suit Office",
            price: "₹ 130/-*",
            duration: "per / Sq.Ft.",
            // content: "Call Alexandro Expert and book a Meeting Room"
        }
    ]

  return (
    <div className='office_pricing_plans'>
        <div className="row">
            <div className="col-md-12">
                <h3>Pricing</h3>
            </div>
        </div>
        <div className="row">
            {pricePlan.map((item, index) =>
                <div key={index} className="col-md-6">
                    <div className="price_item">
                        <div className="card_head">
                            <h4>{item.icon} {item.title}</h4>
                        </div>
                        <div className="card_body">
                            <p className="price">{item.price}</p>
                            {item.duration ? <p className="duration">{item.duration}</p> : null}
                            <p className="content">{item.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default OfficePricePlan
