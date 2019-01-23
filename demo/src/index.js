import React from "react";
import { render } from "react-dom";

import MapComponent from "../../lib";

render(
  <div>
    <h2>Dummy Map Component</h2>
    <MapComponent />
  </div>,
  document.getElementById("app")
);
