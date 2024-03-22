import React from 'react'
import OfficeLocationBanner from './office-location-banner/OfficeLocationBanner'
import OfficeLocationAmenities from './office-location-amenities/OfficeLocationAmenities'
import OfficeLocationCta from './office-location-cta/OfficeLocationCta'
import OfficeFlexiblePlans from './office-flexible-plans/OfficeFlexiblePlans'
import TopOfficeSapce from './top-office-sapce/TopOfficeSapce'

const OfficeSpaceLocation = () => {
  return (
    <>
      <OfficeLocationBanner />
      <OfficeLocationAmenities />
      <OfficeLocationCta />
      <OfficeFlexiblePlans />
      <TopOfficeSapce />
    </>
  )
}

export default OfficeSpaceLocation
