import * as React from "react";
import MapListItem, { IMapListItem } from "./MapListItem";

interface IMapListProps {
  mapItems: IMapListItem[];
}

const MapList: React.SFC<IMapListProps> = props => {
  const { mapItems } = props;
  return (
    <div>
      <span className="counter__text">
        Showing <b>{mapItems.length} places</b> near <b>1 Fusionopolis view</b>
      </span>
      {mapItems.map(item => {
        return <MapListItem key={item.index} {...item} />;
      })}
    </div>
  );
};

export default MapList;
