import React from 'react'
import "./OfficeAmenities.scss"
import MaintenanceStaff from "../../../../images/icons/MaintenanceStaff.png";
import VisitorParking from "../../../../images/icons/parking.png";
import MeetingRoom from "../../../../images/icons/MeetingRoom.png";
import ConferenceRoom from "../../../../images/icons/ConferenceRoom.png";
import Lift from "../../../../images/icons/Lift.png";
import AC from "../../../../images/icons/AC.png";
import PowerBackup from "../../../../images/icons/PowerBackup.png";
import Pantry from "../../../../images/icons/kitchen-icon.png";
import TwoTierSecurity from "../../../../images/icons/TwoTierSecurity.png";

const OfficeAmenities = () => {
    
  const AmenitiesData = [
    {
      icon: MaintenanceStaff,
      name: "Maintenance Staff",
    },
    {
      icon: VisitorParking,
      name: "Visitor Parking",
    },
    {
      icon: MeetingRoom,
      name: "Phone Booth",
    },
    {
      icon: ConferenceRoom,
      name: "Conference Room",
    },
    {
      icon: Lift,
      name: "Lift",
    },
    {
      icon: AC,
      name: "AC",
    },
    {
      icon: PowerBackup,
      name: "Power Backup",
    },
    {
      icon: Pantry,
      name: "Pantry",
    },
    {
      icon: TwoTierSecurity,
      name: "2-Tier Security",
    },
  ];

  return (
    <div className="office_amenities_sec">
      <div className="row">
        <div className="col-md-12">
          <h3>Amenities</h3>
        </div>
      </div>
      <div className="row">
        {AmenitiesData.map((item, index) => (
          <div key={index} className="col-md-3">
            <div className="amenities_item">
              <img src={item.icon} className="img-fluid" alt={item.name} />
              <h6>{item.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfficeAmenities
