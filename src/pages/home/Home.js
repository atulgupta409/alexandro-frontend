import React from 'react'
import BannerSec from './banner-sec/BannerSec'
import HomeAbout from './home-about/HomeAbout'
import OfficeInGurugram from './office-in-gurugram/OfficeInGurugram'
import WhyAlexandro from './why-alexandro/WhyAlexandro'
import QueryForm from '../shared/query-form/QueryForm'

const Home = () => {
  return (
    <>
      <BannerSec />
      <HomeAbout />
      <OfficeInGurugram />
      <WhyAlexandro />
      <QueryForm />
    </>
  )
}

export default Home
