import * as React from "react";

export interface MapListItemProps {
  index: number;
  title: string;
  description: string;
  accessory: string;
}

const MapListItem: React.SFC<MapListItemProps> = props => {
  const { index, title, description, accessory } = props;

  return (
    <div className="list__item">
      <span className="index">{index}</span>
      <div className="content">
        <div className="info">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <span className="accessory">{accessory}</span>
      </div>
    </div>
  );
};

export default MapListItem;
