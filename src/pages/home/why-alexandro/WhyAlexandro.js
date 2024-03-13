import React from 'react'
import "./WhyAlexandro.scss"

const WhyAlexandro = () => {

    const whyAlexandroList = [
        {
            img: "",
            title: "Verified spaces",
            content: (<>Our team of space expert inspects and verify spaces.<br />
                        You get accurate information, with on-site and high definition photos.<br />
                        What you see on site is what you get on location.</>),
            dirClass: "direction-l"
        },
        {
            img: "",
            title: "Best Price Guarantee",
            content: (<>Alexandro space experts have extensive market<br />
                        knowledge and professional connect with the owners and developers<br />
                        helping in negotiating the best terms and price for you.</>),
            dirClass: "direction-r"
        },
        {
            img: "",
            title: "Due Diligence of Title",
            content: (<>All spaces promoted and marketed by Alexandro go through<br />
                        various title checks. So buying through us keeps your mind free<br />
                        from all speculations and uncertainties.</>),            
            dirClass: "direction-l"
        },
        {
            img: "",
            title: "Professional Team",
            content: (<>Alexandro space experts are well trained professionals<br />
                        having extensive market knowledge and follow the highest<br />
                        standards and honesty and sincerity.</>),
            dirClass: "direction-r"
        }
    ]

  return (
    <section className='why_alexandro_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>Why Alexandro?</h3>
                <p>Every business needs the right space to grow</p>
                <p>We help you save precious time and money by choosing the best space for you :</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <ul className="timeline">
                 {whyAlexandroList.map((item) =>
                    <li>
                        <div className={item.dirClass}>
                            <div className="flag-wrapper">
                                <img src={item.img} className="img-fluid desktop-hide" alt={item.title} />
                                <span className="flag">{item.title}</span>
                            </div>
                            <div className="desc mobile-hide">
                                {item.content}
                            </div>
                        </div>
                    </li>
                 )}
                    

                    {/* <li>

                        <div className="direction-r">

                            <div className="flag-wrapper">

                                <img src="img/icon/guaruntee-icon.svg" className="img-fluid desktop-hide" alt="Trusted" />

                                <span className="flag">Best Price Guarantee</span>

                            </div>

                            <div className="desc mobile-hide">

                                Alexandro space experts have extensive market<br />

                                knowledge and professional connect with the owners and developers<br />

                                helping in negotiating the best terms and price for you.

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="direction-l">

                            <div className="flag-wrapper">

                                <img src="img/icon/due-deligence-icon.svg" className="img-fluid desktop-hide" alt="Trusted"/>

                                <span className="flag">Due Diligence of Title</span>

                            </div>

                            <div className="desc mobile-hide">

                                All spaces promoted and marketed by Alexandro go through<br />

                                various title checks. So buying through us keeps your mind free<br />

                                from all speculations and uncertainties.

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="direction-r">

                            <div className="flag-wrapper">

                                <img src="img/icon/team-icon.svg" className="img-fluid desktop-hide" alt="Trusted" />

                                <span className="flag">Professional Team</span>

                            </div>

                            <div className="desc mobile-hide">

                                Alexandro space experts are well trained professionals<br />

                                having extensive market knowledge and follow the highest<br />

                                standards and honesty and sincerity.

                            </div>

                        </div>

                    </li> */}

                </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WhyAlexandro
