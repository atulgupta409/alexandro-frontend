import React from 'react'
import "./OfficeAllLocation.scss"
import { Link } from 'react-router-dom';
import GolfCourseRoad from "../../../../images/location-img/golf-course-road-gurgaon.jpg";
import GolfCourseExtnRoad from "../../../../images/location-img/GolfCourseExtnRoad.jpg";
import MGRoad from "../../../../images/location-img/MGRoad.jpg";
import SohnaRoad from "../../../../images/location-img/SohnaRoad.jpg";
import Nh8 from "../../../../images/location-img/NH8.jpg";
import UdyogVihar from "../../../../images/location-img/UdyogVihar.jpg";
import DLFCyberCity from "../../../../images/location-img/DLFCyberCity.jpg";
import Sector32 from "../../../../images/location-img/Sector32.jpg";
import NearMetroStation from "../../../../images/location-img/NearMetroStation.jpg";

const OfficeAllLocation = () => {

    const locationData = [
        {
          img: GolfCourseRoad,
          name: "Golf Course Road",
          url: "/gurgaon/commercial-office-space-in-golf-course-road-gurgaon",
        },
        {
          img: GolfCourseExtnRoad,
          name: "Golf Course Extn Road",
          url: "",
        },
        {
          img: MGRoad,
          name: "MG Road",
          url: "",
        },
        {
          img: SohnaRoad,
          name: "Sohna Road",
          url: "",
        },
        {
          img: Nh8,
          name: "NH-8",
          url: "",
        },
        {
          img: UdyogVihar,
          name: "Udyog Vihar",
          url: "",
        },
        {
          img: DLFCyberCity,
          name: "DLF Cyber city",
          url: "",
        },
        {
          img: Sector32,
          name: "Sector 32",
          url: "",
        },
        {
          img: NearMetroStation,
          name: "Near Metro Station",
          url: "",
        },
      ];

  return (
    <section className="office_all_location">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3>The Alexandro Network</h3>
            <p>
              The Alexandro network includes more than 200 offices in 300+
              buildings across 10 markets worldwide.
              <br />
              Located in top neighborhoods spaces are available with terms from
              one month.
            </p>
          </div>
        </div>

        {/* <div className="row mt-3">
                {locationData.map((item, index) =>
                    <div key={index} className="col-md-2">
                        <Link to={item.url}>
                            <div className="location_item">
                                <img src={item.img} alt={item.name} className='img-fluid' />
                                <h5>{item.name}</h5>
                            </div>
                        </Link>
                    </div>
                )}
            </div> */}

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="all_locations">
                {locationData.map((item, index) => (
                    <div className="location_item">
                <Link key={index} to={item.url}>
                    <img src={item.img} alt={item.name} className="img-fluid" />
                    <h5>{item.name}</h5>
                </Link>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeAllLocation
