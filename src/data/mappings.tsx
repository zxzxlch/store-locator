import { MapListItemProps } from "app/list/MapListItem";
import { FilteredLocation } from "app/types/index";

export interface StoreFilters {
  currentLocation?: FilteredLocation;
}

export function mapPlacesToListItems(
  places: any[],
  filters: StoreFilters
): MapListItemProps[] {
  const { currentLocation } = filters;

  return places.map((place: any) => {
    const {
      id: index,
      name: title,
      address,
      postal_code: postalCode,
      lat,
      lng
    } = place;

    const description = `${address}, Singapore ${postalCode}`;

    // Calculate distance and set accessory text
    var accessory: string;
    var distance: number;

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

export function calculateDistance(
  { lat: alat, lng: alng }: FilteredLocation,
  { lat: blat, lng: blng }: FilteredLocation
) {
  const a = new google.maps.LatLng(alat, alng);
  const b = new google.maps.LatLng(blat, blng);
  return google.maps.geometry.spherical.computeDistanceBetween(a, b);
}

export function distanceToHumanString(meters: number): string {
  if (meters < 1000) {
    return `${Math.round(meters)} m`;
  } else {
    return `${Math.round(meters / 1000)} km`;
  }
}

export function sortMapListItems(
  mapListItems: MapListItemProps[],
  currentLocation?: FilteredLocation
): MapListItemProps[] {
  if (!currentLocation) return mapListItems;

  // Sort by distance if current location is set
  return mapListItems
    .sort(({ distance: d1 }, { distance: d2 }) => (d1 < d2 ? -1 : 1))
    .map((item, ind) => {
      return Object.assign({}, item, { index: ind + 1 });
    });
}
