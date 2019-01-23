import * as React from 'react';
import MapListItem, { IMapListItem } from './MapListItem';

interface IMapListProps {
  mapItems: IMapListItem[]
}

const MapList: React.SFC<IMapListProps> = (props) => (
  <div>
    {props.mapItems.map(item => <MapListItem {...item} />)}
  </div>
);

export default MapList;