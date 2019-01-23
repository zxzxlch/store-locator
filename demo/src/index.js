import React from "react";
import ReactDOM from "react-dom";

import { render } from "react-dom";

import MapComponent from "../../lib";

const app = (
  <div>
    <h2>Dummy Map Component</h2>
    <MapComponent />
  </div>
);

ReactDOM.render(app, document.getElementById("app"));
