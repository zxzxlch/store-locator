import React from "react";
import { render } from "react-dom";

import MapComponent from "../../lib";
import json from "./chas.json";

const app = (
  <div>
    <h1>CHAS Clinics</h1>
    <MapComponent data={json.data.slice(0, 100)} filters={json.filters} />
  </div>
);

render(app, document.getElementById("app"));
