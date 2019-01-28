import * as React from "react";
import MapSearchGroup from "./filter/MapSearchGroup";
import LocationFilter from "./filter/LocationFilter";
import Filters from "./filter/Filters";
import Map from "./map/Map";
import {
  mapPlacesToStoreItems as defaultMapPlacesToStoreItems,
  sortStoreItems as defaultSortStoreItems,
  updatePlacesDistance
} from "./data/mappings";
import {
  Location,
  StoreFilters,
  MapListItemProps,
  MapPlacesToStoreItemsFunction
} from "./types/index";

interface Props {
  mapPlacesToStoreItems: MapPlacesToStoreItemsFunction;
  data: any[];
  filters: string[];
}

interface State {
  currentLocation: Location;
  storeItems: MapListItemProps[];
}

class StoreLocator extends React.Component<Props, State> {
  public static defaultProps: any = {
    mapPlacesToStoreItems: defaultMapPlacesToStoreItems
  };

  state: State = {
    currentLocation: null,
    storeItems: []
  };

  constructor(props: Props) {
    super(props);

    // Initialize map list items
    this.state.storeItems = this.props.mapPlacesToStoreItems(props.data, {
      currentLocation: this.state.currentLocation
    });
  }

  // Convert data to map items, apply filters and sort
  mapPlacesToStoreItems = (data: any[], filters: StoreFilters) => {
    const { currentLocation } = filters;

    const filtered = this.props.mapPlacesToStoreItems(data, {
      currentLocation
    });

    const sorted = defaultSortStoreItems(filtered, currentLocation);

    return sorted;
  };

  // Update map list items with current filters
  updateStoreItems = () => {
    const { data } = this.props;
    const { currentLocation } = this.state;

    // Calculate distance
    const withDistance = updatePlacesDistance(data, { currentLocation });

    // Map places to store items
    const storeItems = this.mapPlacesToStoreItems(withDistance, { currentLocation });
    this.setState({ storeItems });
  };

  updateCurrentLocation = (currentLocation: Location) => {
    this.setState({ currentLocation });
  };

  componentDidUpdate(_: Props, prevState: State) {
    const { currentLocation } = this.state;
    const { currentLocation: prevCurrentLocation } = prevState;

    if (currentLocation !== prevCurrentLocation) {
      this.updateStoreItems();
    }
  }

  render() {
    const { data } = this.props;
    const { currentLocation, storeItems } = this.state;
    // let tags = ["CDMP", "CHAS", "ISP"];

    return (
      // Important! Always set the container height explicitly
      <div>
        <MapSearchGroup>
          <LocationFilter updateCurrentLocation={this.updateCurrentLocation} />
          <div className="filter">
            <Filters />
          </div>
        </MapSearchGroup>
        <Map
          data={data}
          currentLocation={currentLocation}
          storeItems={storeItems}
        />
      </div>
    );
  }
}

export default StoreLocator;
