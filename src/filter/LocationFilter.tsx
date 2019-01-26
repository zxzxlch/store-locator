import * as React from "react";
import CurrentLocationButton from "./CurrentLocationButton";
import { FilteredLocation } from "app/types/index";

interface Props {
  updateCurrentLocation: (FilteredLocation) => void;
}

class LocationFilter extends React.Component<Props, any> {
  autocomplete: any;

  state = {};
  searchInput: React.RefObject<HTMLInputElement> = React.createRef();

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.searchInput.current,
      {
        types: ["geocode"],
        fields: ["geometry", "formatted_address"]
      }
    );

    this.autocomplete.addListener("place_changed", this.updateSearchInput);
  }

  updateSearchInput = () => {
    // Get the place details from the autocomplete object.
    const {
      formatted_address,
      geometry: { location }
    } = this.autocomplete.getPlace();
    
    // Update text field value
    this.searchInput.current.value = formatted_address;

    // Update state
    this.props.updateCurrentLocation({
      lat: location.lat(),
      lng: location.lng(),
      formatted_address
    });
  };

  render() {
    return (
      <div className="filter filter-location">
        <label htmlFor="filterLocation">Search near a location</label>
        <input
          name="filterLocation"
          className="filter-location__search-input"
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
