import * as React from 'react';


const MapSearchInput: React.SFC<{}> = () => (
  <div className='search__input'>
    <span className='label'>Search near a location</span>
    <input 
      className='field' 
      type="text" 
      placeholder="Address or postal code" />
  </div>
);

export default MapSearchInput;