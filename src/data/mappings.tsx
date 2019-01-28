import {
  Location,
  StoreFilters,
  MapListItemProps,
  MapPlacesToStoreItemsFunction,
  SortStoreItemsFunction
} from "app/types/index";

// Helper functions

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

// Mapping functions

// Calculate distance for each place item
export function updatePlacesDistance(
  places: any[],
  filters: StoreFilters
): any[] {
  const { currentLocation } = filters;

  return places.map((place: any) => {
    const { lat, lng } = place;
    var distance: number;

    if (currentLocation) {
      // Calculate distance
      distance = calculateDistance({ lat, lng }, currentLocation);
    }

    return {
      ...place,
      distance
    };
  });
}

export const mapPlacesToStoreItems: MapPlacesToStoreItemsFunction = function(
  places: any[],
  filters: StoreFilters
): MapListItemProps[] {
  return places.map((place: any, index) => {
    const { title, description, distance, lat, lng } = place;

    // Set accessory text to distance
    var accessory: string;

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
};

export const sortStoreItems: SortStoreItemsFunction = function(
  mapListItems: MapListItemProps[],
  currentLocation?: Location
): MapListItemProps[] {
  if (!currentLocation) return mapListItems;

  // Sort by distance if current location is set
  return mapListItems
    .sort(({ distance: d1 }, { distance: d2 }) => (d1 < d2 ? -1 : 1))
    .map((item, ind) => {
      return {
        ...item,
        index: ind + 1
      };
    });
};
