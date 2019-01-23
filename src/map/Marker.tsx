import * as React from "react";
const Marker: React.SFC<any> = () => {
  return (
    <div className='marker'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='30'
        viewBox='0 0 24 30'
        fill='#2471c9'
        className='feather feather-map-pin'
        transform='scale(1)'
      >
        <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
      </svg>
      <div className='number'>2</div>
    </div>
  );
};

export default Marker;
