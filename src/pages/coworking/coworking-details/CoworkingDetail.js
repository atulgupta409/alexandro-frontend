import React from 'react'
import "./CoworkingDetail.scss"
import BannerGallery from './banner-gallery/BannerGallery'
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb'
import TrustedIcon from "../../../images/trusted-icon.png";
import VerifiedIcon from "../../../images/verified-icon.png";
import PricinPlan from './pricing-plan/PricinPlan';
import CoworkingInquire from './coworking-inquire/CoworkingInquire';
import NearBy from './near-by/NearBy';
import SpaceAvailability from './space-availability/SpaceAvailability';
import Amenities from './amenities/Amenities';
import AlexandroPromise from '../../alexandro-promise/AlexandroPromise';

const CoworkingDetail = () => {
  return (
    <>
      <BannerGallery />
      <section className='space_details_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Breadcrumb />
                    <div className="space_heading">
                      <h1>Innov8 Coworking space, Orchid Centre</h1>
                      <p className="address">3rd Floor, Orchid Centre, IILM Institute, Sector 53, Gurugram, Haryana 122022</p>
                      <ul>
                        <li><img src={TrustedIcon} alt="Trusted" />Trusted</li>
                        <li><img src={VerifiedIcon} alt="Verified" />Verified</li>
                      </ul>
                    </div>

                    <div className="space_about">
                      <p>A perfect coworking space project, Innov8 Golf Course Road is a beautifully designed office building with an architecture according to industries. This space has a total 900 combined seat (Hot Desk, Dedicated Desk, Private Cabin, Meeting Room) and 100+ Event space. The hot desk and lounge area are on the Ground Floor with integrated green space. Come and Experience a flagship work culture at Innov8, Orchid Centre on Golf Course Road - a space that gives you inspiration for growth.</p>
                    </div>
                    
                    <PricinPlan />

                    <NearBy />

                    <SpaceAvailability />

                    <Amenities />

                    <div className="location_advantage">
                      <h3>Location Advantages</h3>
                      <p>This space is located right beside the Golf Course Road and Gurgaon Rapid Metro. It has close proximity to Centrium Plaza, international food chains and premium shopping hub. DLF Cyber hub is only just 10mint drive away, that is a premium one-stop solution for all your hangout. If you want a modern workspace with creativity, then Innov8 Golf Course Road is the best choice.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="query_area sticky-top">
                      <CoworkingInquire />
                    </div>
                </div>
            </div>
        </div>
      </section>

      <AlexandroPromise />
    </>
  )
}

export default CoworkingDetail
