import React from "react";
import { render } from "react-dom";
import {
  default as StoreLocator,
  calculateDistance,
  distanceToHumanString
} from "../../dist/store-locator";
import json from "./chas.json";

function mapPlacesToStoreItems(places, filters) {
  const { currentLocation } = filters;

  return places.map(place => {
    const {
      id: index,
      name: title,
      address,
      postal_code: postalCode,
      programmes,
      lat,
      lng,
      distance
    } = place;

    const programmesString = programmes.join(", ");
    const description = `Test${address}, Singapore ${postalCode}\n${programmesString}`;

    // Set accessory text to distance
    var accessory;

    if (distance) {
      accessory = distanceToHumanString(distance);
    }

    return {
      index,
      title,
      description,
      accessory,
      location: { lat, lng },
      distance
    };
  });
}

const app = (
  <div>
    <h1>CHAS Clinics</h1>
    <StoreLocator
      data={json.data.slice(0, 100)}
      mapPlacesToStoreItems={mapPlacesToStoreItems}
    />
  </div>
);

render(app, document.getElementById("app"));
