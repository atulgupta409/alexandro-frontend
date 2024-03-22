import React from 'react'
import "./CoworkingTopAmenities.scss"
import wifiIcon from "../../../images/icons/wifi-icon.png";
import coffeeIcon from "../../../images/icons/coffee-icon.png";
import networkIcon from "../../../images/icons/network-icon.png";
import commonAreasIcon from "../../../images/icons/common-areas-icon.png";
import printerIcon from "../../../images/icons/printer-icon.png";
import kitchenIcon from "../../../images/icons/kitchen-icon.png";

const CoworkingTopAmenities = () => {

    const amenitiesList = [
        {
            icon: wifiIcon,
            title: "High speed WiFi",
            dis : "High-Speed Wifi, regular cleaning, HDTVs everything you need to do your best work."
        },
        {
            icon: coffeeIcon,
            title: "Coffee & Bar",
            dis : "A coffee mug give you more relaxtation with working desk and a seating."
        },
        {
            icon: networkIcon,
            title: "Networking events",
            dis : "Connect with other people and share your skills for better and quick growth."
        },
        {
            icon: commonAreasIcon,
            title: "Common areas",
            dis : "Keep your eyes on rest for some moment and get a breakthrough to work."
        },
        {
            icon: printerIcon,
            title: "Printing facilities",
            dis : "Printing and scanning facilities available without any extra cost."
        },
        {
            icon: kitchenIcon,
            title: "Kitchen facility",
            dis : "Lounge, kitchen, breakout rooms, and more. mix of both work tables and lounge seating."
        }
    ]

  return (
    <section className='coworking_top_amenities'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 class="desktop-hide">Amenities we offer</h2>
                </div>
            </div>
            <div className="row">
                {amenitiesList.map((item) =>
                    <div className="col-md-4">
                        <div className="amenity_item">
                            <img src={item.icon} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.dis}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>      
    </section>
  )
}

export default CoworkingTopAmenities
