import * as React from "react";
import Marker from "app/Marker";
import MapList from "./list/MapList";
import MapSearchGroup from "./filter/MapSearchGroup";
import Map from "./map/Map";

import "./styles.css";

const AnyReactComponent: any = () => <div>hello</div>;

class StoreLocator extends React.Component<any, any> {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

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
