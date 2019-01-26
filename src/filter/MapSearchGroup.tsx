import * as React from "react";
import { checkPropTypes } from "prop-types";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const MapSearchGroup: React.SFC<Props> = props => {
  return <div className="search__group">{props.children}</div>;
};

export default MapSearchGroup;
