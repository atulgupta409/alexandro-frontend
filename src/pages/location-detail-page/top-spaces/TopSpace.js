import React from "react";
import "./TopSpace.scss";
import CoworkingCard from "../../shared/coworking-card/CoworkingCard";

const TopSpace = () => {
  return (
    <section className="explore_top_space">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3>Explore the Top Coworking Spaces in Gurgaon Golf Course Road</h3>
            </div>
        </div>

        <div className="row mt-4">
            {Array.from({length : 3}).map((_, index) =>
                <div key={index} className="col-md-4">
                    <CoworkingCard />
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default TopSpace;
