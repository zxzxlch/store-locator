import * as React from "react";
import GoogleMapReact from "google-map-react";
import MapList from "app/list/MapList";
import Marker from "./Marker";

class Map extends React.Component<any, any> {
  state = {
    mapItems: [
      {
        title: "Area 2",
        description: "Blk 25 Ghim Moh Link #01-09 Singapore 270025",
        index: 1,
        distance: "10m",
        lat: 1.332174,
        lng: 103.847187
      },
      {
        title: "Location 2",
        description: "Blk 25 Ghim Moh Link #01-09 Singapore 270025",
        index: 2,
        distance: "10m",
        lat: 1.319796,
        lng: 103.843811
      },
      {
        title: "Space 3",
        description: "sdjkvnsdv sdjvlnsdvnsd",
        index: 3,
        distance: "10m",
        lat: 1.310488,
        lng: 103.846671
      },
      {
        title: "Distance 4",
        description: "dsadsadsd",
        index: 4,
        distance: "10m",
        lat: 1.322174,
        lng: 103.827187
      }
    ]
  };
  static defaultProps = {
    center: {
      lat: 1.3,
      lng: 103.78
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly

      <div className='map'>
        <div className='list'>
          <MapList mapItems={this.state.mapItems} />
        </div>
        <div className='view'>
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{
              key: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
            }}
          >
            {this.state.mapItems.map(item => {
              return (
                <Marker
                  key={item.index}
                  lat={item.lat}
                  lng={item.lng}
                  item={item}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
