import * as React from "react";
import GoogleMapReact from "google-map-react";
import MapList from "app/list/MapList";
import Marker from "./Marker";
import * as json from "../../demo/src/chas.json";
import { any } from "prop-types";

class Map extends React.Component<any, any> {
  state = {
    mapItems: (json as any).data.slice(0, 100)
  };

  static defaultProps = {
    center: {
      lat: 1.3,
      lng: 103.78
    },
    zoom: 11
  };

  render() {
    const mapItems = this.state.mapItems.map(item => {
      const {
        id: index,
        name: title,
        address,
        postal_code: postalCode,
        lat,
        lng
      } = item;
      const description = `${address}, Singapore ${postalCode}`;
      return { index, title, description, lat, lng };
    });

    return (
      // Important! Always set the container height explicitly

      <div className="map">
        <div className="list">
          <MapList mapItems={mapItems} />
        </div>
        <div className="view">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{
              key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
            }}
          >
            {mapItems.map(item => {
              const { lat, lng } = item;
              return <Marker key={item.index} {...{ lat, lng, item }} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
