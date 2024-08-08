export interface UsersTypes {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressTypes;
  phone: string;
  website: string;
  company: CompanyTypes;
}

export interface AddressTypes {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoTypes;
}

export interface GeoTypes {
  lat: string;
  lng: string;
}

export interface CompanyTypes {
  name: string;
  catchPhrase: string;
  bs: string;
}
