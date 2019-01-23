import * as React from 'react';


const MapSearchInput: React.SFC<{}> = () => (
  <div className='search__input'>
    <span className='label'>Near</span>
    <input className='field' type="text" placeholder="search" />
  </div>
);

export default MapSearchInput;