import * as React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "app/Marker";

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
        {/* <Marker /> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Kreyser Avrora"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
