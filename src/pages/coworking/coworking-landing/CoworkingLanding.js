import React from "react";
import "./CoworkingLanding.scss"
import CoworkingBanner from "./coworking-banner/CoworkingBanner";
import CoworkingTopAmenities from "../coworking-top-amenities/CoworkingTopAmenities";
import CoworkingCta from "../coworking-cta/CoworkingCta";
import CoworkingFlexiblePlans from "./cowrking-landing-price/CoworkingFlexiblePlans";
import CoworkingAllLocation from "./coworking-all-locations/CoworkingAllLocation";
import { Link } from "react-router-dom";

const CoworkingLanding = () => {
  const exploreLocation = [
    { name: "Coworking space Golf Course Road", url: "" },
    { name: "Coworking space Golf Course Extn. Road", url: "" },
    { name: "Coworking space MG Road", url: "" },
    { name: "Coworking space Sohna Road", url: "" },
    { name: "Coworking space in DLF Cyber City", url: "" },
    { name: "Coworking space in Udyog Vihar", url: "" },
    { name: "Coworking space in NH-8", url: "" },
    { name: "Coworking space near Metro Stations", url: "" },
  ];

  return (
    <>
      <CoworkingBanner />
      <CoworkingTopAmenities />
      <CoworkingCta />
      <CoworkingFlexiblePlans />
      <CoworkingAllLocation />

      <section className="explore_coworking_location">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Explore the Coworking Office Space Locations in Gurgaon</h3>
              <p>
                Looking for coworking space where you can grow your business.
                Alexandro spaces are the Biggest aggregator of Coworking Space
                in Gurgaon. To be a part of our Coworking community, Connect
                with us and get the best working environment. Co-working space
                is a mixed environment of Culture, networking and collaboration
                that creates the best ecosystem for working together in a shared
                office space.
              </p>
              <ul className="explore_location_list">
                {exploreLocation.map((item, index) =>
                    <li key={index}><Link to={item.url}>{item.name}</Link></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoworkingLanding;
