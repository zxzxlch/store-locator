import * as React from "react";
import Marker from "map/Marker";
import MapList from "./list/MapList";
import MapSearchGroup from "./filter/MapSearchGroup";
import Map from "./map/Map";

import "./styles/main.scss";

class StoreLocator extends React.Component<any, any> {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <MapSearchGroup />
        <Map />
      </div>
    );
  }
}

export default StoreLocator;
