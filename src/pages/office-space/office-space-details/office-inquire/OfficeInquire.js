import React from "react";
import "./OfficeInquire.scss";
import globalLogo from "../../../../images/global-logo.png";

const OfficeInquire = () => {
  return (
    <div className="inquery_box">
      <div className="head">
        <div className="space_logo">
          <img src={globalLogo} className="img-fluid" alt="Innov8 Logo" />
        </div>
        <div className="price_box">
          <p className="price">
            <span>Starting at</span>₹ 100/-*sq.ft.
          </p>
          <p className="price_tagline">
            GST* have to be paid extra as per price.
          </p>
        </div>
      </div>
      <div className="contact_box">
        <div className="office_form_part">
          <form id="example_form" method="post">
            <input type="hidden" id="g-token" name="g-token" value="" />
            <input type="hidden" name="propertyName" value="alexandro.in" />
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
                  name="flocation"
                  id="Location"
                >
                  <option value="" selected disabled>
                    Select Location
                  </option>
                  <option value="Golf Course Road">Golf Course Road</option>
                  <option value="Golf Course Extension Road">
                    Golf Course Extension Road
                  </option>
                  <option value="MG Road">MG Road</option>
                  <option value="Sohna Road">Sohna Road</option>
                  <option value="NH8">NH8</option>
                  <option value="Udyog Vihar">Udyog Vihar</option>
                  <option value="Sector 32">Sector 32</option>
                  <option value="Near Metro Station">Near Metro Station</option>
                  <option value="Others">Others</option>
                </select>
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
            <button type="submit" id="sendBtn" className="site_btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfficeInquire;
