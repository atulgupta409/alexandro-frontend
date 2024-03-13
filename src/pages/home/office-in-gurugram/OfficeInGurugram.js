import React from 'react'
import "./OfficeInGurugram.scss"
import UdyogViharImg from "../../../images/udyog-vihar-office.jpg";
import GolfCourseExtentionRoadImg from "../../../images/golf-course-extention-road-office.jpg";
import OfficeSpacesNearMetroImg from "../../../images/office-spaces-near-metro.jpg";
import GolfCourseRoadImg from "../../../images/golf-course-road-img.jpg";
import MgRoadImg from "../../../images/mg-road-office.jpg";
import DlfCyberCityImg from "../../../images/dlf-cyber-city-office.jpg";
import SohnaRoadImg from "../../../images/sohna-road-office.jpg";
import { Link } from 'react-router-dom';

const OfficeInGurugram = () => {

    const officeSpaceLocation = [
        {
            colClass: "col-md-7",
            backImg: UdyogViharImg,
            title: "Udyog Vihar",
            content: "Easily the best alternative to long term leasing, coworking space is the new way to work. Variety of creative workspaces to enable you to move into the right networks, build ideas or simply your very own brainstorming space. Option to choose from Hot Desks, Dedicated Desk & Private offices, you are free to take the space that best suits your business requirement. Flexibility to upscale or downsize makes coworking the preferred choice for your office setup.",
            url: "/"
        },
        {
            colClass: "col-md-5",
            backImg: GolfCourseExtentionRoadImg,
            title: "Golf Course Extention Road",
            content: "Serviced offices on rent are best suited for enterprise clients looking for a private independent office with their brand identity along with the added advantages of a coworking space with a service provider managing all the services. This is a great combination of privacy in a serviced environment best suited for medium to large team requirements. Services like Reception &amp; Concierge, Office cleaning &amp; maintenance, Hi-speed WiFi and printing facilities are all provided at one cost of the rent.",
            url: "/"
        },
        {
            colClass: "col-md-5",
            backImg: OfficeSpacesNearMetroImg,
            title: "Office Spaces Near Metro",
            content: "Rent Office space at all macro and micro-locations as per your team size and space requirement. Build a company culture of your own without noisy neighbours and privacy concerns. This is your true individual office and Alexandro will hard to make sure you get the most efficient and functional layout to increase your team’s productivity. Choose from raw office space which you can build as per your requirement, a Fully furnished office to start your business operations from day one of moving in and a Built-to-suite office space customised made as per your business requirement and culture.",
            url: "/"
        },
        {
            colClass: "col-md-7",
            backImg: GolfCourseRoadImg,
            title: "Golf Course Road",
            content: "Investment in commercial properties has always given good returns to investors, both in terms of capital appreciation &amp; rental income. A wide range of Assured Return properties &amp; Pre-leased properties is available to choose from. Only properties with a good tenant profile and clear title across various locations are marketed by Alexandro.",
            url: "/"
        },
        {
            colClass: "col-md-4",
            backImg: MgRoadImg,
            title: "Mg Road",
            content: "Rent training rooms &amp; training spaces on a daily or hourly basis. Choose from hundreds of fully equipped training room rental spaces stocked with everything you need to do your best work. These are fully furnished training rooms with no long terms commitments suitable for small to medium to large team size training. Book a room now and start training.",
            url: "/"
        },
        {
            colClass: "col-md-4",
            backImg: DlfCyberCityImg,
            title: "DLF Cyber City",
            content: "Top commercial projects for investments and self-use can be searched with ease on Alexandro Spaces. Exclusive tie-ups with Grade-A developers ensure you get the right property at the right price. Exclusive collection of the Office spaces, Showroom Spaces, Restaurant Spaces, Multiplexes and shops to choose from with Alexandro price guarantee.",
            url: "/"
        },
        {
            colClass: "col-md-4",
            backImg: SohnaRoadImg,
            title: "Sohna Road",
            content: "Event spaces are best found on Alexandro. You choose the event we have the space for you. Choose from a wide variety of event spaces depending on the event and the number of people. Business, Personal or Casual event we have all kinds of event places spread over different locations to match your needs.",
            url: "/"
        }
    ]

    

  return (
    <section className='office_gurugram_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>Top Office Space Location in Gurugram</h3>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
            {officeSpaceLocation.map((item) =>
                <div className={item.colClass}>
                    <Link to={item.url}>
                        <div className="locationItem">
                            <img src={item.backImg} className='img-fluid back_img' alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>
      </div>
    </section>
  )
}

export default OfficeInGurugram
