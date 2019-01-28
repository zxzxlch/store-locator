# Store Locator

Add a mobile responsive store locator to your React web app.

## Installation

Here's a quick summary of the steps.

1. Install the `@zxzxlch/store-locator` package.
2. Install the Google API.
3. Import the StoreLocator component.
4. Map your data to the store items.

### 1. Install the package

`npm install --save @zxzxlch/store-locator`


### 2. Install the Google API

Include this script tag in your HTML file. This will load the places and geometry libraries from [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript).

```
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=_____YOUR_API_KEY_____&libraries=places,geometry"></script>
```

Remember to replace with your API key.


### 3. Import the StoreLocator component

Import the StoreLocator component and add it to your app. Import the default CSS file too so everything looks right.

For example,

```
import StoreLocator from "@zxzxlch/store-locator";
import "@zxzxlch/store-locator/dist/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoreLocator />
      </div>
    );
  }
}
```


### 4. Map your data to the store items.

To display your data in the StoreLocator component without extra configuration, your data has to match this structure:

```
[
  {
    index: 1,
    title: "Woodlands Primary School",
    description: "Fernvale Link",
    accessory: "3 km",
    location: { lat: 1.39807105477126, lng: 103.877933381804 }
  },
  ...
]
```

Otherwise, you have to use a mapping function to transform your data. For example,

```
function mapPlacesToStoreItems(places, filters) {
  // Get the user-input search location so we can calculate proximity for each place
  const { currentLocation } = filters;

  // Parse each place into the right format
  return places.map(place => {
    const {
      id: index,
      name: title,
      address,
      lat,
      lng
    } = place;

    const description = address.join(', ');

    // Calculate proximity distance and set accessory text
    var accessory;
    var distance;

    if (currentLocation) {
      // Calculate distance
      distance = calculateDistance({ lat, lng }, currentLocation);
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

...

<StoreLocator
  data={data}
  mapPlacesToStoreItems={mapPlacesToStoreItems}
/>

```

`calculateDistance` and `distanceToHumanString` are helper functions that are included with the package. To import the functions together with the component, for example,

```
import { default as StoreLocator, calculateDistance, distanceToHumanString } from "@zxzxlch/store-locator";
```

