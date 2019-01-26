import * as React from "react";
import MapSearchGroup from "./filter/MapSearchGroup";
import LocationFilter from "./filter/LocationFilter";
import Filters from "./filter/Filters";
import Map from "./map/Map";
import { FilteredLocation } from "./types/index";

import "./styles/main.scss";

interface Props {
  data: any;
  filters: Array<string>;
}

interface State {
  currentLocation: FilteredLocation;
}

class StoreLocator extends React.Component<Props, State> {
  state: State = {
    currentLocation: null
  };

  updateCurrentLocation = (currentLocation: FilteredLocation) => {
    this.setState({ currentLocation });
  };

  render() {
    const { data, filters } = this.props;
    const { currentLocation } = this.state;
    // let tags = ["CDMP", "CHAS", "ISP"];

    return (
      // Important! Always set the container height explicitly
      <div>
        <MapSearchGroup>
          <LocationFilter updateCurrentLocation={this.updateCurrentLocation} />
          <div className="filter">
            <Filters filters={filters} />
          </div>
        </MapSearchGroup>
        <Map data={data} currentLocation={currentLocation} />
      </div>
    );
  }
}

export default StoreLocator;
