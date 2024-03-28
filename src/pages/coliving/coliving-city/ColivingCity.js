import React from "react";
import "./ColivingCity.scss";
import homeIcon from "../../../images/home-icon.png";
import ColivingCard from "../coliving-card/ColivingCard";

const ColivingCity = () => {
  return (
    <>
      <section className="city_heading_area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>
                Coliving Spaces in Bangalore{" "}
                <img src={homeIcon} alt="Home Icon" className="img-fluid" />
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="micro_location">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul>
                <li id="reset">All</li>
                <li id="filter17">Koramangala</li>
                <li id="filter39">Indiranagar</li>
                <li id="filter16">Marathahalli</li>
                <li id="filter7">HSR Layout</li>
                <li id="filter14">Electronic City</li>
                <li id="filter27">Whitefield</li>
                <li id="filter3">Bannerghatta</li>
                <li id="filter15">BTM Layout</li>
                <li id="filter8">Arekere</li>
                <li id="filter13">Nagavara</li>
                {/* <li id="filter28">Sarjapur Road</li> */}
                <li id="filter11">Tavarekere</li>
                <li id="filter29">Infantry Road</li>
                <li id="filter12">HBR layout</li>
                <li id="filter1">Sector 3</li>
                <li id="filter4">St Johns Rd</li>
                <li id="filter10">Kadubeesanahalli</li>
                <li id="filter19">Sector 2</li>
                <li id="filter25">Malleshwaram</li>
                <li id="filter26">Rustam Bagh Layout</li>
                <li id="filter30">Kaveri Layout</li>
                <li id="filter35">Karle Town</li>
                <li id="filter36">Bommanahalli</li>
                <li id="filter37">Rachenahalli</li>
                <li id="filter38">Doddanekundi</li>
                <li id="filter40">Kasavanahalli</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="property_list">
        <div className="container">
            <div className="row">
                {Array.from({length : 12}).map((_, index) =>
                    <div key={index} className="col-md-6">
                        <ColivingCard />
                    </div>
                )}
            </div>
        </div>
      </section>
    </>
  );
};

export default ColivingCity;
