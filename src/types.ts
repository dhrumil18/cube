export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Customer {
  id: number;
  name: string;
  title: string;
  address: Address; // Updated to be an Address object
  email: string;
}

export interface Photo {
  url: string;
}
