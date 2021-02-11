export interface Order {
  uuid: string;
  id: string;
  store_uuid: string;
  store_data: StoreData;
  device_id: string;
  client_uuid: string;
  client_data: ClientData;
  source: string;
  state: string;
  callback_phone: string;
  comment: string;
  cancellation_reason: string;
  cancellation_comment: string;
  items: Item[];
  payment_type: string;
  total_price: number;
  own_delivery: boolean;
  without_delivery: boolean;
  eat_in_store: boolean;
  delivery_type: string;
  delivery_price: number;
  delivery_address: Address;
  cooking_time: number;
  created_at: Date;
}

export interface ClientData {
  uuid: string;
  name: string;
  comment: string;
  main_phone: string;
  devices: string[];
  blocked: boolean;
  addresses: null;
  meta: ClientDataMeta;
}

export interface ClientDataMeta {}

export interface Address {
  uuid: string;
  point_type: string;
  unrestricted_value: string;
  value: string;
  country: string;
  region: string;
  region_type: string;
  type: string;
  city: string;
  city_type: string;
  street: string;
  street_type: string;
  street_with_type: string;
  house: string;
  front_door: number;
  comment: string;
  out_of_town: boolean;
  house_type: string;
  accuracy_level: number;
  radius: number;
  lat: number;
  lon: number;
}

export interface Item {
  id: number;
  product: Product;
  variant_groups: null;
  price: number;
  count: number;
}

export interface Product {
  uuid: string;
  name: string;
  store_uuid: string;
  type: string;
  price: number;
  weight: number;
  weight_measurement: string;
  meta: ProductMeta;
  product_categories: string[];
}

export interface ProductMeta {
  description: string;
  images: string[];
  energy_value: EnergyValue;
}

export interface EnergyValue {
  protein: number;
  fat: number;
  carbohydrates: number;
  calories: number;
}

export interface StoreData {
  uuid: string;
  name: string;
  store_categories_uuid: string[];
  product_categories_uuid: string[];
  payment_types: string[];
  city_uuid: string;
  legal_entity_uuid: string;
  parent_uuid: string;
  type: string;
  work_schedule: null;
  address: Address;
  contacts: null;
  priority: number;
  lat: number;
  lon: number;
  own_delivery: boolean;
  url: string;
  meta: StoreDataMeta;
  settings: Settings;
}

export interface StoreDataMeta {
  images: string[];
  rating: number;
  avg_delivery_time: number;
  avg_delivery_price: number;
}

export interface Settings {
  confirmation_time: number;
}
