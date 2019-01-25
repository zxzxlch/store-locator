import * as React from "react";
import Filters from "./Filters";
import LocationFilter from "./LocationFilter";
import { checkPropTypes } from "prop-types";
interface IProps {
  filters: String[];
}
const MapSearchGroup: React.SFC<IProps> = props => {
  return (
    <div className="search__group">
      <LocationFilter />
      <div className="filter">
        <Filters filters={props.filters} />
      </div>
    </div>
  );
};

export default MapSearchGroup;
