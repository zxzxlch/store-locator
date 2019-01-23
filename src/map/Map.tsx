import * as React from 'react';
import GoogleMapReact from "google-map-react";
import MapList from 'app/list/MapList';
const AnyReactComponent: any = () => <div>hello</div>;
const Map: React.SFC<{}> = () => (
  <div className='map'>
    <div className='list'>
      <MapList mapItems={
        [
          { title: 'Area 2', description: 'Blk 25 Ghim Moh Link #01-09 Singapore 270025', index: 1, distance: '10m' },
          { title: 'Location 2', description: 'Blk 25 Ghim Moh Link #01-09 Singapore 270025', index: 2, distance: '10m' },
          { title: 'Space 3', description: 'sdjkvnsdv sdjvlnsdvnsd', index: 3, distance: '10m' },
          { title: 'Distance 4', description: 'dsadsadsd', index: 4, distance: '10m' },
        ]
      } />
    </div>
    <div className='view'>

    


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
  </div>
);


export default Map