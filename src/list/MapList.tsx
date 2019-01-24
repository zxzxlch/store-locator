import * as React from 'react';
import MapListItem, { IMapListItem } from './MapListItem';

interface IMapListProps {
  mapItems: IMapListItem[]
}

const MapList: React.SFC<IMapListProps> = (props) => (
  <div>
    <span className='counter__text'>
      Showing <b>{props.mapItems.length} places</b> near <b>1 Fusionopolis view</b>
    </span>
    {props.mapItems.map(item => <MapListItem key={item.title} {...item} />)}
  </div>
);

export default MapList;