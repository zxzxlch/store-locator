import * as React from 'react';
import MapListItem, { IMapListItem } from './MapListItem';

interface IMapListProps {
  mapItems: IMapListItem[]
}

const MapList: React.SFC<IMapListProps> = (props) => (
  <div>
    <span className='counter__text'>
      Showing {props.mapItems.length} places near 1 Fusionopolis view
    </span>
    {props.mapItems.map(item => <MapListItem key={item.title} {...item} />)}
  </div>
);

export default MapList;