import React from "react";
import "./BottomForm.scss";

const BottomForm = () => {
  return (
    <section className="fixed_form_area fixed-bottom mobile_hide">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-2">
            <h4>Enquire Now</h4>
          </div>

          <div className="col-md-10">
            <form method="post" action="footer-fix-form-mail.php">
              <input type="hidden" name="propertyName" value="alexandro.in" />
              <div className="form-group">
                <input name="namegp" id="footer_name" type="text" placeholder="Name" className="form-control" />
              </div>

              <div className="form-group">
                <input name="emailgp" id="footer_email" type="email" placeholder="Email" className="form-control" />
              </div>

              <div className="form-group">
                <input name="mobilegp" maxlength="10" id="footer_phone" type="tel" placeholder="Phone" className="form-control" required />
              </div>

              <div className="form-group">
                <select name="property" class="form-select" aria-label="Default select example" id="footer_property" required>
                  <option value="Property Type" disabled>Property Type</option>
                  <option value="Coworking Space">Coworking Space</option>
                  <option value="Coliving/PG">Coliving/PG</option>
                  <option value="Virtual Office">Virtual Office</option>
                  <option value="Any/Others">Any/Others</option>
                </select>
              </div>
              <input type="hidden" className="form-control" name="pageurl" value="https://alexandro.in/" />

              <div className="form-group">
                <button className="site_btn" type="submit" id="sendQueryBt">
                  Enquire Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomForm;
