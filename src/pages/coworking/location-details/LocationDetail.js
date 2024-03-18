import React from 'react'
import "./LocationDetail.scss";
import LocationBanner from './location-banner/LocationBanner';
import LocationAmenities from './location-amenities/LocationAmenities';
import LocationCta from './location-cta/LocationCta';
import FlexiblePlans from './flexible-plans/FlexiblePlans';
import TopSpace from './top-spaces/TopSpace';

const LocationDetail = () => {
  return (
    <>
      <LocationBanner />
      <LocationAmenities />
      <LocationCta />
      <FlexiblePlans />
      <TopSpace />
    </>
  )
}

export default LocationDetail
