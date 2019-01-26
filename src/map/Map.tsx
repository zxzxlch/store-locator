import * as React from "react";
import GoogleMapReact from "google-map-react";
import MapList from "app/list/MapList";
import Marker from "./Marker";
import { FilteredLocation } from "../types/index";
import { any, number } from "prop-types";
import { MapListItemProps } from "app/list/MapListItem";

interface Props {
  data: any;
  currentLocation: FilteredLocation;
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

  getMapItems = (data): MapListItemProps[] => {
    const { currentLocation } = this.props;

    return data.map((item: any) => {
      const {
        id: index,
        name: title,
        address,
        postal_code: postalCode,
        lat,
        lng
      } = item;

      const description = `${address}, Singapore ${postalCode}`;

      var accessory: string = undefined;
      if (currentLocation) {
        // Calculate distance
        const a = new google.maps.LatLng(lat, lng);
        const b = new google.maps.LatLng(
          currentLocation.lat,
          currentLocation.lng
        );
        const d: number = google.maps.geometry.spherical.computeDistanceBetween(
          a,
          b
        );
        if (d < 1000) {
          accessory = `${Math.round(d)} m`;
        } else {
          accessory = `${Math.round(d / 1000)} km`;
        }
      }

      return { index, title, description, lat, lng, accessory };
    });
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
    const { data, currentLocation } = this.props;

    var center = null;
    if (currentLocation) {
      const { lat, lng } = currentLocation;
      center = { lat, lng };
    }

    const mapItems = this.getMapItems(data);

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
            center={center}
            bootstrapURLKeys={{
              key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={this.googleApiDidLoad}
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
