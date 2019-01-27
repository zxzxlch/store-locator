export interface Location {
  lat: number;
  lng: number;
  formatted_address?: string;
}

export interface StoreFilters {
  currentLocation?: Location;
}

export interface MapListItemProps {
  index: number;
  title: string;
  description: string;
  accessory: string;
  distance?: number;
  location?: Location;
}

export interface MapPlacesToStoreItemsFunction {
  (places: any[], filters: StoreFilters): MapListItemProps[];
}

export interface SortStoreItemsFunction {
  (
    mapListItems: MapListItemProps[],
    currentLocation?: Location
  ): MapListItemProps[];
}
