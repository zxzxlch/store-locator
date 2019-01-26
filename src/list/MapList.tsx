import * as React from "react";
import MapListItem, { MapListItemProps } from "./MapListItem";

interface Props {
  mapItems: MapListItemProps[];
}

const MapList: React.SFC<Props> = props => {
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
