import React from 'react'
import "./NearBy.scss"
import MetroIcon from "../../../../images/icons/metro-icon.png";
import StandIcon from "../../../../images/icons/stand-icon.png";

const NearBy = () => {

    const nearByPlace = [
        {
            icon: MetroIcon,
            name: "Nearest Rapid Metro Station, Sector 55-56"
        },
        {
            icon: StandIcon,
            name: "Walking Distance from Shuttl Stand"
        }
    ]

  return (
    <div className='near_by_sec'>
        <div className="row">
            <div className="col-md-12">
                <h3>Innov8, Orchid Centre have close proximity to:</h3>
            </div>
        </div>
        <div className="row">
            {nearByPlace.map((item, index) =>
                <div className="col-md-6" key={index}>
                    <div className="place_item">
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default NearBy
