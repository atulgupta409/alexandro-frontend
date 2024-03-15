import React from "react";
import "./QueryForm.scss";
import menImg from "../../../images/man-img.png";

const QueryForm = () => {
  return (
    <section className="query_form_sec mobile-hide">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="query_form">
              <img src={menImg} alt="Men Desk" className="img-fluid" />
              <div className="form_content">
                <h4>
                  Modern Co-working offices & Coliving Space all at one place.
                </h4>
                <p>Connect with a Alexandro expert now.</p>
                <div className="form_area">
                    <form action="" method="post">
                        <div className="row">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    name="namegp"
                                    id="name_gp"
                                    className="form-control"
                                    placeholder="Name*"
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="email"
                                    name="emailgp"
                                    id="email_gp"
                                    className="form-control"
                                    placeholder="Email*"
                                    required
                                />
                            </div>
                            <div className="col-md-4">
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
                            <div className="col-md-4">
                                <select className="form-select" aria-label="Default select example" name="typegp">
                                    <option value=">Property type" disabled>
                                    Property type
                                    </option>
                                    <option value="Coworking Space">
                                    Coworking Space
                                    </option>
                                    <option value="Coliving/PG">Coliving/PG</option>
                                    <option value="Virtual Office">
                                    Virtual Office
                                    </option>
                                    <option value="Other/Any">Other/Any</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <button className="site_btn" type="submit" name="sendQuery" id="sendQueryBtn">
                                Enquire Now
                                </button>
                            </div>
                        </div>
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

export default QueryForm;
