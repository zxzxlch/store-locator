import * as React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "app/Marker";
import MapList from "./list/MapList";

import './styles.css';
import MapSearchGroup from "./filter/MapSearchGroup";

const AnyReactComponent: any = () => <div>hello</div>;

class Map extends React.Component<any, any> {
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
      <div style={{ height: "80vh", width: "100%" }}>
        <MapSearchGroup />
        <MapList mapItems={
          [
            { title: 'Area 2', description: 'Blk 25 Ghim Moh Link #01-09 Singapore 270025', index: 1, distance: '10m' },
            { title: 'Location 2', description: 'Blk 25 Ghim Moh Link #01-09 Singapore 270025', index: 2, distance: '10m' },
            { title: 'Space 3', description: 'sdjkvnsdv sdjvlnsdvnsd', index: 3, distance: '10m' },
            { title: 'Distance 4', description: 'dsadsadsd', index: 4, distance: '10m' },
          ]
        } />
        {/* <Marker /> */}
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact> */}
      </div>
    );
  }
}

export default Map;
