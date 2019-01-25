import * as React from "react";
import Marker from "map/Marker";
import MapList from "./list/MapList";
import MapSearchGroup from "./filter/MapSearchGroup";
import Map from "./map/Map";
import "./styles.css";

class StoreLocator extends React.Component<any, any> {
  render() {
    let tags = ["CDMP", "CHAS", "ISP"];
    return (
      // Important! Always set the container height explicitly
      <div>
        <MapSearchGroup filters={this.props.filters} />
        <Map data={this.props.data} />
      </div>
    );
  }
}

export default StoreLocator;
