import React from 'react'
import "./OfficeSpaceDetails.scss"
import OfficeBannerGallery from './office-banner-gallery/OfficeBannerGallery'
import OfficeSpaceBreadcrumb from '../../shared/officespace-breadcrumb/OfficeSpaceBreadcrumb'
import TrustedIcon from "../../../images/trusted-icon.png";
import VerifiedIcon from "../../../images/verified-icon.png";
import OfficePricePlan from './office-Price-plan/OfficePricePlan';
import OfficeNearBy from './office-near-by/OfficeNearBy';
import OfficeAmenities from './office-amenities/OfficeAmenities';
import OfficeAvailability from './office-availability/OfficeAvailability';
import AlexandroPromise from '../../alexandro-promise/AlexandroPromise';
import OfficeInquire from './office-inquire/OfficeInquire';

const OfficeSpaceDetails = () => {
  return (
    <>
      <OfficeBannerGallery />
      <section className='space_details_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <OfficeSpaceBreadcrumb />
                    <div className="officespace_heading">
                      <h1>Office Space in Global Foyer Gurgaon</h1>
                      <p className="address">Sec 43, Golf Course Road, Gurgaon-122002</p>
                      <ul>
                        <li><img src={TrustedIcon} alt="Trusted" />Trusted</li>
                        <li><img src={VerifiedIcon} alt="Verified" />Verified</li>
                      </ul>
                    </div>

                    <div className="space_about">
                      <p>Global Foyer is a Commercial Project in High Demand which is spread over an area of 6.7 lakh sq. ft. Office Space in Global Foyer Gurgaon is complemented with all the Top-Notch Amenities and Vibrant Options- Raw Office, Furnished Office, Serviced Office, Built to suit Offices to grow your Business. Global Foyer is strategically located on Sector-43 Golf Course Road. It is a Commercial Building with Frolic Amenities, On-Site Parking, easy connectivity from Sohna Road, Golf Course Extension Road, NH-8 and close proximity to Sector 42-43 Rapid Metro Station and Five Star Hotels and Hospitals.</p>
                    </div>
                    
                    <OfficePricePlan />

                    <OfficeNearBy />

                    <OfficeAvailability />

                    <OfficeAmenities />
                </div>
                <div className="col-md-4">
                    <div className="query_area sticky-top">
                      <OfficeInquire />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <AlexandroPromise />
    </>
  )
}

export default OfficeSpaceDetails
