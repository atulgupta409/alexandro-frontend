import React from 'react'
import "./TopOfficeSapce.scss"
import OfficeSpaceCard from '../../office-space-card/OfficeSpaceCard';

const TopOfficeSapce = () => {
  return (
    <>
    <section className="explore_top_officespace">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h3>Explore the Top Commercial Office Space in Golf Course Road</h3>
                <p>There are no. of premium Office Space available in Golf Course Road Gurgaon. DLF Horizon Centre is the most premium office space building on Golf Course Road Gurgaon. Office space on rent in DLF Horizon Centre is always at a premium over the other buildings in this location. Rent for office space in DLF Horizon Centre is between Rs. 140 to Rs. 150/- per sq.ft. for raw office. Furnished office space on rent in DLF Horizon Centre is available between Rs 170/- to Rs. 180/- per sq.ft. depending on the quality of the furnishing required. Connect with an Alexandro Space Expert for office space on rent in DLF Horizon Centre and other top buildings on Golf Course Road Gurgaon.</p>
            </div>
        </div>

        <div className="row mt-4">
            {Array.from({length : 3}).map((_, index) =>
                <div key={index} className="col-md-4">
                    <OfficeSpaceCard />
                </div>
            )}
        </div>
      </div>
    </section>
    </>
  )
}

export default TopOfficeSapce
