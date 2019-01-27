import {
  Location,
  StoreFilters,
  MapListItemProps,
  MapPlacesToStoreItemsFunction,
  SortStoreItemsFunction
} from "app/types/index";

export const mapPlacesToStoreItems: MapPlacesToStoreItemsFunction = function(
  places: any[],
  filters: StoreFilters
): MapListItemProps[] {
  const { currentLocation } = filters;

  return places.map((place: any, index) => {
    const { title, description, lat, lng } = place;

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
};

export function calculateDistance(
  { lat: alat, lng: alng }: Location,
  { lat: blat, lng: blng }: Location
): number {
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

export const sortStoreItems: SortStoreItemsFunction = function(
  mapListItems: MapListItemProps[],
  currentLocation?: Location
): MapListItemProps[] {
  if (!currentLocation) return mapListItems;

  // Sort by distance if current location is set
  return mapListItems
    .sort(({ distance: d1 }, { distance: d2 }) => (d1 < d2 ? -1 : 1))
    .map((item, ind) => {
      return Object.assign({}, item, { index: ind + 1 });
    });
};
