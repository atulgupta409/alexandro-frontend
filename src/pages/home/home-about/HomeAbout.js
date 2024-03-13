import React from 'react'
import "./HomeAbout.scss"
import TrustedPartners from "../../../images/trusted-icon.png";
import VerifiedSpaces from "../../../images/verified-icon.png";

const HomeAbout = () => {

    const featurePoint = [
        {
            icon: TrustedPartners,
            title: "Trusted Partners",
            content: (<>Space owners and developers have entrusted us to market their properties.<br />Real Spaces. Real Information.</>)
        },
        {
            icon: VerifiedSpaces,
            title: "Verified Spaces",
            content: (<>Alexandro Space Experts have physically inspected the properties and amenities.<br />All information & images are actuals and shot on sight.</>)
        }
    ]

  return (
    <section className='about_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3 className='text-center'>Alexandro Recommends</h3>
                <p className='text-center'><strong>From 10,000+ office spaces, coworking spaces and coliving spaces in India, we recommend only verified properties and trusted developers.</strong></p>
                <p className='text-justify'>Alexandro spaces is a space discovery platform for coworking, coliving, PG and office spaces in over 8+ Indian cities. With over 15 years of operational knowledge and extensive market data the efficient team has a wide collection of Coworking spaces, Coliving Space, Managed office, Services office, Built to suit office, Pre Rented Property, Office in Special Economic zone, Assured Return Property, Shops, Meeting rooms, Training rooms, Event space, Top commercial projects for investments across various locations. Exclusive tie-ups with property owners and industry-leading developers give Alexandro a wide reach and an extensive collection of top-class commercial and residential properties.</p>
            </div>
        </div>

        <div className="row">
            {featurePoint.map((item) =>
                <div className="col-md-6">
                    <div className="feature_item">
                        <img src={item.icon} alt={item.title} />
                        <h5>{item.title}</h5>
                        <p>{item.content}</p>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
