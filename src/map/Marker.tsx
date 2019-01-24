import * as React from "react";
import { IMapListItem } from "app/list/MapListItem";

interface IMarker {
  lat: number;
  lng: number;
  item: IMapListItem;
}

const Marker: React.SFC<IMarker> = props => {
  return (
    <div className='marker'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='60'
        viewBox='0 0 48 60'
        fill='#2471c9'
        className='pin'
        preserveAspectRatio='none'
        transform='scale(1.35)'
      >
        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
      </svg>
      <div className='number'>{props.item.index}</div>
    </div>
  );
};

export default Marker;
