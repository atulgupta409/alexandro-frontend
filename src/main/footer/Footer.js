import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import verifiedLogo from "../../images/verified-logo.gif";

const Footer = (props) => {

    const coworkingLinks = [
        {
            name: "Coworking space on Golf Course Road",
            url: "coworking-space/innov8-orchid-centre-golf-course-road"
        },
        {
            name: "Coworking space on Golf Course Extension Road",
            url: ""
        },
        {
            name: "Coworking space on MG Road",
            url: ""
        },
        {
            name: "Coworking space on Sohna Road",
            url: ""
        },
        {
            name: "Coworking space in DLF Cyber City",
            url: ""
        },
        {
            name: "Coworking space in Udyog Vihar",
            url: ""
        },
        {
            name: "Coworking space on NH 8",
            url: ""
        },
        {
            name: "Coworking space in Sector 32",
            url: ""
        },
        {
            name: "Coworking space near Metro Station",
            url: ""
        },
    ]

    const colivingLinks = [
        {
            name: "Coliving Space Bangalore",
            url: ""
        },
        {
            name: "Coliving Space Hyderabad",
            url: ""
        },
        {
            name: "Coliving Space Gurgaon",
            url: ""
        },
        {
            name: "Coliving Space Delhi",
            url: ""
        },
        {
            name: "Coliving Space Mumbai",
            url: ""
        },
        {
            name: "Coliving Space Noida",
            url: ""
        },
        {
            name: "Coliving Space Pune",
            url: ""
        },
        {
            name: "Coliving Space Chennai",
            url: ""
        },
        {
            name: "Coliving Space Indore",
            url: ""
        }
    ]

    const pgLinks = [
        {
            name: "PG in Bangalore",
            url: ""
        },
        {
            name: "PG in Hyderabad",
            url: ""
        },
        {
            name: "PG in Gurgaon",
            url: ""
        },
        {
            name: "PG in Delhi",
            url: ""
        },
        {
            name: "PG in Mumbai",
            url: ""
        },
        {
            name: "PG in Noida",
            url: ""
        },
        {
            name: "PG in Pune",
            url: ""
        },
        {
            name: "PG in Chennai",
            url: ""
        },
        {
            name: "PG in Indore",
            url: ""
        }
    ]

    const alexandroSpaces = [
        {
            name: "Coworking Spaces",
            url: "/coworking-space-in-gurgaon"
        },
        {
            name: "Office Spaces",
            url: "/office-space-in-gurgaon"
        }
    ]

  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h4 className='footer_title'>Coworking Spaces</h4>
                    <ul className='footer_nav'>
                        {coworkingLinks.map((item) =>
                            <li><Link to={item.url}>{item.name}</Link></li>
                        )}
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4 className='footer_title'>Coliving Spaces</h4>
                    <ul className='footer_nav'>
                        {colivingLinks.map((item) =>
                            <li><Link to={item.url}>{item.name}</Link></li>
                        )}
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4 className='footer_title'>PG</h4>
                    <ul className='footer_nav'>
                        {pgLinks.map((item) =>
                            <li><Link to={item.url}>{item.name}</Link></li>
                        )}
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4 className='footer_title'>Alexandro Spaces</h4>
                    <ul className='footer_nav'>
                        {alexandroSpaces.map((item) =>
                            <li><Link to={item.url}>{item.name}</Link></li>
                        )}
                    </ul>

                    <ul className='footer_sm'>
                        {props.socialLinks.map((item) =>
                            <li><Link to={item.url}>{item.icon}</Link></li>
                        )}
                    </ul>

                    <img src={verifiedLogo} alt="Verified Logo" className='img-fluid verified_logo' />
                </div>
            </div>
        </div>
      
    </footer>
  )
}

export default Footer
