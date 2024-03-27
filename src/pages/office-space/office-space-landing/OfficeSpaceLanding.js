import React from "react";
import "./OfficeSpaceLanding.scss";
import LongLease from "../../../images/icons/long-lease-icon.png";
import FixedRental from "../../../images/icons/fixed-rental-icon.png";
import ApprovedSpace from "../../../images/icons/building-icon.png";
// import OfficeLocationCta from '../office-space-location/office-location-cta/OfficeLocationCta';
import OfficeLandingCta from "./office-landing-cta/OfficeLandingCta";
import OfficeLandingPrice from "./office-landing-price/OfficeLandingPrice";
import OfficeAllLocation from "./office-all-location/OfficeAllLocation";
import { Link } from "react-router-dom";

const OfficeSpaceLanding = () => {
  const amenitiesList = [
    {
      icon: LongLease,
      title: "Long Lease",
      dis: "Convience of long lease terms upto 9 years.",
    },
    {
      icon: FixedRental,
      title: "Fixed Rental",
      dis: "Escalation free rentals for first 3 years of operation.",
    },
    {
      icon: ApprovedSpace,
      title: "Approved space",
      dis: "No legal issues, commercial approved spaces with 24/7 security & power backup.",
    },
  ];

  const exploreLocation = [
    { name: "Office Space Golf Course Road", url: "" },
    { name: "Office Space Golf Course Extn. Road", url: "" },
    { name: "Office Space MG Road", url: "" },
    { name: "Office Space Sohna Road", url: "" },
    { name: "Office Space in DLF Cyber City", url: "" },
    { name: "Office Space in Udyog Vihar", url: "" },
    { name: "Office Space in NH-8", url: "" },
    { name: "Office Space near Metro Stations", url: "" },
  ];

  return (
    <>
      <section className="coworking_banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Office Space in Gurgaon</h2>
              <p>
                Office space in Gurgaon for rent and sale is available at
                various locations as per your team size and space requirement.
                Search amongst the top Office spaces in Gurgaon with Alexandro
                Spaces. Choose from a wide collection of Raw office spaces,
                Furnished Office spaces, Built-to-suit office spaces and
                Serviced office space.
              </p>
            </div>
          </div>
          <hr class="mobile-hide" />
        </div>
      </section>

      <section className="office_location_amenities_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 class="desktop-hide">Amenities we offer</h2>
            </div>
          </div>
          <div className="row">
            {amenitiesList.map((item) => (
              <div className="col-md-4">
                <div className="amenity_item">
                  <img src={item.icon} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>{item.dis}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficeLandingCta />

      <OfficeLandingPrice />

      <OfficeAllLocation />

      <section className="explore_all_location">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Explore the Top Office space Locations in Gurgaon</h3>
              <p>
              Looking for office space in Gurgaon, where you can grow your business. Alexandro space is the biggest aggregator of commercial office space in Gurgaon. To be a part of Alexandro Spaces in gurgaon connect with us and get the best Office space in Gurgaon according to your requirement.
              </p>
              <ul className="explore_location_list">
                {exploreLocation.map((item, index) => (
                  <li key={index}>
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfficeSpaceLanding;
