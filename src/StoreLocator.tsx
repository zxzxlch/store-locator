import * as React from "react";
import MapSearchGroup from "./filter/MapSearchGroup";
import LocationFilter from "./filter/LocationFilter";
import Filters from "./filter/Filters";
import Marker from "map/Marker";
import MapList from "./list/MapList";
import Map from "./map/Map";

import "./styles/main.scss";

interface Props {
  data: any;
  filters: Array<string>;
}

class StoreLocator extends React.Component<Props, any> {
  render() {
    const { data, filters } = this.props;
    // let tags = ["CDMP", "CHAS", "ISP"];

    return (
      // Important! Always set the container height explicitly
      <div>
        <MapSearchGroup>
          <LocationFilter />
          <div className="filter">
            <Filters filters={filters} />
          </div>
        </MapSearchGroup>
        <Map data={data} />
      </div>
    );
  }
}

export default StoreLocator;
