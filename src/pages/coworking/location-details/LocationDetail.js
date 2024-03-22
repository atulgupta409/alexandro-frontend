import React from 'react'
import "./LocationDetail.scss";
import LocationBanner from './location-banner/LocationBanner';
// import LocationAmenities from './location-amenities/LocationAmenities';
// import LocationCta from './location-cta/LocationCta';
import FlexiblePlans from './flexible-plans/FlexiblePlans';
import TopSpace from './top-spaces/TopSpace';
import CoworkingTopAmenities from '../coworking-top-amenities/CoworkingTopAmenities';
import CoworkingCta from '../coworking-cta/CoworkingCta';

const LocationDetail = () => {
  return (
    <>
      <LocationBanner />
      <CoworkingTopAmenities />
      {/* <LocationAmenities /> */}
      {/* <LocationCta /> */}
      <CoworkingCta />
      <FlexiblePlans />
      <TopSpace />
    </>
  )
}

export default LocationDetail
