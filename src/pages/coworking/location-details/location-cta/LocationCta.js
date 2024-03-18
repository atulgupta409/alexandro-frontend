import React from "react";
import "./LocationCta.scss";
import CoworkingFormBack from "../../../../images/co-working-form-back.jpg";

const LocationCta = () => {
  return (
    <section className="cta_sec">
      <div className="container">
        <div className="co-working-space" style={{backgroundImage: `url(${CoworkingFormBack})`}}>
          <div className="overlay">
            <div className="row align-items-center">
              <div className="col-md-7">
                <div className="co-working-title">
                  <h4>Coworking Space Golf Course Road</h4>
                  <p>
                    Best Coworking space in Gurgaon for Startups, Freelancers &
                    Established businesses.
                  </p>
                  <p className="mobile-hide">
                    Conveniently located centers with flexible workspace
                    solutions, High Speed Internet, Meeting Rooms, Community
                    Areas, Tea Coffee and so much more...
                  </p>
                  <p className="mobile-hide">
                    You Focus on Work, We take care of the Rest !
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div className="coworking_form_part">
                  <form id="example_form" method="post">
                    <input type="hidden" id="g-token" name="g-token" value="" />
                    <input
                      type="hidden"
                      name="propertyName"
                      value="alexandro.in"
                    />
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="namegp"
                          id="name_gp"
                          className="form-control"
                          placeholder="Name*"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="email"
                          name="emailgp"
                          id="email_gp"
                          className="form-control"
                          placeholder="Email*"
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <input
                          type="phone"
                          name="mobilegp"
                          maxlength="10"
                          id="mobile_gp"
                          className="form-control"
                          placeholder="Mobile*"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="typegp"
                        >
                          <option value="" selected disabled>
                            Desk Type
                          </option>
                          <option value="Dedicated Desk">Dedicated Desk</option>
                          <option value="Private Office">Private Office</option>
                          <option value="Virtual Office">Virtual Office</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="flocation"
                          id="Location"
                        >
                          <option value="" selected disabled>
                            Select Location
                          </option>
                          <option value="Golf Course Road">
                            Golf Course Road
                          </option>
                          <option value="Golf Course Extension Road">
                            Golf Course Extension Road
                          </option>
                          <option value="MG Road">MG Road</option>
                          <option value="Sohna Road">Sohna Road</option>
                          <option value="NH8">NH8</option>
                          <option value="Udyog Vihar">Udyog Vihar</option>
                          <option value="Sector 32">Sector 32</option>
                          <option value="Near Metro Station">
                            Near Metro Station
                          </option>
                          <option value="Others">Others</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            name="spaceseat"
                            id="Team"
                          >
                            <option value="" selected disabled>
                              No. Of Seats
                            </option>
                            <option value="1-10">1-10</option>
                            <option value="11-20">11-20</option>
                            <option value="21-50">21-50</option>
                            <option value="51-100">51-100</option>
                            <option value="100+">100+</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="hidden"
                        className="form-control"
                        name="pageloc"
                        value="https://alexandro.in/gurgaon/coworking-space-on-golf-course-road.php"
                      />
                    </div>
                    <button type="submit" id="sendBtn" className="site_btn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCta;
