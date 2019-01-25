import * as React from "react";
import MapSearchInput from "./MapSearchInput";
import CurrentLocationButton from "./CurrentLocationButton";
import Filters from "./Filters";
import { checkPropTypes } from "prop-types";
interface IProps {
  filters: String[];
}
const MapSearchGroup: React.SFC<IProps> = props => {
  return (
    <div className='search__group'>
      <div className='filter filter-location'>
        <MapSearchInput />
        <CurrentLocationButton />
      </div>
      <div className='filter'>
        <Filters filters={props.filters} />
      </div>
    </div>
  );
};

export default MapSearchGroup;
