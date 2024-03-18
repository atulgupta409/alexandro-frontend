import React from 'react';
import "./SpaceAvailability.scss";
import HotDesk from "../../../../images/icons/hot-desk-icon.png";
import DedicatedDesk from "../../../../images/icons/dedicated-desk-icon.png";
import PrivateCabin from "../../../../images/icons/private-cabin-icon.png";
import MeetingRooms from "../../../../images/icons/common-areas-icon.png";

const SpaceAvailability = () => {

    const AvailabilityData = [
        {
            icon: HotDesk,
            title: "Hot Desk",
            Number: "500+"
        },
        {
            icon: DedicatedDesk,
            title: "Dedicated Desk",
            Number: "150+"
        },
        {
            icon: PrivateCabin,
            title: "Private Cabin",
            Number: "75+"
        },
        {
            icon: MeetingRooms,
            title: "Meeting Rooms",
            Number: "50+"
        }
    ]

  return (
    <div className='availability_sec'>
      <div className="row">
        <div className="col-md-12">
            <h3>Availability in Innov8, Orchid Centre</h3>
        </div>
      </div>

      <div className="row">
        {AvailabilityData.map((item, index) =>
            <div key={index} className="col-md-3">
                <div className="availability_item">
                    <img src={item.icon} className='img-fluid' alt={item.title} />
                    <h6>{item.title}</h6>
                    <p className="number">{item.Number}</p>
                </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default SpaceAvailability
