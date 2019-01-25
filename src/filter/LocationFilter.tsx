import * as React from "react";
import CurrentLocationButton from "./CurrentLocationButton";

class LocationFilter extends React.Component<any, any> {
  autocomplete: any;

  state = {};
  searchInput = React.createRef();

  // constructor(props) {
  //   super(props);
  //   this.searchInput = React.createRef();
  // }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.searchInput.current, {
      types: ["geocode"],
      fields: ["formatted_address"]
    });

    this.autocomplete.addListener("place_changed", this.updateSearchInput);
  }

  updateSearchInput = () => {
    // Get the place details from the autocomplete object.
    var place = this.autocomplete.getPlace();
    this.searchInput.current.value = place.formatted_address;
    console.log(place);
  }

  render() {
    return (
      <div className="filter filter-location">
        <label for="filterLocation">Search near a location</label>
        <input
          name="filterLocation"
          class="filter-location__search-input"
          placeholder="Address or postal code"
          type="text"
          ref={this.searchInput}
        />
        <CurrentLocationButton />
      </div>
    );
  }
}

export default LocationFilter;
