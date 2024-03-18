import React from 'react'
import "./PricinPlan.scss"

const PricinPlan = () => {

    const pricePlan = [
        {
            icon: <i class="fa fa-address-book" aria-hidden="true"></i>,
            title: "Hot Desk",
            price: "₹ 8,500/-*",
            duration: "Month / per person",
            content: "Limited Access of Meeting Rooms*"
        },
        {
            icon: <i class="fa fa-address-card" aria-hidden="true"></i>,
            title: "Dedicated Desk",
            price: "₹ 9,000/-*",
            duration: "Month / per person",
            content: "3 hours of free conference room"
        },
        {
            icon: <i class="fa fa-briefcase" aria-hidden="true"></i>,
            title: "Private Office",
            price: "₹ 10,000/-*",
            duration: "Month / per person",
            content: "6 hours of free conference room"
        },
        {
            icon: <i class="fa fa-users" aria-hidden="true"></i>,
            title: "Meeting Room",
            price: "Price on Request",
            duration: "",
            content: "Call Alexandro Expert and book a Meeting Room"
        }
    ]

  return (
    <div className='pricing_plans'>
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

export default PricinPlan
