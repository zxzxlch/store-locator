import * as React from "react";

export interface IMapListItem {
  index: number;
  title: string;
  description: string;
  distance: string;
}

const MapListItem: React.SFC<IMapListItem> = props => {
  const { index } = props;
  return (
    <div className="list__item">
      <span className="index">{index}</span>
      <div className="content">
        <div className="info">
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
        </div>
        <span className="distance">100m</span>
      </div>
    </div>
  );
};

export default MapListItem;
