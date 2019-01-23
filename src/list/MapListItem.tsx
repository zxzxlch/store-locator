
import * as React from 'react'

export interface IMapListItem {
  index: number;
  title: string;
  description: string;
  distance: string;
}

const MapListItem: React.SFC<IMapListItem> = (props) => (
  <div className='list__item'>
    <span className='index'>{props.index}</span>
    <div className='content'>
      <div className='info'>
        <div className='title'>
          {props.title}
        </div>
        <div className='description'>{props.description}</div>
      </div>
      <span className='distance'>{props.distance}</span>
    </div>
  </div>
)

export default MapListItem;