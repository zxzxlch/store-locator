import * as React from "react";
import MapSearchGroup from "./filter/MapSearchGroup";
import LocationFilter from "./filter/LocationFilter";
import Filters from "./filter/Filters";
import Map from "./map/Map";
import {
  mapPlacesToStoreItems as defaultMapPlacesToStoreItems,
  sortStoreItems as defaultSortStoreItems,
} from "./data/mappings";
import { Location, StoreFilters, MapListItemProps, MapPlacesToStoreItemsFunction } from "./types/index";

import "./styles/main.scss";

interface Props {
  mapPlacesToListItems: MapPlacesToStoreItemsFunction;
  data: any[];
  filters: string[];
}

interface State {
  currentLocation: Location;
  mapListItems: MapListItemProps[];
}

class StoreLocator extends React.Component<Props, State> {
  public static defaultProps: any = {
    mapPlacesToListItems: defaultMapPlacesToStoreItems
  };

  state: State = {
    currentLocation: null,
    mapListItems: []
  };

  constructor(props: Props) {
    super(props);

    // Initialize map list items
    this.state.mapListItems = this.props.mapPlacesToListItems(props.data, {
      currentLocation: this.state.currentLocation
    });
  }

  // Convert data to map items, apply filters and sort
  mapPlacesToStoreItems = (data: any[], filters: StoreFilters) => {
    const { currentLocation } = filters;

    const filtered = this.props.mapPlacesToListItems(data, {
      currentLocation
    });

    const sorted = defaultSortStoreItems(filtered, currentLocation);

    return sorted;
  };

  // Update map list items with current filters
  updateMapListItems = () => {
    const { data } = this.props;
    const { currentLocation } = this.state;
    const mapListItems = this.mapPlacesToStoreItems(data, { currentLocation });
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
