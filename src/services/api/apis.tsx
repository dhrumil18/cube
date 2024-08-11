import axios, { AxiosResponse } from "axios";

// Define the shape of the customer data
interface Product {
  id: string;
  title: string;
  image: string;
  subTitle: string[];
  rating: number;
  price: number;
}

// Define the shape of the API response
interface ApiResponse {
  data: Product[];
}

export const getAllProducts = async (): Promise<AxiosResponse<ApiResponse>> => {
  return await axios.get<ApiResponse>(
    "https://65e60da8d7f0758a76e8083a.mockapi.io/api/products"
  );
};
