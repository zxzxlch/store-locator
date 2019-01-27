import * as React from "react";
import MapSearchGroup from "./filter/MapSearchGroup";
import LocationFilter from "./filter/LocationFilter";
import Filters from "./filter/Filters";
import Map from "./map/Map";
import {
  mapPlacesToListItems,
  sortMapListItems,
  StoreFilters
} from "./data/mappings";
import { MapListItemProps } from "./list/MapListItem";
import { Location } from "./types/index";

import "./styles/main.scss";

interface Props {
  data: any[];
  filters: Array<string>;
}

interface State {
  currentLocation: Location;
  mapListItems: MapListItemProps[];
}

class StoreLocator extends React.Component<Props, State> {
  state: State = {
    currentLocation: null,
    mapListItems: []
  };

  constructor(props: Props) {
    super(props);

    // Initialize map list items
    this.state.mapListItems = mapPlacesToListItems(props.data, {
      currentLocation: this.state.currentLocation
    });
  }

  // Convert data to map items, apply filters and sort
  mapDataToMapListItems = (data: any[], filters: StoreFilters) => {
    const { currentLocation } = filters;

    const filtered = mapPlacesToListItems(data, {
      currentLocation
    });

    const sorted = sortMapListItems(filtered, currentLocation);

    return sorted;
  };

  // Update map list items with current filters
  updateMapListItems = () => {
    const { data } = this.props;
    const { currentLocation } = this.state;
    const mapListItems = this.mapDataToMapListItems(data, { currentLocation });
    this.setState({ mapListItems });
  };

  updateCurrentLocation = (currentLocation: Location) => {
    this.setState({ currentLocation });
  };

  componentDidUpdate(_: Props, prevState: State) {
    const { currentLocation } = this.state;
    const { currentLocation: prevCurrentLocation } = prevState;

    if (currentLocation !== prevCurrentLocation) {
      this.updateMapListItems();
    }
  }

  render() {
    const { data, filters } = this.props;
    const { currentLocation, mapListItems } = this.state;
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
        <Map
          data={data}
          currentLocation={currentLocation}
          mapListItems={mapListItems}
        />
      </div>
    );
  }
}

export default StoreLocator;
