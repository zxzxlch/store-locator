import React from "react";
import ReactDOM from "react-dom";

import { render } from "react-dom";

import MapComponent from "../../lib";
import json from "./chas.json";

const app = (
  <div>
    <h2>Dummy Map Component</h2>

    <MapComponent data={json.data.slice(0, 100)} filters={json.filters} />
  </div>
);

ReactDOM.render(app, document.getElementById("app"));
