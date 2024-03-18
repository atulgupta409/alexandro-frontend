import React from "react";
import "./Amenities.scss";
import WifiIcon from "../../../../images/icons/wifi-icon.png";
import MeditationRoom from "../../../../images/icons/meditation-room-icon.png";
import PhoneBooth from "../../../../images/icons/phone-booth-icon.png";
import TeaCoffee from "../../../../images/icons/kitchen-icon.png";
import ClockIcon from "../../../../images/icons/24-7-access-icon.png";
import YogaRoom from "../../../../images/icons/yoga-room-icon.png";
import VisitorManagement from "../../../../images/icons/visitor-management-icon.png";
import BreakoutArea from "../../../../images/icons/breakout-area-icon.png";
import Printing from "../../../../images/icons/printer-icon.png";
import CafeLaunge from "../../../../images/icons/cafe-launge-icon.png";
import MobileAccess from "../../../../images/icons/mobile-access-icon.png";

const Amenities = () => {
  const AmenitiesData = [
    {
      icon: WifiIcon,
      name: "WiFi",
    },
    {
      icon: MeditationRoom,
      name: "Meditation Room",
    },
    {
      icon: PhoneBooth,
      name: "Phone Booth",
    },
    {
      icon: TeaCoffee,
      name: "Tea & Coffee",
    },
    {
      icon: ClockIcon,
      name: "24/7 Access",
    },
    {
      icon: YogaRoom,
      name: "Yoga Room",
    },
    {
      icon: VisitorManagement,
      name: "Visitor Management",
    },
    {
      icon: BreakoutArea,
      name: "Breakout Area",
    },
    {
      icon: Printing,
      name: "Printing",
    },
    {
      icon: CafeLaunge,
      name: "Cafe & Launge",
    },
    {
      icon: MobileAccess,
      name: "Mobile Access",
    },
  ];

  return (
    <div className="amenities_sec">
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
  );
};

export default Amenities;
