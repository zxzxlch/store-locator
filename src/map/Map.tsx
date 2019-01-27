import * as React from "react";
import GoogleMapReact from "google-map-react";
import MapList from "app/list/MapList";
import Marker from "./Marker";
import { FilteredLocation } from "../types/index";
import { MapListItemProps } from "app/list/MapListItem";

interface Props {
  data: any;
  currentLocation: FilteredLocation;
  mapListItems: MapListItemProps[];
}

class Map extends React.Component<Props, any> {
  map: any;

  static defaultProps = {
    center: {
      lat: 1.3,
      lng: 103.78
    },
    zoom: 11
  };

  googleApiDidLoad = ({ map }) => {
    this.map = map;
  };

  didUpdateCurrentLocation = ({
    lat: plat,
    lng: plng
  }: FilteredLocation): void => {
    const { lat, lng } = this.props.currentLocation;

    if (lat === plat && lng === plng) return;

    if (this.map.getZoom() < 15) {
      this.map.setZoom(15);
    }
  };

  componentDidUpdate(prevProps: Props, prevState: Props) {
    if (prevProps.currentLocation) {
      this.didUpdateCurrentLocation(prevProps.currentLocation);
    } else {
      this.map.setZoom(15);
    }
  }

  render() {
    const { data, currentLocation, mapListItems } = this.props;

    var center = null;
    if (currentLocation) {
      const { lat, lng } = currentLocation;
      center = { lat, lng };
    }

    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <div className="list">
          <MapList mapItems={mapListItems} />
        </div>
        <div className="view">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            center={center}
            bootstrapURLKeys={{
              key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={this.googleApiDidLoad}
          >
            {mapListItems.map(item => {
              const { location: {lat, lng} } = item;
              return <Marker key={item.index} {...{ lat, lng, item }} />;
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
