import * as React from 'react';
import MapSearchInput from './MapSearchInput';
import CurrentLocationButton from './CurrentLocationButton';

const MapSearchGroup: React.SFC<{}> = () => (
  <div className='search__group'>
    <MapSearchInput/>
    <CurrentLocationButton />
  </div>
);


export default MapSearchGroup;
