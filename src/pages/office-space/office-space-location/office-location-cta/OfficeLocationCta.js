import React from "react";
import "./OfficeLocationCta.scss";
import OfficeFormBack from "../../../../images/office-sapce-cta-bg.jpg";

const OfficeLocationCta = () => {

    const ctaPoint = [
        {
            heading: "Choose Office Type",
            content: "Raw office, Fully furnished, Managed office",
        },
        {
            heading: "Identify Suitable Location",
            content: "Golf Course Road, Cyber City...",
        },
        {
            heading: "Space Requirment in term of Size",
            content: "Would depend on your team size.",
        },
        {
            heading: "Submit Details",
            content: "Relax, Alexandro Space expert will connect with you",
        }
    ]

  return (
    <section
      className="office_cta_sec"
      style={{ backgroundImage: `url(${OfficeFormBack})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="cta_content">
              <h4>Fast and Simple Way to Buy. Lease Commercial Office Space in Golf Course Road Gurgaon</h4>
              {ctaPoint.map((item, index) =>
                <div className="cta_item">
                    <h4><i class="fa fa-arrow-right" aria-hidden="true"></i> {item.heading}</h4>
                    <p>{item.content}</p>
                </div>
              )}
            </div>
          </div>

          <div className="col-md-5">
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
                      <option value="Near Metro Station">
                        Near Metro Station
                      </option>
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
      </div>
    </section>
  );
};

export default OfficeLocationCta;
